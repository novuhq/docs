# Echo Terminal Snippet Web Component

The Echo Terminal Snippet can be loaded as a web component via JSDelivr CDN.

The JSDelivr URLs below point to the latest commit in the main branch, ensuring changes to the snippet are automatically deployed to consuming websites.

[See here for more options when testing using JSDelivr](https://www.jsdelivr.com/).

## Usage

The Echo terminal can be loaded via both JS and HTML.

### Loading with Javascript (preferred)
Use this method if you have access to custom JS.

```javascript
// Custom JS injection
!function(e){if(!document.getElementById(e)){var t=document.createElement("script");t.src="https://cdn.jsdelivr.net/gh/novuhq/docs/echo-terminal.min.js",t.type="text/javascript",t.crossOrigin="anonymous",t.id=e;var n=document.getElementsByTagName("script")[0];n?n.parentNode.insertBefore(t,n):document.body.appendChild(t)}}("nv-echo-terminal-loader");
```

```html
<!-- Use the web component in the `<body>` of your Web Page -->
<nv-echo-terminal></nv-echo-terminal>
```

### Loading with HTML
Use this method if you only have access to modify the `<head>` element.

```html
<!-- Load the snippet in the `<head>` -->
<script id="echo-terminal-loader" src="https://cdn.jsdelivr.net/gh/novuhq/docs/echo-terminal.min.js" type="text/javascript" crossorigin="anonymous"></script>

<!-- Use the web component in the `<body>` of your Web Page -->
<nv-echo-terminal></nv-echo-terminal>
```
