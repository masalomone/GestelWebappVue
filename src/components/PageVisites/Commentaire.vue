<template>
<div>
    {{ title }}
        <textarea class="form-control border-primary text-primary font-weight-bold" 
                rows="8" 
                :placeholder="title" 
                v-model="commentContent" 
                @blur="modifierCommentaireSiege()">
    </textarea>
</div>
</template>

<script>
export default {
    name: "commentaireTechnicien",
    props: ["title", "commentContent"]
}
</script>