<template>
    <div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-12 form-grey">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label for="exampleInputEmail1" class="control-label">Company Name</label>
                                <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Company name">
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label for="exampleInputEmail1" class="control-label">Company Number</label>
                                <input type="number" class="form-control" aria-describedby="emailHelp" placeholder="X-XXXXXX">
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label for="exampleInputEmail1" class="control-label">Email</label>
                                <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="someone@example.com">
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label for="exampleInputEmail1" class="control-label">Phone No.</label>
                                <input type="number" class="form-control" id="phone" aria-describedby="emailHelp" placeholder="Mobile / Handphone">
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label for="address" class="control-label">Address</label>
                                <textarea class="form-control" id="address" aria-describedby="emailHelp" placeholder="Enter address"></textarea>
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="form-group">
                                <label for="exampleInputEmail1" class="control-label">Type of Building</label>
                                <select class="custom-select">
                                    <option selected="">Click to select</option>
                                    <option value="1">Rented</option>
                                    <option value="2">Own</option>
                                    <option value="3">Home Office</option>
                                </select>
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="form-group">
                                <label for="exampleInputEmail1" class="control-label">Postal Code</label>
                                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="">
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="d-flex justify-content-between mt-3">
                <div class="p-2 text-white">
                    <a href="get_quote.html" class="btn btn-outline-success w-150">
                        <i class="fas fa-chevron-left"></i>
                        Previous
                    </a>
                </div>
                <div class="p-2">
                    <a href="get_quote_step_3.html" class="btn btn-success w-150">Next
                        <i class="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CompanyInfo',

    }
</script>