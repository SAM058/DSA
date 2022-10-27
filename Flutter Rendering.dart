class HomePage extends StatelessWidget {
  bool notNull(Object o) => o != null;
  @override
  Widget build(BuildContext context) {
    var condition = true;
    return Scaffold(
      appBar: AppBar(
        title: Text("Provider Demo"),
      ),
      body: Center(
          child: Column(
       
          condition? Text("True"): null,
          Container(
            height: 300,
            width: MediaQuery.of(context).size.width,
            child: Text("Test")
          )
       
      )),
    );
  }
}