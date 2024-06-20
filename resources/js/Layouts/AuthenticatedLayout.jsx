import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
// import '../../../public/assets/js/scripts.bundle'

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
                      
            <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
                <div class="app-page flex-column flex-column-fluid " id="kt_app_page">     
                    
                                
                    <div id="kt_app_header" class="app-header ">

                            <div class="app-container container-fluid d-flex align-items-stretch justify-content-end " id="kt_app_header_container">
                                            
                                <div class="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2" title="Show sidebar menu">
                                    <div class="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_sidebar_mobile_toggle">
                                        <i class="ki-duotone ki-abstract-14 fs-2 fs-md-1"><span class="path1"></span><span class="path2"></span></i>		</div>
                                </div>
                                

                                <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                                    <a href="../index.html" class="d-lg-none">
                                        <img alt="Logo" src="../assets/media/logos/default-small.svg" class="h-30px"/>
                                    </a>
                                </div>

                                <div class="d-flex align-items-stretch justify-content-end flex-lg-grow-1" id="kt_app_header_wrapper">
                                
                                    <div class="app-navbar flex-shrink-0">
                                        <div class="app-navbar-item align-items-stretch ms-1 ms-md-3">
                                                
                                            <div 
                                                id="kt_header_search" 
                                                class="header-search d-flex align-items-stretch" 
                                                
                                                data-kt-search-keypress="true"
                                                data-kt-search-min-length="2"
                                                data-kt-search-enter="enter"     
                                                data-kt-search-layout="menu"

                                                data-kt-menu-trigger="auto" 
                                                data-kt-menu-overflow="false" 
                                                data-kt-menu-permanent="true" 
                                                data-kt-menu-placement="bottom-end" 

                                                >

                                                <div class="d-flex align-items-center" data-kt-search-element="toggle" id="kt_header_search_toggle">
                                                    <div class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px">
                                                         <i class="ki-duotone ki-magnifier fs-2 fs-lg-1"><span class="path1"></span><span class="path2"></span></i>  
                                                    </div>
                                                </div>

                                                <div data-kt-search-element="content" class="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px">  
                                                    <div data-kt-search-element="wrapper">
                                                        <form data-kt-search-element="form" class="w-100 position-relative mb-3" autocomplete="off">	
                                                            {/* <!--begin::Icon--> */}
                                                            <i class="ki-duotone ki-magnifier fs-2 text-gray-500 position-absolute top-50 translate-middle-y ms-0"><span class="path1"></span><span class="path2"></span></i> 

                                                            {/* <!--begin::Input--> */}
                                                            <input type="text" class="search-input  form-control form-control-flush ps-10" name="search" value="" placeholder="Search..." data-kt-search-element="input"/>
                                                            {/* <!--end::Input--> */}

                                                            {/* <!--begin::Spinner--> */}
                                                            <span class="search-spinner  position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1" data-kt-search-element="spinner">
                                                                <span class="spinner-border h-15px w-15px align-middle text-gray-400"></span>
                                                            </span>
                                                            {/* <!--end::Spinner--> */}

                                                            {/* <!--begin::Reset--> */}
                                                            <span class="search-reset  btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none" data-kt-search-element="clear">
                                                                <i class="ki-duotone ki-cross fs-2 fs-lg-1 me-0"><span class="path1"></span><span class="path2"></span></i>    </span>
                                                            {/* <!--end::Reset--> */}

                                                            {/* <!--begin::Toolbar--> */}
                                                            <div class="position-absolute top-50 end-0 translate-middle-y" data-kt-search-element="toolbar">
                                                                {/* <!--begin::Preferences toggle--> */}
                                                                <div data-kt-search-element="preferences-show" class="btn btn-icon w-20px btn-sm btn-active-color-primary me-1" data-bs-toggle="tooltip" title="Show search preferences">
                                                                    <i class="ki-duotone ki-setting-2 fs-2"><span class="path1"></span><span class="path2"></span></i>        </div>
                                                                {/* <!--end::Preferences toggle--> */}

                                                                {/* <!--begin::Advanced search toggle--> */}
                                                                <div data-kt-search-element="advanced-options-form-show" class="btn btn-icon w-20px btn-sm btn-active-color-primary" data-bs-toggle="tooltip" title="Show more search options">
                                                                    <i class="ki-duotone ki-down fs-2"></i>        </div>
                                                                {/* <!--end::Advanced search toggle--> */}
                                                            </div>
                                                            {/* <!--end::Toolbar--> */}
                                                        </form>

                                                         <div class="separator border-gray-200 mb-6"></div>
                                                        <div data-kt-search-element="results" class="d-none">
                                                            {/* <!--begin::Items--> */}
                                                            <div class="scroll-y mh-200px mh-lg-350px">
                                                                            {/* <!--begin::Category title--> */}
                                                                    <h3 class="fs-5 text-muted m-0  pb-5" data-kt-search-element="category-title">
                                                                        Users            </h3>
                                                                    {/* <!--end::Category title--> */}

                                                                                    
                                                                        
                                                                        
                                                                                            {/* <!--begin::Item--> */}
                                                                            <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                                {/* <!--begin::Symbol--> */}
                                                                                <div class="symbol symbol-40px me-4">
                                                                                    <img src="../assets/media/avatars/300-6.jpg" alt=""/>
                                                                                </div>
                                                                                {/* <!--end::Symbol--> */}

                                                                                {/* <!--begin::Title--> */}
                                                                                <div class="d-flex flex-column justify-content-start fw-semibold">
                                                                                    <span class="fs-6 fw-semibold">Karina Clark</span>
                                                                                    <span class="fs-7 fw-semibold text-muted">Marketing Manager</span>
                                                                                </div>
                                                                                {/* <!--end::Title--> */}
                                                                            </a>
                                                                            {/* <!--end::Item--> */}
                                                                                                    
                                                                        
                                                                        
                                                                                            {/* <!--begin::Item--> */}
                                                                            <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                                {/* <!--begin::Symbol--> */}
                                                                                <div class="symbol symbol-40px me-4">
                                                                                    <img src="../assets/media/avatars/300-2.jpg" alt=""/>
                                                                                </div>
                                                                                {/* <!--end::Symbol--> */}

                                                                                {/* <!--begin::Title--> */}
                                                                                <div class="d-flex flex-column justify-content-start fw-semibold">
                                                                                    <span class="fs-6 fw-semibold">Olivia Bold</span>
                                                                                    <span class="fs-7 fw-semibold text-muted">Software Engineer</span>
                                                                                </div>
                                                                                {/* <!--end::Title--> */}
                                                                            </a>
                                                                            {/* <!--end::Item--> */}
                                                                                                    
                                                                        
                                                                        
                                                                                            {/* <!--begin::Item--> */}
                                                                            <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                                {/* <!--begin::Symbol--> */}
                                                                                <div class="symbol symbol-40px me-4">
                                                                                    <img src="../assets/media/avatars/300-9.jpg" alt=""/>
                                                                                </div>
                                                                                {/* <!--end::Symbol--> */}

                                                                                {/* <!--begin::Title--> */}
                                                                                <div class="d-flex flex-column justify-content-start fw-semibold">
                                                                                    <span class="fs-6 fw-semibold">Ana Clark</span>
                                                                                    <span class="fs-7 fw-semibold text-muted">UI/UX Designer</span>
                                                                                </div>
                                                                                {/* <!--end::Title--> */}
                                                                            </a>
                                                                            {/* <!--end::Item--> */}
                                                                                                    
                                                                        
                                                                        
                                                                                            {/* <!--begin::Item--> */}
                                                                            <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                                {/* <!--begin::Symbol--> */}
                                                                                <div class="symbol symbol-40px me-4">
                                                                                    <img src="../assets/media/avatars/300-14.jpg" alt=""/>
                                                                                </div>
                                                                                {/* <!--end::Symbol--> */}

                                                                                {/* <!--begin::Title--> */}
                                                                                <div class="d-flex flex-column justify-content-start fw-semibold">
                                                                                    <span class="fs-6 fw-semibold">Nick Pitola</span>
                                                                                    <span class="fs-7 fw-semibold text-muted">Art Director</span>
                                                                                </div>
                                                                                {/* <!--end::Title--> */}
                                                                            </a>
                                                                            {/* <!--end::Item--> */}
                                                                                                    
                                                                        
                                                                        
                                                                                            {/* <!--begin::Item--> */}
                                                                            <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                                {/* <!--begin::Symbol--> */}
                                                                                <div class="symbol symbol-40px me-4">
                                                                                    <img src="../assets/media/avatars/300-11.jpg" alt=""/>
                                                                                </div>
                                                                                {/* <!--end::Symbol--> */}

                                                                                {/* <!--begin::Title--> */}
                                                                                <div class="d-flex flex-column justify-content-start fw-semibold">
                                                                                    <span class="fs-6 fw-semibold">Edward Kulnic</span>
                                                                                    <span class="fs-7 fw-semibold text-muted">System Administrator</span>
                                                                                </div>
                                                                                {/* <!--end::Title--> */}
                                                                            </a>
                                                                            {/* <!--end::Item--> */}
                                                                                                        {/* <!--begin::Category title--> */}
                                                                    <h3 class="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">
                                                                        Customers            </h3>
                                                                    {/* <!--end::Category title--> */}

                                                                                    
                                                                        
                                                                                            {/* <!--begin::Item--> */}
                                                                            <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                                {/* <!--begin::Symbol--> */}
                                                                                <div class="symbol symbol-40px me-4">
                                                                                    <span class="symbol-label bg-light">                             
                                                                                        <img class="w-20px h-20px" src="../assets/media/svg/brand-logos/volicity-9.svg" alt=""/>                          
                                                                                    </span>
                                                                                </div>
                                                                                {/* <!--end::Symbol--> */}

                                                                                {/* <!--begin::Title--> */}
                                                                                <div class="d-flex flex-column justify-content-start fw-semibold">
                                                                                    <span class="fs-6 fw-semibold">Company Rbranding</span>
                                                                                    <span class="fs-7 fw-semibold text-muted">UI Design</span>
                                                                                </div>
                                                                                {/* <!--end::Title--> */}
                                                                            </a>
                                                                            {/* <!--end::Item--> */}
                                                                        
                                                                                                    
                                                                        
                                                                                            {/* <!--begin::Item--> */}
                                                                            <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                                {/* <!--begin::Symbol--> */}
                                                                                <div class="symbol symbol-40px me-4">
                                                                                    <span class="symbol-label bg-light">                             
                                                                                        <img class="w-20px h-20px" src="../assets/media/svg/brand-logos/tvit.svg" alt=""/>                          
                                                                                    </span>
                                                                                </div>
                                                                                {/* <!--end::Symbol--> */}

                                                                                {/* <!--begin::Title--> */}
                                                                                <div class="d-flex flex-column justify-content-start fw-semibold">
                                                                                    <span class="fs-6 fw-semibold">Company Re-branding</span>
                                                                                    <span class="fs-7 fw-semibold text-muted">Web Development</span>
                                                                                </div>
                                                                                {/* <!--end::Title--> */}
                                                                            </a>
                                                                            {/* <!--end::Item--> */}
                                                                        
                                                                                                    
                                                                        
                                                                                            {/* <!--begin::Item--> */}
                                                                            <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                                {/* <!--begin::Symbol--> */}
                                                                                <div class="symbol symbol-40px me-4">
                                                                                    <span class="symbol-label bg-light">                             
                                                                                        <img class="w-20px h-20px" src="../assets/media/svg/misc/infography.svg" alt=""/>                          
                                                                                    </span>
                                                                                </div>
                                                                                {/* <!--end::Symbol--> */}

                                                                                {/* <!--begin::Title--> */}
                                                                                <div class="d-flex flex-column justify-content-start fw-semibold">
                                                                                    <span class="fs-6 fw-semibold">Business Analytics App</span>
                                                                                    <span class="fs-7 fw-semibold text-muted">Administration</span>
                                                                                </div>
                                                                                {/* <!--end::Title--> */}
                                                                            </a>
                                                                            {/* <!--end::Item--> */}
                                                                        
                                                                                                    
                                                                        
                                                                                            {/* <!--begin::Item--> */}
                                                                            <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                                {/* <!--begin::Symbol--> */}
                                                                                <div class="symbol symbol-40px me-4">
                                                                                    <span class="symbol-label bg-light">                             
                                                                                        <img class="w-20px h-20px" src="../assets/media/svg/brand-logos/leaf.svg" alt=""/>                          
                                                                                    </span>
                                                                                </div>
                                                                                {/* <!--end::Symbol--> */}

                                                                                {/* <!--begin::Title--> */}
                                                                                <div class="d-flex flex-column justify-content-start fw-semibold">
                                                                                    <span class="fs-6 fw-semibold">EcoLeaf App Launch</span>
                                                                                    <span class="fs-7 fw-semibold text-muted">Marketing</span>
                                                                                </div>
                                                                                {/* <!--end::Title--> */}
                                                                            </a>
                                                                            {/* <!--end::Item--> */}
                                                                        
                                                                                                    
                                                                        
                                                                                            {/* <!--begin::Item--> */}
                                                                            <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                                {/* <!--begin::Symbol--> */}
                                                                                <div class="symbol symbol-40px me-4">
                                                                                    <span class="symbol-label bg-light">                             
                                                                                        <img class="w-20px h-20px" src="../assets/media/svg/brand-logos/tower.svg" alt=""/>                          
                                                                                    </span>
                                                                                </div>
                                                                                {/* <!--end::Symbol--> */}

                                                                                {/* <!--begin::Title--> */}
                                                                                <div class="d-flex flex-column justify-content-start fw-semibold">
                                                                                    <span class="fs-6 fw-semibold">Tower Group Website</span>
                                                                                    <span class="fs-7 fw-semibold text-muted">Google Adwords</span>
                                                                                </div>
                                                                                {/* <!--end::Title--> */}
                                                                            </a>
                                                                            {/* <!--end::Item--> */}
                                                                        
                                                                                                        {/* <!--begin::Category title--> */}
                                                                    <h3 class="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">
                                                                        Projects            </h3>
                                                                    {/* <!--end::Category title--> */}

                                                                                    
                                                                                            {/* <!--begin::Item--> */}
                                                                            <a href="#" class="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                                {/* <!--begin::Symbol--> */}
                                                                                <div class="symbol symbol-40px me-4">
                                                                                    <span class="symbol-label bg-light">                             
                                                                                        <i class="ki-duotone ki-notepad fs-2 text-primary"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></i>                          
                                                                                    </span>
                                                                                </div>
                                                                                {/* <!--end::Symbol--> */}

                                                                                {/* <!--begin::Title--> */}
                                                                                <div class="d-flex flex-column">
                                                                                    <span class="fs-6 fw-semibold">Si-Fi Project by AU Themes</span>
                                                                                    <span class="fs-7 fw-semibold text-muted">#45670</span>
                                                                                </div>
                                                                                {/* <!--end::Title--> */}
                                                                            </a>
                                                                            {/* <!--end::Item--> */}
                                                                        
                                                                        
                                                                                                    
                                                               
                                                                        
                                                                        </div>
                                                            {/* <!--end::Items--> */}
                                                        </div>

                                                        <div class="mb-5" data-kt-search-element="main">
                                                            {/* <!--begin::Heading--> */}
                                                            <div class="d-flex flex-stack fw-semibold mb-4">
                                                                {/* <!--begin::Label--> */}
                                                                <span class="text-muted fs-6 me-2">Recently Searched:</span>
                                                                {/* <!--end::Label--> */}

                                                                    </div>
                                                            {/* <!--end::Heading--> */}

                                                            {/* <!--begin::Items--> */}
                                                            <div class="scroll-y mh-200px mh-lg-325px">
                                                                            {/* <!--begin::Item--> */}
                                                                    <div class="d-flex align-items-center mb-5">
                                                                        {/* <!--begin::Symbol--> */}
                                                                        <div class="symbol symbol-40px me-4">
                                                                            <span class="symbol-label bg-light">                             
                                                                                <i class="ki-duotone ki-laptop fs-2 text-primary"><span class="path1"></span><span class="path2"></span></i>                          
                                                                            </span>
                                                                        </div>
                                                                        {/* <!--end::Symbol--> */}
                                                                        {/* <!--begin::Title--> */}
                                                                        <div class="d-flex flex-column">
                                                                            <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-semibold">BoomApp by Keenthemes</a>
                                                                            <span class="fs-7 text-muted fw-semibold">#45789</span>
                                                                        </div>
                                                                        {/* <!--end::Title--> */}
                                                                    </div>
                                                                    {/* <!--end::Item--> */}
                                                                        
                                                                    </div>
                                                            {/* <!--end::Items--> */}
                                                        </div>
                                                        <div data-kt-search-element="empty" class="text-center d-none">
                                                            {/* <!--begin::Icon--> */}
                                                            <div class="pt-10 pb-10">
                                                                <i class="ki-duotone ki-search-list fs-4x opacity-50"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i>    </div>
                                                            {/* <!--end::Icon--> */}

                                                            {/* <!--begin::Message--> */}
                                                            <div class="pb-15 fw-semibold">
                                                                <h3 class="text-gray-600 fs-5 mb-2">No result found</h3>
                                                                <div class="text-muted fs-7">Please try again with a different query</div>
                                                            </div>
                                                            {/* <!--end::Message--> */}
                                                        </div>
                                                    </div>

                                                        <form data-kt-search-element="advanced-options-form" class="pt-1 d-none">
                                                            {/* <!--begin::Heading--> */}
                                                            <h3 class="fw-semibold text-dark mb-7">Advanced Search</h3>
                                                            {/* <!--end::Heading--> */}

                                                            {/* <!--begin::Input group--> */}
                                                            <div class="mb-5">
                                                                <input type="text" class="form-control form-control-sm form-control-solid" placeholder="Contains the word" name="query"/>
                                                            </div>
                                                            {/* <!--end::Input group--> */}

                                                            {/* <!--begin::Input group--> */}
                                                            <div class="mb-5">
                                                                {/* <!--begin::Radio group--> */}
                                                                <div class="nav-group nav-group-fluid">       
                                                                    {/* <!--begin::Option-->      */}
                                                                    <label>     
                                                                        <input type="radio" class="btn-check" name="type" value="has" checked="checked"/>
                                                                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary">
                                                                            All
                                                                        </span>
                                                                    </label>
                                                                    {/* <!--end::Option--> */}

                                                                    {/* <!--begin::Option-->           */}
                                                                    <label>  
                                                                        <input type="radio" class="btn-check" name="type" value="users"/>
                                                                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                                                            Users
                                                                        </span>
                                                                    </label>
                                                                    {/* <!--end::Option--> */}

                                                                    {/* <!--begin::Option-->         */}
                                                                    <label>    
                                                                        <input type="radio" class="btn-check" name="type" value="orders"/>
                                                                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                                                            Orders
                                                                        </span>
                                                                    </label>
                                                                    {/* <!--end::Option--> */}

                                                                    {/* <!--begin::Option-->      */}
                                                                    <label>       
                                                                        <input type="radio" class="btn-check" name="type" value="projects"/>
                                                                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                                                            Projects
                                                                        </span>
                                                                    </label>
                                                                    {/* <!--end::Option--> */}
                                                                </div>
                                                                {/* <!--end::Radio group--> */}
                                                            </div>
                                                            {/* <!--end::Input group--> */}

                                                            {/* <!--begin::Input group--> */}
                                                            <div class="mb-5">
                                                                <input type="text" name="assignedto" class="form-control form-control-sm form-control-solid" placeholder="Assigned to" value=""/>
                                                            </div>
                                                            {/* <!--end::Input group--> */}

                                                            {/* <!--begin::Input group--> */}
                                                            <div class="mb-5">
                                                                <input type="text" name="collaborators" class="form-control form-control-sm form-control-solid" placeholder="Collaborators" value=""/>
                                                            </div>
                                                            {/* <!--end::Input group--> */}

                                                            {/* <!--begin::Input group--> */}
                                                            <div class="mb-5">
                                                                {/* <!--begin::Radio group--> */}
                                                                <div class="nav-group nav-group-fluid"> 
                                                                    {/* <!--begin::Option-->      */}
                                                                    <label>     
                                                                        <input type="radio" class="btn-check" name="attachment" value="has" checked="checked"/>
                                                                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary">
                                                                            Has attachment
                                                                        </span>
                                                                    </label>
                                                                    {/* <!--end::Option--> */}

                                                                    {/* <!--begin::Option-->           */}
                                                                    <label>  
                                                                        <input type="radio" class="btn-check" name="attachment" value="any"/>
                                                                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                                                            Any
                                                                        </span>
                                                                    </label>
                                                                    {/* <!--end::Option--> */}
                                                                </div>
                                                                {/* <!--end::Radio group--> */}
                                                            </div>
                                                            {/* <!--end::Input group--> */}

                                                            {/* <!--begin::Input group--> */}
                                                            <div class="mb-5">
                                                                <select name="timezone" aria-label="Select a Timezone" data-control="select2" data-dropdown-parent="#kt_header_search" data-placeholder="date_period" class="form-select form-select-sm form-select-solid">
                                                                    <option value="next">Within the next</option>
                                                                    <option value="last">Within the last</option>
                                                                    <option value="between">Between</option>
                                                                    <option value="on">On</option>
                                                                </select>
                                                            </div>
                                                            {/* <!--end::Input group--> */}

                                                            {/* <!--begin::Input group--> */}
                                                            <div class="row mb-8">
                                                                {/* <!--begin::Col--> */}
                                                                <div class="col-6"> 
                                                                    <input type="number" name="date_number" class="form-control form-control-sm form-control-solid" placeholder="Lenght" value=""/>
                                                                </div>
                                                                {/* <!--end::Col--> */}

                                                                {/* <!--begin::Col--> */}
                                                                <div class="col-6"> 
                                                                    <select name="date_typer" aria-label="Select a Timezone" data-control="select2" data-dropdown-parent="#kt_header_search" data-placeholder="Period" class="form-select form-select-sm form-select-solid">
                                                                        <option value="days">Days</option>
                                                                        <option value="weeks">Weeks</option>
                                                                        <option value="months">Months</option>
                                                                        <option value="years">Years</option>
                                                                    </select>
                                                                </div>
                                                                {/* <!--end::Col--> */}
                                                            </div>
                                                            {/* <!--end::Input group--> */}

                                                            {/* <!--begin::Actions--> */}
                                                            <div class="d-flex justify-content-end">
                                                                <button type="reset" class="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="advanced-options-form-cancel">Cancel</button>

                                                                <a href="../pages/search/horizontal.html" class="btn btn-sm fw-bold btn-primary" data-kt-search-element="advanced-options-form-search">Search</a>
                                                            </div>
                                                            {/* <!--end::Actions--> */}
                                                        </form>
                                                        <form data-kt-search-element="preferences" class="pt-1 d-none">
                                                            {/* <!--begin::Heading--> */}
                                                            <h3 class="fw-semibold text-dark mb-7">Search Preferences</h3>
                                                            {/* <!--end::Heading--> */}

                                                            {/* <!--begin::Input group--> */}
                                                            <div class="pb-4 border-bottom">
                                                                <label class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                                    <span class="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                                                        Projects
                                                                    </span>

                                                                    <input class="form-check-input" type="checkbox" value="1" checked="checked"/>
                                                                </label>
                                                            </div>
                                                            {/* <!--end::Input group--> */}

                                                            {/* <!--begin::Input group--> */}
                                                            <div class="py-4 border-bottom">
                                                                <label class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                                    <span class="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                                                        Targets
                                                                    </span>
                                                                    <input class="form-check-input" type="checkbox" value="1" checked="checked"/>
                                                                </label>
                                                            </div>
                                                            {/* <!--end::Input group--> */}

                                                            {/* <!--begin::Input group--> */}
                                                            <div class="py-4 border-bottom">
                                                                <label class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                                    <span class="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                                                        Affiliate Programs
                                                                    </span>
                                                                    <input class="form-check-input" type="checkbox" value="1" />
                                                                </label>
                                                            </div>
                                                            {/* <!--end::Input group--> */}

                                                            {/* <!--begin::Input group--> */}
                                                            <div class="py-4 border-bottom">
                                                                <label class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                                    <span class="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                                                        Referrals
                                                                    </span>
                                                                    <input class="form-check-input" type="checkbox" value="1" checked="checked"/>
                                                                </label>
                                                            </div>
                                                            {/* <!--end::Input group--> */}

                                                            {/* <!--begin::Input group--> */}
                                                            <div class="py-4 border-bottom">
                                                                <label class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                                    <span class="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">
                                                                        Users
                                                                    </span>
                                                                    <input class="form-check-input" type="checkbox" value="1" />
                                                                </label>
                                                            </div>
                                                            {/* <!--end::Input group--> */}

                                                            {/* <!--begin::Actions--> */}
                                                            <div class="d-flex justify-content-end pt-7">
                                                                <button type="reset" class="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="preferences-dismiss">Cancel</button>
                                                                <button type="submit" class="btn btn-sm fw-bold btn-primary">Save Changes</button>
                                                            </div>
                                                            {/* <!--end::Actions--> */}
                                                        </form>
                                                    </div>
                                            </div>

                                            {/* <!--begin::Activities--> */}
                                            <div class="app-navbar-item ms-1 ms-md-3">
                                                {/* <!--begin::Drawer toggle--> */}
                                                <div class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px" id="kt_activities_toggle">
                                                    <i class="ki-duotone ki-notification-on fs-2 fs-lg-1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></i>        </div>
                                                {/* <!--end::Drawer toggle--> */}
                                            </div>
                                            {/* <!--end::Activities-->     */}


                                            {/* <!--begin::Notifications--> */}
                                            <div class="app-navbar-item ms-1 ms-md-3">
                                                {/* <!--begin::Menu- wrapper--> */}
                                                <div class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end" id="kt_menu_item_wow">
                                                    <i class="ki-duotone ki-notification-status fs-2 fs-lg-1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i>  
                                                </div>
                                                
                                                {/* <!--begin::Menu--> */}
                                                <div class="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true" id="kt_menu_notifications">
                                                    {/* <!--begin::Heading--> */}
                                                    <div class="d-flex flex-column bgi-no-repeat rounded-top" style={{backgroundImage:"url('../assets/media/misc/menu-header-bg.jpg')"}}>
                                                        {/* <!--begin::Title-->                                    */}
                                                        <h3 class="text-white fw-semibold px-9 mt-10 mb-6">
                                                            Notifications <span class="fs-8 opacity-75 ps-3">24 reports</span>
                                                        </h3>
                                                        {/* <!--end::Title--> */}

                                                        {/* <!--begin::Tabs--> */}
                                                        <ul class="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9">
                                                            <li class="nav-item">
                                                                <a class="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_1">Alerts</a>
                                                            </li>

                                                            <li class="nav-item">
                                                                <a class="nav-link text-white opacity-75 opacity-state-100 pb-4 active" data-bs-toggle="tab" href="#kt_topbar_notifications_2">Updates</a>
                                                            </li>

                                                            <li class="nav-item">
                                                                <a class="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_3">Logs</a>
                                                            </li>
                                                        </ul>
                                                        {/* <!--end::Tabs--> */}
                                                    </div>
                                                    {/* <!--end::Heading--> */}

                                                    {/* <!--begin::Tab content--> */}
                                                    <div class="tab-content">
                                                        {/* <!--begin::Tab panel--> */}
                                                        <div class="tab-pane fade" id="kt_topbar_notifications_1" role="tabpanel">
                                                            {/* <!--begin::Items--> */}
                                                            <div class="scroll-y mh-325px my-5 px-8">
                                                                                    {/* <!--begin::Item--> */}
                                                                    <div class="d-flex flex-stack py-4">
                                                                        {/* <!--begin::Section--> */}
                                                                        <div class="d-flex align-items-center">
                                                                            {/* <!--begin::Symbol--> */}
                                                                            <div class="symbol symbol-35px me-4">
                                                                                <span class="symbol-label bg-light-primary">      
                                                                                    <i class="ki-duotone ki-abstract-28 fs-2 text-primary"><span class="path1"></span><span class="path2"></span></i>                                                    
                                                                                </span>
                                                                            </div>
                                                                            {/* <!--end::Symbol--> */}

                                                                            {/* <!--begin::Title--> */}
                                                                            <div class="mb-0 me-2">
                                                                                <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Project Alice</a>
                                                                                <div class="text-gray-400 fs-7">Phase 1 development</div>
                                                                            </div>
                                                                            {/* <!--end::Title--> */}
                                                                        </div>
                                                                        {/* <!--end::Section--> */}

                                                                        {/* <!--begin::Label--> */}
                                                                        <span class="badge badge-light fs-8">1 hr</span>
                                                                        {/* <!--end::Label--> */}
                                                                    </div>
                                                                    {/* <!--end::Item--> */}
                                                                                    {/* <!--begin::Item--> */}
                                                                    <div class="d-flex flex-stack py-4">
                                                                        {/* <!--begin::Section--> */}
                                                                        <div class="d-flex align-items-center">
                                                                            {/* <!--begin::Symbol--> */}
                                                                            <div class="symbol symbol-35px me-4">
                                                                                <span class="symbol-label bg-light-danger">      
                                                                                    <i class="ki-duotone ki-information fs-2 text-danger"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i>                                                    
                                                                                </span>
                                                                            </div>
                                                                            {/* <!--end::Symbol--> */}

                                                                            {/* <!--begin::Title--> */}
                                                                            <div class="mb-0 me-2">
                                                                                <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">HR Confidential</a>
                                                                                <div class="text-gray-400 fs-7">Confidential staff documents</div>
                                                                            </div>
                                                                            {/* <!--end::Title--> */}
                                                                        </div>
                                                                        {/* <!--end::Section--> */}

                                                                        {/* <!--begin::Label--> */}
                                                                        <span class="badge badge-light fs-8">2 hrs</span>
                                                                        {/* <!--end::Label--> */}
                                                                    </div>
                                                                    {/* <!--end::Item--> */}
                                                                                    {/* <!--begin::Item--> */}
                                                                    <div class="d-flex flex-stack py-4">
                                                                        {/* <!--begin::Section--> */}
                                                                        <div class="d-flex align-items-center">
                                                                            {/* <!--begin::Symbol--> */}
                                                                            <div class="symbol symbol-35px me-4">
                                                                                <span class="symbol-label bg-light-warning">      
                                                                                    <i class="ki-duotone ki-briefcase fs-2 text-warning"><span class="path1"></span><span class="path2"></span></i>                                                    
                                                                                </span>
                                                                            </div>
                                                                            {/* <!--end::Symbol--> */}

                                                                            {/* <!--begin::Title--> */}
                                                                            <div class="mb-0 me-2">
                                                                                <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Company HR</a>
                                                                                <div class="text-gray-400 fs-7">Corporeate staff profiles</div>
                                                                            </div>
                                                                            {/* <!--end::Title--> */}
                                                                        </div>
                                                                        {/* <!--end::Section--> */}

                                                                        {/* <!--begin::Label--> */}
                                                                        <span class="badge badge-light fs-8">5 hrs</span>
                                                                        {/* <!--end::Label--> */}
                                                                    </div>
                                                                    {/* <!--end::Item--> */}
                                                                                    {/* <!--begin::Item--> */}
                                                                    <div class="d-flex flex-stack py-4">
                                                                        {/* <!--begin::Section--> */}
                                                                        <div class="d-flex align-items-center">
                                                                            {/* <!--begin::Symbol--> */}
                                                                            <div class="symbol symbol-35px me-4">
                                                                                <span class="symbol-label bg-light-success">      
                                                                                    <i class="ki-duotone ki-abstract-12 fs-2 text-success"><span class="path1"></span><span class="path2"></span></i>                                                    
                                                                                </span>
                                                                            </div>
                                                                            {/* <!--end::Symbol--> */}

                                                                            {/* <!--begin::Title--> */}
                                                                            <div class="mb-0 me-2">
                                                                                <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Project Redux</a>
                                                                                <div class="text-gray-400 fs-7">New frontend admin theme</div>
                                                                            </div>
                                                                            {/* <!--end::Title--> */}
                                                                        </div>
                                                                        {/* <!--end::Section--> */}

                                                                        {/* <!--begin::Label--> */}
                                                                        <span class="badge badge-light fs-8">2 days</span>
                                                                        {/* <!--end::Label--> */}
                                                                    </div>
                                                                    {/* <!--end::Item--> */}
                                                                                    {/* <!--begin::Item--> */}
                                                                    <div class="d-flex flex-stack py-4">
                                                                        {/* <!--begin::Section--> */}
                                                                        <div class="d-flex align-items-center">
                                                                            {/* <!--begin::Symbol--> */}
                                                                            <div class="symbol symbol-35px me-4">
                                                                                <span class="symbol-label bg-light-primary">      
                                                                                    <i class="ki-duotone ki-colors-square fs-2 text-primary"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i>                                                    
                                                                                </span>
                                                                            </div>
                                                                            {/* <!--end::Symbol--> */}

                                                                            {/* <!--begin::Title--> */}
                                                                            <div class="mb-0 me-2">
                                                                                <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Project Breafing</a>
                                                                                <div class="text-gray-400 fs-7">Product launch status update</div>
                                                                            </div>
                                                                            {/* <!--end::Title--> */}
                                                                        </div>
                                                                        {/* <!--end::Section--> */}

                                                                        {/* <!--begin::Label--> */}
                                                                        <span class="badge badge-light fs-8">21 Jan</span>
                                                                        {/* <!--end::Label--> */}
                                                                    </div>
                                                                    {/* <!--end::Item--> */}
                                                                                    {/* <!--begin::Item--> */}
                                                                    <div class="d-flex flex-stack py-4">
                                                                        {/* <!--begin::Section--> */}
                                                                        <div class="d-flex align-items-center">
                                                                            {/* <!--begin::Symbol--> */}
                                                                            <div class="symbol symbol-35px me-4">
                                                                                <span class="symbol-label bg-light-info">      
                                                                                    <i class="ki-duotone ki-picture fs-2 text-info"></i>                                                    
                                                                                </span>
                                                                            </div>
                                                                            {/* <!--end::Symbol--> */}

                                                                            {/* <!--begin::Title--> */}
                                                                            <div class="mb-0 me-2">
                                                                                <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Banner Assets</a>
                                                                                <div class="text-gray-400 fs-7">Collection of banner images</div>
                                                                            </div>
                                                                            {/* <!--end::Title--> */}
                                                                        </div>
                                                                        {/* <!--end::Section--> */}

                                                                        {/* <!--begin::Label--> */}
                                                                        <span class="badge badge-light fs-8">21 Jan</span>
                                                                        {/* <!--end::Label--> */}
                                                                    </div>
                                                                    {/* <!--end::Item--> */}
                                                                                    {/* <!--begin::Item--> */}
                                                                    <div class="d-flex flex-stack py-4">
                                                                        {/* <!--begin::Section--> */}
                                                                        <div class="d-flex align-items-center">
                                                                            {/* <!--begin::Symbol--> */}
                                                                            <div class="symbol symbol-35px me-4">
                                                                                <span class="symbol-label bg-light-warning">      
                                                                                    <i class="ki-duotone ki-color-swatch fs-2 text-warning"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span><span class="path21"></span></i>                                                    
                                                                                </span>
                                                                            </div>
                                                                            {/* <!--end::Symbol--> */}

                                                                            {/* <!--begin::Title--> */}
                                                                            <div class="mb-0 me-2">
                                                                                <a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">Icon Assets</a>
                                                                                <div class="text-gray-400 fs-7">Collection of SVG icons</div>
                                                                            </div>
                                                                            {/* <!--end::Title--> */}
                                                                        </div>
                                                                        {/* <!--end::Section--> */}

                                                                        {/* <!--begin::Label--> */}
                                                                        <span class="badge badge-light fs-8">20 March</span>
                                                                        {/* <!--end::Label--> */}
                                                                    </div>
                                                                    {/* <!--end::Item--> */}
                                                                
                                                            </div>
                                                            {/* <!--end::Items--> */}

                                                            {/* <!--begin::View more--> */}
                                                            <div class="py-3 text-center border-top">
                                                                <a href="../pages/user-profile/activity.html" class="btn btn-color-gray-600 btn-active-color-primary">
                                                                    View All 
                                                                    <i class="ki-duotone ki-arrow-right fs-5"><span class="path1"></span><span class="path2"></span></i>                </a>			 
                                                            </div>
                                                            {/* <!--end::View more-->  */}
                                                        </div>
                                                        {/* <!--end::Tab panel-->       */}

                                                    </div>
                                                    {/* <!--end::Tab content--> */}
                                                </div>
                                                {/* <!--end::Menu-->        <!--end::Menu wrapper--> */}
                                            </div>
                                            {/* <!--end::Notifications--> */}


                                            {/* <!--begin::Chat--> */}
                                            <div class="app-navbar-item ms-1 ms-md-3">
                                                {/* <!--begin::Menu wrapper--> */}
                                                <div class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px position-relative" id="kt_drawer_chat_toggle">
                                                    <i class="ki-duotone ki-message-text-2 fs-2 fs-lg-1"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i>
                                                    <span class="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink">
                                                    </span>
                                                </div>
                                                {/* <!--end::Menu wrapper--> */}
                                            </div>
                                            {/* <!--end::Chat--> */}

                                            {/* <!--begin::My apps links--> */}
                                            <div class="app-navbar-item ms-1 ms-md-3">
                                                {/* <!--begin::Menu wrapper--> */}
                                                <div class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                                    <i class="ki-duotone ki-element-11 fs-2 fs-lg-1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i>  
                                                </div>
            
                                                {/* <!--begin::My apps--> */}
                                                <div class="menu menu-sub menu-sub-dropdown menu-column w-100 w-sm-350px" data-kt-menu="true">
                                                    {/* <!--begin::Card--> */}
                                                    <div class="card">
                                                        {/* <!--begin::Card header--> */}
                                                        <div class="card-header">
                                                            {/* <!--begin::Card title--> */}
                                                            <div class="card-title">My Apps</div>
                                                            {/* <!--end::Card title--> */}

                                                            {/* <!--begin::Card toolbar--> */}
                                                            <div class="card-toolbar">
                                                                {/* <!--begin::Menu--> */}
                                                                <button type="button" class="btn btn-sm btn-icon btn-active-light-primary me-n3" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-end">
                                                                    <i class="ki-duotone ki-setting-3 fs-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></i>                </button>
                                                                
                                                                {/* <!--begin::Menu 3--> */}
                                                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                                                                    {/* <!--begin::Heading--> */}
                                                                    <div class="menu-item px-3">
                                                                        <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                                                            Payments
                                                                        </div>
                                                                    </div>
                                                                    {/* <!--end::Heading--> */}

                                                                    {/* <!--begin::Menu item--> */}
                                                                    <div class="menu-item px-3">
                                                                        <a href="#" class="menu-link px-3">
                                                                            Create Invoice
                                                                        </a>
                                                                    </div>
                                                                    {/* <!--end::Menu item--> */}

                                                                    {/* <!--begin::Menu item--> */}
                                                                    <div class="menu-item px-3">
                                                                        <a href="#" class="menu-link flex-stack px-3">
                                                                            Create Payment

                                                                            <span class="ms-2" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference">
                                                                                <i class="ki-duotone ki-information fs-6"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i>            </span>
                                                                        </a>
                                                                    </div>
                                                                    {/* <!--end::Menu item--> */}

                                                                    {/* <!--begin::Menu item--> */}
                                                                    <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                                                                        <a href="#" class="menu-link px-3">
                                                                            <span class="menu-title">Subscription</span>
                                                                            <span class="menu-arrow"></span>
                                                                        </a>

                                                                        {/* <!--begin::Menu sub--> */}
                                                                        <div class="menu-sub menu-sub-dropdown w-175px py-4">
                                                                            {/* <!--begin::Menu item--> */}
                                                                            <div class="menu-item px-3">
                                                                                <a href="#" class="menu-link px-3">
                                                                                    Plans
                                                                                </a>
                                                                            </div>
                                                                            {/* <!--end::Menu item--> */}

                                                                            {/* <!--begin::Menu item--> */}
                                                                            <div class="menu-item px-3">
                                                                                <a href="#" class="menu-link px-3">
                                                                                    Billing
                                                                                </a>
                                                                            </div>
                                                                            {/* <!--end::Menu item--> */}

                                                                            {/* <!--begin::Menu item-->             */}
                                                                            <div class="menu-item px-3">
                                                                                <a href="#" class="menu-link px-3">
                                                                                    Statements
                                                                                </a>
                                                                            </div>
                                                                            {/* <!--end::Menu item--> */}
                                                                            
                                                                            {/* <!--begin::Menu separator--> */}
                                                                            <div class="separator my-2"></div>
                                                                            {/* <!--end::Menu separator--> */}

                                                                            {/* <!--begin::Menu item-->             */}
                                                                            <div class="menu-item px-3">
                                                                                <div class="menu-content px-3">
                                                                                    {/* <!--begin::Switch-->       */}
                                                                                    <label class="form-check form-switch form-check-custom form-check-solid">
                                                                                        {/* <!--begin::Input-->    */}
                                                                                        <input class="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications"/>
                                                                                        {/* <!--end::Input-->    */}

                                                                                        {/* <!--end::Label-->    */}
                                                                                        <span class="form-check-label text-muted fs-6">
                                                                                            Recuring
                                                                                        </span>
                                                                                        {/* <!--end::Label-->    */}
                                                                                    </label>
                                                                                    {/* <!--end::Switch-->    */}
                                                                                </div>
                                                                            </div>
                                                                            {/* <!--end::Menu item--> */}
                                                                        </div>
                                                                        {/* <!--end::Menu sub--> */}
                                                                    </div>
                                                                    {/* <!--end::Menu item--> */}

                                                                    {/* <!--begin::Menu item--> */}
                                                                    <div class="menu-item px-3 my-1">
                                                                        <a href="#" class="menu-link px-3">
                                                                            Settings
                                                                        </a>
                                                                    </div>
                                                                    {/* <!--end::Menu item--> */}
                                                                </div>
                                                                {/* <!--end::Menu 3--> */}
                                                                {/* <!--end::Menu--> */}
                                                            </div>
                                                            {/* <!--end::Card toolbar--> */}
                                                        </div>
                                                        {/* <!--end::Card header--> */}

                                                        {/* <!--begin::Card body--> */}
                                                        <div class="card-body py-5">
                                                            {/* <!--begin::Scroll--> */}
                                                            <div class="mh-450px scroll-y me-n5 pe-5">
                                                                {/* <!--begin::Row--> */}
                                                                <div class="row g-2">
                                                                    {/* <!--begin::Col--> */}
                                                                    <div class="col-4">
                                                                        <a href="#" class="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                                            <img src="../assets/media/svg/brand-logos/amazon.svg" class="w-25px h-25px mb-2" alt=""/>
                                                                            <span class="fw-semibold">AWS</span>
                                                                        </a>
                                                                    </div>
                                                                    {/* <!--end::Col--> */}
                                                                    
                                                                            
                                                                        {/* <!--begin::Col--> */}
                                                                    <div class="col-4">
                                                                        <a href="#" class="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                                            <img src="../assets/media/svg/brand-logos/pinterest-p.svg" class="w-25px h-25px mb-2" alt=""/>
                                                                            <span class="fw-semibold">Pinterest</span>
                                                                        </a>
                                                                    </div>
                                                                    {/* <!--end::Col--> */}
                                                                </div>
                                                                {/* <!--end::Row--> */}
                                                            </div>
                                                            {/* <!--end::Scroll--> */}
                                                        </div>
                                                        {/* <!--end::Card body--> */}
                                                    </div>
                                                    {/* <!--end::Card--> */}
                                                </div>
                                                {/* <!--end::My apps-->        <!--end::Menu wrapper--> */}
                                            </div>
                                            {/* <!--end::My apps links--> */}






                                            {/* <!--begin::Theme mode--> */}
                                            <div class="app-navbar-item ms-1 ms-md-3">
                                                        
                                                {/* <!--begin::Menu toggle--> */}
                                                <a href="#" class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                                    <i class="ki-duotone ki-night-day theme-light-show fs-2 fs-lg-1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span></i>    <i class="ki-duotone ki-moon theme-dark-show fs-2 fs-lg-1"><span class="path1"></span><span class="path2"></span></i></a>
                                                {/* <!--begin::Menu toggle--> */}

                                                {/* <!--begin::Menu--> */}
                                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu">
                                                    {/* <!--begin::Menu item--> */}
                                                    <div class="menu-item px-3 my-0">
                                                        <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
                                                            <span class="menu-icon" data-kt-element="icon">
                                                                <i class="ki-duotone ki-night-day fs-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span></i>            </span>
                                                            <span class="menu-title">
                                                                Light
                                                            </span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Menu item--> */}

                                                    {/* <!--begin::Menu item--> */}
                                                    <div class="menu-item px-3 my-0">
                                                        <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
                                                            <span class="menu-icon" data-kt-element="icon">
                                                                <i class="ki-duotone ki-moon fs-2"><span class="path1"></span><span class="path2"></span></i>            </span>
                                                            <span class="menu-title">
                                                                Dark
                                                            </span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Menu item--> */}

                                                    {/* <!--begin::Menu item--> */}
                                                    <div class="menu-item px-3 my-0">
                                                        <a href="#" class="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
                                                            <span class="menu-icon" data-kt-element="icon">
                                                                <i class="ki-duotone ki-screen fs-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i>            </span>
                                                            <span class="menu-title">
                                                                System
                                                            </span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Menu item--> */}
                                                </div>
                                                {/* <!--end::Menu--> */}

                                            </div>
                                            {/* <!--end::Theme mode--> */}
                                            


                                            {/* <!--begin::User menu--> */}

                                            <div class="app-navbar-item ms-1 ms-md-3" id="kt_header_user_menu_toggle">
                                                {/* <!--begin::Menu wrapper--> */}
                                                <div class="cursor-pointer symbol symbol-30px symbol-md-40px" 
                                                    data-kt-menu-trigger="{default: 'click', lg: 'hover'}" 
                                                    data-kt-menu-attach="parent" 
                                                    data-kt-menu-placement="bottom-end">
                                                    <img src="../assets/media/avatars/300-1.jpg" alt="user"/>
                                                </div>
                                                
                                                {/* <!--begin::User account menu--> */}
                                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
                                                    {/* <!--begin::Menu item--> */}
                                                    <div class="menu-item px-3">
                                                        <div class="menu-content d-flex align-items-center px-3">
                                                            {/* <!--begin::Avatar--> */}
                                                            <div class="symbol symbol-50px me-5">
                                                                <img alt="Logo" src="../assets/media/avatars/300-1.jpg"/>
                                                            </div>
                                                            {/* <!--end::Avatar--> */}

                                                            {/* <!--begin::Username--> */}
                                                            <div class="d-flex flex-column">
                                                                <div class="fw-bold d-flex align-items-center fs-5">
                                                                    Max Smith                    <span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span>
                                                                </div>

                                                                <a href="#" class="fw-semibold text-muted text-hover-primary fs-7">
                                                                    max@kt.com                </a>
                                                            </div>
                                                            {/* <!--end::Username--> */}
                                                        </div>
                                                    </div>
                                                    {/* <!--end::Menu item--> */}

                                                    {/* <!--begin::Menu separator--> */}
                                                    <div class="separator my-2"></div>
                                                    {/* <!--end::Menu separator--> */}

                                                    {/* <!--begin::Menu item--> */}
                                                    <div class="menu-item px-5">
                                                        <a href="../account/overview.html" class="menu-link px-5">
                                                            My Profile
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Menu item--> */}
                                                    
                                                    {/* <!--begin::Menu item--> */}
                                                    <div class="menu-item px-5">
                                                        <a href="../apps/projects/list.html" class="menu-link px-5">
                                                            <span class="menu-text">My Projects</span>
                                                            <span class="menu-badge">
                                                                <span class="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Menu item--> */}

                                                    {/* <!--begin::Menu item--> */}
                                                    <div class="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
                                                        <a href="#" class="menu-link px-5">
                                                            <span class="menu-title">My Subscription</span>
                                                            <span class="menu-arrow"></span>
                                                        </a>

                                                        {/* <!--begin::Menu sub--> */}
                                                        <div class="menu-sub menu-sub-dropdown w-175px py-4">
                                                            {/* <!--begin::Menu item--> */}
                                                            <div class="menu-item px-3">
                                                                <a href="../account/referrals.html" class="menu-link px-5">
                                                                    Referrals
                                                                </a>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}

                                                            {/* <!--begin::Menu item--> */}
                                                            <div class="menu-item px-3">
                                                                <a href="../account/billing.html" class="menu-link px-5">
                                                                    Billing
                                                                </a>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}

                                                            {/* <!--begin::Menu item-->             */}
                                                            <div class="menu-item px-3">
                                                                <a href="../account/statements.html" class="menu-link px-5">
                                                                    Payments
                                                                </a>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}

                                                            {/* <!--begin::Menu item-->             */}
                                                            <div class="menu-item px-3">
                                                                <a href="../account/statements.html" class="menu-link d-flex flex-stack px-5">
                                                                    Statements

                                                                    <span class="ms-2 lh-0" data-bs-toggle="tooltip" title="View your statements">
                                                                        <i class="ki-duotone ki-information-5 fs-5"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i>                    </span>
                                                                </a>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}
                                                            
                                                            {/* <!--begin::Menu separator--> */}
                                                            <div class="separator my-2"></div>
                                                            {/* <!--end::Menu separator--> */}

                                                            {/* <!--begin::Menu item-->             */}
                                                            <div class="menu-item px-3">
                                                                <div class="menu-content px-3">
                                                                    <label class="form-check form-switch form-check-custom form-check-solid">
                                                                        <input class="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications"/>
                                                                        <span class="form-check-label text-muted fs-7">
                                                                            Notifications
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}
                                                        </div>
                                                        {/* <!--end::Menu sub--> */}
                                                    </div>
                                                    {/* <!--end::Menu item--> */}

                                                    {/* <!--begin::Menu item--> */}
                                                    <div class="menu-item px-5">
                                                        <a href="../account/statements.html" class="menu-link px-5">
                                                            My Statements
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Menu item--> */}

                                                    {/* <!--begin::Menu separator--> */}
                                                    <div class="separator my-2"></div>
                                                    {/* <!--end::Menu separator--> */}

                                                    
                                                    {/* <!--begin::Menu item--> */}
                                                    <div class="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
                                                        <a href="#" class="menu-link px-5">
                                                            <span class="menu-title position-relative">
                                                                Language 

                                                                <span class="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                                                                    English <img class="w-15px h-15px rounded-1 ms-2" src="../assets/media/flags/united-states.svg" alt=""/>
                                                                </span>
                                                            </span>
                                                        </a>

                                                        {/* <!--begin::Menu sub--> */}
                                                        <div class="menu-sub menu-sub-dropdown w-175px py-4">
                                                            {/* <!--begin::Menu item--> */}
                                                            <div class="menu-item px-3">
                                                                <a href="../account/settings.html" class="menu-link d-flex px-5 active">
                                                                    <span class="symbol symbol-20px me-4">
                                                                        <img class="rounded-1" src="../assets/media/flags/united-states.svg" alt=""/>
                                                                    </span>
                                                                    English
                                                                </a>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}

                                                            {/* <!--begin::Menu item--> */}
                                                            <div class="menu-item px-3">
                                                                <a href="../account/settings.html" class="menu-link d-flex px-5">
                                                                    <span class="symbol symbol-20px me-4">
                                                                        <img class="rounded-1" src="../assets/media/flags/spain.svg" alt=""/>
                                                                    </span>
                                                                    Spanish
                                                                </a>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}

                                                            {/* <!--begin::Menu item--> */}
                                                            <div class="menu-item px-3">
                                                                <a href="../account/settings.html" class="menu-link d-flex px-5">
                                                                    <span class="symbol symbol-20px me-4">
                                                                        <img class="rounded-1" src="../assets/media/flags/germany.svg" alt=""/>
                                                                    </span>
                                                                    German
                                                                </a>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}

                                                            {/* <!--begin::Menu item--> */}
                                                            <div class="menu-item px-3">
                                                                <a href="../account/settings.html" class="menu-link d-flex px-5">
                                                                    <span class="symbol symbol-20px me-4">
                                                                        <img class="rounded-1" src="../assets/media/flags/japan.svg" alt=""/>
                                                                    </span>
                                                                    Japanese
                                                                </a>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}

                                                            {/* <!--begin::Menu item--> */}
                                                            <div class="menu-item px-3">
                                                                <a href="../account/settings.html" class="menu-link d-flex px-5">
                                                                    <span class="symbol symbol-20px me-4">
                                                                        <img class="rounded-1" src="../assets/media/flags/france.svg" alt=""/>
                                                                    </span>
                                                                    French
                                                                </a>
                                                            </div>
                                                            {/* <!--end::Menu item--> */}
                                                        </div>
                                                        {/* <!--end::Menu sub--> */}
                                                    </div>
                                                    {/* <!--end::Menu item--> */}

                                                    {/* <!--begin::Menu item--> */}
                                                    <div class="menu-item px-5 my-1">
                                                        <a href="../account/settings.html" class="menu-link px-5">
                                                            Account Settings
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Menu item--> */}

                                                    {/* <!--begin::Menu item--> */}
                                                    <div class="menu-item px-5">
                                                        <a href="../authentication/layouts/corporate/sign-in.html" class="menu-link px-5">
                                                            Sign Out
                                                        </a>
                                                    </div>
                                                    {/* <!--end::Menu item--> */}
                                                </div>
                                                {/* <!--end::User account menu--> */}
                                                {/* <!--end::Menu wrapper--> */}
                                            </div>
                                            {/* <!--end::User menu--> */}

                                            {/* <!--begin::Header menu toggle--> */}
                                            <div class="app-navbar-item d-lg-none ms-2 me-n2" title="Show header menu">
                                                <div class="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px" id="kt_app_header_menu_toggle">
                                                    <i class="ki-duotone ki-element-4 fs-1"><span class="path1"></span><span class="path2"></span></i>  
                                                </div>
                                            </div>
                                            {/* <!--end::Header menu toggle--> */}
                                        </div>

                                    </div>
                                    {/* <!--end::Navbar--> */}
                                </div>
                            </div>
                    </div>

                    <div class="app-wrapper flex-column flex-row-fluid " id="kt_app_wrapper">
                    
                    <div id="kt_app_sidebar" class="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">

                                    
                        {/* <!--begin::Logo--> */}
                        <div class="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
                            {/* <!--begin::Logo image--> */}
                            <a href="index.html">
                                            <img alt="Logo" src="assets/media/logos/default-dark.svg" class="h-25px app-sidebar-logo-default"/>
                                
                                <img alt="Logo" src="assets/media/logos/default-small.svg" class="h-20px app-sidebar-logo-minimize"/>
                            </a>
                            {/* <!--end::Logo image--> */}

                            {/* <!--begin::Sidebar toggle--> */}
                            {/* <!--begin::Minimized sidebar setup:
                                if (isset($_COOKIE["sidebar_minimize_state"]) && $_COOKIE["sidebar_minimize_state"] === "on") { 
                                    1. "src/js/layout/sidebar.js" adds "sidebar_minimize_state" cookie value to save the sidebar minimize state.
                                    2. Set data-kt-app-sidebar-minimize="on" attribute for body tag.
                                    3. Set data-kt-toggle-state="active" attribute to the toggle element with "kt_app_sidebar_toggle" id.
                                    4. Add "active" class to to sidebar toggle element with "kt_app_sidebar_toggle" id.
                                }
                            --> */}
                            <div id="kt_app_sidebar_toggle" class="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute top-50 start-100 translate-middle rotate " data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="app-sidebar-minimize">
                                
                                <i class="ki-duotone ki-double-left fs-2 rotate-180"><span class="path1"></span><span class="path2"></span></i>
                            </div>
                            {/* <!--end::Sidebar toggle--> */}
                        </div>
                        {/* <!--end::Logo--> */}

                        {/* <!--begin::sidebar menu--> */}
                        <div class="app-sidebar-menu overflow-hidden flex-column-fluid">
                            {/* <!--begin::Menu wrapper--> */}
                            <div id="kt_app_sidebar_menu_wrapper" class="app-sidebar-wrapper hover-scroll-overlay-y my-5" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer" data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px" data-kt-scroll-save-state="true" style={{"height": 709}}>
                                {/* <!--begin::Menu--> */}
                                <div class="menu menu-column menu-rounded menu-sub-indention px-3" id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false">
                                    {/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item here show menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-element-11 fs-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i></span><span class="menu-title">Dashboards</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link active" href="index.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Default</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="dashboards/ecommerce.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">eCommerce</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="dashboards/projects.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Projects</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="dashboards/online-courses.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Online Courses</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="dashboards/marketing.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Marketing</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}<div class="menu-inner flex-column collapse " id="kt_app_sidebar_menu_dashboards_collapse">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="dashboards/bidding.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Bidding</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="dashboards/pos.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">POS System</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="dashboards/call-center.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Call Center</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="dashboards/logistics.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Logistics</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="dashboards/website-analytics.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Website Analytics</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="dashboards/finance-performance.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Finance Performance</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="dashboards/store-analytics.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Store Analytics</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="dashboards/social.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Social</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="dashboards/delivery.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Delivery</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="dashboards/crypto.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Crypto</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="dashboards/school.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">School</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="dashboards/podcast.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Podcast</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="landing.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Landing</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>
                                    <div class="menu-item">
                                        <div class="menu-content">
                                            <a class="btn btn-flex btn-color-primary d-flex flex-stack fs-base p-0 ms-2 mb-2 toggle collapsible collapsed" data-bs-toggle="collapse" href="#kt_app_sidebar_menu_dashboards_collapse" data-kt-toggle-text="Show Less">
                                                <span data-kt-toggle-text-target="true">Show 12 More</span> <i class="ki-duotone ki-minus-square toggle-on fs-2 me-0"><span class="path1"></span><span class="path2"></span></i><i class="ki-duotone ki-plus-square toggle-off fs-2 me-0"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i>                        
                                            </a>
                                        </div>
                                    </div>                 
                                </div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item pt-5">{/* <!--begin:Menu content--> */}<div class="menu-content"><span class="menu-heading fw-bold text-uppercase fs-7">Pages</span></div>{/* <!--end:Menu content--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-address-book fs-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i></span><span class="menu-title">User Profile</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/user-profile/overview.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Overview</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/user-profile/projects.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Projects</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/user-profile/campaigns.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Campaigns</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/user-profile/documents.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Documents</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/user-profile/followers.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Followers</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/user-profile/activity.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Activity</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-element-plus fs-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></i></span><span class="menu-title">Account</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="account/overview.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Overview</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="account/settings.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Settings</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="account/security.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Security</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="account/activity.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Activity</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="account/billing.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Billing</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="account/statements.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Statements</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="account/referrals.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Referrals</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="account/api-keys.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">API Keys</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="account/logs.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Logs</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-user fs-2"><span class="path1"></span><span class="path2"></span></i></span><span class="menu-title">Authentication</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Corporate Layout</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion menu-active-bg">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/corporate/sign-in.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sign-in</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/corporate/sign-up.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sign-up</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/corporate/two-factor.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Two-Factor</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/corporate/reset-password.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Reset Password</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/corporate/new-password.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">New Password</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Overlay Layout</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion menu-active-bg">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/overlay/sign-in.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sign-in</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/overlay/sign-up.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sign-up</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/overlay/two-factor.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Two-Factor</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/overlay/reset-password.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Reset Password</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/overlay/new-password.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">New Password</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Creative Layout</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion menu-active-bg">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/creative/sign-in.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sign-in</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/creative/sign-up.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sign-up</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/creative/two-factor.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Two-Factor</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/creative/reset-password.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Reset Password</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/creative/new-password.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">New Password</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Fancy Layout</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion menu-active-bg">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/fancy/sign-in.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sign-in</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/fancy/sign-up.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sign-up</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/fancy/two-factor.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Two-Factor</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/fancy/reset-password.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Reset Password</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/layouts/fancy/new-password.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">New Password</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Email Templates</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion menu-active-bg">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/email/welcome-message.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Welcome Message</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/email/reset-password.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Reset Password</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/email/subscription-confirmed.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Subscription Confirmed</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/email/card-declined.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Credit Card Declined</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/email/promo-1.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Promo 1</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/email/promo-2.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Promo 2</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/email/promo-3.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Promo 3</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/extended/multi-steps-sign-up.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Multi-steps Sign-up</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/general/welcome.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Welcome Message</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/general/verify-email.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Verify Email</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/general/coming-soon.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Coming Soon</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/general/password-confirmation.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Password Confirmation</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/general/account-deactivated.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Account Deactivation</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/general/error-404.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Error 404</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="authentication/general/error-500.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Error 500</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item menu-lg-down-accordion menu-sub-lg-down-indention">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-file fs-2"><span class="path1"></span><span class="path2"></span></i></span><span class="menu-title">Corporate</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-2 py-4 w-200px mh-75 overflow-auto">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/about.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">About</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/team.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Our Team</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/contact.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Contact Us</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/licenses.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Licenses</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/sitemap.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sitemap</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-abstract-39 fs-2"><span class="path1"></span><span class="path2"></span></i></span><span class="menu-title">Social</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/social/feeds.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Feeds</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/social/activity.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Activty</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/social/followers.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Followers</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/social/settings.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Settings</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-bank fs-2"><span class="path1"></span><span class="path2"></span></i></span><span class="menu-title">Blog</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion menu-active-bg">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/blog/home.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Blog Home</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/blog/post.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Blog Post</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-chart-pie-3 fs-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i></span><span class="menu-title">FAQ</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion menu-active-bg">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/faq/classic.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">FAQ Classic</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/faq/extended.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">FAQ Extended</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-bucket fs-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i></span><span class="menu-title">Pricing</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion menu-active-bg">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/pricing/column.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Column Pricing</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/pricing/table.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Table Pricing</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-call fs-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></i></span><span class="menu-title">Careers</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/careers/list.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Careers List</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="pages/careers/apply.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Careers Apply</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-color-swatch fs-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span><span class="path21"></span></i></span><span class="menu-title">Utilities</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Modals</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">General</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion menu-active-bg">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/general/invite-friends.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Invite Friends</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/general/view-users.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">View Users</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/general/select-users.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Select Users</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/general/upgrade-plan.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Upgrade Plan</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/general/share-earn.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Share &amp; Earn</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Forms</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion menu-active-bg">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/forms/new-target.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">New Target</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/forms/new-card.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">New Card</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/forms/new-address.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">New Address</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/forms/create-api-key.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create API Key</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/forms/bidding.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Bidding</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Wizards</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion menu-active-bg">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/wizards/create-app.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create App</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/wizards/create-campaign.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create Campaign</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/wizards/create-account.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create Business Acc</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/wizards/create-project.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create Project</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/wizards/top-up-wallet.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Top Up Wallet</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/wizards/offer-a-deal.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Offer a Deal</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/wizards/two-factor-authentication.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Two Factor Auth</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Search</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion menu-active-bg">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/search/users.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Users</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/search/select-location.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Select Location</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Search</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/search/horizontal.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Horizontal</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/search/vertical.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Vertical</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/search/users.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Users</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/search/select-location.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Location</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Wizards</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/wizards/horizontal.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Horizontal</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/wizards/vertical.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Vertical</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/wizards/two-factor-authentication.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Two Factor Auth</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/wizards/create-app.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create App</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/wizards/create-campaign.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create Campaign</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/wizards/create-account.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create Account</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/wizards/create-project.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create Project</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/modals/wizards/top-up-wallet.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Top Up Wallet</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="utilities/wizards/offer-a-deal.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Offer a Deal</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-element-7 fs-2"><span class="path1"></span><span class="path2"></span></i></span><span class="menu-title">Widgets</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="widgets/lists.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Lists</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="widgets/statistics.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Statistics</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="widgets/charts.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Charts</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="widgets/mixed.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Mixed</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="widgets/tables.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Tables</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="widgets/feeds.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Feeds</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item pt-5">{/* <!--begin:Menu content--> */}<div class="menu-content"><span class="menu-heading fw-bold text-uppercase fs-7">Apps</span></div>{/* <!--end:Menu content--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-abstract-41 fs-2"><span class="path1"></span><span class="path2"></span></i></span><span class="menu-title">Projects</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/projects/list.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">My Projects</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/projects/project.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">View Project</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/projects/targets.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Targets</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/projects/budget.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Budget</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/projects/users.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Users</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/projects/files.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Files</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/projects/activity.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Activity</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/projects/settings.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Settings</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-basket fs-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i></span><span class="menu-title">eCommerce</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Catalog</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/ecommerce/catalog/products.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Products</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/ecommerce/catalog/categories.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Categories</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/ecommerce/catalog/add-product.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Add Product</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/ecommerce/catalog/edit-product.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Edit Product</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/ecommerce/catalog/add-category.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Add Category</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/ecommerce/catalog/edit-category.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Edit Category</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sales</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/ecommerce/sales/listing.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Orders Listing</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/ecommerce/sales/details.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Order Details</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/ecommerce/sales/add-order.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Add Order</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/ecommerce/sales/edit-order.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Edit Order</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Customers</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/ecommerce/customers/listing.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Customer Listing</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/ecommerce/customers/details.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Customer Details</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Reports</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/ecommerce/reports/view.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Products Viewed</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/ecommerce/reports/sales.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Sales</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/ecommerce/reports/returns.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Returns</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/ecommerce/reports/customer-orders.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Customer Orders</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/ecommerce/reports/shipping.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Shipping</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/ecommerce/settings.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Settings</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-abstract-25 fs-2"><span class="path1"></span><span class="path2"></span></i></span><span class="menu-title">Contacts</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/contacts/getting-started.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Getting Started</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/contacts/add-contact.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Add Contact</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/contacts/edit-contact.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Edit Contact</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/contacts/view-contact.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">View Contact</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-chart fs-2"><span class="path1"></span><span class="path2"></span></i></span><span class="menu-title">Support Center</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/support-center/overview.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Overview</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion mb-1">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Tickets</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/support-center/tickets/list.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Tickets List</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/support-center/tickets/view.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">View Ticket</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion mb-1">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Tutorials</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/support-center/tutorials/list.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Tutorials List</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/support-center/tutorials/post.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Tutorial Post</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/support-center/faq.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">FAQ</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/support-center/licenses.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Licenses</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/support-center/contact.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Contact Us</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-abstract-28 fs-2"><span class="path1"></span><span class="path2"></span></i></span><span class="menu-title">User Management</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion mb-1">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Users</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/user-management/users/list.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Users List</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/user-management/users/view.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">View User</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Roles</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/user-management/roles/list.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Roles List</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/user-management/roles/view.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">View Role</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/user-management/permissions.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Permissions</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-abstract-38 fs-2"><span class="path1"></span><span class="path2"></span></i></span><span class="menu-title">Customers</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/customers/getting-started.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Getting Started</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/customers/list.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Customer Listing</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/customers/view.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Customer Details</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-map fs-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i></span><span class="menu-title">Subscription</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/subscriptions/getting-started.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Getting Started</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/subscriptions/list.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Subscription List</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/subscriptions/add.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Add Subscription</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/subscriptions/view.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">View Subscription</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-credit-cart fs-2"><span class="path1"></span><span class="path2"></span></i></span><span class="menu-title">Invoice Manager</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">View Invoices</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion menu-active-bg">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/invoices/view/invoice-1.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Invoice 1</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/invoices/view/invoice-2.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Invoice 2</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/invoices/view/invoice-3.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Invoice 3</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/invoices/create.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Create Invoice</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-switch fs-2"><span class="path1"></span><span class="path2"></span></i></span><span class="menu-title">File Manager</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/file-manager/folders.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Folders</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/file-manager/files.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Files</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/file-manager/blank.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Blank Directory</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/file-manager/settings.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Settings</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-sms fs-2"><span class="path1"></span><span class="path2"></span></i></span><span class="menu-title">Inbox</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/inbox/listing.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Messages</span><span class="menu-badge"><span class="badge badge-success">3</span></span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/inbox/compose.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Compose</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/inbox/reply.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">View &amp; Reply</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-message-text-2 fs-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i></span><span class="menu-title">Chat</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/chat/private.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Private Chat</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/chat/group.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Group Chat</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/chat/drawer.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Drawer Chat</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="apps/calendar.html"><span class="menu-icon"><i class="ki-duotone ki-calendar-8 fs-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></i></span><span class="menu-title">Calendar</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item pt-5">{/* <!--begin:Menu content--> */}<div class="menu-content"><span class="menu-heading fw-bold text-uppercase fs-7">Layouts</span></div>{/* <!--end:Menu content--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-element-7 fs-2"><span class="path1"></span><span class="path2"></span></i></span><span class="menu-title">Layout Options</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="layouts/light-sidebar.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Light Sidebar</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="layouts/dark-sidebar.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Dark Sidebar</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="layouts/light-header.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Light Header</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="layouts/dark-header.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Dark Header</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div data-kt-menu-trigger="click" class="menu-item menu-accordion">{/* <!--begin:Menu link--> */}<span class="menu-link"><span class="menu-icon"><i class="ki-duotone ki-text-align-center fs-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i></span><span class="menu-title">Toolbars</span><span class="menu-arrow"></span></span>{/* <!--end:Menu link--> */}{/* <!--begin:Menu sub--> */}<div class="menu-sub menu-sub-accordion">{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="toolbars/classic.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Classic</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="toolbars/saas.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">SaaS</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="toolbars/accounting.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Accounting</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="toolbars/extended.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Extended</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="toolbars/reports.html"><span class="menu-bullet"><span class="bullet bullet-dot"></span></span><span class="menu-title">Reports</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}</div>{/* <!--end:Menu sub--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="layout-builder.html"><span class="menu-icon"><i class="ki-duotone ki-abstract-13 fs-2"><span class="path1"></span><span class="path2"></span></i></span><span class="menu-title">Layout Builder</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item pt-5">{/* <!--begin:Menu content--> */}<div class="menu-content"><span class="menu-heading fw-bold text-uppercase fs-7">Help</span></div>{/* <!--end:Menu content--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/base/utilities" target="_blank"><span class="menu-icon"><i class="ki-duotone ki-rocket fs-2"><span class="path1"></span><span class="path2"></span></i></span><span class="menu-title">Components</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="https://preview.keenthemes.com/html/metronic/docs" target="_blank"><span class="menu-icon"><i class="ki-duotone ki-abstract-26 fs-2"><span class="path1"></span><span class="path2"></span></i></span><span class="menu-title">Documentation</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}{/* <!--begin:Menu item--> */}<div class="menu-item">{/* <!--begin:Menu link--> */}<a class="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog" target="_blank"><span class="menu-icon"><i class="ki-duotone ki-code fs-2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></i></span><span class="menu-title">Changelog v8.1.8</span></a>{/* <!--end:Menu link--> */}</div>{/* <!--end:Menu item--> */}        </div>
                                {/* <!--end::Menu--> */}
                            </div>
                            {/* <!--end::Menu wrapper--> */}
                        </div>
                        {/* <!--end::sidebar menu--> */}

                        {/* <!--begin::Footer--> */}
                        <div class="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6" id="kt_app_sidebar_footer">
                            <a href="https://preview.keenthemes.com/html/metronic/docs" class="btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss-="click" data-bs-original-title="200+ in-house components and 3rd-party plugins" data-kt-initialized="1">

                                <span class="btn-label">
                                    Docs &amp; Components
                                </span>

                                <i class="ki-duotone ki-document btn-icon fs-2 m-0"><span class="path1"></span><span class="path2"></span></i>    </a>
                        </div>
                        {/* <!--end::Footer--> */} 
                        </div>

                        <>{children}</>

                    </div>
                </div>

            </div>
        </div>
    );
}
