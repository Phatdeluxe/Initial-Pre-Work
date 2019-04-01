# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

I will click the link, then my computer will ask what the IP for that domain is. servers will either know or ask another then the IP will be sent to my computer and my computer will use that to access the server that the ip is located on and the webpage I want will be made available to me

## From start to finish, how does data reach you to be rendered in the browser?

My computer requests a file from a server, the server looks for the file. Once it finds it it sends it back to my computer and my computer displays it in the web browser

## What code is rendered in the browser?

HTML and CSS are rendered in the browser by the Rendering Engine. This takes HTML and CSS code, creates what is called a render tree, then will render the webpage as the code dictates

## What is the server-side code’s main function?

Server-side code is used to choose which content is returned to a browser in response to requests

taken from: https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction

## What is the client-side code’s main function?

The client-side code is used to improve the appearance and behavior of a rendered web page

taken from: https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction

## What is runtime?

According to e.James on stack overflow, "Runtime describes software/instructions that are executed while your program is running, especially those instructions that you did not write explicitly, but are necessary for the proper execution of your code."

taken from: https://stackoverflow.com/questions/3900549/what-is-runtime

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I could not find a definitive answer, but if I had to take a guess, I would assume more than one. It seems like a lot of what people are developing is client-side code, which removes the need to contact the server every time the client wants to make some form of change, and allows for a more dynamic site. Because of this I assume that its more than one so that there are still assets visible to the client while changes are being made to personalize the web page.

## How many instances of the server-side code are available at any given time?

Also had trouble finding a definitive answer to this one, but making a hunch, I would think that only one would be avaliable at a time, otherwise there may be errors trying to retrieve the wrong code, or potentially both at the same time.

## How many instances of the databases connected to the server application are created?

If I understand what I read correctly, it creates as many as it need to fulfill the amount of requests it is receiving. In order to access the data in the database, it need to have an open and available connection with the server. This may result in much more overhead, but I would assume the servers would be created to fulfill those needs.
All this being said, I'm still not entirely sure what the server application is, and what the difference between it and an application server is.
