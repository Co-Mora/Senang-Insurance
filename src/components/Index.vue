<template>
    <div>
        <Navigation />
        <Header />
        <section class="section grey">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>Our Approach</h1>
                    </div>
                </div>
                <div class="row insure-option">
                    <div class="col-md-6 col-sm-12 text-center mb-4">
                        <a href="make_claim.html">
                            <i class="fas fa-hand-holding-usd fa-4x"></i>
                            <h3> Claims</h3>
                            <p>
                                Make Your Claim Here Faster & Easier.
                            </p>
                            <button class="btn btn-primary center-block w-200">Make Claim</button>
                        </a>
                    </div>
                    
                    <div class="col-md-6 col-sm-12 text-center">
                        <a href="policy_management.html">
                            <i class="fas fa-file-alt fa-4x"></i>
                            <h3>Policy Management</h3>
                            <p>
                                A Smart Digital Wallet of Your Policies & Rates.
                            </p>
                            <button class="btn btn-primary center-block w-200">View Policy</button>
                        </a>

                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <img :src="image" width="100%" class="img-fluid">
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <h3>Need free assistance on your business insurance Policy?</h3>
                        <p>With this platform, anyone can get a quote and register their claim all within 3 simple steps. We provide a comprehensive business insurance solution to all types of Micro, Small and Medium Enterprises. </p>

                        <p>Our Policy management is free to use for anyone and can be linked to the client insurance company for Claim Submission.</p>
                            
                    </div>
                </div>
            </div>
        </section>
        <section class="section testimony">
            <h1>Testimonials</h1>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="img/7.jfif" alt="">
                        <div class="carousel-caption d-md-block">

                        <h5>Dato Shan<br>Chairman Of Signature Hotels</h5>
                    <p>Policy Mgmt Software have streamlined my office  paperwork and<br> reminders/updates is done through mobile with 3 clicks</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/6.jpg" alt="">
                        <div class="carousel-caption d-none d-md-block">

                            <h5>Rizal <br>Owner EDS SIGNATURE DRINKS</h5>
                            <p>The Get Quote Portal is easy and I can get my quote in 3 clicks <br>and the explanation is simple and clear </p>
                        </div>
                    </div>
                    
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </section>
        <footer>
        </footer>
    </div>
</template>

<script>

    import Navigation from './parials/Navigation';
    import Header from './parials/Header';
    import image from "../assets/img/home.jpg"

    export default {
        name: 'Index',
        data() {
            return {
                image
            }
        },
        components: {
            Navigation,
            Header

        }

    }
</script>
