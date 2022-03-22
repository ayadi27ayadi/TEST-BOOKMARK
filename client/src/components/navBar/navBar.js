import React from 'react';
class navBar extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
          
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
<div className="container flex flex-wrap justify-between items-center mx-auto">
<a href="https://flowbite.com" className="flex items-center">
<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Bookmark</span>
</a>
<div className="hidden w-full md:block md:w-auto" id="mobile-menu">
<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
<li>
<a href="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
</li>
<li>
<a href="/register" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign up</a>
</li>
<li>
<a href="/login" className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign in</a>
</li>
</ul>
</div>
</div>
</nav>

      );
    }
}



export default navBar;