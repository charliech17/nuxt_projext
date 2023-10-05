<template>
    <div style="margin-left: 8px;">
        <div 
            v-for="nd in nodeData"
            :key="new Date().toISOString()"
        >
            <div>{{ nd.name }}</div>
            <RecursionCompt
                v-if="nd.subMenu"
                :nodeData="nd.subMenu"
            />
        </div>
    </div>
</template>

<script>
    export default{
        props: ['nodeData']
    }
</script>