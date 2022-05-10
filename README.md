# [`{ tuhh-ifpt.github.io }`](https://tuhh-ifpt.github.io)

*public development resource namespace of **Institute of Aircraft Production Technology***

## examples
```yaml
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

```yaml
---
!<tag:tuhh-ifpt.github.io,2022:{my}/{tag}> "{data}"
---
```

```xml
<xs:schema 
   xmlns="http://www.w3.org/2001/XMLSchema" 
   xmlns:xs="http://www.w3.org/2001/XMLSchema-datatypes" 
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xmlns:myschema="https://tuhh-ifpt.github.io/{schema}"
   version="1.0">
</xs:schema>
```
