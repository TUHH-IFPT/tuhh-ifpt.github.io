---
home: true
heroImage: /ifpt.png
heroText: null
tagline: null
footer: <p>✈ visit us @<a href="https://www.tuhh.de/ifpt/">www.tuhh.de/ifpt/</a></p><p>⚖ <a href="/imprint</p>html">imprint</a>
footerHtml: true
---

:::::: center
# `{ tuhh-ifpt.github.io }`

*public development resource namespace of **Institute of Aircraft Production Technology***

---

### examples
::::: code-group
:::: code-group-item k8s
```yaml{4,6}
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: '{kind}.tuhh-ifpt.github.io'
spec:
  group: 'tuhh-ifpt.github.io'
  # ...
  names:
    plural: '{kind}s'
    singular: '{kind}'
    kind: '{kind.camel-case}'
```
::::

:::: code-group-item yaml

```yaml{2}
---
!<tag:tuhh-ifpt.github.io,2022:{my}/{tag}> "{data}"
---
```

::::

:::: code-group-item xml

```xml{5}
<xs:schema 
   xmlns="http://www.w3.org/2001/XMLSchema" 
   xmlns:xs="http://www.w3.org/2001/XMLSchema-datatypes" 
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xmlns:myschema="https://tuhh-ifpt.github.io/{schema}"
   version="1.0">
</xs:schema>
```

::::

:::::

::::::
