<template>
    <section>
        <div>
            <h1>{{ title }}</h1>
            <p>{{ message }}</p>
        </div>
    </section>
</template>

<script>
    export default {
        data: () => {
            return {
                title: 'Home',
                message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sunt quis natus ipsam eius placeat praesentium vitae in quam consequatur accusamus cupiditate, esse, repellendus rerum, earum voluptas illo quisquam maxime!'
            };
        }
    }
</script>