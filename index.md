<section class="site-hero">
  <div class="site-hero-inner">
    <p class="eyebrow">AEM CLI operations port</p>
    <h1>The official local dev CLI, extended for DA-backed delivery work.</h1>
    <p>The fork keeps the trusted <code>aem up</code>, <code>aem import</code>, and <code>aem content</code> workflows intact while adding operational commands for preview, publish, route ownership, index checks, and code-bus inspection.</p>
    <div class="hero-actions">
      <a class="primary" href="/workflow-explorer.html">Open Workflow Explorer</a>
      <a href="/commands.html">View command map</a>
    </div>
  </div>
</section>

<section class="site-section">

## Why this fork exists

AEM CLI already owns the local development loop. The new surface adds the release and troubleshooting loop without forcing existing users into a different binary or mental model.

<div class="grid three">
  <article class="card"><span class="stat">1</span><h3>Same binary</h3><p>All new workflows live under <code>aem</code>, not a competing tool name.</p></article>
  <article class="card"><span class="stat">7</span><h3>New command groups</h3><p>Auth, preview, publish, deploy, route, index, and code are additive top-level modules.</p></article>
  <article class="card"><span class="stat">0</span><h3>Core disruption</h3><p>The existing server, importer, and content workspace commands remain untouched except for command registration.</p></article>
</div>

</section>

<section class="site-section compact">

```sh
$ aem preview page /index --owner somarc --repo aem-cli-eds
https://main--aem-cli-eds--somarc.aem.page/

$ aem publish page /index --commit
Target: somarc/aem-cli-eds#main
```

</section>
