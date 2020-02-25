(function(d) {
  d.addEventListener('DOMContentLoaded', (e) => {
    /* start remove hash from links */
    const removeEmptyLinks = () => {
      d.querySelectorAll('a[href="#"]').forEach(link => {
        link.removeAttribute('href');
      })
    };

    if (d.querySelectorAll('a[href="#"]').length) removeEmptyLinks();
    else setTimeout(removeEmptyLinks, 200);
    /* end remove hash from links */
  });
})(document);



