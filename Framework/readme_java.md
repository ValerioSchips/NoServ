# **NoServConnectFrameworkJava**
## Setup
---
Add NoServConnectFrameworkJava library.

#### Import:
```
  import NoServConnectFrameworkJava.Connector;
```

#### Connector
Create a Connector which will let you to communicate with the Server.
```
  Connector connector = new Connector();
```

#### Connect to host
```
  connector.client.start(HOST, PORT);
```

## Requests
---
#### User
```
  connector.user.addUser(String email, String password, String name, String surname, RequestCallback callback);

  connector.user.logIn(String email, String password, RequestCallback callback);

  connector.user.rmUser(String email, String password, RequestCallback callback);

  connector.user.logOut(RequestCallback callback);
```

#### Data
```
  connector.dataU.addNode(String[] childs, Map<String, Object> data, RequestCallback callback);

  connector.dataU.delNode(List<String> childs, RequestCallback callback);

  connector.dataU.delRoot(RequestCallback callback);

  connector.dataU.getNode(String[] childs, RequestCallback callback);
```

## Response

---
#### Callback

Create a Class which implements RequestCallback Interface.
```
public class CB implements RequestCallback {
  @Override
  public void callback(Response response) {
      response.getServerMessage();  //String
      response.getRequestID();      //String
      response.getSuccess();        //Bool
      response.getData();           //Map<String, Object>
  }
}
```

```
connector.dataU.delRoot(new CB());
```
