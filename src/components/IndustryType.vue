<template>
    <div>
      <div class="container mt-5">
           <div v-for="error in errors" :key="error">
                <div class="col-md-6 alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {{error}}
                </div>
            </div>
            <div class="row">
                <div class="col-12 form-grey">
                    
                    <vue-topprogress ref="topProgress"></vue-topprogress>
                    <div id="industries" class="btn-group btn-group-toggle d-flex justify-content-center flex-wrap">
                        <label class="btn btn-outline-primary " :class="{ active: selectedIndustry === 'LAUNDRY SHOP' }">
                            <input type="radio" name="options" v-model="selectedIndustry" value="LAUNDRY SHOP" id="option1" >
                            <i class="fas fa-tshirt"></i>
                            <span>LAUNDRY SHOP</span>
                            
                        </label>
                        <label class="btn btn-outline-primary" :class="{ active: selectedIndustry === 'HAIR DRESSING /BEAUTY SALOON' }">
                            <input value="HAIR DRESSING /BEAUTY SALOON" v-model="selectedIndustry" type="radio"  id="option2" >
                            <i class="fas fa-shower"></i>
                            <span>HAIR DRESSING /BEAUTY SALOON</span>
                          
                        </label>
                        <label class="btn btn-outline-primary" :class="{ active: selectedIndustry === 'HOTEL/BOARDING/HOUSES/REST/HOUSES' }">
                            <input type="radio"  id="option3"  v-model="selectedIndustry" value="HOTEL/BOARDING/HOUSES/REST/HOUSES">
                            <i class="fas fa-hotel"></i>
                            <span>HOTELS /BOARDING HOUSES /REST HOUSES</span>
                        </label>
                        <label class="btn btn-outline-primary " :class="{ active: selectedIndustry === 'Office' }">
                            <input type="radio"  id="option1" v-model="selectedIndustry" value="Office">
                            <i class="fas fa-building"></i>
                            <span>Office</span>   
                        </label>
                        <label class="btn btn-outline-primary" :class="{ active: selectedIndustry === 'KINDERGARTEN / TRAINING CENTER / TUITION CENTER' }">
                            <input type="radio"  id="option2"  v-model="selectedIndustry" value="KINDERGARTEN / TRAINING CENTER / TUITION CENTER">
                            <i class="fas fa-graduation-cap"></i>
                            <span>KINDERGARTEN / TRAINING CENTER / TUITION CENTER</span>
                        </label>
                        <label class="btn btn-outline-primary" :class="{ active: selectedIndustry === 'NURSING HOME / CLINIC'}">
                            <input type="radio"  id="option3"  v-model="selectedIndustry" value="NURSING HOME / CLINIC">
                            <i class="far fa-hospital"></i>
                            <span>NURSING HOME / CLINIC</span>
                        </label>
                        <label class="btn btn-outline-primary " :class="{ active: selectedIndustry === 'RESTAURANT /PHOTOGRAPHIC /ART'}">
                            <input type="radio"  id="option1" v-model="selectedIndustry" value="RESTAURANT /PHOTOGRAPHIC /ART">
                            <i class="fas fa-utensils"></i>
                            <span>RESTAURANT /PHOTOGRAPHIC /ART</span>
                        </label>
                        <label class="btn btn-outline-primary" :class="{ active: selectedIndustry === 'Bakery /Confectionery Shop'}">
                            <input type="radio" id="option2" v-model="selectedIndustry" value="Bakery /Confectionery Shop">
                            <i class="fas fa-building"></i>
                            <span>Bakery /Confectionery Shop</span>
                        </label>
                        <label class="btn btn-outline-primary " :class="{ active: selectedIndustry === 'Others'}">
                            <input type="radio"  id="option1"  v-model="selectedIndustry" value="Others">
                            <i class="fas fa-cube"></i>
                            <span>Others</span>
                        </label>
                    </div>
                    
                </div>
                <div class="col-12 p-2">

                </div>
            </div>

            <div class="row">
                <div class="col-md-3 col-sm-12">

                </div>
                <div class="col-md-6 col-sm-12 form-grey form-group">
                    <label class="control-label" for="">Type of Business</label>
                    <div class="btn-group btn-group-toggle business_type">
                        <label class="btn btn-outline-primary " :class="{ active: selectedBusiness === 'Individual'}">
                            <input type="radio" name="options" id="option1" v-model="selectedBusiness" value="Individual"> Individual
                        </label>
                        <label class="btn btn-outline-primary" :class="{ active: selectedBusiness === 'Sole-Proprietor'}">
                            <input type="radio" name="options" id="option2" v-model="selectedBusiness" value="Sole-Proprietor"> Sole-Proprietor
                        </label>
                        <label class="btn btn-outline-primary" :class="{ active: selectedBusiness === 'SDN. BHD'}">
                            <input type="radio" name="options" id="option3" v-model="selectedBusiness" value="SDN. BHD"> SDN. BHD
                        </label>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between mt-3">
                <div class="p-2 text-white"></div>
                <div class="p-2 text-white"></div>
                <div class="p-2">
                        <button   v-promise-btn @click="isValid" class="btn btn-success w-150">
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
        name: 'IndustryType',
        data() {
            return {
                selectedIndustry: "null",
                selectedBusiness: "null",
                nextStep: false,
                result: null,
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
                }, 1000)
         
                if(!this.selectedIndustry && !this.selectedBusiness) {
                    this.errors.push("Please Choose At least one of Inustries and business types");
                    
                } else if(!this.selectedIndustry) {
                    this.errors.push("Please Choose At least one of Inustries types");

                } else if(!this.selectedBusiness) {
                    this.errors.push("Please Choose At least one of business types");
                } else {
                    this.result = [{
                        selectedIndustry: this.selectedIndustry,
                        selectedBusiness: this.selectedBusiness
                    }]
                    this.errors = [];
                    this.nextStep = true;
                     this.$refs.topProgress.start()
                    setTimeout(() => {
                        this.$refs.topProgress.done()
                    }, 1000)
                    setTimeout(() => {
                       this.$emit('termChange', this.nextStep);
                       this.$emit('termResult', this.result);
                    }, 2000)
                    
                    return new Promise((resolve) => {
                        resolve("Success")
                    }); 
                }
            }
        }
    }
</script>
