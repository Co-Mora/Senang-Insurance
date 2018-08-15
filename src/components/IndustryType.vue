<template>
    <div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-12 form-grey">
                    <div id="industries" class="btn-group btn-group-toggle d-flex justify-content-center flex-wrap" data-toggle="buttons">
                        <label class="btn btn-outline-primary ">
                            <input type="radio" name="options"  autocomplete="off" checked="">
                            <i class="fas fa-tshirt"></i>
                            <span>LAUNDRY SHOP</span>
                        </label>
                        <label class="btn btn-outline-primary">
                            <input type="radio" name="options"  autocomplete="off">
                            <i class="fas fa-shower"></i>
                            <span>HAIR DRESSING /BEAUTY SALOON</span>
                        </label>
                        <label class="btn btn-outline-primary">
                            <input type="radio" name="options" autocomplete="off">
                            <i class="fas fa-hotel"></i>
                            <span>HOTELS /BOARDING HOUSES /REST HOUSES</span>
                        </label>
                        <label class="btn btn-outline-primary ">
                            <input type="radio" name="options" autocomplete="off" checked="">
                            <i class="fas fa-building"></i>
                            <span>Office</span>
                        </label>
                        <label class="btn btn-outline-primary">
                            <input type="radio" name="options" autocomplete="off">
                            <i class="fas fa-graduation-cap"></i>
                            <span>KINDERGARTEN / TRAINING CENTER / TUITION CENTER</span>
                        </label>
                        <label class="btn btn-outline-primary">
                            <input type="radio" name="options" autocomplete="off">
                            <i class="far fa-hospital"></i>
                            <span>NURSING HOME / CLINIC</span>
                        </label>
                        <label class="btn btn-outline-primary ">
                            <input type="radio" name="options"  autocomplete="off" checked="">
                            <i class="fas fa-utensils"></i>
                            <span>RESTAURANT /PHOTOGRAPHIC /ART</span>
                        </label>
                        <label class="btn btn-outline-primary">
                            <input type="radio" name="options"  autocomplete="off">
                            <i class="fas fa-building"></i>
                            <span>Bakery /Confectionery Shop</span>
                        </label>
                        <label class="btn btn-outline-primary ">
                            <input type="radio" name="options"  autocomplete="off" checked="">
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
                    <label class="control-label">Type of Business</label>
                    <div class="btn-group btn-group-toggle business_type" data-toggle="buttons">
                        <label class="btn btn-outline-primary ">
                            <input type="radio" name="options" id="option1" autocomplete="off" checked=""> Individual
                        </label>
                        <label class="btn btn-outline-primary">
                            <input type="radio" name="options" id="option2" autocomplete="off"> Sole-Proprietor
                        </label>
                        <label class="btn btn-outline-primary">
                            <input type="radio" name="options" id="option3" autocomplete="off"> SDN. BHD
                        </label>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-between mt-3">
                <div class="p-2 text-white"></div>
                <div class="p-2 text-white"></div>
                <div class="p-2">
                    <a href="get_quote_step_2.html" class="btn btn-success w-150">
                        Next
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IndustryType',
    }
</script>
