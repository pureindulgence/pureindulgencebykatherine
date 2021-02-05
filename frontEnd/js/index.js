Vue.component('header-component', {
  template: `<nav class=" shadow">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 m-2">
      <div class="relative flex justify-between menu_options h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          
          <button id="burger-menu"  class="inline-flex  float-right p-2 rounded-md focus:outline-none " aria-expanded="false">
            <span class="sr-only">Open main menu</span>
        
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <div id="flyout-menu" class=" px-4 py-4 off rounded-b-md absolute mt-10 flyout-menu">
            <ul >
            <li class="px-2 py-2"> 
            
            <img src="misc/pi_logo.png" class="test-pink-700 w-20" alt="Pure Indulgence by Katherine">
             
            
            </li>
            <li class="px-2 py-2"> 
            <a href="index.html" id="home1" class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Home
          </a></li>
            <li class="px-2 py-2"> <a href="About_us.html" id="About_us1" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2  text-sm font-medium">
            About Us
           </a></li>
            <li class="px-2 py-2"><a href="Contact_us.html" id="Contact_us1" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  border-b-2 text-sm font-medium">
            Contact US
           </a></li>
            <li class="px-2 py-2"> <a href="gifting.html" id="gifting1" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Gifting
          </a></li>
            <li class="px-2 py-2"><a href="login.html" id="login1" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  border-b-2 text-sm font-medium">
            Login
          </a></li>
            </ul>
            </div>
          </button>
        </div>
        
        <div class="logo_container absolute inset-y-0 flex items-center  pr-2 mr-20 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden sm:ml-6 sm:flex sm:space-x-8">
        <img src="misc/pi_logo.png" class="test-pink-700 w-20" alt="Pure Indulgence by Katherine">
         
        </div>
      
          
  
         
          
            <div class="flex-1 flex items-end  right-0 sm:items-stretch  ml-50">
              <div class="flex-shrink-0 flex items-center">
                
              </div>
              <div class="hidden sm:ml-6 sm:flex sm:space-x-8 ">
              <a href="index.html" id="home" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2  text-sm font-medium">
              Home
            </a>
              <a href="About_us.html" id="About_us" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2  text-sm font-medium">
               About Us
              </a>
              <a href="Contact_us.html" id="Contact_us" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  border-b-2 text-sm font-medium">
               Contact US
              </a>
              <a href="gifting.html" id="gifting" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Gifting
            </a>
              <a href="login.html" id="login" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1  border-b-2 text-sm font-medium">
                Login
              </a>
       
            
          </div>
          </div>
       
      </div>
    </div>
  
    
    <div class="hidden sm:hidden">
      <div class="pt-2 pb-4 space-y-1">
        
        <a href="#" class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Dashboard</a>
        <a href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Team</a>
        <a href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Projects</a>
        <a href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Calendar</a>
      </div>
      </div>
      </div>
  </nav>`,
})

