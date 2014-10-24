# Markdown blogging with Node.js and Firebase
For the majority of this week I have been focusing on adding a rudimentary blogging engine to my site, allowing me to post updates such as this.

There are many different options out there for blogging, from small but powerful Node.js modules such as [Wheat][] to plugin heavy behemoths like Wordpress. However, since developing this site has partly been a learning exercise, I thought I would have a go at developing my own blogging engine - one that would allow me to customise to my own requirements as I went along.

[Wheat]: https://github.com/creationix/wheat

So where to start?
### Phase 1: A Content directory

First of all, I thought my site would contain a structured content folder along the lines of this:

    [content]
    ->	[my-first-post]
        ->	post.json
        ->	post.markdown

Each post would be in its own seperate folder, corresponding to the link address on the site. Within this folder would be a small json file containing some metadata such as title and date, and there would be the post. This would be a [Markdown][] file, which would allow me to intuitively write posts that get rendered into beautiful HTML.

[Markdown]: http://daringfireball.net/projects/markdown/

Of my fancy Firebase Markdown pusher

This is a little bit more of an expansion to try and test to see if I can get this Jade include thing to work for me.

This also features the use of *Markdown* for, in theory, more intuitive writing of blog entries

An example of some code

    <blockquote>
      <p>For example</p>
    </blockquote>
