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
                                <label class="control-label">Company Name</label>
                                <input type="text" class="form-control" v-model="companyName"  aria-describedby="emailHelp" placeholder="Company name">
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label for="exampleInputEmail1" class="control-label">Company Number</label>
                                <input type="number" class="form-control" v-model="companyNum" aria-describedby="emailHelp" placeholder="X-XXXXXX">
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label for="exampleInputEmail1" class="control-label">Email</label>
                                <input type="text" class="form-control" v-model="email" aria-describedby="emailHelp" placeholder="someone@example.com">
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label for="exampleInputEmail1" class="control-label">Phone No.</label>
                                <input type="number" class="form-control" v-model="phoneNo" id="phone" aria-describedby="emailHelp" placeholder="Mobile / Handphone">
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label for="address" class="control-label">Address</label>
                                <textarea class="form-control" id="address" v-model="address" aria-describedby="emailHelp" placeholder="Enter address"></textarea>
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="form-group">
                                <label class="control-label">Type of Building</label>
                                <select class="custom-select" v-model="typeOfBuilding">
                                    <option  disabled value="">Click to select</option>
                                    <option >Rented</option>
                                    <option>Own</option>
                                    <option>Home Office</option>
                                </select>
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="form-group">
                                <label for="exampleInputEmail1" class="control-label">Postal Code</label>
                                <input type="number" class="form-control" v-model="postalCode" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="">
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="d-flex justify-content-between mt-3">
                <div class="p-2 text-white">
                    <a href="/get_quote" class="btn btn-outline-success w-150">
                        <i class="fas fa-chevron-left"></i>
                        Previous
                    </a>
                </div>
                <div class="p-2">
                    <button   v-promise-btn @click="isValid" class="btn btn-success w-150" >
                        Next
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { vueTopprogress } from 'vue-top-progress'   
    import 'vue-promise-btn/dist/vue-promise-btn.css'

    export default {
        
        name: 'CompanyInfo',
        data() {
            return {
                companyName: null,
                companyNum: null,
                email: null,
                phoneNo: null,
                address: null,
                result: null,
                typeOfBuilding: '',
                postalCode: null,
                currentStep: true,
                errors: [],
            }
        },

         components: {
            vueTopprogress
        },

        methods: {
            isValid() {

                 setTimeout(() => {
                     $(".alert").alert('close')
                }, 2000)
         
                
                if(!this.companyName && !this.companyNum && !this.address && !this.phoneNo && !this.email && !this.postalCode && !this.typeOfBuilding) {
                    this.errors.push("Fill up All the forms");
                    return false;
                }
                if(!this.companyName) {
                    this.errors.push("Company Name is required");
                    
                } if (!this.companyNum) {
                     this.errors.push("Company Number is required");
                   
                }if (!this.address) {
                     this.errors.push("Company Address is required");
                    
                } if(!this.phoneNo) {
                    this.errors.push("Phone Number is required");
                  
                } if(!this.email) {
                    this.errors.push("Email Address is required");
                   
                } if(!this.postalCode) {
                    this.errors.push("Postal Code is required");
                  
                } if(!this.typeOfBuilding) {
                    this.errors.push("Building is required");
                  
                } else {
                    this.errors = [];
                    this.result = [{
                        companyName: this.companyName,
                        companyNum: this.companyNum,
                        email: this.email,
                        phoneNo: this.phoneNo,
                        address: this.address,
                        typeOfBuilding: this.typeOfBuilding,
                        postalCode: this.postalCode,
                        currentStep: this.currentStep
                    }]
                    this.nextStep = true;
                    this.$refs.topProgress.start()
                    setTimeout(() => {
                        this.$refs.topProgress.done()
                    }, 1000)
                    setTimeout(() => {
                       this.$emit('onTerm', this.currentStep);
                        this.$emit('termResult', this.result);
                    }, 2000)

                    return new Promise((resolve) => {
                        resolve("Success")
                    }); 
                    
                }
                
            },
            
        }

    }
</script>
