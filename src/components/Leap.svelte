<script>
    import { onMount, onDestroy } from "svelte";
    let currentIndex = 0;
    let locations =
    [

    {
        "title": "Kerala Startup Mission- Kozhikode",
        "address":"Govt.Cyberpark, Nellikode P.O, Kozhikode",
        "poc":"Kavya K S",
        "email":"kavya@startupmission.in",
        "phone":"+919072702096",
        "image": "1.png"
    },
    {
        "title": "Kerala Startup Mission- Kozhikode",
        "address":"2nd Floor, UL CyberPark Rd, Nellikkode, Kozhikode",
        "poc":"Kavya K S",
        "email":"kavya@startupmission.in",
        "phone":"+919072702096",
        "image": "2.png"
    },

    {
        "title": "Kerala Startup Mission- Kochi",
        "address":"Kerala Technology Innovation Zone, Kinfra Hi-Tech Park, HMT Colony, P.O, Kalamassery, Kochi",
        "poc":"Rahul Shah",
        "email":"s.rahul@startupmission.in",
        "phone":"7403180193",
        "image": "3.png"
    }, 
    {
        "title": "Kerala Startup Mission- Trivandum",
        "address":"G3B, Thejaswini, Technopark Campus, Kariyavattom, Trivandrum",
        "poc":"Krishnakumar M",
        "email":"krishnakumar@startupmission.in",
        "phone":"9961822685",
        "image": "4.png"
    },
    {
        "title": "Startup Dreams - Trivandum",
        "address":"1st floor, Ambedkar Bhavan, Mannanthala, Trivandrum",
       "poc":"Krishnakumar M",
        "email":"krishnakumar@startupmission.in",
        "phone":"9961822685",
        "image": "5.png"
    },
    {
        "title": "Kerala Startup Mission- Kasargod",
        "address":"ASAP Community Skill park, Kasaragod",
        "poc":"Kavya K S",
        "email":"kavya@startupmission.in",
        "phone":"+919072702096",
        "image": "7.png"
    },
    {
        "title": "Kerala Startup Mission- Palakkad ",
        "address":"GPTC Palakkad",
       "poc":"Rahul Shah",
        "email":"s.rahul@startupmission.in",
        "phone":"7403180193",
        "image": "6.png"
    },
    {
        "title": "Kerala Startup Mission- Kollam",
        "address":"ASAP Community Skill park, Kulakada, Kollam",
        "poc":"Krishnakumar M",
        "email":"krishnakumar@startupmission.in",
        "phone":"9961822685",
        "image": "8.png"
    },
    {
        "title": "",
        "address":"",
        "poc":"",
        "email":"",
        "phone":"tvm",
        "image": "1.png"
    },
    {
        "title": "",
        "address":"",
        "poc":"",
        "email":"",
        "phone":"tvm",
        "image": "1.png"
    }
    
 ];
 

  </script>
 
 
 <div id="default-carousel" class=" relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative gap-4 h-[450px] overflow-hidden rounded-lg">
         <!-- Item 1 -->
         <a href="" target="_blank" class="z-40">
            <h1 class=" text-white p-4 font-semibold ">Find Perfect Stays and Unmissable Sights Close to the Venue!</h1>
        </a>
         {#each locations as location, index}
            <div class="hidden duration-700 px-4 ease-in-out md:w-1/2 h-[400px]" data-carousel-item>
                <img src="img/leap/{location.image}"  class=" rounded-3xl absolute object-cover p-4 flex h-[300px] w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                <div class=" absolute  -bottom-10 left-0  bg-opacity-80 p-4 pb-0 w-full">
                    <h2 class="text-lg text-white font-semibold pt-1">{location.title}</h2>
                    
                    <a href="" target="_blank" class="text-white text-sm hover:underline">View More</a>
                </div>
            </div>
        {/each}
    </div>
  </div>
 
 
 
 
 
 