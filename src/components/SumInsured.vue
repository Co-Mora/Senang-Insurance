<template>
    <div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-12 form-grey">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label  class="control-label">Building(Sum Insured in RM)</label>
                                <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="RM XXXX">
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label  class="control-label">Machinery &amp; Equipments(RM)</label>
                                <input type="number" class="form-control"  aria-describedby="emailHelp" placeholder="RM XXXX">
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label  class="control-label">Furniture &amp; Fittings (RM)</label>
                                <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="RM XXXX">
                                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label  class="control-label">Miscellanous(RM)</label>
                                <input type="number" class="form-control" id="phone" aria-describedby="emailHelp" placeholder="RM XXXXX">
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
                    <button class="btn btn-success w-150" data-toggle="modal" data-target="#confirmation">Submit
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <CoverageModal />
    </div>
</template>

<script>

    import CoverageModal from './CoverageModal';
    export default {
        name: 'SumInsured',
        component: {
            CoverageModal
        }

    }
</script>