// <img src="../Pure-Indulgence-by-Katherine-Logo.png" id="logo" class="pr-96 pl-10 " alt="Girl in a jacket" >
//Register Page header component
Vue.component('footer-component', {
  template: `<footer class="mt-16 ">
    <div class="border-t md:px-4 md:pt-10 md:pb-5">
      <div class="flex flex-wrap md:max-w-screen-lg mx-auto">
        <section
          class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
        >
          <div class="md:hidden">
            <button
              onclick="toggleFooterSection(event)"
              class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
              type="button"
            >
              
            </button>
          </div>
          <a
            class="uppercase text-xs font-bold tracking-wider text-pink-700 hidden md:block"
            href="#"
          >
            Categories
          </a>
          <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
            <ul class="my-5 text-sm tracking-wide">
              <li class="my-3 tracking-wide">
                <a href="#">Fusce vel sem</a>
              </li>
              <li class="my-3 tracking-wide">
                <a href="#">Ut venenatis tellus</a>
              </li>
              <li class="my-3 tracking-wide">
                <a href="#">Vestibulum</a>
              </li>
              <li class="my-3 tracking-wide">
                <a href="#">Nunc at ipsum</a>
              </li>
            </ul>
          </article>
        </section>
        <section
          class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
        >
          <div class="md:hidden">
            <button
              onclick="toggleFooterSection(event)"
              class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
              type="button"
            >
              Helpful Links
            </button>
          </div>
          <a
            class="uppercase text-xs font-bold tracking-wider text-pink-700 hidden md:block"
            href="#"
          >
            Connect With Us
          </a>
          <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
            <ul class="my-5 text-sm tracking-wide">
              <li class="my-3 tracking-wide">
                <a href="https://www.facebook.com/PureIndulgencebyKatherine/" class=" hover:text-pink-900 "><i class="fab fa-facebook-f pr-1"></i> Facebook</a>
              </li>
              <li class="my-3 tracking-wide">
                <a href="https://instagram.com/pureindulgencebykatherine?igshid=1ppqx2zsvvngb" class=" hover:text-pink-900 "><i class="fab fa-instagram pr-1"></i>Instagram</a>
              </li>
              <li class="my-3 tracking-wide">
                <a href="tel:+16476756746" class=" hover:text-pink-900 "><i class="fas fa-phone-alt pr-1  "></i>+1-(647)-675-6746</a>
              </li>
              <li class="my-3 tracking-wide">
              <a href="https://api.whatsapp.com/send?phone=+16476756746" class=" hover:text-pink-700 "><i class="fab fa-whatsapp pr-1"></i>Whatsapp</a>
            </li>
              
            </ul>
          </article>
        </section>
        
        <section
          class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
        >
          <div class="md:hidden">
            <button
              onclick="toggleFooterSection(event)"
              class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
              type="button"
            >
              Quisque
            </button>
          </div>
          <a
            class="uppercase text-xs font-bold tracking-wider text-pink-700 hidden md:block"
            href="#"
          >
            Quisque
          </a>
          <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
            <ul class="my-5 text-sm tracking-wide">
              <li class="my-3 tracking-wide">
                <a href="#">Finibus nulla eget</a>
              </li>
              <li class="my-3 tracking-wide">
                <a href="#">Pellentesque</a>
              </li>
              <li class="my-3 tracking-wide">
                <a href="#">Duis efficitur</a>
              </li>
              <li class="my-3 tracking-wide">
                <a href="#">Cras at lacus</a>
              </li>
            </ul>
          </article>
        </section>
     
      <section
      class="relative text-gray-700 font-light font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
    >
      <div class="flex flex-wrap md:max-w-screen-lg mx-auto">
      <img src="../misc/Pure Indulgence by Katherine Logo.png" alt="Girl in a jacket" class="w-16 md:w-32 lg:w-48">
      </div>
      </section>
      </div>
    </div>
    <div class="absolute right-0">
    <a onclick="scroll_top()" class="items-end"><i class="fas fa-chevron-circle-up text-4xl hover:text-lg"></i></a>
    </div>
    <div class="max-w-screen-lg mx-auto border-none px-4">
      <section
        class="flex flex-col md:flex-row md:justify-between md:border-solid md:border-t text-gray-700 font-light text-sm pt-4 pb-6 md:pt-5 md:pb-6 w-full"
      >
        <div>
          <p class="leading-8 tracking-wide">
            &copy; Yonge-Eglington, Toronto, ON, Canada
          </p>
        </div>
        <div>
          <p class="leading-8 tracking-wide">Privacy Policy</p>
        </div>
      </section>
    </div> 
    </footer>`,

});


new Vue({
  el: '#app',
  data: { isVisible: false },
  methods :{
    
  }
})



  // <div class="logo_container absolute inset-y-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
  //         <p class = "pl-30 pr-40">Pure Indulgence by katherine</p>
  //         <img class="w-30 h-50" src="../Pure Indulgence by Katherine Logo.png" alt="Girl in a jacket" >
  //       </div>



  var element = document.getElementById('app')

         function scroll_top () {
      element.scrollIntoView({behavior: "smooth", block: "start"});
    }


    var burger_menu = document.getElementById('burger-menu');
    var e = document.getElementById('flyout-menu');
    burger_menu.onclick = function() {
       
        e.classList.toggle('off');
    }

  //   burger_menu.onblur = function() {
      
  //     e.classList.toggle('off');
  // }

  
  