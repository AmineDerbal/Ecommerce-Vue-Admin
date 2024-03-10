<script>
import { useRoute } from 'vue-router'
import {useUserStore} from '@/stores/userStore'
import {LoaderComponent} from '@/components'

export default {
    components:{
        LoaderComponent
    },

    setup() {
        const route = useRoute()
        const userStore = useUserStore()
        const userId = route.params.id
 
        return {
            userStore,
        }
    }
}

</script>