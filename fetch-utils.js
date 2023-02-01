const SUPABASE_URL = 'https://usheruhymluidrfdhheu.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzaGVydWh5bWx1aWRyZmRoaGV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNTc1MDksImV4cCI6MTk4OTgzMzUwOX0.QjjqpyfcTdEDXQrrL5etMEt5BZFjp0GeTudUiqwVKV8';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
