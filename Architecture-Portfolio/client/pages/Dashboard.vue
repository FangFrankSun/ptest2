<template>
    <div>
        <div>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-12 text-right mb-4">
                        <div class="justify-content-between">
                            <h3></h3>
                            <NuxtLink to="/AddProjectPage"
                                ><a href="" class="button-primary w-button"
                                >Add Project</a
                                ></NuxtLink
                                >
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div class="card recipe-card box-shadow">
                            <img
                                src="/_nuxt/assets/image/Gallery/60.jpg"
                                class="card-img-top"
                                />
                            <div class="card-body">
                                <h5 class="card-title">Example Project</h5>
                                <p class="card-text">
                                    <strong>Information</strong><br/><br/>Example Description
                                </p>
                                <div class="action-buttons">
                                    <a
                                        href="/EditPage"
                                        class="btn btn-sm button-color-view">Edit</a>
                                    <button class="btn btn-sm button-color-delete">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div class="card recipe-card box-shadow">
                            <img
                                src="/_nuxt/assets/image/Gallery/59.jpg"
                                class="card-img-top"
                                />
                            <div class="card-body">
                                <h5 class="card-title">Example Project</h5>
                                <p class="card-text">
                                    <strong>Information</strong><br/><br/>Example Description
                                </p>
                                <div class="action-buttons">
                                    <a
                                        href="/EditPage"
                                        class="btn btn-sm button-color-view">Edit</a>
                                    <button class="btn btn-sm button-color-delete">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <main class="container mt-5" style="border-top: 1px solid #d9dbe9;">
            <div class="row">
                <div class="col-12 text-right mb-4">
                    <div class="justify-content-between">
                        <h3></h3>
                        <NuxtLink to="/AddGalleryPage"><a href="" class="button-primary w-button">Add Gallery</a></NuxtLink>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="card recipe-card box-shadow">
                        <img
                            src="/_nuxt/assets/image/Gallery/Picture4.jpg"
                            class="card-img-top"
                            />
                        <div class="card-body">
                            <h5 class="card-title">Categories</h5>
                            <p class="card-text">
                                Interior Design<br>Furniture
                            </p>
                            <div class="action-buttons">
                                <button class="btn btn-sm button-color-delete">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="card recipe-card box-shadow">
                        <img
                            src="/_nuxt/assets/image/Gallery/5.jpg"
                            class="card-img-top"
                            />
                        <div class="card-body">
                            <h5 class="card-title">Categories</h5>
                            <p class="card-text">
                                Interior Design<br>Furniture
                            </p>
                            <div class="action-buttons">
                                <button class="btn btn-sm button-color-delete">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<style scoped>
    .card .content span:first-child {
    margin-bottom: 10px;
    font-weight: 700;
    text-align: center;
    color: var(--darkGreen);
    font-size: 16px;
    }
    .card:hover .image img {
    transform: scale(1) !important;
    cursor: default;
    }
    .card img {
    transform: scale(1) !important;
    }
    @media screen and (max-width: 768px) {
    .card {
    width: 50%;
    }
    .card .content {
    bottom: 0;
    }
    }
    @media screen and (max-width: 480px) {
    .card {
    width: 100%;
    }
    }
</style>