# C++ is good, actually
Not many people know, but modern C++ is actually amazing!
Many have stuck with an outdated picture of C++ as something grotesque, unreadable and with horrific syntax. 
They are imagining that in an absence of package manager you need to implement everything from scratch, using only loops, functions and pointers.
And I though that too! But many of those things have changed for good!
![|400](https://www.incredibuild.com/wp-content/uploads/2021/10/The_evolution_of_C_updated_800x533.jpg)

-----------
## deduction
While deduction is certainly limited, you no longer need to write `#lang:cpp std::vector<std::vector<int>> v = another_v`. You can just simply write auto `v = another_v` And when you are passing arguments to the function, you can just use `{{1,2,3}, {}}` and let the compiler figure it out by himself. You can even use auto as function return type! It's certainly not smart enough to figure out what `#lang:cpp auto s = {1,2,3}` means, but it still makes your code *20% prettier* (I counted) and easier to read. 

## std is really great
No, really. Did you know that c++ has set, map, linked list, doubly linked list, stack, queue, priority queue, string view as part of its standard library? More than that, you can use custom file types and custom comparators (something you can't do for python `heapq`, for example). And even if you out of luck and something that you need is missing from c++, you always have a 50 years of c development. I kid you not, `scanf` is one of the most useful functions I've ever used, which basically reads an input, applies an regex to it and binds it to variables. Neat!

## c++ is basically superset of rust
Did you know that you can write completely safe c++? You can just use combination of references/shared/single/weak instead of raw pointers, containers instead of c-style arrays, `for(auto)` loop instead of index based loop, `std::variants` instead of unions (they work exactly as rust Enums!). Do you want borrow checker? You can use `std::move`, and linter will warn you about so-called "use after borrow" mistakes. Sure, you still can very much shoot yourself in a foot, why not, but the very same applies for rust for anything as complex as doubly-linked list.  
## vcpkg is almost a package manager you are used to
[vcpkg](https://vcpkg.io/) can install almost any library you want with several clicks. You still need to use CMake, which is a Turing-complete language by itself BTW, it's still harder than virtually any modern language with central repo and package manager out of the box. You are still in a big trouble if you ever need to compile someone library with 10 github stars and no documentation, but it's far better than it ever was. Well, at least now I can use fmt library to format string like a human being
## sanitizers are a bless
  They can warn you about uninitialized variable. Or out of bounds error. Or use after free. Unfortunately, they are not telling you where it happened - that would be too easy for c++ world - but at least your program crashes instead of silently burning behind the scenes.  
I know realize that I sound like a typical **Stockholm** syndrom victim, but believe me, C++ is not going anywhere. Sometimes in a future modules support would be implemented instead of hideous `#lang:cpp #include` preprocessor macros, and who will be laughing then?  
