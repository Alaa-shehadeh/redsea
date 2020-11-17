'use strict';

function initMap() {

var map;


markers = isRtl ? markersArabic : markersEn

var pointerSun = '<svg class="map_pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.7 50.33"> <path class="pointer_bg" d="M16.35,0A16.35,16.35,0,0,1,32.7,16.35c0,9-16.35,34-16.35,34S0,25.38,0,16.35A16.35,16.35,0,0,1,16.35,0Z" fill="#fff"/> <path d="M3,16.43A13.79,13.79,0,1,1,16.78,30.21,13.78,13.78,0,0,1,3,16.43Z" fill="#297f90"/> <g> <path d="M17.34,13.65V11.88a.81.81,0,0,0-.81-.81.86.86,0,0,0-.8.81v1.77a.81.81,0,1,0,1.61,0Z" fill="#fff"/> <path d="M12.41,12.92a.88.88,0,0,0-1.21,0,.9.9,0,0,0,0,1.22l1.29,1.29a.89.89,0,0,0,.57.24.91.91,0,0,0,.57-.24.88.88,0,0,0,0-1.21Z" fill="#fff"/> <path d="M20.57,12.92l-1.29,1.3a.88.88,0,0,0,0,1.21.85.85,0,0,0,.57.24.86.86,0,0,0,.56-.24l1.29-1.29a.86.86,0,0,0,0-1.21C21.46,12.52,21,12.52,20.57,12.92Z" fill="#fff"/> <path d="M21.62,18.18a.88.88,0,0,0,.81.56.29.29,0,0,0,.24-.08l1.78-.56A1,1,0,0,0,25,17.05,1,1,0,0,0,24,16.48l-1.78.57a.87.87,0,0,0-.58,1.09Z" fill="#fff"/> <path d="M9.18,16.48a.84.84,0,0,0-1,.49.83.83,0,0,0,.49,1l1.69.57c.08,0,.16.08.33.08a1,1,0,0,0,.8-.56A.84.84,0,0,0,11,17.05Z" fill="#fff"/> <path d="M8.05,21.25a.9.9,0,0,0,1.13.48,11.7,11.7,0,0,1,4.61-.81,12.56,12.56,0,0,1,2.5.33c.57.16,1.29.24,2.1.4a19.1,19.1,0,0,0,3.07.24c1,0,1.94-.08,2.91-.16a.86.86,0,0,0-.24-1.7,20.26,20.26,0,0,1-5.5,0,12.89,12.89,0,0,1-2-.4,14.07,14.07,0,0,0-2.82-.4,11.83,11.83,0,0,0-5.25,1,.77.77,0,0,0-.49,1.05Z" fill="#fff"/> <path d="M11.93,19a8.53,8.53,0,0,1,2-.08,14.13,14.13,0,0,1,2.91.41c.56.16,1.21.24,1.93.4.89.08,1.78.16,2.67.16a5,5,0,0,0-4.12-4.76,4.76,4.76,0,0,0-3.71,1.05A5,5,0,0,0,11.93,19Z" fill="#fff"/> </g></svg>'
var pointerPlane = '<svg class="map_pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.7 50.33"> <path class="pointer_bg" d="M16.35,0A16.35,16.35,0,0,1,32.7,16.35c0,9-16.35,34-16.35,34S0,25.38,0,16.35A16.35,16.35,0,0,1,16.35,0Z" fill="#fff"/> <path d="M3,16.43A13.79,13.79,0,1,1,16.78,30.21,13.78,13.78,0,0,1,3,16.43Z" fill="#297f90"/> <path d="M11.71,19.51l-2.46.1a.41.41,0,0,0-.29.14l-.33.34,2.89,1.39,1.4,2.89.33-.33c.1-.1.1-.19.15-.29l.09-2.46,3.67-3.23L20.48,25l.87-.87a.94.94,0,0,0,.24-.62l-.72-8.72,4-4.82a.75.75,0,0,0,.19-.53l.05-.63a.86.86,0,0,0-.92-.91l-.63,0a1,1,0,0,0-.53.2l-4.81,4-8.73-.73a.73.73,0,0,0-.62.24L8,12.52l6.94,3.33Z" fill="#fff"/></svg>'
var pointerHotel = '<svg class="map_pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.7 50.33"> <path class="pointer_bg" d="M16.35,0A16.35,16.35,0,0,1,32.7,16.35c0,9-16.35,34-16.35,34S0,25.38,0,16.35A16.35,16.35,0,0,1,16.35,0Z" fill="#fff"/> <path d="M3,16.43A13.79,13.79,0,1,1,16.78,30.21,13.78,13.78,0,0,1,3,16.43Z" fill="#297f90"/> <path d="M19.42,11.68H17.17V10.31h2.25Zm0,3H17.17V13.29h2.25Zm0,3H17.17V16.27h2.25Zm-4.47-6H12.7V10.31H15Zm0,3H12.7V13.29H15Zm0,3H12.7V16.27H15ZM10.36,8a.36.36,0,0,0-.36.36h0v16.4a.36.36,0,0,0,.36.35h3.92V22.38a1.78,1.78,0,0,1,3.56,0v2.73h3.92a.36.36,0,0,0,.36-.35V8.36A.36.36,0,0,0,21.76,8Z" fill="#fff"/></svg>'

/* custom pin icons  */

var villagePointer =  '<svg  class="map_pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#f6f6f6" d="M666.716 335.229c0 183.12-331.487 685.028-331.487 685.028s-331.487-501.908-331.487-685.028c0-183.075 148.412-331.487 331.487-331.487s331.487 148.412 331.487 331.487v0z"></path><path class="pointer_bg" fill="#297f90" d="M608.84 329.482c0 151.037-122.44 273.477-273.477 273.477s-273.477-122.44-273.477-273.477c0-151.037 122.44-273.477 273.477-273.477s273.477 122.44 273.477 273.477z"></path><path fill="#fff" d="M523.829 155.318c2.776 0.073 5.007 2.304 5.079 5.072v448.049c-0.073 2.776-2.304 5.007-5.072 5.079h-376.806c-2.776-0.073-5.007-2.304-5.079-5.072v-315.721c0.073-2.776 2.304-5.007 5.072-5.079h96.78v-127.248c0.073-2.776 2.304-5.007 5.072-5.079h0.007zM518.75 165.476h-264.788v437.883h101.852v-86.481c0.073-2.776 2.304-5.007 5.072-5.079h50.933c2.776 0.073 5.007 2.304 5.079 5.072v86.488h101.852zM493.22 185.793c2.805 0.069 5.070 2.287 5.212 5.066l0.001 0.013v283.635c-0.143 2.792-2.408 5.010-5.206 5.079h-50.799c-2.805-0.069-5.070-2.287-5.212-5.066l-0.001-0.013v-283.635c0.143-2.792 2.408-5.010 5.206-5.079h0.007zM411.819 185.793c2.776 0.073 5.007 2.304 5.079 5.072v283.642c-0.073 2.776-2.304 5.007-5.072 5.079h-50.933c-2.776-0.073-5.007-2.304-5.079-5.072v-283.642c0.073-2.776 2.304-5.007 5.072-5.079h0.007zM330.284 185.793c2.776 0.073 5.007 2.304 5.079 5.072v283.642c-0.073 2.776-2.304 5.007-5.072 5.079h-50.933c-2.776-0.073-5.007-2.304-5.079-5.072v-283.642c0.073-2.776 2.304-5.007 5.072-5.079h0.007zM488.141 196.085h-40.099v273.343h40.099zM406.74 196.085h-40.768v273.343h40.768zM325.205 196.085h-40.099v273.343h40.099zM243.803 297.803h-91.694v305.556h91.694zM218.273 318.254c2.776 0.073 5.007 2.304 5.079 5.072v150.245c-0.073 2.776-2.304 5.007-5.072 5.079h-40.106c-2.805-0.069-5.070-2.287-5.212-5.066l-0.001-0.013v-150.238c0.143-2.792 2.408-5.010 5.206-5.079h0.007zM213.194 328.412h-30.475v140.080h31.144zM406.74 521.958h-40.768v81.401h40.768zM218.273 532.116c2.776 0.073 5.007 2.304 5.079 5.072v54.408c-0.073 2.776-2.304 5.007-5.072 5.079h-40.106c-2.805-0.069-5.070-2.287-5.212-5.066l-0.001-0.013v-54.401c0.143-2.792 2.408-5.010 5.206-5.079h0.007zM213.194 542.275h-30.475v44.243h31.144z"></path></svg>';
var airportPointer =  '<svg  class="map_pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#f6f6f6" d="M842.872 333.531c0 182.192-329.808 681.558-329.808 681.558s-329.808-499.366-329.808-681.558c0-182.148 147.66-329.808 329.808-329.808s329.808 147.66 329.808 329.808v0z"></path><path class="pointer_bg" fill="#297f90" d="M785.155 327.813c0 150.272-121.819 272.091-272.091 272.091s-272.091-121.819-272.091-272.091c0-150.272 121.819-272.091 272.091-272.091s272.091 121.819 272.091 272.091z"></path><path fill="none" stroke="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="13.1657" d="M546.178 271.028l-129.795-28.725c-3.263-0.547-7.022-0.859-10.855-0.859-18.756 0-35.765 7.482-48.205 19.624l0.014-0.014c26.597 19.815 87.638 61.839 87.638 61.839"></path><path fill="none" stroke="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="13.1657" d="M781.565 252.675s-33.114-89.5-131.657-35.774l-297.492 155.462c-3.42 1.997-7.53 3.176-11.914 3.176-6.488 0-12.372-2.581-16.684-6.772l0.006 0.005c-11.304-9.708-40.827-19.017-59.578-9.708l-19.682 10.772 80.457 76.069c2.996 1.567 6.544 2.486 10.306 2.486s7.311-0.919 10.432-2.545l-0.125 0.059 136.046-60.243-10.772 152.137c26.572-7.152 48.011-25.068 59.734-48.663l0.244-0.542c17.953-39.896 72.611-157.59 72.611-157.59z"></path></svg>';
var islandPointer  =  '<svg  class="map_pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#f6f6f6" d="M842.872 333.531c0 182.192-329.808 681.558-329.808 681.558s-329.808-499.366-329.808-681.558c0-182.148 147.66-329.808 329.808-329.808s329.808 147.66 329.808 329.808v0z"></path><path class="pointer_bg" fill="#297f90" d="M785.155 327.813c0 150.272-121.819 272.091-272.091 272.091s-272.091-121.819-272.091-272.091c0-150.272 121.819-272.091 272.091-272.091s272.091 121.819 272.091 272.091z"></path><path fill="#fff" d="M300.152 535.539c64.681-26.563 139.759-41.983 218.438-41.983 22.321 0 44.351 1.241 66.027 3.658l-2.666-0.241c-7.589 36.845-17.221 68.809-29.331 99.526l1.404-4.041c-0.226 0.576-0.356 1.242-0.356 1.939 0 2.327 1.458 4.314 3.511 5.097l0.037 0.013c0.3 0.062 0.645 0.097 0.997 0.097s0.698-0.035 1.031-0.102l-0.033 0.006c0.036 0.001 0.079 0.001 0.122 0.001 2.219 0 4.121-1.359 4.919-3.291l0.013-0.035c11.038-27.444 20.904-60.261 27.919-94.122l0.674-3.889c48.948 5.874 93.519 18.951 134.599 38.232l-2.676-1.129c0.768 0.439 1.689 0.698 2.669 0.698 2.048 0 3.832-1.129 4.764-2.798l0.014-0.028c0.415-0.74 0.66-1.625 0.66-2.566 0-2.063-1.174-3.852-2.891-4.734l-0.030-0.014c-35.721-17.398-77.175-30.268-120.782-36.445l-2.231-0.259-11.304-1.729c11.134-56.94 19.26-124.57 22.61-193.454l0.13-3.366c45.881 5.054 51.067 53.195 51.2 55.589 0.258 2.129 1.653 3.88 3.552 4.641l0.039 0.014h1.862c0.024 0 0.052 0.001 0.080 0.001 1.523 0 2.903-0.609 3.91-1.597l-0.001 0.001c8.929-8.787 14.462-21.003 14.462-34.51s-5.533-25.723-14.455-34.504l-0.006-0.006c-3.215-3.155-6.892-5.856-10.916-7.989l-0.255-0.123c22.031 3.434 41.155 13.937 55.41 29.076l0.045 0.049c1.053 1.061 2.51 1.72 4.121 1.729h1.598c2.030-0.65 3.534-2.376 3.853-4.491l0.004-0.031c0.365-2.531 0.573-5.454 0.573-8.425 0-31.386-23.232-57.345-53.437-61.621l-0.33-0.038c-2.622-0.376-5.649-0.591-8.727-0.591-5.158 0-10.176 0.603-14.985 1.742l0.44-0.088c10.418-4.949 22.637-7.838 35.531-7.838 9.752 0 19.117 1.653 27.832 4.694l-0.592-0.18c0.609 0.255 1.316 0.403 2.058 0.403 3.011 0 5.452-2.441 5.452-5.452 0-0.67-0.121-1.311-0.342-1.904l0.012 0.038c-8.667-21.61-29.44-36.592-53.712-36.592-7.217 0-14.124 1.325-20.493 3.744l0.397-0.132c-11.935 4.296-21.719 12.146-28.327 22.26l-0.132 0.215c-3.781-12.148-11.205-22.241-20.978-29.276l-0.167-0.114c-9.228-6.478-20.695-10.353-33.066-10.353-19.105 0-36.052 9.24-46.615 23.495l-0.111 0.157c-0.534 0.828-0.851 1.84-0.851 2.926s0.317 2.097 0.864 2.947l-0.013-0.022c0.982 1.687 2.782 2.803 4.843 2.803 0.121 0 0.241-0.004 0.36-0.011l-0.016 0.001c1.395-0.075 3.027-0.118 4.67-0.118 10.907 0 21.371 1.895 31.082 5.373l-0.643-0.201c9.441 3.349 17.549 8.331 24.381 14.669l-0.044-0.041c-6.512-3.85-14.115-6.686-22.216-8.057l-0.391-0.055c-2.76-0.421-5.944-0.661-9.185-0.661-14.313 0-27.529 4.691-38.197 12.619l0.171-0.122c-12.702 9.395-21.504 23.436-23.898 39.568l-0.040 0.328c-0.028 0.212-0.045 0.456-0.045 0.705 0 1.909 0.958 3.595 2.42 4.602l0.019 0.012c0.851 0.531 1.885 0.845 2.992 0.845s2.141-0.315 3.016-0.859l-0.024 0.014c10.85-6.321 23.509-10.973 36.985-13.21l0.65-0.089c3.678-0.607 7.916-0.953 12.235-0.953s8.557 0.347 12.688 1.014l-0.453-0.060c-23.093 4.154-40.386 24.095-40.386 48.074 0 8.556 2.202 16.598 6.070 23.59l-0.127-0.251c0.951 1.679 2.725 2.793 4.76 2.793 0.010 0 0.020 0 0.029 0h-0.002c2.178-0.12 4.007-1.501 4.775-3.421l0.013-0.037c4.084-9.463 9.647-17.54 16.486-24.332l0.004-0.004c9.69-10.045 23.268-16.283 38.304-16.283 4.676 0 9.212 0.603 13.533 1.737l-0.37-0.083c-3.814 72.442-12.309 140.008-25.305 205.957l1.501-9.136c-19.306-2.301-41.667-3.613-64.334-3.613-24.667 0-48.971 1.555-72.819 4.571l2.836-0.293c-16.247-38.274-30.044-83.323-39.178-130.041l-0.718-4.409c40.694-9.708 59.844 30.188 60.642 32.050 0.922 1.846 2.765 3.11 4.91 3.191h0.011c2.199-0.062 4.088-1.328 5.038-3.159l0.015-0.033c2.497-5.408 3.954-11.737 3.954-18.405 0-17.677-10.234-32.964-25.101-40.258l-0.264-0.117c-2.754-1.257-5.994-2.355-9.36-3.125l-0.348-0.067c3.853-0.6 8.298-0.943 12.822-0.943 14.752 0 28.653 3.645 40.85 10.083l-0.478-0.23c0.858 0.504 1.891 0.802 2.992 0.802s2.134-0.298 3.020-0.817l-0.028 0.015c1.366-0.976 2.245-2.556 2.245-4.341 0-0.394-0.043-0.777-0.124-1.147l0.006 0.035c-3.175-15.448-12.281-28.338-24.78-36.437l-0.221-0.134c-8.898-5.912-19.829-9.434-31.582-9.434-4.12 0-8.14 0.433-12.015 1.255l0.377-0.067c-6.161 1.237-11.638 3.31-16.637 6.13l0.28-0.145c13.298-11.547 30.745-18.625 49.844-18.751h0.026c0.012 0 0.026 0 0.040 0 3.011 0 5.452-2.441 5.452-5.452 0-1.317-0.467-2.525-1.244-3.467l0.007 0.009c-8.441-10.225-20.492-17.207-34.176-18.989l-0.268-0.028c-1.495-0.149-3.232-0.234-4.988-0.234-12.777 0-24.502 4.505-33.673 12.012l0.094-0.075c-8.249 6.744-14.358 15.824-17.331 26.228l-0.090 0.37c-6.639-8.541-15.74-14.886-26.231-17.993l-0.366-0.093c-4.476-1.36-9.619-2.143-14.946-2.143-23.686 0-43.756 15.48-50.645 36.875l-0.105 0.377c-0.122 0.429-0.191 0.922-0.191 1.432 0 1.66 0.742 3.147 1.913 4.147l0.008 0.006c0.976 0.854 2.262 1.375 3.67 1.375 0.788 0 1.538-0.163 2.218-0.458l-0.036 0.014c8.783-3.716 18.996-5.876 29.713-5.876 8.386 0 16.463 1.322 24.034 3.77l-0.552-0.154c-1.685-0.167-3.642-0.263-5.621-0.263-4.224 0-8.346 0.435-12.324 1.262l0.391-0.068c-26.589 5.325-46.341 28.484-46.341 56.257 0 4 0.41 7.903 1.189 11.672l-0.064-0.371c0.106 2.371 1.75 4.33 3.953 4.912l0.037 0.008h1.197c0.051 0.002 0.111 0.003 0.17 0.003 1.696 0 3.211-0.774 4.211-1.988l0.007-0.009c11.385-13.655 26.636-23.735 44.066-28.579l0.618-0.147c-2.801 1.945-5.241 4.090-7.416 6.481l-0.031 0.035c-7.205 7.868-11.62 18.396-11.62 29.954 0 13.263 5.813 25.168 15.030 33.306l0.048 0.041c0.985 0.887 2.288 1.438 3.719 1.463h0.005c0.040 0.001 0.086 0.002 0.133 0.002 2.938 0 5.319-2.382 5.319-5.319 0-0.001 0-0.001 0-0.002v0c0.642-9.391 3.027-18.080 6.833-25.954l-0.183 0.421c6.941-14.99 21.057-25.613 37.817-27.508l0.217-0.020c9.745 50.867 23.314 95.658 40.947 138.342l-1.716-4.69c-53.365 7.694-101.404 20.752-146.869 38.885l4.307-1.516c-2.028 0.825-3.432 2.781-3.432 5.064 0 0.714 0.137 1.396 0.387 2.021l-0.013-0.037c0.81 1.967 2.712 3.326 4.932 3.326 0.043 0 0.085-0.001 0.128-0.002h-0.006c0.024 0 0.051 0.001 0.079 0.001 0.738 0 1.443-0.147 2.085-0.413l-0.036 0.013zM617.459 256.266s0 0 0-0.665v0c-0.027 0.12-0.043 0.258-0.043 0.399s0.016 0.279 0.046 0.411l-0.002-0.012zM678.5 332.468c-5.875-25.602-25.472-45.464-50.463-51.634l-0.471-0.098c4.825-2.348 10.497-3.722 16.49-3.724h0.001c10.351 0.092 19.718 4.233 26.607 10.914l-0.010-0.010c7.301 6.944 11.843 16.731 11.843 27.579 0 6.185-1.476 12.026-4.096 17.188l0.1-0.217zM677.702 239.377c23.858 3.34 42.342 22.551 44.536 46.476l0.015 0.202c-16.702-14.489-38.383-23.638-62.173-24.596l-0.198-0.006c-13.676 0.080-26.532 3.515-37.809 9.523l0.44-0.214c3.673-8.79 9.463-16.076 16.751-21.446l0.139-0.098c8.553-6.459 19.364-10.346 31.083-10.346 2.546 0 5.049 0.183 7.497 0.538l-0.279-0.033zM656.291 196.023c4.645-1.77 10.016-2.795 15.627-2.795 0.163 0 0.326 0.001 0.489 0.003h-0.025c0.011 0 0.024 0 0.037 0 7.017 0 13.68 1.518 19.678 4.244l-0.299-0.121c8.018 3.378 14.669 8.661 19.593 15.301l0.089 0.125c-6.112-1.633-13.128-2.572-20.364-2.572-26.175 0-49.483 12.276-64.48 31.385l-0.134 0.178c-0.055-0.846-0.087-1.835-0.087-2.831 0-19.64 12.269-36.414 29.56-43.076l0.316-0.107zM539.395 189.772c6.203-5.21 13.891-8.848 22.342-10.205l0.265-0.035c2.157-0.35 4.643-0.55 7.176-0.55 10.282 0 19.795 3.297 27.538 8.89l-0.138-0.095c11.753 8.391 19.324 21.984 19.324 37.345 0 5.691-1.039 11.139-2.938 16.165l0.104-0.315c-11.912-29.858-40.266-50.722-73.584-51.464l-0.091-0.002zM507.744 255.335c3.657-9.161 9.713-16.716 17.398-22.105l0.156-0.104c8.712-6.482 19.684-10.377 31.565-10.377 2.658 0 5.27 0.195 7.823 0.571l-0.29-0.035c23.209 3.030 41.438 21.033 44.783 43.871l0.034 0.281c-14.549-13.526-34.117-21.827-55.623-21.827-0.596 0-1.19 0.006-1.782 0.019l0.088-0.001c-16.012 0.27-31.149 3.717-44.904 9.735l0.752-0.293zM535.805 313.184c-0.469-2.244-0.737-4.823-0.737-7.464 0-21.079 17.088-38.167 38.167-38.167 3.915 0 7.692 0.589 11.247 1.684l-0.27-0.072c5.728 1.643 10.677 4.44 14.796 8.142l-0.034-0.030c-0.883-0.041-1.918-0.064-2.958-0.064-25.828 0-48.323 14.269-60.032 35.354l-0.179 0.351zM473.7 368.906c-11.282-16.818-29.93-27.939-51.218-28.722l-0.115-0.003h-6.25c3.253-3.092 7.153-5.537 11.473-7.108l0.23-0.073c3.48-1.28 7.499-2.020 11.691-2.020 5.416 0 10.543 1.236 15.115 3.44l-0.208-0.091c11.606 5.513 19.487 17.139 19.487 30.606 0 1.305-0.074 2.593-0.218 3.859l0.014-0.155zM445.506 290.577c2.726-0.593 5.857-0.932 9.067-0.932 0.132 0 0.263 0.001 0.395 0.002h-0.020c9.492 0.058 18.315 2.877 25.718 7.693l-0.185-0.113c7.073 4.667 12.689 11.009 16.368 18.477l0.122 0.274c-9.495-4.159-20.562-6.579-32.193-6.579-22.175 0-42.296 8.797-57.063 23.091l0.022-0.021c1.75-21.034 17.291-37.978 37.478-41.845l0.291-0.046zM413.59 259.724c7.090-5.877 16.281-9.443 26.305-9.443 0.103 0 0.206 0 0.308 0.001h3.974c7.46 0.719 14.212 3.251 19.966 7.145l-0.151-0.096c-8.646 1.412-16.379 3.68-23.68 6.769l0.673-0.253c-19.077 7.544-33.619 23.001-39.764 42.212l-0.132 0.476c-1.756-4.402-2.774-9.503-2.774-14.842 0-12.88 5.925-24.375 15.199-31.91l0.076-0.060zM335.792 285.124v0c-8.271 0.007-16.289 1.074-23.931 3.072l0.659-0.146c3.854-6.005 9.060-10.828 15.208-14.123l0.219-0.107c5.708-3.105 12.499-4.93 19.717-4.93 22.531 0 40.908 17.788 41.853 40.087l0.003 0.085c-12.59-14.703-31.172-23.962-51.916-23.962-0.637 0-1.271 0.009-1.904 0.026l0.093-0.002zM304.806 354.543c1.157-21.604 16.799-39.242 37.334-43.435l0.301-0.051c2.726-0.593 5.857-0.932 9.067-0.932 0.132 0 0.263 0.001 0.395 0.002h-0.020c17.939 0.104 33.509 10.14 41.501 24.884l0.124 0.251c-8.809-3.496-19.015-5.523-29.695-5.523-23.111 0-44.004 9.493-58.994 24.792l-0.014 0.014zM345.5 394.439c-2.659-4.705-4.225-10.331-4.225-16.324 0-8.796 3.375-16.803 8.901-22.798l-0.021 0.023c5.907-6.541 14.248-10.787 23.584-11.3l0.088-0.004h1.995c0.046 0 0.101 0 0.156 0 4.094 0 8.018 0.731 11.647 2.070l-0.233-0.075c-21.607 7.371-37.675 25.605-41.831 48.020l-0.060 0.387z"></path></svg>';
var campPointer    =  '<svg  class="map_pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#f6f6f6" d="M842.872 333.531c0 182.192-329.808 681.558-329.808 681.558s-329.808-499.366-329.808-681.558c0-182.148 147.66-329.808 329.808-329.808s329.808 147.66 329.808 329.808v0z"></path><path class="pointer_bg" fill="#297f90" d="M785.155 327.813c0 150.272-121.819 272.091-272.091 272.091s-272.091-121.819-272.091-272.091c0-150.272 121.819-272.091 272.091-272.091s272.091 121.819 272.091 272.091z"></path><path fill="#fff" d="M726.242 451.358h-426.356c-0.040 0.002-0.088 0.002-0.135 0.002-2.13 0-3.857-1.727-3.857-3.857 0-0.048 0.001-0.095 0.003-0.142v0.007-53.195c0-2.203 1.786-3.99 3.99-3.99v0h426.356c2.174 0.071 3.918 1.815 3.989 3.983v53.202c0 2.203-1.786 3.99-3.99 3.99v0zM303.875 443.379h418.244v-44.418h-418.244z"></path><path fill="#fff" d="M696.32 398.961h-366.645c-0.001 0-0.001 0-0.002 0-2.203 0-3.99-1.786-3.99-3.99 0-0.047 0.001-0.093 0.002-0.14v0.007c0-0.029 0-0.063 0-0.097 0-14.776 1.745-29.145 5.040-42.911l-0.253 1.251c3.323-14.611 7.895-27.434 13.77-39.507l-0.472 1.074c6.521-13.066 13.822-24.32 22.213-34.654l-0.27 0.343c8.499-10.586 17.698-19.953 27.746-28.337l0.314-0.255c9.854-8.032 20.924-15.322 32.704-21.435l1.075-0.507c10.901-5.758 23.588-10.756 36.86-14.329l1.307-0.3c0.278-0.067 0.597-0.105 0.925-0.105 0.9 0 1.733 0.289 2.411 0.778l-0.012-0.008c0.906 0.653 1.539 1.635 1.725 2.768l0.003 0.025 14.629 132.455h55.323l14.762-132.987c0.189-1.158 0.823-2.14 1.716-2.784l0.013-0.009c0.666-0.481 1.499-0.77 2.399-0.77 0.328 0 0.647 0.038 0.953 0.111l-0.028-0.006c40.724 10.839 75.027 33.88 99.712 64.913l0.294 0.383c12.085 15.2 21.996 32.826 28.853 51.907l0.404 1.287c6.656 18.168 10.506 39.145 10.506 61.021 0 0.147 0 0.294-0.001 0.442v-0.023c0 0.006 0 0.014 0 0.021 0 1.133-0.457 2.16-1.197 2.905v0c-0.641 0.866-1.648 1.43-2.788 1.463h-0.005zM333.797 390.583h358.4c-2.11-79.020-55.501-145.016-128.008-166.055l-1.255-0.312-14.629 131.258c-0.209 2.025-1.907 3.591-3.97 3.591-0.007 0-0.014 0-0.021 0h-62.503c-0.042 0.002-0.092 0.003-0.142 0.003-2.037 0-3.706-1.58-3.847-3.581l-0.001-0.012-14.762-131.258c-24.773 7.198-46.272 18.797-64.664 34.018l0.298-0.24c-38.758 31.715-63.65 79.123-64.894 132.381l-0.004 0.207z"></path><path fill="#fff" d="M544.316 359.065h-62.504c-0.042 0.002-0.092 0.003-0.142 0.003-2.037 0-3.706-1.58-3.847-3.581l-0.001-0.012-19.017-167.431c-0.015-0.131-0.023-0.283-0.023-0.437 0-1.858 1.23-3.43 2.92-3.944l0.029-0.008c15.324-4.475 32.928-7.049 51.134-7.049s35.809 2.574 52.468 7.379l-1.334-0.329c1.719 0.469 2.962 2.017 2.962 3.855 0 0.188-0.013 0.373-0.038 0.555l0.002-0.021-18.618 167.431c-0.209 2.025-1.907 3.591-3.97 3.591-0.007 0-0.014 0-0.021 0h0.001zM485.403 351.086h55.323l17.953-160.515c-13.707-3.716-29.445-5.851-45.681-5.851s-31.974 2.135-46.948 6.139l1.267-0.288z"></path><path fill="#fff" d="M396.168 359.065c-0.040 0.001-0.086 0.002-0.133 0.002-2.203 0-3.99-1.786-3.99-3.99 0-0.001 0-0.002 0-0.002v0-100.139c-0.042-0.222-0.066-0.477-0.066-0.737 0-2.277 1.846-4.123 4.123-4.123s4.123 1.846 4.123 4.123c0 0.261-0.024 0.516-0.070 0.763l0.004-0.026v100.139c0 2.203-1.786 3.99-3.99 3.99v0z"></path><path fill="#fff" d="M629.561 359.065c-0.040 0.002-0.088 0.002-0.135 0.002-2.13 0-3.857-1.727-3.857-3.857 0-0.048 0.001-0.095 0.003-0.142v0.007-100.139c0-2.203 1.786-3.99 3.99-3.99s3.99 1.786 3.99 3.99v0 100.139c0.002 0.040 0.002 0.088 0.002 0.135 0 2.13-1.727 3.857-3.857 3.857-0.048 0-0.095-0.001-0.142-0.003h0.007z"></path><path fill="#fff" d="M513.064 257.064c-0.042 0-0.091 0-0.14 0-7.053 0-13.441-2.845-18.080-7.449l0.002 0.002c-4.672-4.609-7.566-11.010-7.566-18.086s2.894-13.477 7.563-18.083l0.003-0.003c4.638-4.603 11.026-7.448 18.079-7.448 0.049 0 0.099 0 0.148 0h-0.008c7.086 0.066 13.499 2.893 18.227 7.455l-0.008-0.008c4.607 4.638 7.455 11.030 7.455 18.086s-2.848 13.448-7.456 18.088l0.001-0.001c-4.72 4.555-11.133 7.381-18.206 7.447h-0.013zM513.064 213.976c-9.638 0.075-17.421 7.906-17.421 17.554 0 9.695 7.859 17.554 17.554 17.554s17.554-7.859 17.554-17.554v0c-0.075-9.711-7.965-17.554-17.687-17.554 0 0 0 0-0.001 0v0z"></path><path fill="#fff" d="M513.064 425.558h-212.779c-1.938-0.362-3.385-2.040-3.385-4.056s1.447-3.694 3.36-4.052l0.026-0.004h212.779c1.938 0.362 3.385 2.040 3.385 4.056s-1.447 3.694-3.36 4.052l-0.026 0.004z"></path></svg>';
var nurseyPointer  =  '<svg  class="map_pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#f6f6f6" d="M842.872 333.531c0 182.192-329.808 681.558-329.808 681.558s-329.808-499.366-329.808-681.558c0-182.148 147.66-329.808 329.808-329.808s329.808 147.66 329.808 329.808v0z"></path><path class="pointer_bg" fill="#297f90" d="M785.155 327.813c0 150.272-121.819 272.091-272.091 272.091s-272.091-121.819-272.091-272.091c0-150.272 121.819-272.091 272.091-272.091s272.091 121.819 272.091 272.091z"></path><path fill="#fff" d="M507.079 544.449v49.338c0 3.305 2.679 5.984 5.984 5.984s5.984-2.679 5.984-5.984v-49.338c84.337-4.716 150.94-74.255 150.94-159.35 0-0.082 0-0.165 0-0.247v0.013c0-50.934-25.799-110.911-76.734-178.469-24.158-31.941-49.087-60.244-75.946-86.587l-0.123-0.12c-1.092-1.028-2.567-1.659-4.189-1.659s-3.097 0.632-4.192 1.662l0.003-0.003c-6.117 5.984-152.669 148.679-152.669 264.511-0.002 0.267-0.003 0.583-0.003 0.899 0 85.096 66.605 154.636 150.527 159.332l0.416 0.019zM415.717 253.739l91.362 85.644v123.412l-131.923-123.678c10.496-32.538 24.26-60.813 41.37-86.679l-0.809 1.302zM651.104 338.851l-132.056 123.944v-123.412l92.16-86.708c16.305 24.787 29.88 53.369 39.263 83.789l0.634 2.386zM519.048 531.948v-53.195l135.381-127.003c2.151 9.574 3.407 20.585 3.458 31.881v0.036c0.004 0.424 0.007 0.926 0.007 1.428 0 78.334-61.237 142.365-138.45 146.834l-0.395 0.018zM605.091 242.701l-85.511 79.792v-181.793c-0.004-1.482-0.558-2.834-1.468-3.863l0.005 0.006c31.481 31.675 60.090 66.28 85.357 103.346l1.616 2.512zM513.064 132.987l3.724 3.591c-1-0.859-2.293-1.402-3.711-1.462h-0.013c-1.197 0.075-2.29 0.461-3.216 1.079l0.024-0.015zM507.877 138.306c-0.503 0.772-0.802 1.717-0.802 2.731 0 0.068 0.001 0.136 0.004 0.204v-0.010 182.192l-84.713-79.792c26.734-39.566 54.857-74.151 85.718-106.074l-0.208 0.216zM371.832 352.416l135.248 126.338v53.195c-77.643-4.618-138.86-68.712-138.86-147.105 0-11.495 1.316-22.684 3.807-33.422l-0.194 0.994z"></path></svg>';
	

function pointerBuilder({id, type, active, title}) {
	
	var svg = '';
		switch (type) {
			case 'island':
				svg = islandPointer;
				break;
			case 'airport':
				svg = airportPointer;
				break;
			case 'village':
				svg = villagePointer;
				break;
			case 'camp':
				svg = campPointer;
				break;
			case 'nursery':
				svg = nurseyPointer;
				break;
		}
	
	var activeMod = active && (window.innerWidth > 1024) ? 'active_mod' : ''
	return `<div class="map_pointer_wrap ${activeMod}" data-id=${id}><div class="map_line"></div>${svg}</div>`
}

	var mapEl = document.getElementById("map");

	var myOptions = {
		zoom: 11,
		center: {lat: 25.5, lng: 36.9},
		mapTypeId: 'hybrid',
		disableDefaultUI: false,
	}

	function initMarkers(array, map) {
		var i;

    for (i = 0; i < array.length; i++) {  
			const marker = createHTMLMapMarker({
				latlng: new google.maps.LatLng(array[i].lat, array[i].lng),
				map: map,
				html: pointerBuilder(array[i])
			});
		}
	}


	if(mapEl !== null) {
		map = new google.maps.Map(mapEl,
		myOptions);
	
		initMarkers(markers, map, pointerSun)
	}

}
