### Background
This is a .NET sample project used to showcase swagger json. It has a simple Weather Api and one get method.

### To Setup and Start
Install .NET
```
https://dotnet.microsoft.com/learn/dotnet/hello-world-tutorial/install
```

Navigate to the project folder
```
cd adf-portal/projects/dotnet/WeatherApi/
```

Build the project
```
dotnet build
```

If no errors then below output
```
Microsoft (R) Build Engine version 16.3.0+0f4c62fea for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Restore completed in 775.07 ms for /adf-portal/projects/dotnet/WeatherApi/WeatherApi.csproj.
  WeatherApi -> /adf-portal/projects/dotnet/WeatherApi/bin/Debug/netcoreapp3.0/WeatherApi.dll

Build succeeded.
    0 Warning(s)
    0 Error(s)

Time Elapsed 00:00:05.56
```

Run the project
```
dotnet run
```

Go to browser and navigate to the url
```
http://localhost:4001/swagger/v1/swagger.json
```
