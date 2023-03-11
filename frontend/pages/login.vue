<template>
    <main class="md:container md:mx-auto">
        <div class="my-32">
            <div class="prose prose-slate mx-auto text-center mb-12">
                <h1>Login</h1>
            </div>
            <div class="card w-96 glass mx-auto">
                <div class="card-body">
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">E-mail</span>
                        </label>
                        <input type="email" placeholder="john@deere.com" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="card-actions justify-between">
                        <button class="btn btn-accent btn-outline">Register</button>
                        <button class="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>