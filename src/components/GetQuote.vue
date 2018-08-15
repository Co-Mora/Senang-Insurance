<template>
    <div>
        <section class="get-quote">
            <div class="container">
                <div class="text-center">
                    <h3>Get quote : Provide the following information below</h3>
                </div>
                <ul class="step d-flex flex-nowrap">
                    <li class="step-item active">
                        <a href="get_quote.html" class="">Step 1: Industry and Type of business</a>
                    </li>
                    <li class="step-item">
                        <a href="get_quote_step_2.html" class="">Step 2: Company Information</a>
                    </li>
                    <li class="step-item ">
                        <a href="get_quote_step_3.html" class="">Step 3: Sum Insured</a>
                    </li>
                </ul>
            </div>
            <IndustryType />
            <CompanyInfo />
            <SumInsured />
        </section>

    </div>
</template>

<script>

    import IndustryType from './IndustryType';
    import CompanyInfo from './CompanyInfo';
    import SumInsured from './SumInsured';

    export default {
        name: 'GetQuote',
        component: {
            IndustryType,
            CompanyInfo,
            SumInsured
        }
    }
</script>
