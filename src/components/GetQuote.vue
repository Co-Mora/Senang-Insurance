<template>
    <div>
        <section class="get-quote">
            <div class="container">
                <div class="text-center">
                    <h3>Get quote : Provide the following information below</h3>
                </div>
                <ul class="step d-flex flex-nowrap">
                    <li class="step-item" :class="{ active: firstStep === true}">
                        <a href="/get_quote" class="" >Step 1: Industry and Type of business</a>
                    </li>
                    <li class="step-item" :class="{ active: nextStep === true}">
                        <a href="/get_quote" class="">Step 2: Company Information</a>
                    </li>
                    <li class="step-item " :class="{ active: lastStep === true}" >
                        <a href="/get_quote" class="">Step 3: Sum Insured</a>
                    </li>
                </ul>
            </div>
            <IndustryType v-show="firstStep" @termChange="getNextStep"/>
            <CompanyInfo v-show="nextStep" @onTerm="getLastStep"/>
            <SumInsured  v-show="lastStep"/>
        </section>

    </div>
</template>

<script>

    import IndustryType from './IndustryType';
    import CompanyInfo from './CompanyInfo';
    import SumInsured from './SumInsured';

    export default {
        name: 'GetQuote',
        data() {
            return {
                firstStep: true,
                nextStep: false,
                lastStep: false,
            }
        },
        components: {
            IndustryType,
            CompanyInfo,
            SumInsured
        },
        methods: {
            getNextStep(val) {
                this.firstStep = this.nextStep;
                this.nextStep = val;
            },
            getLastStep(val) {
                this.lastStep = val;
                this.nextStep = false;
            }
        }
    }
</script>
