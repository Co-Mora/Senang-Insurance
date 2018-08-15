<template>
    <div>
        <!-- Modals: Confirm -->
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
                        <a href="result.html" class="btn btn-outline-primary w-150">No</a>
                        <a href="select-coverage.html" class="btn btn-primary w-150">Yes</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CoverageModal"
    }
</script>

<style scoped>

</style>