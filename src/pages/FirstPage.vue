<template>
  <div>
    <div v-if="survey_res.length">
        <h1>Respuestas</h1>
        <ul class="list">
            <li v-for="(survey, index) in survey_res" :key="index">
                {{ survey }}
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState('surveys', [
                'survey_res',
            ]),
        }
    }
</script>