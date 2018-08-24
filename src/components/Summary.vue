<template>
    <div>
        <section class="get-quote">
            <div class="container result-page">
                <h3 class="text-center">Quote Information</h3>
                <div class="row">
                    <div class="col-md-7 col-sm-12 mb-4">
                        <div class="bx-shadow" v-for="i in companyInfo" :key="i">
                            <h4>{{i.companyName}}
                                <br>
                                <small class="icon-com" v-for="i in industryType" :key="i">
                                    <i class="far fa-hospital"></i>
                                    <span>{{i.selectedIndustry}}</span>
                                </small>
                            </h4>
                            <p v-for="i in companyInfo" :key="i">
                                <strong>Company Number:</strong>
                                <br> {{i.companyNum}}
                            </p>
                            <p v-for="i in industryType" :key="i">
                                <strong>Type of Business:</strong>
                                <br> {{i.selectedBusiness}}
                            </p>
                            <p v-for="i in companyInfo" :key="i">
                                <strong>Address:</strong>
                                <br> {{i.address}}
                            </p>
                            <p  v-for="i in companyInfo" :key="i">
                                <strong>Phone Number:</strong>
                                <br> {{i.phoneNo}}
                            </p>
                            <!-- <a href="get_quote_step_3_b.html" class="btn btn-outline-primary">Update Info</a> -->
                        </div>

                    </div>
                    <div class="col-md-5 col-sm-12">
                        <table class="table">
                            <thead class="color">
                            <tr>
                                <th colspan="2">Sum Insured:</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <td scope="row">
                                    <p>
                                        <span>Building:</span>
                                    </p>
                                </td>
                                <td v-for="i in sumInsured" :key="i">
                                    <p class="table-value float-left">
                                        RM {{i.sumBuilding}}.00
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td scope="row">
                                    <p>
                                        <span>Machinery &amp; Equipments:</span>
                                    </p>
                                </td>
                                <td v-for="i in sumInsured" :key="i">
                                    <p class="table-value float-left">
                                         RM {{i.machineryEquipments}}.00
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td scope="row">
                                    <p>
                                        <span>Furnitures &amp; Fittings:</span>
                                    </p>
                                </td>
                                <td v-for="i in sumInsured" :key="i">
                                    <p class="table-value float-left">
                                        RM {{i.furnitureFittings}}.00
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td scope="row"> 
                                    <p>
                                        <span>Miscellanous:</span>
                                    </p>
                                </td>
                                <td v-for="i in sumInsured" :key="i">
                                    <p class="table-value float-left">
                                        RM {{i.miscellanous}}.00
                                    </p>
                                </td>
                            </tr>
                            <tr class="total-amount">
                                <td scope="row">
                                    <p class="table-value">
                                        <span>Total Insured Amount:</span>
                                    </p>
                                </td>
                                <td v-for="i in sumInsured" :key="i">
                                    <p class="table-value float-left">
                                       RM {{parseInt(i.furnitureFittings) + parseInt(i.machineryEquipments) +  parseInt(i.miscellanous)}}.00
                                    </p>
                                </td>
                            </tr>
                            </tbody>
                        </table>


                        <table class="table">
                            <thead class="color">
                            <tr>
                                <th colspan="2">Basic Premium:</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <td scope="row">
                                    <p>
                                        <span>Hair Dressing /Beauty Saloon:</span>
                                    </p>
                                </td>
                                <td v-for="i in sumInsured" :key="i">
                                    <p class="table-value float-left">
                                        RM {{(parseInt(i.furnitureFittings) + parseInt(i.machineryEquipments) +  parseInt(i.miscellanous)) * 0.193}}
                                    </p>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <!-- <table class="table">
                            <thead class="color">
                            <tr>
                                <th colspan="2">Additional Premium:</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <td scope="row">
                                    <p>
                                        <span>Storm and Tempest:</span>
                                    </p>
                                </td>
                                <td>
                                    <p class="table-value float-left">
                                        RM 9.00
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td scope="row">
                                    <p>
                                        <span>Flood::</span>
                                    </p>
                                </td>
                                <td>
                                    <p class="table-value float-left">
                                        RM 51.60
                                    </p>
                                </td>
                            </tr>

                            </tbody>
                        </table> -->

                        <table class="table">
                            <tbody>
                            <tr class="grand-total-amount">
                                <td scope="row">
                                    <p>
                                        <span>Grand Total Amount:</span>
                                    </p>
                                </td>
                                <td>
                                    <p class="table-value float-left">
                                        RM 4,600.00
                                    </p>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <div class="d-flex justify-content-center mt-3">
                            <!-- <div class="p-2">
                                <a href="index.html" class="btn btn-outline-primary w-150">Save
                                </a>
                            </div> -->
                            <div class="p-2">
                                <a href="https://api.whatsapp.com/send?phone=60122131797&&text=I interested in that" class="btn btn-success w-150">Payment 
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        name: 'Summary',
       
        props: ['industryType', 'companyInfo', 'sumInsured'],
    }
</script>