<template>
    <div class="Survey"></div>
</template>

<script>
import { ConversationalForm } from 'conversational-form';
import {store} from '../store';


export default{
    
    name: "Survey",
    methods: {
        setupForm: function () {
        const formFields = [
            {
            'tag': 'input',
            'type': 'text',
            'name': 'firstname',
            'cf-input-placeholder': 'tu nombre',
            'cf-questions': 'Cual es tu nombre?'
            },
            {
            'tag': 'input',
            'type': 'text',
            'name': 'surname',
            'cf-input-placeholder': 'tu apellido',
            'cf-questions': 'Hola {firstname}, cual es tu apellido?'
            },
            {
				"tag": "fieldset",
				"id": "radios",
				"cf-input-placeholder": "...",
				"cf-questions": "Genial {firstname} {surname}, por favor elige un tipo de cuenta",
				"children":[
					{
						"tag": "input",
						"type": "radio",
						"checked": "checked",
						"value":"1",
						"name": "accoutntype",
						"cf-label": "Personal"
					},
					{
						"tag": "input",
						"type": "radio",
						"name": "accoutntype",
						"value":"2",
						"cf-label": "Empresarial"
					}
				]
            },
            {
                "tag": "fieldset",
				"id": "checkboxes",
				"cf-input-placeholder": "...",
				"cf-questions": "Que quieres hacer con Survey ?",
				"children":[
					{
						"tag": "input",
						"type": "checkbox",
						"required": "required",
						"checked": "checked",
						"value":"1",
						"name": "whatdo",
						"cf-label": "Encuestas"
					},
					{
						"tag": "input",
						"type": "checkbox",
						"required": "required",
						"name": "whatdo",
						"value":"2",
						"cf-label": "Quiz"
					},
					{
						"tag": "input",
						"type": "checkbox",
						"required": "required",
						"name": "whatdo",
						"value":"3",
						"cf-label": "Conquistar el mundo"
					}
				]
            }
        ];
        this.cf = ConversationalForm.startTheConversation({
            options: {
                submitCallback: this.submitCallback,
                preventAutoFocus: true,
                showProgressBar: true
            },
            tags: formFields
        });
        this.cf.addRobotChatResponse("Bienvenido a Survey !");
        this.$el.appendChild(this.cf.el);
        },
        submitCallback(){
            var formDataSerialized = this.cf.getFormData(true);
            console.log("Formdata, obj:", formDataSerialized);

            this.cf.addRobotChatResponse("Wena wena, mira la consola ;D");
            this.$store.dispatch('surveys/addRes', formDataSerialized);
        }
    },
    mounted(){
        this.setupForm()
    }
}

</script>

<style>
  /*   .myForm {
        position: relative; 
        height: 100%;
        width: 100%;
    } */
     .Survey{ 
        position: relative;
        margin: auto;
        padding-top: 300px;
        height: 300px; 
        width: 600px; 
    } 

</style>