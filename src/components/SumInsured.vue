<template>
    <div>
        <div class="container mt-5">
             <div class="col-md-12">
                <div class="col-md-6" v-for="error in errors" :key="error">
                <div class=" alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {{error}}
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 form-grey">
                    <vue-topprogress ref="topProgress"></vue-topprogress>
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label  class="control-label">Building(Sum Insured in RM)</label>
                                <input type="text" class="form-control" v-model="sumBuilding" aria-describedby="emailHelp" placeholder="RM XXXX">
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label  class="control-label">Machinery &amp; Equipments(RM)</label>
                                <input type="number" class="form-control" v-model="machineryEquipments" aria-describedby="emailHelp" placeholder="RM XXXX">
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label  class="control-label">Furniture &amp; Fittings (RM)</label>
                                <input type="text" class="form-control" v-model="furnitureFittings" aria-describedby="emailHelp" placeholder="RM XXXX">
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label  class="control-label">Miscellanous(RM)</label>
                                <input type="number" class="form-control" v-model="miscellanous" aria-describedby="emailHelp" placeholder="RM XXXXX">
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <a href="#" data-toggle="myToolTip" class="float-right" data-placement="bottom" data-html="true"  title="<b>Files Description<b> <p style='font-weight: 400 !important;'>Purchase invoices/receipts/valuation reports in respect of the items insured, stock records,
                                        delivery receipts etc as appropriate to quantify the loss or damage</p>"><i class="far fa-question-circle fa-1x"></i></a>
                            <div class="default-file-upload">
                                <label for="file-upload1" class="control-label">Upload File</label><br>
                                <input id="file-upload1" type="file" />
                                <small id="emailHelp" class="form-text"></small>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div class="d-flex justify-content-between mt-3">
                <div class="p-2 text-white">
                    <a href="get_quote_step_2.html" class="btn btn-outline-success w-150">
                        <i class="fas fa-chevron-left"></i>
                        Previous
                    </a>
                </div>
                <div class="p-2">
                    <button  v-promise-btn @click="isValid" class="btn btn-success w-150">Submit
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Modal -->
         <div class="modal fade" id="confirmation" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Confirm</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>
                            Do you want to add an additional coverage ?
                        </p>
                    </div>
                    <div class="modal-footer">
                        <a href="/summary" class="btn btn-outline-primary w-150">No</a>
                        <a href="select-coverage.html" class="btn btn-primary w-150">Yes</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import CoverageModal from './CoverageModal';
    import { vueTopprogress } from 'vue-top-progress'   
    import 'vue-promise-btn/dist/vue-promise-btn.css'

    export default {
        name: 'SumInsured',
        component: {
            CoverageModal,
            vueTopprogress
        },

        data() {
            return {
                sumBuilding: null,
                machineryEquipments: null,
                furnitureFittings: null,
                miscellanous: null,
                errors: [],

            }
        },
        methods: {
            isValid() {
                 setTimeout(() => {
                     $(".alert").alert('close')
                }, 2000)

                if(!this.sumBuilding && !this.machineryEquipments && !this.furnitureFittings && !this.miscellanous) {
                    this.errors.push("Please fill up all the forms")
                    return false
                } 
                
                if(!this.sumBuilding) {
                    this.errors.push("Building(Sum Insured in RM) required")
                
                }if(!this.machineryEquipments) {
                    this.errors.push("Machinery and Equipments(RM) required");
                    
                } if (!this.furnitureFittings) {
                     this.errors.push("Furnitureand Fittings (RM) required");
                   
                }if (!this.miscellanous) {
                     this.errors.push("Miscellanous(RM) is required");
                } else {
                    this.errors = [];
                    this.$refs.topProgress.start()
                    setTimeout(() => {
                        this.$refs.topProgress.done()
                        swal({
                            title: "Sent it successfully",
                            icon: "success",
                        });
                    }, 1000)
                    setTimeout(() => {
                        window.location.href ="/summary"
                    }, 3000)

                    return new Promise((resolve) => {
                        resolve("Success")
                    }); 
                    
                }
            },
        }
    }
</script>