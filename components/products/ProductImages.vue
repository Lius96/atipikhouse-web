<template>
    <client-only>
        <div class="col-lg-6 col-md-6">
            <div class="products-page-gallery">
                <div class="product-page-gallery-main">
                    <vueper-slides v-if="images[0]"
                        :bullets = "false"
                    >
                        <vueper-slide
                            v-for="(img, i) in images"
                            :key="i"
                            :image="img[i]" />
                    </vueper-slides>
                </div>
            </div>
        </div>
    </client-only>
</template>

<script>
export default {
    props:{
        images: {
            type: Object,
            default: ()=>({
                0: '',
                1: ''
            })
        },
    },
}
</script>