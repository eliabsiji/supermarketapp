import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <form onSubmit={submit} class="form flex-lg-row flex-column-fluid w-100 d-flex flex-column flex-root" style = {{height : '100vh'}} id="kt_app_root">
                
                {/* <!--begin::Authentication - Sign-in --> */}
                {/* <!--begin::Logo--> 
                <a href="../../../index.html" class="d-block d-lg-none mx-auto py-20">
                    <img alt="Logo" src="../../../assets/media/logos/default.svg" class="theme-light-show h-25px"/>
                    <img alt="Logo" src="../../../assets/media/logos/default-dark.svg" class="theme-dark-show h-25px"/>
                </a>    
                    <!--end::Logo--> */}
            
                {/* <!--begin::Aside--> */}
                <div class="d-flex flex-column flex-column-fluid flex-center w-lg-50 p-10">         
                    {/* <!--begin::Wrapper--> */}
                    <div class="d-flex justify-content-between flex-column-fluid flex-column w-100 mw-450px">
                        {/* <!--begin::Header--> */}
                        <div class="d-flex flex-stack py-2">
                            {/* <!--begin::Back link--> */}
                            <div class="me-2">
                                            
                            </div>                 
                            {/* <!--end::Back link-->    */}
            
                                                {/* <!--begin::Sign Up link--> */}
                                <div class="m-0">
                                    <span class="text-gray-400 fw-bold fs-5 me-2" data-kt-translate="sign-in-head-desc">
                                        Not a Member yet?
                                    </span>
            
                                    <Link href={route('register')} class="link-primary fw-bold fs-5" data-kt-translate="sign-in-head-link">
                                        Sign Up
                                    </Link>       
                                </div>
                                {/* <!--end::Sign Up link--->       */}
                                            
                            
                            
                                            
                                    
                        </div>
                        {/* <!--end::Header--> */}
                        
                        {/* <!--begin::Body-->            */}
                        <div class="py-20">
                                    
                            {/* <!--begin::Form--> */}
                            {/* <!--begin::Body-->    */}
                            <div class="card-body">
                                {/* <!--begin::Heading--> */}
                                <div class="text-start mb-10">
                                    {/* <!--begin::Title--> */}
                                    <h1 class="text-dark mb-3 fs-3x" data-kt-translate="sign-in-title">
                                        Sign In
                                    </h1>
                                    {/* <!--end::Title--> */}
                        
                                    {/* <!--begin::Text--> */}
                                    <div class="text-gray-400 fw-semibold fs-6" data-kt-translate="general-desc">
                                        Get unlimited access & earn money
                                    </div>
                                    {/* <!--end::Link--> */}
                                </div>
                                {/* <!--begin::Heading--> */}
                        
                                {/* <!--begin::Input group---> */}
                                <div class="fv-row mb-8">
                                <div>
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                                </div>
                        
                                                
                            <div className="mt-4">
                                <InputLabel htmlFor="password" value="Password" />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>

                                {/* <!--begin::Wrapper--> */}
                                <div class="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-10">
                                    <div></div>
                        
                                    {/* <!--begin::Link--> */}
                                    <div className="flex items-center justify-end mt-4">
                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Forgot your password?
                                        </Link>
                                    )}

                            </div>
                                    {/* <!--end::Link--> */}
                                </div>
                                {/* <!--end::Wrapper-->    */}
                        
                                {/* <!--begin::Actions--> */}
                                <div class="d-flex flex-stack">
                                    {/* <!--begin::Submit--> */}
                                        {/* <!--begin::Indicator label--> */}
                                            
                                    <PrimaryButton className="btn btn-primary me-2 flex-shrink-0 ms-4 indicator-label" disabled={processing}>
                                        Sign in
                                        <span class="indicator-progress">
                                            <span data-kt-translate="general-progress">Please wait...</span>
                                            <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                        </span>
                                    </PrimaryButton>
                                        {/* <!--end::Indicator label--> */}
                        
                                        {/* <!--begin::Indicator progress--> */}
                                        {/* <!--end::Indicator progress--> */}
                                    {/* <!--end::Submit--> */}
                        
                                </div>
                                {/* <!--end::Actions--> */}
                            </div> 
                            {/* <!--begin::Body--> */}
                            {/* <!--end::Form-->  */}
                        
            
                        </div>         
                        {/* <!--end::Body--> */}
                            
                        {/* <!--begin::Footer--> */}
                        <div class="m-0">             
                            {/* <!--begin::Toggle--> */}
                            <button type = "button" class="btn btn-flex btn-link rotate" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" data-kt-menu-offset="0px, 0px">
                                <img  data-kt-element="current-lang-flag" class="w-25px h-25px rounded-circle me-3" src="../../../assets/media/flags/united-states.svg" alt=""/>
                                
                                <span data-kt-element="current-lang-name" class="me-2">English</span>
            
                                <i class="ki-duotone ki-down fs-2 text-muted rotate-180 m-0"></i>                </button>
                            {/* <!--end::Toggle--> */}
            
                            {/* <!--begin::Menu--> */}
                            <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4" data-kt-menu="true" id="kt_auth_lang_menu">
                                                        {/* <!--begin::Menu item--> */}
                                    <div class="menu-item px-3">
                                        <a href="#" class="menu-link d-flex px-5" data-kt-lang="English">
                                            <span class="symbol symbol-20px me-4">
                                                <img data-kt-element="lang-flag" class="rounded-1" src="../../../assets/media/flags/united-states.svg" alt=""/>
                                            </span>
                                            <span data-kt-element="lang-name">English</span>
                                        </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                                        {/* <!--begin::Menu item--> */}
                                    <div class="menu-item px-3">
                                        <a href="#" class="menu-link d-flex px-5" data-kt-lang="Spanish">
                                            <span class="symbol symbol-20px me-4">
                                                <img data-kt-element="lang-flag" class="rounded-1" src="../../../assets/media/flags/spain.svg" alt=""/>
                                            </span>
                                            <span data-kt-element="lang-name">Spanish</span>
                                        </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                                        {/* <!--begin::Menu item--> */}
                                    <div class="menu-item px-3">
                                        <a href="#" class="menu-link d-flex px-5" data-kt-lang="German">
                                            <span class="symbol symbol-20px me-4">
                                                <img data-kt-element="lang-flag" class="rounded-1" src="../../../assets/media/flags/germany.svg" alt=""/>
                                            </span>
                                            <span data-kt-element="lang-name">German</span>
                                        </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                                        {/* <!--begin::Menu item--> */}
                                    <div class="menu-item px-3">
                                        <a href="#" class="menu-link d-flex px-5" data-kt-lang="Japanese">
                                            <span class="symbol symbol-20px me-4">
                                                <img data-kt-element="lang-flag" class="rounded-1" src="../../../assets/media/flags/japan.svg" alt=""/>
                                            </span>
                                            <span data-kt-element="lang-name">Japanese</span>
                                        </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                                        {/* <!--begin::Menu item--> */}
                                    <div class="menu-item px-3">
                                        <a href="#" class="menu-link d-flex px-5" data-kt-lang="French">
                                            <span class="symbol symbol-20px me-4">
                                                <img data-kt-element="lang-flag" class="rounded-1" src="../../../assets/media/flags/france.svg" alt=""/>
                                            </span>
                                            <span data-kt-element="lang-name">French</span>
                                        </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                                </div>
                            {/* <!--end::Menu-->            */}
                        </div>
                        {/* <!--end::Footer-->  */}
                    </div>
                    {/* <!--end::Wrapper-->     */}
                </div>
                {/* <!--end::Aside-->        */}
            
                {/* <!--begin::Body--> */}
                <div class="d-none d-lg-flex flex-lg-row-fluid w-50 bgi-size-cover bgi-position-y-center bgi-position-x-start bgi-no-repeat" style={{backgroundImage : "url(../../../assets/media/auth/bg11.png)" }}>  
                </div>
                {/* <!--begin::Body--> */}
            </form>
        </>
    );
}
