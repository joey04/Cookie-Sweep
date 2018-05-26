async function sweepCookies()
{
  return await Promise.all([
      browser.storage.local.get("domains"),
      browser.cookies.getAll({}),
  ])
  .then( items =>
      {return {
          domains: items[0].domains,
          cookies: items[1]
      }},
      (error => console.log(`Failed to read config or cookies: ${error}`))
  )
  .then( items => {
      let domains = items.domains.split(",").map(d => d.trim()),
          keepCnt = 0,
          deleteCnt = 0;

      for (let cookie of items.cookies) {
          let keepIt = false;
          for (let d of domains) {
              if (cookie.domain === d || cookie.domain.endsWith('.' + d)) {
                  keepIt = true;
                  keepCnt++;
                  break;
              }
          }
          if (!keepIt) {
              try {
                  browser.cookies.remove({
                      url: "http://" + cookie.domain + cookie.path,
                      name: cookie.name
                  });
              } catch (e) {}
              try {
                  browser.cookies.remove({
                      url: "https://" + cookie.domain + cookie.path,
                      name: cookie.name
                  });
              } catch (e) {}
              deleteCnt++;
          }
      }
      return { kept: keepCnt, removed: deleteCnt };
    });
}
