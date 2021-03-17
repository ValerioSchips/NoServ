# **NoServConnectFramework**
## Setup
---

#### Connector
```
  var dbClientConnector : Connector = Connector()
```

#### Connect to host
```
  do{
      try dbClientConnector.client.start(host: host, port: 12345)
  }catch{
  }
```

## Requests
---
#### User
```
  dbClientConnector.user.addUser(email: String, password: String, name: String?, surname: String?, callback: (_ response: Response)->Void)->String

  dbClientConnector.user.logIn(email: String, password: String, callback: (_ response: Response)->Void)->String

  dbClientConnector.user.rmUser(email: String, password: String, callback: (_ response: Response)->Void)->String

  dbClientConnector.user.logOut(callback: (_ response: Response)->Void)->String
```

#### Data
```
  dbClientConnector.dataU.addNode(childs: [String], data: [String: AnyObject], callback: (_ response: Response)->Void)->String

  dbClientConnector.dataU.delNode(childs: [String], callback: (_ response: Response)->Void)->String

  dbClientConnector.dataU.delRoot(callback: (_ response: Response)->Void)->String

  dbClientConnector.dataU.getNode(childs: [String], callback: (_ response: Response)->Void)->String
```

## Response

You can choose two method to get replies from server the easier is using a callback function given as a parameter on request. Otherwise you can create a class which implements the ServerReceiver protocol and would receive server's replies.

---
#### Callback
```
  dbClientConnector.dataU.addNode(childs: [""], data: ["":""], callback: {
      response in
        response.serverMessage //String
        response.data //[String: AnyObject]
        response.success //Bool
        response.requestID //String
    })
```
#### ServerReceiver

Implements ServerReciever Protocol.
```
  public class ResponseReciever: ServerReceiver{
    public func received(serverMessage: String, data: [String : AnyObject], success: Bool, requestID: String) {

    }
  }
```

Create an instance of ResponseReciever and setup the Connector.
```
  let rec = ResponseReciever()
  dbClientConnector.setReceiver(rec: rec)
```

Each time you make a request the method will return a requestID. So you can match the request with the response.
```
  let reqIdDelRoot = dbClientConnector.dataU.delRoot()

    ...

    public func received(serverMessage: String, data: [String : AnyObject], success: Bool, requestID: String) {
      if requestID == reqIdDelRoot {
        ...
      }
    }

```
