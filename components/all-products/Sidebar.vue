<template>
    <div class="col-lg-4 col-md-12">
        <div class="woocommerce-sidebar-area">
            <div class="collapse-widget filter-list-widget">
                <h3 v-b-toggle.collapse-1 class="collapse-widget-title">
                    Current Selection
                    <i class="fas fa-angle-up"></i>
                </h3>

                <b-collapse visible id="collapse-1" class="selected-filters-wrap-list">
                    <ul>
                        <li><a href="#">44</a></li>
                        <li><a href="#">XI</a></li>
                        <li><a href="#">Clothing</a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">Accessories</a></li>
                    </ul>

                    <div class="delete-selected-filters">
                        <a href="#"><i class="far fa-trash-alt"></i> <span>Clear All</span></a>
                    </div>
                </b-collapse>
            </div>

            <div class="collapse-widget collections-list-widget">
                <h3 v-b-toggle.collapse-2 class="collapse-widget-title">
                    Collections

                    <i class="fas fa-angle-up"></i>
                </h3>
                <b-collapse visible id="collapse-2">
                    <ul class="collections-list-row">
                        <li class="active"><a href="#">Women’s</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Clothing</a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Uncategorized</a></li>
                    </ul>
                </b-collapse>
            </div>

            <div class="collapse-widget price-list-widget">
                <h3 v-b-toggle.collapse-5 class="collapse-widget-title">
                    Prix

                    <i class="fas fa-angle-up"></i>
                </h3>

                <b-collapse visible id="collapse-5">
                    <ul class="price-list-row">
                        <li><a href="#">1000€ - 1500€</a></li>
                        <li class="active"><a href="#">1500€ - 2500€</a></li>
                        <li><a href="#">2500€ - 3000€</a></li>
                        <li><a href="#">3000€ - 4500€</a></li>
                        <li><a href="#">4500€ - 6000€</a></li>
                        <li><a href="#">6000€ - 10000€</a></li>
                        <li><a href="#">10000€ - plus</a></li>
                    </ul>
                </b-collapse>
            </div>
        </div>
    </div>
</template>