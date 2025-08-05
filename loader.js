(async () => {
    const res = await fetch("http://localhost:3000/secure-js"); // update this URL if you host the proxy
    if (res.ok) {
      const js = await res.text();
      const script = document.createElement("script");
      script.textContent = js;
      document.head.appendChild(script);
    } else {
      console.error("Failed to load secure JS:", res.statusText);
    }
  })();