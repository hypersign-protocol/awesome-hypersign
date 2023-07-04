# **hack:DiD Submission**
This repository is for the submissions of hack:DiD.

## Overview
Hypersign and Dojima Network teams bring to you, hack:DiD a hackathon that aspires to lead the way into the era of Self-Sovereign Identity (SSI) and Blockchain technology. 



## Submission Guidelines
In order to submit your solution, you need to follow the below steps:

1. Fork this repository
2. Create a new branch with your team name.
3. Add a JSON file with your team name in the `hacks` folder. Refer to the below format.  
   Sample format :
   ```JSON
    {
    "title": "<Enter title of your project>",
    "oneLineDescription": "<Enter a short description of your project>",
    "description": "<Enter a long description of your project>",
    "tags": [
      "<Enter releated tags in quotes separated by comma>"
    ],
    "img": "<Provide a banner link for your project>",
    "projectLink": "<Your Github URL>",
    "contributors": [
      "<Enter list of contributor's github accounts>"
      ]
    }
    ```
    Sample JSON file : name it as `team-<team-name>.json`
    ```JSON
        {
    "title": "DODO Wallet",
    "oneLineDescription": "Web3 Portfolio using DID",
    "description": "Web3 Portfolio using DID, creating crosschain reputation.",
    "tags": [
        "DID", "Web3-Portfolio", "Crosschain"
    ],
    "img": "https://static1.squarespace.com/static/607184f9bbcc3959259c8f85/60718598ae641a273338439c/60ffd6118cc3e7593e9f9375/1627380572731/hypersign-banner.jpg?format=1500w",
    "projectLink": "https://dodo.hypersign.id",
    "contributors": [
        "Lovely",
        "Pratap",
        "Raj",
        "varsha"        
        ]
    }
    ```
4. Submit a Pull Request to this repository with your changes.

### Important points to note

- Make sure to have a unique filename ending with .json extension.
- Make sure to give relevant tags
- Provide Github usernames in the list of contributors