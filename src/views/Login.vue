<template>
    <div class="row color-text min-vh-100 m-0 p-0 backLogin">
        <div class="col-12 justify-content-center d-flex">
            <div class="row  align-content-center flex">
                <div class="col-5">
                    <div class="card bg-opacity-50 bg-white rounded-4" style="width: 20rem;">
                        <div class="card-body">

                            <form>
                                <div class="row">
                                    <div class="col-12 my-3">
                                        <h1 class="text-center">Login</h1>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Nombre de usuario</label>
                                    <input v-model="user" type="text" class="form-control" >
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <div class="row">

                                        <!-- crear un input que dentro tenga un boton para mostrar la contraseña -->
                                        <div class="input-group mb-3">
        
                                        <input v-model="pass" :type="typeInput" class="form-control" aria-label="Amount (to the nearest dollar)">
                                        <span class="input-group-text" ><i class="bx bx-show" @click=" typeInput = typeInput === 'password' ? 'text' : 'password' "></i></span>
                                        </div>
                                        
                                    </div>
                                   
                                </div>

                                <div v-show="showAlert" class="row justify-content-center">
                                    <div class="alert alert-danger fs-6 w-75 px-2 py-1 text-center" role="alert">
                                        Credenciales incorrectas
                                    </div>
                                </div>

                                <div class="row m-0 p-0 ">
                                    <div class="col-12  justify-content-center d-flex">
                                        <button class="btn btn-dark" type="button" @click="Ingresar()">Login</button>
                                    </div>
                                </div>

                                

                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<script setup>

import { ref } from 'vue'
//composables
import { useUi } from "../composables/useUI.js";

import fs from 'fs'



        

const { changeLinkActive, changeUserAuth } = useUi()

const typeInput= ref('password')
const showAlert = ref(false)
let user = ref('')
let pass = ref('')

const users = [
    {
        "id": 1,
        "name": "DOE",
        "pass": "123"
    }
]

const Ingresar = () => {
    
    const nameUser = user.value.toUpperCase().trim()
    const passUser = pass.value.toUpperCase().trim()
    console.log(nameUser, passUser)

    if(nameUser == "" || passUser == ""){
        showAlert.value = true
        setTimeout(() => {
            showAlert.value = false
        }, 3000);
        return
    }else{
 
        let userFound = users.find((user) => user.name == nameUser && user.pass == passUser)
        if(userFound){
            changeUserAuth(true)
        
            window.location.href = '#/home'
            changeLinkActive('/home')


        }else{
            showAlert.value = true
            setTimeout(() => {
                showAlert.value = false
            }, 3000);
        }
    }

}


</script>


<style>
.backLogin{
    background-image: url('./Login.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}


</style>