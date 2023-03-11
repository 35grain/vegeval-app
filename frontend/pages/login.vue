<script setup lang="ts">
useHead({
    title: "Login",
})
</script>

<template>
    <main class="md:container md:mx-auto">
        <div class="my-32">
            <div class="prose prose-slate mx-auto text-center mb-12">
                <h1>Login</h1>
            </div>
            <div class="card w-96 glass mx-auto">
                <div class="card-body">
                    <div class="form-control w-full max-w-xs">
                        <label class="label" for="emailInput">
                            <span class="label-text">E-mail</span>
                        </label>
                        <input id="emailInput" type="email" placeholder="john@deere.com" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label" for="passwordInput">
                            <span class="label-text">Password</span>
                        </label>
                        <input id="passwordInput" type="password" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="card-actions justify-between">
                        <div class="tooltip" data-tip="Registration is not available yet">
                            <a class="btn btn-accent btn-outline btn-disabled" tabindex="-1" aria-disabled="true">Register</a>
                        </div>
                        <button class="btn btn-primary" type="submit">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>