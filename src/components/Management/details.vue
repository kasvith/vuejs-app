<template>
    <v-app>
        <v-container fluid>
        <div>
        <v-btn fab dark color="secondary" to="/Vehicle">
            <v-icon dark>arrow_back_ios</v-icon>
        </v-btn>
        </div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card>
                        <v-container fluid>
                            <v-layout row>
                                <v-flex xs12 sm8>
                                    <v-card-media
                                    :src="imageUrl"
                                    ref="imageUrl"
                                    height="500px"
                                    @click="onPickFile"
                                    style="cursor: pointer;"
                                    contain>
                                    </v-card-media>
                                </v-flex>
                                <v-flex sm4>
                                    <v-card-title>
                                        <div>
                                        <h3>Vehicle Number:</h3>{{vehi_num}}<br>
                                        <h3>Vehicle Model:</h3>{{vehi_model}}<br>
                                        <h3>Next license date:</h3>{{license}}<br>
                                        <h3>Next Insurance date:</h3>{{insurance}}<br>
                                        <h3>Next Service date:</h3>{{service}}<br>
                                        </div>
                                        </v-card-title>
                                        
                                        <v-card-text>
                                            <div>

                                                <v-btn fab dark color="secondary"  @click="onPickFile">
                                                    <v-icon dark>photo_library</v-icon>
                                                </v-btn>

                                                <input
                                                    type="file"
                                                    ref="image"
                                                    name="image"
                                                    :accept="accept"
                                                    @change="onFilePicked"
                                                >
                                            </div>
                                       
                                        </v-card-text>
                                        
                                    
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <app-map></app-map>
        </v-container>
    </v-app>    
</template>

<script>
import Map from '@/components/map'
export default {
    props: {
            value: {
                type: String
            },
            accept: {
                type: String,
                default: '*'
            },
           
        },
    data(){
        return{
            imageUrl:'',

            vehi_num:'ABC-0000',
            vehi_model:'abc',
            license:'2012/03/22',
            insurance:'2012/03/20',
            service:'2012/03/10',
            value:false,
            
        
        }
    },

    created(){
       
         if(!this.$session.has('username')){
            this.$router.push('/login');
        }
           
    },

    components:{
        'app-map':Map,
        
    },


    watch: {
            value(v) {
                this.imageUrl = v
            }
        },

        mounted() {
            this.imageUrl = this.value
        },

        
        methods: {
            
           onPickFile() {
                this.$refs.image.click()
            },

            onFilePicked(event) {
                console.log(event)
                const files = event.target.files || event.dataTransfer.files

                if (files && files[0]) {
                    let filename = files[0].name

                    if (filename && filename.lastIndexOf('.') <= 0) {
                        return //return alert('Please add a valid image!')
                    }

                    const fileReader = new FileReader()
                    fileReader.addEventListener('load', () => {
                        this.imageUrl = fileReader.result
                    })
                    fileReader.readAsDataURL(files[0])

                    this.$emit('input', files[0])
                }
            },
        }
}
</script>

<style scoped>
    input[type=file] {
        position: absolute;
        left: -99999px;
    }
</style>


