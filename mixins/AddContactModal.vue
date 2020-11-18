<script>
import AddContactForm from "@/components/forms/AddContactForm";

export default {
    methods: {
        openContactFormModal(){
            this.$buefy.modal.open({
                parent: this,
                component: AddContactForm,
                fullScreen: true,
                customClass: 'custom-class custom-class-2',
                trapFocus: true
            })
        }
    }
}
</script>