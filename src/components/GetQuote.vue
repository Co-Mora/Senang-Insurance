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
            <IndustryType v-show="firstStep" @termChange="getNextStep" @termResult="industryResult"/>
            <CompanyInfo v-show="nextStep" @onTerm="getLastStep"  @termResult="companyResult"/>
            <SumInsured  v-show="lastStep"  @termResult="sumResult" @getResult="isSuccess"/>
            <Summary v-show="true"  :industryType="industryType" :companyInfo="companyInfo" :sumInsured="sumInsured"/>
        </section>

    </div>
</template>

<script>

    import IndustryType from './IndustryType';
    import CompanyInfo from './CompanyInfo';
    import SumInsured from './SumInsured';
    import Summary from './Summary';

    export default {
        name: 'GetQuote',
        data() {
            return {
                firstStep: true,
                nextStep: false,
                lastStep: false,
                getSummary: false,
                industryType: null,
                companyInfo: null,
                sumInsured: null
            }
        },
        components: {
            IndustryType,
            CompanyInfo,
            SumInsured,
            Summary

        },
        methods: {
            getNextStep(val) {
                this.firstStep = this.nextStep;
                this.nextStep = val;
            },
            getLastStep(val) {
                this.lastStep = val;
                this.nextStep = false;
            },
            industryResult(val) {
                this.industryType = val;
            },
            companyResult(val) {
                this.companyInfo = val;
            },
            sumResult(val) {
                this.sumInsured = val;
            },
            isSuccess(val) {
                this.getSummary = val;
                this.lastStep = false;
            }
            
        }
    }
</script>
