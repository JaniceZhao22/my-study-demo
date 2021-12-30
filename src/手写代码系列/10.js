const arr = [
    {
      code: '1',
      children: [
        {
          code: '1-1',
          children:[
            {
              code: '1-1-1'
            },
            {
              code: '1-1-2'
            }
          ]
        },
        {
          code: '1-2',
          children:[
            {
              code: '1-2-1'
            },
            {
              code: '1-2-2'
            }
          ]
        }
      ]
    },
    {
      code: '2',
      children: [
        {
          code: '2-1',
          children:[
            {
              code: '2-1-1'
            }
          ]
        },
        {
          code: '2-2',
          children:[
            {
              code: '2-2-1'
            }
          ]
        },
      ]
    },
    {
      code: '3',
      children: [
        {
          code: '3-1',
          children:[
            {
              code: '3-1-1'
            },
            {
              code: '3-1-2'
            }
          ]
        },
        {
          code: '3-2',
          children:[
            {
              code: '3-2-1'
            },
            {
              code: '3-2-2'
            },
          ]
        }
      ]
    }
  ]
  
  const code = '3-2-1'
  let newArr2 = [];
  
  
  function getPath(data, code, newArr) {
    data.forEach(node => {
      newArr.push(node.code)
      if (node.code === code) {
        console.log(newArr)
        return newArr;
      }
      if (node.children) {
        getPath(node.children, code, newArr)
        newArr.pop()
      } else {
        newArr.pop()
      }
    });
  }
  
  const a = getPath(arr, code, newArr2)
  console.log(1111, a);