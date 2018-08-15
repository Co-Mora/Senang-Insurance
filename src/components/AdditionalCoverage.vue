<template>
    <div>
        <section class="get-quote">
            <div class="container">
                <div class="text-center">
                    <h3>Additional Coverage : Select additional coverage below</h3>
                </div>
            </div>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-12 col-sm-12">
                        <div class="inputGroup">
                            <input id="option1" name="option1" type="checkbox" />
                            <label for="option1">Storm and Tempest</label>
                        </div>

                        <div class="inputGroup">
                            <input id="option2" name="option2" type="checkbox" />
                            <label for="option2">Flood</label>
                        </div>

                        <div class="inputGroup">
                            <input id="option3" name="option3" type="checkbox" />
                            <label for="option3">Explosion-Industrial without boilers</label>
                        </div>

                        <div class="inputGroup">
                            <input id="option4" name="option4" type="checkbox" />
                            <label for="option4">Impact Damage-Including Insured <br>Own Vehicle</label>
                        </div>

                        <div class="inputGroup">
                            <input id="option5" name="option5" type="checkbox" />
                            <label for="option5">Impact Damage-Excluding Insured <br>Own Vehicle</label>
                        </div>


                        <div class="inputGroup">
                            <input id="option6" name="option6" type="checkbox" />
                            <label for="option6">Bursting or Overflowing of water tank <br>and pipes - Building exceeding 5 Storeys</label>
                        </div>

                        <div class="inputGroup">
                            <input id="option7" name="option7" type="checkbox" />
                            <label for="option7">Bursting or Overflowing of water tank <br>and pipes - Others</label>
                        </div>

                        <div class="inputGroup">
                            <input id="option8" name="option8" type="checkbox" />
                            <label for="option8">Riot, Strike and Malicisous Damage</label>
                        </div>

                        <div class="inputGroup">
                            <input id="option9" name="option9" type="checkbox" />
                            <label for="option9">Other than residential properties</label>
                        </div>

                        <div class="inputGroup">
                            <input id="option10" name="option10" type="checkbox" />
                            <label for="option10">Sprinkler Leakage - Building</label>
                        </div>

                        <div class="inputGroup">
                            <input id="option11" name="option11" type="checkbox" />
                            <label for="option11">Sprinkler Leakage - Contents</label>
                        </div>

                    </div>
                </div>

                <div class="d-flex justify-content-center mt-3">
                    <div class="p-2 text-white">
                        <a href="get_quote_step_2.html" class="btn btn-outline-primary w-150">

                            Cancel
                        </a>
                    </div>
                    <div class="p-2">
                        <a class="btn btn-primary w-150" href="result.html">
                            Submit
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
    export default {
        name: 'AdditionalCoverage',

    }
</script>