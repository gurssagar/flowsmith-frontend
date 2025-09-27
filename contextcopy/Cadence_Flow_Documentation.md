**Cadence Flow Documentation**

**Introduction to Cadence**

In a blockchain environment like Flow, programs that are stored and executed onchain are referred to as smart contracts. A smart contract programmatically verifies and executes the performance of a contract without the need for a trusted third party. Many people think of it as code-as-law.

They control and execute important functionality such as the creation and management of currency, buying and selling of digital property, and the execution of contractual agreements without having to rely on a central authority (like a bank).

All of this happens on the same shared computer that anyone can use and no one can shut down or exercise admin control.

**A new programming language**

Cadence is a resource-oriented programming language that introduces new features to smart contract programming, which help developers ensure that their code is safe, secure, clear, and approachable. Some of these features are:

- Type safety and a strong static type system.
- Resource-oriented programming — a new paradigm that pairs linear types with object capabilities to create a secure and declarative model for digital ownership by ensuring that resources (which are used to represent scarce digital assets) can only exist in one location at a time, cannot be copied, and cannot be accidentally lost or deleted.
- Built-in pre-conditions and post-conditions for functions and transactions.
- The utilization of capability-based security, which enforces that access to objects is restricted to only the owner of the object and those who have a valid reference to it. This is Cadence's main form of access control.

Cadence’s syntax is inspired by popular modern general-purpose programming languages like [Swift](https://developer.apple.com/swift/), [Kotlin](https://kotlinlang.org/), and [Rust](https://www.rust-lang.org/). Its use of resource types maps well to that of [Move](https://medium.com/coinmonks/overview-of-move-programming-language-a860ffd8f55d), the programming language used by Aptos and Sui, though Flow provides greater fine-grained permission control with Capabilities.

**Cadence's programming language pillars**

Cadence, a new high-level programming language, observes the following requirements:

- Safety and security: Safety is the underlying reliability of any smart contract (i.e., it’s bug-free and performs its function). Security is the prevention of attacks on the network or smart contracts (i.e., unauthorized actions by malicious actors). Safety and security are critical in smart contracts because of the immutable nature of blockchains and because they often deal with high-value assets. While auditing and reviewing code will be a crucial part of smart contract development, Cadence maximizes efficiency while maintaining the highest levels of safety and security at its foundation. It accomplishes this via a strong static type system, design by contract, and ownership primitives inspired by linear types (which are useful when dealing with assets).
- Clarity: Code needs to be easy to read, and its meaning should be as unambiguous as possible. It should also be suited for verification so that tooling can help with ensuring safety and security guarantees. These guarantees can be achieved by making the code declarative and allowing the developer to express their intentions directly. We make those intentions explicit by design, which, along with readability, make auditing and reviewing more efficient, at a small cost to verbosity.
- Approachability: Writing code and creating programs should be as approachable as possible. Incorporating features from languages like Swift and Rust, developers should find Cadence’s syntax and semantics familiar. Practical tooling, documentation, and examples enable developers to start creating programs quickly and effectively.
- Developer experience: The developer should be supported throughout the entire development lifecycle, from initial application logic to onchain bug fixes.
- Intuiting ownership with resources: Resources are a composite data type, similar to a struct, that expresses direct ownership of assets. Cadence’s strong static type system ensures that resources can only exist in one location at a time and cannot be copied or lost because of a coding mistake. Most smart contract languages currently use a ledger-style approach to record ownership, where an asset like a fungible token is stored in the smart contract as an entry in a central ledger. Cadence’s resources directly tie an asset’s ownership to the account that owns it by saving the resource in the account’s storage. As a result, ownership isn’t centralized in a smart contract’s storage. Each account owns its assets, and the assets can be transferred freely between accounts without the need for arbitration by a central smart contract.

**Addressing challenges with existing languages**

Other languages pioneered smart contract development, but they lack in areas that affect the long-term viability of next-generation applications.

**Safety**

Safety is the reliability of a smart contract to perform its function as intended. It is heavily influenced by the _unchangeable-once-deployed_ nature of smart contracts: Developers must take certain precautions in order to avoid introducing any potentially catastrophic vulnerabilities prior to publishing a smart contract on the blockchain. It is standard across many blockchains that modifying or updating a smart contract, even to fix a vulnerability, is not allowed. Thus, any bugs that are present in the smart contract will exist forever.

For example, in 2016, an overlooked vulnerability in an Ethereum Decentralized Autonomous Organization (DAO) smart contract saw millions of dollars siphoned from a smart contract, eventually leading to a fork in Ethereum and two separate active blockchains (Ethereum and Ethereum Classic).

Bug fixes are only possible if a smart contract is designed to support changes, a feature that introduces complexity and security issues. Lengthy auditing and review processes can ensure a bug-free smart contract. Still, they add substantial time to the already time-consuming task of getting the smart contract’s core logic working correctly.

Overlooked mistakes cause the most damaging scenarios. It is easy to lose or duplicate monetary value or assets in existing languages because they don’t check relevant invariants or make it harder to express them. For example, a plain number represents a transferred amount that can be accidentally (or maliciously) multiplied or ignored.

Some languages also express behaviors that developers tend to forget about. For example, a fixed-range type might express monetary value, without considerations for a potential overflow or underflow. In Solidity, Ethereum's smart contract language, an overflow originally caused the value to wrap around, as shown [here](https://ethfiddle.com/CAp-kQrDUP). Solidity also allows contracts to declare variables without initializing them, and doesn't have a null or undefined value. Even more confusing, the mapping type automatically includes values at all possible entries - 0, false, or whatever the default value is for that type.

Cadence is type-safe and has a strong static type system, which prevents important classes of erroneous or undesirable program behavior at compile-time (i.e., before the program is run onchain). Types are checked statically and are not implicitly converted. Cadence also improves the safety of programs by preventing arithmetic underflow and overflow, introduces optionals to make nil-cases explicit, and always requires variables to be initialized. This helps ensure the behavior of these smart contracts is apparent and not dependent on context.

**Security**

Security, in combination with safety, ensures the successful execution of a smart contract over time by preventing unsanctioned access and guaranteeing that only authorized actions can be performed in the protocol. In some languages, functions are public by default, creating vulnerabilities that allow malicious users to find attack vectors. Cadence utilizes capability-based security, which allows the type system to enforce access control based on rules that users and developers have control over.

Security is a consideration when interacting with other smart contracts. Any external call potentially allows malicious code to be executed. For example, in Solidity, when the called function signature does not match any of the available ones, it triggers Solidity’s fallback functions. These functions can be used in malicious ways. Language features such as multiple inheritances and overloading or dispatch can also make it difficult to determine which code is invoked.

In Cadence, the safety and security of programs are enhanced by Design By Contract and Ownership Primitives. Design by contract allows developers to state pre-conditions and post-conditions for functions and interfaces in a declarative manner so that callers can be certain about the behavior of called code. Ownership primitives are inspired by linear types and increase safety when working with assets. They ensure that valuable assets are, for example, not accidentally or maliciously lost or duplicated.

**Clarity and approachability**

Implicitness, context-dependability, and expressiveness are language-based challenges that developers often encounter. They affect the clarity (i.e., the readability of code and the ability to determine its intended function) and the approachability (i.e., the ability to interpret or write code) of the language and the programs built using it. For example, in Solidity, storage must be implemented in a low-level key-value manner, which obfuscates the developer’s intentions. Syntax confusion is another example, with "=+" being legal syntax leading to an assignment instead of a probably-intended increment. Solidity also has features with uncommon behaviors that can lead to unintended results.

[Multiple inheritance may lead to unexpected behaviours in the program](https://medium.com/consensys-diligence/a-case-against-inheritance-in-smart-contracts-d7f2c738f78e), and testing and auditing the code is unlikely to identify this issue.

The Ethereum blockchain’s code immutability showcases the need for considerations around extensibility and mechanisms that allow ad-hoc fixes. Developers using custom-made approaches, such as the 'data separation' approach to upgradability, may run into problems with the complexity of data structures, while developers using 'delegate_call-based proxies' may run into problems with the consistency of memory layouts. Either way, these challenges compromise approachability and overall extensibility. Cadence has [contract upgradability built in by default](https://cadence-lang.org/docs/language/contract-updatability), and contracts can be made immutable by removing all keys from an account.

Cadence improves the clarity and extensibility of programs by utilizing interfaces to allow extensibility, code reuse, and interoperability between contracts. Cadence modules also have configurable and transparent upgradeability built in to enable projects to test and iterate before making their code immutable.

Cadence allows the use of argument labels to describe the meaning of function arguments. It also provides a rich standard library with useful data structures (e.g., dictionaries, sets, and so on) and data types for common use cases, like fixed-point arithmetic, which helps when working with currencies.

**Intuiting ownership with resources**

Most smart contract languages currently use a ledger-style approach to record ownership, where an asset is stored in the smart contract as an entry in a central ledger, and this ledger is the source of truth around asset ownership. There are many disadvantages to this design, especially when it comes to tracking the ownership of multiple assets belonging to a single account. To find out all of the assets that an account owns, you would have to enumerate all the possible smart contracts that could potentially include this account and search to see if the account owns these assets.

In a resource-oriented language like Cadence, resources directly tie an asset to the account that owns it by saving the resource in the account’s storage. As a result, ownership isn’t centralized in a single, central smart contract’s storage. Instead, each account owns and stores its own assets, and the assets can be transferred freely between accounts without the need for arbitration by a central smart contract.

Resources are inspired by linear types and increase safety when working with assets, which often have real, intrinsic value. Resources, as enforced by Cadence’s type system, ensure that assets are correctly manipulated and not abused.

- Every resource has exactly one owner. If a resource is used as a function parameter, an initial value for a variable, or something similar, the object is not copied. Instead, it is moved to the new location, and the old location is immediately invalidated.
- The language will report an error if ownership of a resource was not properly transferred, i.e., when the program attempts to introduce multiple owners for the resource or the resource ends up in a state where it does not have an owner. For example, a resource can only be assigned to exactly one variable and cannot be passed to functions multiple times.
- Resources cannot go out of scope. If a function or transaction removes a resource from an account’s storage, it either needs to end the transaction in an account's storage, or it needs to be explicitly and safely deleted. There is no "garbage collection" for resources.

The special status of resource objects must be enforced by the runtime; if they were just a compiler abstraction it would be easy for malicious code to break the value guarantees.

Resources change how assets are used in a programming environment to better resemble assets in the real world. Users store their currencies and assets in their own account, in their own wallet storage, and they can do with them as they wish. Users can define custom logic and structures for resources that give them flexibility with how they are stored. Additionally, because everyone stores their own assets, the calculation and charging of state rent is fair and balanced across all users in the network.

**An interpreted language**

Currently, Cadence is an interpreted language, as opposed to a compiled language. This means that there is no Cadence Assembly, bytecode, compiler, or Cadence VM.

The structure of the language lends itself well to compilation (e.g., static typing), but using an interpreter for the first version allows us to refine the language features more quickly as we define them.

**Getting started with Cadence**

Now that you've learned about the goals and design of Cadence and Flow, you're ready to get started with the Flow emulator and tools! Go to the [Getting Started](https://cadence-lang.org/docs/tutorial/first-steps) page to work through language fundamentals and tutorials.

  

**Why Use Cadence?**

Security and safety

Cadence provides security and safety guarantees that greatly simplify the development of secure smart contracts. As smart contracts often deal with valuable assets, Cadence provides the resource-oriented programming paradigm, which guarantees that assets can only exist in one location at a time, cannot be copied, and cannot be accidentally lost or deleted. Cadence includes several language features that prevent entire classes of bugs. These security and safety features allow smart contract developers to focus on the business logic of their contract instead of preventing accidents and attacks.

Composability

Cadence enables composability. Resources (which are arbitrary user-defined data types similar to structs) are stored directly in users’ accounts, and can flow freely between contracts: They can be passed as arguments to functions, returned from functions, or even combined in arbitrary data structures. This makes implementing business logic easier, more natural, and promotes the reuse of existing logic.

Simplicity

Cadence’s syntax is inspired by popular modern general-purpose programming languages like [Swift](https://developer.apple.com/swift/), [Kotlin](https://kotlinlang.org/), and [Rust](https://www.rust-lang.org/), so developers will find the syntax and the semantics familiar. Practical tooling, documentation, and examples enable developers to start creating programs quickly and effectively.

  

**Cadence Guide for Solidity Developers**

Cadence introduces a different way to approach smart contract development, which may feel unfamiliar to Solidity developers. There are fundamental mindset and platform differences, and also several new language features that have no real equivalent in Solidity. As a result, while you can make similar programs in Cadence as you could in Solidity, a direct translation from one to the other isn't possible - similar to how you could make a note-taking app in C or in JavaScript, but it wouldn't be possible to directly translate the C code into JavaScript. You'd have to write an entirely new program for a new paradigm.

This guide outlines high level design and conceptual aspects of Flow and Cadence that are essential to understand, platform and integration differences, as well as detailed guidance on how to perform certain common Solidity development tasks using Cadence idioms. We also provide details on how to best leverage Cadence's unique features and how to avoid common pitfalls that may come up while transitioning.

**Conceptual foundations for Cadence**

A fundamental difference to get used to when adjusting to Cadence from Solidity is mindset. Security and interoperability on Ethereum are designed around addresses (or more specifically, the account associated with an address), resulting in all contracts having to carefully track and evaluate access and authorizations.

  

Transactions are based on who authorized them, which is provided as msg.sender in the transaction context. User-to-contract, or contract-to-contract interactions, must be explicitly coded in the contract and in advance to ensure the appropriate approvals have been made before interacting with a contract. The contract-based nature of storage means that user ownership in Ethereum is represented in a mapping (e.g., from owner to balance or token ID to owner). Put another way, ownership is tracked in ledger records similar to a person's bank balance. Crypto wallets help combine balances from multiple token types into a convenient view for the user.

Cadence introduces new primitives and distinct functionalities, namely [Resources](https://cadence-lang.org/docs/language/resources) and [Capabilities](https://cadence-lang.org/docs/language/capabilities), that are designed around Flow's account model. Resources are first-class language types, which are unique, non-copyable, and cannot be discarded. These properties make resources ideal for representing digital assets like currency or tokens that are always limited in number. Resources are always stored in account storage, and contracts control access to them using capabilities. Capabilities are another special type that secures protected resources without the need for tracking addresses. Cadence makes working with these straightforward and intuitive to those familiar with object-oriented programming languages.

**Scripts and transactions**

One of the most important (and powerful!) difference between Cadence and Solidity is that deployed contracts are not the only code being executed in the VM. Cadence offers scripts and transactions, which are written in Cadence and always exist offchain. However, they are the top-level code payload being executed by the execution runtime. Clients send scripts and transactions through the Flow Access API gRPC or REST endpoints, returning results to clients when applicable.

Scripts and transactions enable more efficient and powerful ways to integrate dapps with the underlying blockchain, where contracts can more purely be thought of as services or components, with scripts or transactions becoming the dapp-specific API interface for chain interactions.

What this means is that you don't have to predict the future when writing your contracts and your views aren't limited to functions in the contract. Even more importantly, you can write transactions that call multiple functions with multiple deployed contracts that you don't need to own and are signed with one signature.

Scripts are read-only in nature, requiring only a main function declaration that performs [queries](https://github.com/onflow/flow-ft/blob/master/transactions/scripts/get_balance.cdc) against a chain state. For example:

// This script reads the balance field of an account's ExampleToken Balance

import FungibleToken from "../../contracts/FungibleToken.cdc"

import ExampleToken from "../../contracts/ExampleToken.cdc"

  

access(all)

fun main(account: Address): UFix64 {

    let acct = getAccount(account)

    let vaultRef = acct.capabilities

        .borrow<&ExampleToken.Vault>(ExampleToken.VaultPublicPath)

        ?? panic("Could not borrow Balance reference to the Vault")

  

    return vaultRef.balance

}

  

[Transactions](https://github.com/onflow/flow-ft/tree/master/transactions) are an Atomic, Consistent, Isolated, and Durable (ACID) version of scripts having only prepare and execute functions that either succeed in full and mutate the chain state as described, or otherwise fail and mutate nothing. They also support a setting of pre and post conditions. In the following transaction example, ExampleTokens are deposited into multiple receiver vaults for each address in the input map:

import FungibleToken from "../contracts/FungibleToken.cdc"

import ExampleToken from "../contracts/ExampleToken.cdc"

  

/// Transfers tokens to a list of addresses specified in the `addressAmountMap` parameter

transaction(addressAmountMap: {Address: UFix64}) {

  

    // The Vault resource that holds the tokens that are being transferred

    let vaultRef: auth(FungibleToken.Withdraw) &ExampleToken.Vault

  

    prepare(signer: auth(BorrowValue) &Account) {

  

        // Get a reference to the signer's stored ExampleToken vault

        self.vaultRef = signer.storage.borrow<auth(FungibleToken.Withdraw) &ExampleToken.Vault>(

            from: ExampleToken.VaultStoragePath

       )     ?? panic("The signer does not store an ExampleToken.Vault object at the path "

                    .concat(ExampleToken.VaultStoragePath.toString())

                    .concat(". The signer must initialize their account with this vault first!"))

    }

  

    execute {

  

        for address in addressAmountMap.keys {

  

            // Withdraw tokens from the signer's stored vault

            let sentVault <- self.vaultRef.withdraw(amount: addressAmountMap[address]!)

  

            // Get the recipient's public account object

            let recipient = getAccount(address)

  

            // Get a reference to the recipient's Receiver

            let receiverRef = recipient.capabilities

                .borrow<&{FungibleToken.Receiver}>(ExampleToken.ReceiverPublicPath)

                ?? panic("Could not borrow receiver reference to the recipient's Vault")

  

            // Deposit the withdrawn tokens in the recipient's receiver

            receiverRef.deposit(from: <-sentVault)

  

        }

    }

}

  

Transactions can encompass an arbitrary number of withdrawals/deposits across multiple FTs, sending to multiple addresses or other more complex variations, all of which will succeed or fail in their entirety given their ACID properties.

**Flow account model**

The [Flow account model](https://developers.flow.com/build/basics/accounts.md) in Cadence combines storage for the keys and code ("smart contracts") associated with an account with storage for the assets owned by that account. That's right — in Cadence, your tokens are stored in your account, and not in a smart contract. Of course, smart contracts still define these assets and how they behave, but those assets can be securely stored in a user's account through the magic of Resources:

  

There is only one account type in Cadence that uses an account address, similar to an Externally-Owned-Account (EOA) address in Ethereum. Unlike Ethereum contracts, Cadence accounts directly store contract code. Accounts realize ownership on Flow by being the container where keys, resources, and contracts are stored onchain.

**Account**

Account is the type that provides access to an account.

The getAccount function allows you to get access to the publicly available functions and fields of an account. For example, this allows querying an account's balance.

An authorized Account reference provides access and allows the management of the account's storage, key configuration, and contract code. An authorized Account reference can only be acquired by signing a transaction. Capabilities ensure that resources held in an account can be safely shared and accessed.

**Resources**

Resources are unique, [linear types](https://en.wikipedia.org/wiki/Substructural_type_system#Linear_type_systems) that can never be copied or implicitly discarded, and can only be moved between accounts. Static checks during development flag an error for a failure to store a resource moved from an account if that resource is not appropriately moved back into storage for a same or new account, or explicitly destroyed. The run-time enforces the same strict rules in terms of allowed operations. Therefore, contract functions that do not properly handle resources in scope before exiting will abort, reverting the resource to the original storage. These features of resources make them perfect for representing tokens, both fungible and non-fungible. Ownership is tracked by where they are stored, and the assets can't be duplicated or accidentally lost since the language itself enforces correctness.

Flow encourages the storage of data and compute onchain and resource-types makes this easier than ever. Since resources are always stored in accounts, any data and code that exists in resource instances is seamlessly managed onchain without any explicit handling needed.

**Capability-based access**

Remote access to stored objects is managed via [Capabilities](https://cadence-lang.org/docs/language/capabilities). This means that if an account wants to be able to access another account's stored objects, it must have been provided with a valid capability to that object. Capabilities can be either public or private. An account can share a public capability if it wants to give all other accounts access. For example, it's common for an account to accept fungible token deposits from all sources via a public capability. Alternatively, an account can grant private capabilities to specific accounts in order to provide access to restricted functionality. For example, a non-fungible token (NFT) project often controls minting through an "administrator capability" that grants specific accounts the power to mint new tokens.

**Contract standards**

There are numerous widely-used contract standards established to benefit the ecosystem. For example, [Fungible Token](https://developers.flow.com/build/flow.md#flow-token) (FT) and [Non-Fungible Token](https://developers.flow.com/build/flow.md#overview) (NFT) are standards that are conceptually equivalent to Ethereum's ERC-20 and ERC-721 standards. Cadence's object-oriented design means standards apply through contract sub-types such as resources, resource interfaces, or other types declared in the contract standard. Standards can define and limit behavior and/or set conditions that implementations of the standard cannot violate.

Detailed information about available standards and other core contracts can be found in the [Introduction to Flow](https://developers.flow.com/build/flow.md).

**NFT standard and metadata**

Solidity must manage NFT metadata offchain, and NFTs frequently link to IPFS-hosted JSON from onchain.

The Cadence NFT standard provides built-in support for metadata with specific types called [views](https://developers.flow.com/build/flow.md). Views can be added to NFTs when minted and will always be available as part of the NFT. While metadata is stored onchain, graphics and video content are stored offchain. Cadence provides [utility views](https://developers.flow.com/build/flow.md) for both HTTP- and IPFS-based media storage, which remain linked to your NFT.

Using NFT metadata views is a requirement to get listed in the [Flow NFT Catalog](https://www.flow-nft-catalog.com/). Projects are encouraged to leverage the NFT catalog since wallets and other ecosystem partners can seamlessly integrate new collections added there with no input from project creators.

NFT metadata on Flow opens the door to exciting new possibilities that help builders innovate. Check out this recent [case study](https://flow.com/post/flovatar-nft-flow-blockchain-case-study) where a community partner leveraged SVG-based metadata to make combined 2D + 3D versions of their PFPs, all onchain inside the NFTs' metadata!

Under most circumstances, NFTs bridged via the [Cross-VM Bridge](https://developers.flow.com/tutorials/cross-vm-apps/vm-bridge) from Flow Cadence to Flow EVM will automatically be provided with

**Security and access control**

Decentralized application development places significant focus on security and access, which can fairly be described as security engineering. Understanding how resources, capabilities, and the account model solve this may not be obvious when viewed from a Solidity perspective.

**msg.sender considered harmful**

The first question that every Solidity developer asks when they start programming in Cadence is:

_How do I get the account that authorized the transaction?_

In Ethereum, this account is referred to as msg.sender and it informs the program flow in a function depending on who authorized it. Doing so is key to access and security, and is the basis of identity and ownership on Ethereum.

Cadence does not support msg.sender, and there is no transaction-level way for Cadence code to uniquely identify the calling account. Even if there was a way to access it, Cadence supports [multi-sig](https://cadence-lang.org/docs/solidity-to-cadence#multi-key-multi-signature-support) transactions, meaning that a list of all the signers' accounts would be returned, making it impossible to identify a single authorizer.

The reason msg.sender is both unsupported and strongly advised against is that Cadence uses capabilities for access rather than addresses. The mindset change that developers need to adjust to is that a capability must first be obtained by the authorizing account (called the provider or signer in Cadence) from the contract that will require it, which then enables the requesting account to access the protected function or resource. This means the contract never needs to know who the signer is before proceeding because the capability IS the authorization.

In EVM, the contract grants access to an address or addresses, thus it must know and operate based on the address of the signer:

  

The [capability-based security](https://en.wikipedia.org/wiki/Capability-based_security) model of Cadence frames access in the opposite direction from the [access-based security](https://en.wikipedia.org/wiki/Access-control_list) model. Accounts are granted and store the capability to access and use functionality on the contract:

  

**Access control using capabilities**

Solidity lacks specific types or other primitives to aid with permission management. Developers must inline guards to require at every function entry point, thus validating the msg.sender of the transaction.

[Capabilities](https://cadence-lang.org/docs/language/capabilities) are defined by linking storage paths (namespaces for contract storage) to protected objects and then making that linked capability available to other accounts.

Any account can get access to an account's public capabilities. Public capabilities are created using public paths (i.e., they have the domain public). For example, all accounts have a default public capability linked to the FlowToken.Vault resource. This vault is exposed as a public [unentitled](https://cadence-lang.org/docs/language/access-control#entitlements) capability, allowing any account to borrow() a reference to the Vault to make a deposit(). Since only the unentitled functions defined under the [FungibleToken.Vault](https://github.com/onflow/flow-ft/blob/master/contracts/FungibleToken.cdc#L167) interface are exposed, the borrower of the vault reference cannot call withdraw(), since the method requires a Withdraw entitled reference on the underlying vault.

Accounts can share private capabilities, but must be specifically issued by the authorizing account. After [issuing](https://cadence-lang.org/docs/language/accounts/capabilities#issuing-capabilities), they can be obtained from authorized account objects (Account) but not public accounts (PublicAccount). To share a private capability with another account, the owning account must publish it to another account, which places it in the [account inbox](https://cadence-lang.org/docs/language/accounts/inbox) (not to be mistaken with capabilities publish). The recipient can later claim the capability from the account inbox using the claim function.

Public Capabilities can be unpublished and any capability can also be [revoked](https://cadence-lang.org/docs/design-patterns#capability-revocation) by the creating account.

To aid automation, events are emitted for completed publish, claim, and unpublish actions for a Capability.

Detailed information can be found in [Capabilities](https://cadence-lang.org/docs/language/capabilities).

**Hygiene factors for protecting value**

While capabilities grant account access to a protected resource, it's still necessary to impose controls on the value accessed through them. For example, if your use case requires delegating access to a FlowToken.Vault to withdraw() funds, it's important to limit the amount. Tokens implementing FT/NFT standards are the primary type of value being exchanged by accounts on Flow. The standard provides the primitives needed to implement capability-limiting best practices.

Token isolation

All FTs reside in a Vault resource, and each different FT will exist as a separate Vault in an account. Similarly, all NFTs implement a Collection resource, in which those NFTs held by an account for that collection are stored.

Whenever access to the withdraw() function has to be delegated to another account, the simplest way to limit how many tokens of a given type can be withdrawn is to create a new Vault resource for that token type and move a smaller amount of the tokens in the main token Vault. A capability is then linked to that Vault instance before being made available to another account.

A similar pattern can be used for NFTs, where a new Collection resource can be created into which only those NFTs that should be exposed are moved. A capability is then linked to that Collection instance before being made available to another account.

Bespoke control strategies

For more complex use cases, you can create a new resource that implements the relevant interfaces to match those of the protected resource(s) that it wraps. The code for the new resource can then enforce limits as required and control how and when a delegation to the underlying resource occurs. One such example is the community-developed [ScopedFTProviders](https://github.com/green-goo-dao/flow-utils/blob/main/contracts/ScopedFTProviders.cdc) and [ScoptedNFTProviders](https://github.com/green-goo-dao/flow-utils/blob/main/contracts/ScopedNFTProviders.cdc) utility contracts.

**Admin roles**

Compared to Solidity, creating an admin role in Cadence requires a little more code, all of which is encapsulated within a resource. The admin object design can be highly customized and employ capabilities and [entitlements](https://cadence-lang.org/docs/language/access-control#entitlements) for fine-grained control, such as limiting access to individual functions, on a per-account basis if required. The complexity needed for admin roles may vary — for example, larger organizations may require more complex role-based-access schemes. The use of a resource in this context is key — the instance can't be copied, and the account with the first edition mint of the admin serves as the root admin. The admin can be implemented to mint additional admin resource instances, which only the root-admin can grant to selected user accounts via a capability. Conveniently, because the admin role is only accessible via a capability, it's easy to manage with [Capability Revocation](https://cadence-lang.org/docs/design-patterns#capability-revocation).

The admin role originates from the [init singleton pattern](https://cadence-lang.org/docs/design-patterns#init-singleton) and uses the [Capability Bootstrapping](https://cadence-lang.org/docs/design-patterns#capability-bootstrapping) pattern for making the Capability available to other accounts.

An example admin role implementation is available in the [Cadence cookbook](https://cookbook.onflow.org/?preview=13).

**Role-based access**

Implementing role-based access can be achieved by defining roles as resources managed by the root-admin account. Roles can provide limited access to functions, which guard other protected resources that include access levels and/or what is exposed, varying from role to role. The root admin can grant accounts access to individual roles through a private capability. Functions that the roles are permitted to invoke may be scoped as access(contract) to enforce that they can only be called by code paths in the root-admin contract.

**Other best practices and conventions**

Certain well-established best practices for Solidity may not apply or are handled differently.

**Check effects interactions**

Solidity contracts must use the [check effect interaction](https://fravoll.github.io/solidity-patterns/checks_effects_interactions.html) because functions are public by default and address-based access means that guards must exist when program flow concedes control to an external contract. There are two reasons why this is significantly less of a problem in Cadence. Functions are private by default, and the language provides a range of [access scopes](https://cadence-lang.org/docs/language/access-control). More importantly, _risks associated with ceding control to an external contract_ is an Ethereum phenomenon; the risk no longer applies. This is primarily because Cadence contracts are not static singletons, so control is never lost to another contract during the scope of a transaction.

**Guard check**

Solidity uses revert, require, and assert to validate inputs. require is a product of the address-based nature of Solidity, which capabilities replace. revert is similar to Cadence's panic in that a transaction is aborted. Cadence provides an assert operator, which mirrors assert in Solidity.

**Modifiers**

Modifiers are extensively used in Solidity when enforcing pre-checks within a function. This is a powerful language feature. However, modifiers can also mutate a state, which introduces risks to the program control flow.

Cadence uses pre and post blocks to validate input values or the function execution outputs. Notably, a pre and post block prohibits the changing of a state and may only enforce conditions.

Another difference is that modifiers in Solidity can be reused within the contract multiple times. Cadence pre and post blocks are associated with individual functions only, reducing the likelihood of errors but resulting in a small amount of code duplication.

**Error handling**

Solidity offers a try/catch block to handle errors; however, there is presently no equivalent in Cadence.

**Integration differences**

There are a few notable integration differences between Cadence and Solidity, which are described in the following sections.

**Contract imports and dynamic contract borrowing**

Contracts in Ethereum are similar to static singletons in that interactions happen directly between users and the functions declared on the contract instance itself. The object-oriented nature of Cadence means that contracts are more accurately viewed as imported dependencies. The imported contract makes its object graph available for the code at runtime. Rather than interacting with a contract singleton instance, account interactions to access capabilities are the primary integration entry point, allowing the user to interact with the returned objects.

Dynamic borrowing of a contract inlines the loading of a contract based on its contract address. The loaded contract can be cast to the contract standard interface to which it conforms to (e.g., NFT standard) and then interacted with in the same way if it were statically imported. Consider the implications of this for the composability of contracts.

Detailed information about deploying, updating, removing, or borrowing contracts can be found in [Contracts](https://cadence-lang.org/docs/language/contracts).

**Multi-key, multi-signature support**

Solidity supports only one kind of multi-signature scheme where n out of m (assuming m >= n) approvals need to be obtained to execute the transaction from the multi-signature smart contract. The most used multi-signature smart contract in the Ethereum ecosystem is the Gnosis [safe contract](https://github.com/safe-global/safe-contracts/blob/main/contracts/Safe.sol). However, Solidity lacks support for signature aggregation or BLS signature schemes.

Cadence offers a wide range of options to implement various multi-signature schemes, including:

- Inherent support for multi-sign transactions.
- Resource transfer scheme.
- Inherent support of the BLS signature scheme.

Flow account keys have assigned weights, where a 1000 unit weight is the cumulative weight needed from signing keys to execute a transaction successfully. One can divide weights arbitrarily across multiple keys and distribute those partial weighted keys to authorized signers. When signing the transaction, all signers must sign the transaction together in a short period of time in order for the cumulative weight to reach 1000 units.

See the [BLS Signature scheme](https://cadence-lang.org/docs/language/crypto#bls-multi-signature) for a detailed overview of the inherent support of BLS signatures.

Resource transfer scheme

The main limitation of multi-signature transactions is that signatures must all be made for the transaction within a relatively short time window. If this window is missed, the transaction will abort. The resource transfer scheme is very similar to the Solidity multi-signature smart contract. A resource is created that has the functionality to proxy the execution of a fund transfer. This resource is handed from one signer to the next to collect signatures. Once the threshold of required signatures is met, the transaction is executed. The main drawback with this approach is that it does not support the execution of arbitrary functionality.

**Other platform differences**

The following differences, which are unrelated to implementing Cadence contracts, are useful to understand in the context of application design.

**Events**

Flow uses [events](https://cadence-lang.org/docs/language/events) extensively to provide real-time signals to offchain systems about particular actions that occurred during a transaction. The main difference in Flow is that events remain part of the history and are not purged from storage. Events can be populated with arbitrary data that will assist consumers of the event. Builders are encouraged to leverage events for seamless UX as users perform transactions.

**Contract upgradeability**

Flow supports limited upgradability of Cadence contracts, which is most helpful during development. The following function shows how an account owner can update a contract:

fun update(name: String, code: [UInt8]): DeployedContract

  

Upgrades are analyzed for prohibited changes once uploaded for an upgrade. Upgradeability is still an early-phase feature, which will continue to improve over time.

To enforce immutability once a contract is tested and ready to deploy, account owners can optionally revoke keys from the account containing the contract.

Detailed information about the cadence upgradeability is available in [Contract Updatability](https://cadence-lang.org/docs/language/contract-updatability).

**Account key formulation**

In EVM-based chains, an address is derived from a cryptographically generated public key and can have a single private key, supporting one type of signature curve (i.e., ECDSA). They are not verifiable offchain and typos/truncation in an address may result in funds being lost.

Flow account addresses have a special format and are verifiable offchain. Verifying address format validity can be done using an error detection algorithm based on linear code. While this does not also confirm that an address is active onchain, the extra verifiability is a useful safeguard.

**Contract size constraints**

Solidity developers will be well aware of the [EIP-170](https://eips.ethereum.org/EIPS/eip-170) deployable contract bytecode size limit of 24KB. This can burden builders who need to optimize contract bytecode size, sometimes even requiring a re-design of contracts to break it into smaller contract parts.

By contrast, Cadence has no inherent or defined smart contract size limit. However, it is restricted by the transaction size limit, which is 1.5MB. With very rare exceptions, it's unlikely that this limit would pose a problem to those developing Cadence contracts. Should it be needed, there is a known way to deploy a contract exceeding 1.5MB, which we will document at a later time.

**Low-level language differences**

There are several language differences between Solidity and Cadence, which are described in the following sections.

**Arithmetic**

Historically, Solidity, smart contracts lost millions of dollars because of improper handling of arithmetic under/overflows. Contemporary Solidity versions offer inbuilt handling of under/overflow for arithmetic operations.

Cadence implements [saturating math](https://en.wikipedia.org/wiki/Saturation_arithmetic), which avoids overflow/underflow.

**Optional support**

[Optional binding](https://cadence-lang.org/docs/language/control-flow#optional-binding) provides built-in conditional handling of nil values. Regular data types in Cadence must always have a value and cannot be nil. Optionals enable variables or constants that might contain a certain type or a nil value. Optional bindings have two cases: either there is a value or there is nothing — they fork program flow similar to if nil; else; end;.

**Iterable dictionaries**

Solidity offers the mapping type, however it is not iterable. Because of that, dapp developers have to maintain offchain tracking to have access to keys. This also pushes builders to create custom data types like EnumerableMap, which adds to gas costs.

Cadence offers the [Dictionary](https://cadence-lang.org/docs/language/control-flow) type, an unordered collection of key-value associations, which is iterable.

**Rich support for type utility functions**

Cadence offers numerous native-type utility functions to simplify development. For example, the String type provides:

- utf8
- length
- concat()
- slice()
- split()
- replaceAll()
- join()
- decodeHex()
- encodeHex()
- fromCharacters()
- fromUTF8()
- toLower()

**Argument labelling**

Argument labels in Cadence help to disambiguate input values. They make code more readable and explicit. They also eliminate confusion around the order of arguments when working with the same type. They must be included in the function call, but this restriction can be skipped if the label is preceded by _ on its declaration.

For example:

- if fun foo(balance: UFix64), which is called as self.foo(balance: 30.0)
- then, fun foo( _balance: UFix64) can be called as self.foo(balance: 30.0) or as self.foo(30.0).

One thing to note about argument labelling is that function overloading is not currently supported in Cadence. This means that functions with the same name but different argument labels are not allowed, which is an available feature in Solidity.

**Additional resources**

- [On-Chain Token Transfer Deep Dive](https://flow.com/engineering-blogs/flow-blockchain-programming-language-smart-contract-cadence-solidity-comparison-ethereum) — Cadence or Solidity
- [Bored Ape Yacht Club](https://flow.com/post/implementing-the-bored-ape-yacht-club-smart-contract-in-cadence) — Implementing a smart contract in Cadence
- [Comparing AA on Ethereum vs Flow](https://www.quicknode.com/guides/other-chains/flow/account-abstraction-on-flow#account-abstraction-on-ethereum-vs-flow) — Quicknode's account abstraction on the Flow blockchain

  

**First Steps**

Welcome to our series of guides that get you up to speed on [Cadence](https://cadence-lang.org/docs/) as quickly as possible! In this program, we jump right into making meaningful projects. Don't worry, we'll point you to the important parts of the language reference as each concept is introduced.

This series makes use of the [Flow Playground](https://play.flow.com/), an online IDE that enables you to easily write and test Cadence code in a simulated environment.

**TIP**

If you already know Solidity, you might want to review the [Cadence Guide for Solidity Developers](https://cadence-lang.org/docs/solidity-to-cadence). It compares the two languages and points out the most impactful differences from the perspective of a Solidity dev.

**Objectives**

After completing this tutorial, you'll be able to:

- Write, deploy, and interact with Cadence code in the Flow Playground.
- Select and utilize accounts in the Flow Playground.
- Run Cadence transactions and scripts from the playground.
- Explore the contracts and storage associated with test accounts.

**The Flow Developer Playground**

  

The [Flow Playground](https://play.flow.com/) includes an in-browser editor and Flow emulator that you can use to experiment with Flow Cadence. Using the Flow Playground, you can write Cadence smart contracts, deploy them to a local Flow emulated blockchain, and submit transactions.

It has been primarily tested and optimized for Google Chrome, but other browsers should also work.

The playground comes pre-loaded with contract and transaction templates that correspond to each of the tutorials in this series. The tutorials also include a link (e.g., [play.flow.com/367d1462-f291-481f-aa14-02bb5ce3e897](https://play.flow.com/367d1462-f291-481f-aa14-02bb5ce3e897)), which opens the tutorial code in a new tab. The contracts, transactions, and scripts are loaded into the templates in the Playground for you to use.

You'll need to navigate between the editor and this tutorial to read the instructions and make changes to your code.

**What is a smart contract?**

In regular terms, a contract is an agreement between two parties to exchange information or assets. Normally, the terms of a contract are supervised and enforced by a trusted and empowered third party, such as a bank or a lawyer.

A smart contract is a computer program stored in a blockchain that verifies and executes the performance of a contract without the need for any trusted third party. The code itself is public and will perform all operations in an open, repeatable, and testable manner.

Programs that run on blockchains are commonly referred to as smart contracts because they facilitate important functions, such as managing digital currency, without relying on a central authority like a bank.

Flow can run smart contracts written in [Cadence](https://cadence-lang.org/docs/). It can also run contracts written in Solidity on [Flow EVM](https://developers.flow.com/evm/about). These guides focus on learning Cadence.

**Accounts**

Accounts are the primary conduit for user interaction with on-chain code and assets. Users authorize transactions with their accounts and store their owned assets in their account storage.

**WARNING**

Flow is different from other blockchains in that contracts, assets, and information owned by a user or associated with their wallet address are stored in the user's account.

We use the warning label above to get your attention, but this is a good thing! In most other chains, a coding error that accidentally changes a single number in a ledger can destroy, change, or duplicate ownership of an asset or assets. It's like a medieval shop with a bunch of paper IOUs having a gust of wind blow through vs. having the gold in your pocket.

The model of ownership in Cadence makes this kind of loss nearly impossible.

The Flow playground comes with pre-created accounts that you can use for testing and experimentation.

They're listed in the Accounts section on the bottom left part of the playground window.

  

Click on a few of the accounts. They're empty when first created, but you'll see contracts and storage data here as you go through the tutorials.

  

**Contracts**

The playground organizes contract source files under the Contracts folder in the nav panel on the left side of the window. Until deployed, these are source files not associated with an account or address.

**Deploying a contract**

The default contract in a new playground session is a simple HelloWorld contract. To deploy:

1. Open the Cadence code in the account editor that contains a contract.
2. Click the Deploy button in the bottom-right of the screen to deploy that contract to the currently selected account.

3. _The contract deploys after a few seconds._  
    
4. Select 0x06-Default in the ACCOUNTS list.

Here's what happens:

- The name of the contract and the block height it was deployed at appear in the list of Deployed Contracts.
- FlowToken objects are listed in the Account Storage section.
- Every Flow account is created with the ability to manage Flow Tokens.

  

**Scripts**

In Cadence, scripts are simple, transaction-like snippets of code that you can use to read onchain data that is public.

Open the GetGreeting script and Execute it.

This script loads the instance of the HelloWorld contract you deployed with account 0x06 and returns the result of calling the hello function, which is the value stored onchain in the contract's greeting field.

You'll see the result logged in the console.

**Transactions**

Cadence transactions are also written in Cadence.

**Executing a transaction**

In the Transactions folder, you'll find an example of one:

1. Open the ChangeGreeting transaction.
2. Enter a new greeting and Send it.

- This executes a transaction to call changeGreeting and update the value in greeting for this specific instance of HelloWorld, deployed by address 0x06.
- Once the transaction completes, you'll see the output in the Log at the bottom of the window.

4. Open the GetGreeting script and Execute it again.

You'll now see your new greeting returned in the log!

**Say Hello, World!**

You're now ready to write your own contract and say "Hello World!"

Now that you have completed the tutorial, you can:

- Write, deploy, and interact with Cadence code in the Flow Playground.
- Select and utilize accounts in the Flow Playground.
- Run Cadence transactions and scripts from the playground.
- Explore the contracts and storage associated with test accounts.

  

**Hello World**

It's time to write your own "Hello World" contract. In this instance, the contract accomplishes the following:

1. Create and initialize a smart contract with a single field of type String.
2. Initialize the field with the phrase "Hello, World!".
3. Create a function in the contract that returns our greeting.

We will deploy this contract in an account, use a transaction to interact with the contract, and finally, explore the role of signers in a transaction.

**Objectives**

After completing this tutorial, you'll be able to:

- Declare a public Cadence smart contract.
- Initialize a public String variable.
- Write simple transactions and scripts in Cadence.
- Describe the role of signers in a Cadence transaction.

**How to implement Hello World**

Open the starter code for this tutorial in the Flow Playground, which is empty: [play.flow.com/e559739d-603e-40d5-b2f1-b9957051cdc4](https://play.flow.com/e559739d-603e-40d5-b2f1-b9957051cdc4).

Declare your contract by entering the following:

access(all) contract HelloWorld {

  // Todo

}

  

**Declaring a Contract-Level Constant**

The line access(all) contract HelloWorld declares a contract with [Access Control](https://cadence-lang.org/docs/language/access-control) that is accessible in all scopes, including public.

Add a public constant String field to store your greeting:

// Incomplete code example

// An error is expected here, see below

  

// Declare a public (access(all)) field of type String.

access(all) let greeting: String

  

**WARNING**

Cadence follows the same pattern as Swift where the let keyword is used to declare a constant. The var keyword is used to declare a variable.

As before, you're using the access keyword to set the scope to all and make the constant public. The let keyword declares a state constant named greeting, and the [type annotation](https://cadence-lang.org/docs/language/types-and-type-system/type-annotations) declares it as a String.

You'll probably notice the following error in your code:

missing initializer for field `greeting` in type `HelloWorld`

  

[Composite Types](https://cadence-lang.org/docs/language/types-and-type-system/composite-types), which includes contracts, have a special initializer function that is run exactly once, upon object creation. It's optional, but constants declared at the contract level must have a value set in the initializer.

Add the following initializer and initialize your greeting:

// The initializer is required if the contract contains any fields.

init() {

  self.greeting = "Hello, World!"

}

  

**Adding a View Function**

After you create a contract and initialized the "Hello, World!" String, the next step is to implement a view function to return the greeting constant:

// Public function that returns our friendly greeting!

access(all) view fun hello(): String {

    return self.greeting

}

  

Once again, the access level is public. Anyone who imports this contract into their own contract, transaction, or script can read the public fields, use the public types, and call the public contract functions — the ones that have access(all) specified.

The view annotation indicates that the function is permitted to view, but not modify blockchain state.

**Accounts**

Each user has an account controlled by one or more private keys with configurable weight. This means that support for accounts/wallets with [multiple controllers](https://www.coindesk.com/learn/what-is-a-multisig-wallet) is built into the protocol by default.

An account is divided into several areas:

- _Contracts_
- _Account Storage_
- _Capabilities_
- _Keys_

**Contract Area**

The first area is the [contract area](https://cadence-lang.org/docs/language/accounts/contracts), or account.contracts.

This is the area that stores smart contracts deployed to the account. These contracts contain type definitions, fields, and functions that relate to common functionality. There is no limit to the number of smart contracts an account can store.

**TIP**

Much of the functionality that you'd find in a Solidity smart contract is instead written in [transactions](https://cadence-lang.org/docs/language/transactions) or scripts for Cadence apps. These exist outside the smart contract, which means you don't need to anticipate absolutely everything you might want to do or view before deploying the contract.

The information in the contract area cannot be directly accessed in a transaction unless the transaction imports the contract or returns (reads) a copy of the code deployed to an account.

The owner of an account can directly add or update contracts that are deployed to it.

**IMPORTANT**

On Flow Cadence, smart contracts _are_ upgradeable. If you make a mistake, you can often [update](https://cadence-lang.org/docs/language/contract-updatability) it, constrained by some rules, in a public and transparent manner.

**Account Storage**

The second area is where you'll find [account storage](https://cadence-lang.org/docs/language/accounts/storage), or account.storage. This area is where an account stores the objects that it owns. This is an important differentiator between Cadence and other languages, because in other languages, assets that accounts own are usually stored in the centralized smart contract ledger that defines the assets.

**IMPORTANT**

In Cadence, each account stores its assets as objects directly in its own account storage, similar to how you store your own possessions in your own house in real life!

The account storage section also stores code that declares the capabilities for controlling how these stored objects can be accessed. We'll cover account storage and capabilities in more detail in a later tutorial.

In this tutorial, we'll use the account with the address 0x06 to store our HelloWorld contract.

**Capabilities**

[Capabilities](https://cadence-lang.org/docs/language/capabilities), or account.capabilities, are a part of the security model in Cadence. They represent the right to access parts of or all of an object and perform operations on it. For example, a user might possess a vault that holds fungible tokens. In this case, they'll have the capability that allows anyone to deposit tokens into the vault, and may choose to grant the capability to withdraw tokens to their broker's account.

**Keys**

[Keys](https://cadence-lang.org/docs/language/accounts/keys), or account.keys, are used to sign [transactions](https://cadence-lang.org/docs/language/transactions). In Cadence, an account can have many keys. These keys can be shared or revoked, providing native version of [account abstraction](https://ethereum.org/en/roadmap/account-abstraction) that is extremely powerful. For example, you can use it to [build an app](https://developers.flow.com/build/guides/account-linking-with-dapper) that pulls NFTs in an embedded wallet in one app into that user's browser wallet and then use them in your app.

**Deploying the HelloWorld Contract**

To deploy a contract, make sure that the account 0x06 tab is selected and that the HelloWorld.cdc file is in the editor. Then, click the Deploy button to deploy the contents of the editor to account 0x06:

  

You should see a log in the output area indicating that the deployment succeeded:

Deployed Contract To: 0x06

  

You'll also see the name of the contract in the selected account tab underneath the number for the account. This indicates that the HelloWorld contract has been deployed to the account.

You can always look at this tab to verify which contracts are in which accounts.

**Transactions**

A [Transaction](https://cadence-lang.org/docs/language/transactions) in Flow is defined as an arbitrary-sized block of Cadence code that is authorized by one or more accounts.

When an account authorizes a transaction, the code in that transaction has access to the authorizers' private storage.

An account authorizes a transaction by performing a cryptographic signature on the transaction with the account's private key, which should only be accessible to the account owner.

In addition to being able to access the authorizer's private assets, transactions can also read and call functions in public contracts, and access public functions in other users' accounts.

**Importing a transaction**

This tutorial uses a transaction to call our hello() function:

1. Open the CallHello file in the Transactions folder.
2. Import the deployed instance of HelloWorld from account 0x06. If you haven't deployed the smart contract from the account, the transaction won't have access to it and the import will fail.
3. Add an import at the top of the file:import HelloWorld from 0x06
4.   
      
      
      
      
      
      
    This imports the entire contract code from HelloWorld, including type definitions and public functions, so that the transaction can use them to interact with the HelloWorld contract in account 0x06.
5. To import any smart contract from any account, use this format:// Replace {ContractName} with the name of the contract you want to import
6.   
    // and {Address} with the account you want to import it from
7.   
    import {ContractName} from {Address}
8.   
      
      
      
      
      
      
    Transactions are written in Cadence and are declared with the transaction keyword.
9. Declare an empty transaction:transaction {
10.   
      // TODO
11.   
    }
12.   
      
      
      
      
      
    

**Working with a Transaction Process**

Transactions are divided into two main phases, prepare and execute.

The [prepare](https://cadence-lang.org/docs/language/transactions#prepare-phase) phase is required and is used to identify the account(s) that will sign the transaction. It's also used when the transaction needs to access the account(s) that signed the transaction. The latter is not needed for this simple transaction.

1. Add an empty prepare statement to your transaction:prepare(acct: &Account) {
2.   
      // Nothing is needed here for now
3.   
    }
4.   
      
      
      
      
      
      
    The execute phase is the main body of a transaction. It can call functions on external contracts and objects and perform operations on data that was initialized in the transaction.
5. Add an execute block to your transaction and use it to log the output of the hello() function from the imported HelloWorld contract to the console:execute {
6.   
      log(HelloWorld.hello())
7.   
    }
8.   
      
      
      
      
      
      
    In this example, the execute phase calls HelloWorld.hello(). This executes the hello() function in the HelloWorld contract and logs the result(log(HelloWorld.hello())) to the console.
9. In the box at the bottom right of the editor, select Account 0x06 as the transaction signer.
10. Click the Send button to submit the transaction You should see something similar to the following in the transaction results at the bottom of the screen:16:46:56
11.   
    Simple Transaction
12.   
    [1]
13.   
    Cadence log: "Hello, World!"
14.   
      
      
      
      
      
    

Congratulations, you just executed your first Cadence transaction with the account 0x06 as the signer!

This tutorial shows you the same result if you use different signers for the transaction but later tutorials will use more complex examples that have different results, depending on the signer.

**Conclusion**

This tutorial covered an introduction to Cadence, including terms such as accounts, transactions, and signers. We implemented a smart contract that is accessible in all scopes. The smart contract had a String field initialized with the value Hello, World! and a function to return (read) this value.

Next, we deployed this contract in an account and implemented a transaction to call the function in the smart contract and log the result to the console. Finally, we used the account 0x06 as the signer for this transaction.

Now that you have completed the tutorial, you can:

- Declare a public Cadence smart contract.
- Initialize a public String variable.
- Write simple transactions in Cadence.
- Describe the role of signers in a Cadence transaction.

**Reference Solution**

**WARNING**

You are not saving time by skipping the reference implementation. You'll learn much faster by doing the tutorials as presented!

Reference solutions are functional, but may not be optimal.

- [Reference Solution](https://play.flow.com/edba10ad-1232-4720-bc1b-cd34cb12b6dc)

  

  

**Resources and the Move (<-) Operator**

This tutorial builds your understanding of [accounts](https://cadence-lang.org/docs/language/accounts/) and how to interact with them by introducing [resources](https://cadence-lang.org/docs/language/resources). Resources are a special type found in Cadence that are used for any virtual items, properties, or any other sort of data that are owned by an account. They can only exist in one place at a time, which means they can be moved or borrowed, but they cannot be copied.

Working with resources requires you to take a few more steps to complete some tasks, but this level of explicit control makes it nearly impossible to accidentally duplicate, break, or burn an asset.

**Objectives**

After completing this tutorial, you'll be able to:

- Instantiate a resource in a smart contract with the create keyword.
- Save, move, and load resources using the [Account Storage API](https://cadence-lang.org/docs/language/accounts/storage) and the [move operator](https://cadence-lang.org/docs/language/operators/assign-move-force-swap#move-operator--) (<-).
- Use [borrow](https://cadence-lang.org/docs/language/accounts/storage#accessing-objects) to access and use a function in a resource.
- Use the prepare phase of a transaction to load resources from account storage.
- Set and use variables in both the prepare and execute phase.
- Use the [nil-coalescing operator (??)](https://cadence-lang.org/docs/language/operators/optional-operators#nil-coalescing-operator-) to panic if a resource is not found.

**Resources**

[Resources](https://cadence-lang.org/docs/language/resources) are one of the most important and unique features in Cadence. They're a composite type, like a struct or a class in other languages, but with some special rules designed to avoid many of the traditional dangers in smart contract development. The short version is that resources can only exist in one location at a time — they cannot be copied, duplicated, or have multiple references.

Here is an example definition of a resource:

access(all) resource Money {

    access(all) let balance: Int

  

    init() {

        self.balance = 0

    }

}

  

As you can see, it looks just like a regular struct definition. The difference, however, is in the behavior.

Resources are useful when you want to model direct ownership of an asset or an object. By direct ownership, we mean the ability to own an actual object in your storage that represents your asset, instead of just a password or certificate that allows you to access it somewhere else.

Traditional structs or classes from other conventional programming languages are not an ideal way to represent direct ownership because they can be copied. This means that a coding error can easily result in creating multiple copies of the same asset, which breaks the scarcity requirements needed for these assets to have real value.

We must consider loss and theft at the scale of a house, a car, a bank account, or even a horse. It's worth a little bit of extra code to avoid accidentally duplicating ownership of one of these properties!

Resources solve this problem by making creation, destruction, and movement of assets explicit.

**Implementing a contract with resources**

Open the starter code for this tutorial in the Flow Playground at [play.flow.com/b999f656-5c3e-49fa-96f2-5b0a4032f4f1](https://play.flow.com/b999f656-5c3e-49fa-96f2-5b0a4032f4f1).

The HelloResource.cdc file contains the following code:

  

  

  

  

  

HelloResource.cdc

  

  

access(all) contract HelloResource {

  // TODO

}

**Defining a resource**

Similar to other languages, Cadence can declare type definitions within deployed contracts. A type definition is simply a description of how a particular set of data is organized. It is not a copy or instance of that data on its own.

Any account can import these definitions to interact with objects of those types.

The key difference between a resource and a struct or class is the access scope for resources:

- Each instance of a resource can only exist in exactly one _location_ and cannot be copied.

- Here, location refers to account storage, a temporary variable in a function, a storage field in a contract, and so on.

- Resources must be explicitly moved from one location to another when accessed.
- Resources also cannot go out of scope at the end of function execution. They must be explicitly stored somewhere or explicitly destroyed.
- A resource can only be created in the scope that it is defined in.

- This prevents anyone from being able to create arbitrary amounts of resource objects that others have defined.

These characteristics make it impossible to accidentally lose a resource from a coding mistake.

Add a resource called HelloAsset that contains a function to return a string containing "Hello Resources!":

  

  

  

  

  

HelloResource.cdc

  

  

access(all) contract HelloResource {

    access(all) resource HelloAsset {

        // A transaction can call this function to get the "Hello Resources!"

        // message from the resource.

        access(all) view fun hello(): String {

            return "Hello Resources!"

        }

    }

}

A few notes on this function:

- access(all) makes the function publicly accessible.
- view indicates that the function does not modify state.
- The function return type is a String.
- The function is not present on the contract itself and cannot be called by interacting with the contract.

**WARNING**

If you're used to Solidity, you'll want to take note that the view keyword in Cadence is used in the same cases as both view and pure in Solidity.

**Creating a resource**

The following steps show you how to create a resource with the create keyword and the [move operator](https://cadence-lang.org/docs/language/operators/assign-move-force-swap#move-operator--) (<-).

You use the create keyword to initialize a resource. Resources can only be created by the contract that defines them and must be created before they can be used.

The move operator <- is used to move a resource — you cannot use the assignment operator =. When you initialize them or assign then to a new variable, you use the move operator <- to literally move the resource from one location to another. The old variable or location that was holding it will no longer be valid after the move.

1. Create a resource called first_resource:// Note the `@` symbol to specify that it is a resource
2.   
    var first_resource: @AnyResource <- create AnyResource()
3.   
      
      
      
      
      
    
4. Move the resource:var second_resource <- first_resource
5.   
      
      
      
      
      
      
    The name first_resource is no longer valid or usable:// Bad code, will generate an error
6.   
    var third_resource <- first_resource
7.   
      
      
      
      
      
    
8. Add a function called createHelloAsset that creates and returns a HelloAsset resource:  
      
      
      
      
    HelloResource.cdc  
      
      
    access(all) fun createHelloAsset(): @HelloAsset {
9.   
        return <-create HelloAsset()
10.   
    }
11.   
      
      
      
      
      
    

- Unlike the hello() function, this function does exist on the contract and can be called directly. Doing so creates an instance of the HelloAsset resource, moves it through the return of the function to the location calling the function — the same as you'd expect for other languages.
- Remember, when resources are referenced, the @ symbol is placed at the beginning. In the function above, the return type is a resource of the HelloAsset type.

13. Deploy this code to account 0x06 by clicking the Deploy button.

**Creating a Hello transaction**

The following shows you how to create a transaction that calls the createHelloAsset() function and saves a HelloAsset resource to the account's storage.

Open the transaction named Create Hello, which contains the following code:

  

  

  

  

  

create_hello.cdc

  

  

import HelloResource from 0x06

  

transaction {

  // TODO

}

We've already imported the HelloResource contract for you and stubbed out a transaction. Unlike the transaction in Hello World, you will need to modify the user's account, which means you will need to use the prepare phase to access and modify the account that is going to get an instance of the resource.

**Prepare phase**

To prepare:

1. Create a prepare phase with the SaveValue authorization [entitlement](https://cadence-lang.org/docs/language/access-control#entitlements) to the user's account.
2. Use create to create a new instance of the HelloAsset.
3. Save the new resource in the user's account.
4. Inside the transaction, stub out the prepare phase with the authorization [entitlement](https://cadence-lang.org/docs/language/access-control#entitlements):  
    import HelloResource from 0x06
5.   
    
6.   
    transaction {
7.   
      prepare(acct: auth(SaveValue) &Account) {
8.   
        // TODO
9.   
      }
10.   
    }
11.   
      
      
      
      
      
    
12. Use the createHelloAsset function in HelloResource to create an instance of the resource inside of the prepeare and _move_ it into a constant:  
    let newHello <- HelloResource.createHelloAsset()
13.   
      
      
      
      
      
    

You'll get an error for loss of resource, which is one of the best features of Cadence! The language prevents you from accidentally destroying a resource at the syntax level.

**Storage paths**

In Cadence Accounts, objects are stored in [paths](https://cadence-lang.org/docs/language/accounts/paths). Paths represent a file system for user accounts, where an object can be stored at any user-defined path. Usually, contracts will specify for the user where objects from that contract should be stored. This enables any code to know how to access these objects in a standard way.

Paths start with the character /, followed by the domain, the path separator /, and finally the identifier. The identifier must start with a letter and can only be followed by letters, numbers, or the underscore _. For example, the path /storage/test has the domain storage and the identifier test.

There are two valid domains: storage and public.

Paths in the storage domain have type StoragePath, and paths in the public domain have the type PublicPath. Both StoragePath and PublicPath are subtypes of Path.

Paths are not strings and do not have quotes around them.

Use the account reference with the SaveValue authorization [entitlement](https://cadence-lang.org/docs/language/access-control#entitlements) to move the new resource into storage located in /storage/HelloAssetTutorial:

acct.storage.save(<-newHello, to: /storage/HelloAssetTutorial)

  

The first parameter in save is the object that is being stored, and the to parameter is the path that the object is being stored at. The path must be a storage path, so only the domain /storage/ is allowed in the to parameter.

Notice that the error for loss of resource has been resolved.

If there is already an object stored under the given path, the program aborts. Remember, the Cadence type system ensures that a resource can never be accidentally lost. When moving a resource to a field, into an array, into a dictionary, or into storage, there is the possibility that the location already contains a resource.

Cadence forces the developer to explicitly handle the case of an existing resource so that it is not accidentally lost through an overwrite.

It is also very important when choosing the name of your paths to pick an identifier that is very specific and unique to your project.

Currently, account storage paths are global, so there is a chance that projects could use the same storage paths, which could cause path conflicts! This could be a headache for you, so choose unique path names to avoid this problem.

**Execute phase**

Use the execute phase to log a message that the resource was successfully saved:

execute {

    log("Saved Hello Resource to account.")

}

  

We'll learn more realistic uses of this phase soon.

You should have something similar to:

import HelloResource from 0x06

  

transaction {

        prepare(acct: auth(SaveValue) &Account) {

        let newHello <- HelloResource.createHelloAsset()

        acct.storage.save(<-newHello, to: /storage/HelloAssetTutorial)

    }

  

execute {

        log("Saved Hello Resource to account.")

}

}

  

This is our first transaction using the prepare phase!

The prepare phase is the only place that has access to the signing account, via [account references (&Account)](https://cadence-lang.org/docs/language/accounts/).

Account references have access to many different methods that are used to interact with an account, such as to save a resource to the account's storage.

By not allowing the execute phase to access account storage and using entitlements, we can statically verify which assets and areas/paths of the signers' account a given transaction can modify.

Browser wallets and applications that submit transactions for users can use this to show what a transaction could alter, giving users information about transactions that wallets will be executing for them, and confidence that they aren't getting fed a malicious or dangerous transaction from an app or wallet.

To execute:

1. Select account 0x06 as the only signer.
2. Click the Send button to submit the transaction. _You'll see in the log:_"Saved Hello Resource to account."
3.   
      
      
      
      
      
    
4. Use Send to send the transaction again from account 0x06 _You'll now get an error, because there's already a resource in /storage/HelloAssetTutorial:_execution error code 1: [Error Code: 1101] error caused by: 1 error occurred:
5.   
       * transaction execute failed: [Error Code: 1101] cadence runtime error: Execution failed:
6.   
    error: failed to save object: path /storage/HelloAssetTutorial in account 0x0000000000000009 already stores an object
7.   
      --> 805f4e247a920635abf91969b95a63964dcba086bc364aedc552087334024656:19:8
8.   
       |
9.   
    19 |         acct.storage.save(<-newHello, to: /storage/HelloAssetTutorial)
10.   
       |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
11.   
      
      
      
      
      
    
12. Remove the line of code that saves newHello to storage.

- Again, you'll get an error for newHello that says loss of resource. This means that you are not handling the resource properly. Remember that if you ever see this error in any of your programs, it means there is a resource somewhere that is not being explicitly stored or destroyed. Add the line back before you forget!

**Review storage**

Now that you have executed the transaction, account 0x06 has the newly created HelloWorld.HelloAsset resource stored in its storage. You can verify this by clicking on account 0x06 on the bottom left. This opens a view of the different contracts and objects in the account.

The resource you created appears in Account Storage:

{

    "value": [

        {

            "key": {

                "value": "value",

                "type": "String"

            },

            "value": {

                "value": {

                    "id": "A.0000000000000006.HelloResource.HelloAsset",

                    "fields": [

                        {

                            "value": {

                                "value": "269380348805120",

                                "type": "UInt64"

                            },

                            "name": "uuid"

                        }

                    ]

                },

                "type": "Resource"

            }

        },

        {

            "key": {

                "value": "type",

                "type": "String"

            },

            "value": {

                "value": "A.0000000000000006.HelloResource.HelloAsset",

                "type": "String"

            }

        },

        {

            "key": {

                "value": "path",

                "type": "String"

            },

            "value": {

                "value": {

                    "domain": "storage",

                    "identifier": "HelloAssetTutorial"

                },

                "type": "Path"

            }

        }

    ],

    "type": "Dictionary"

}

  

You'll also see FlowToken objects and the HelloResource Contract.

Run the transaction from account 0x07 and compare the differences between the accounts.

**Check for existing storage**

In real applications, you need to check the location path you are storing in to make sure both cases are handled properly.

1. Update the authorization [entitlement](https://cadence-lang.org/docs/language/access-control#entitlements) in the prepare phase to include BorrowValue:  
    prepare(acct: auth(BorrowValue, SaveValue) &Account) {
2.   
        // Existing code...
3.   
    }
4.   
      
      
      
      
      
    
5. Add a transaction-level (similar to contract-level or class-level) variable to store a result String.

- Similar to a class-level variable in other languages, these go at the top, inside the transaction scope, but not inside anything else. They are accessible in both the prepare and execute statements of a transaction:

7. import HelloResource from 0x06
8.   
    
9.   
    transaction {
10.   
        var result: String
11.   
        // Other code...
12.   
    }
13.   
      
      
      
      
      
    

- You'll get an error: missing initialization of field 'result' in type 'Transaction'. not initialized
- In transactions, variables at the transaction level must be initialized in the prepare phase.

15. Initialize the result message and create a constant for the storage path:  
    self.result = "Saved Hello Resource to account."
16.   
    let storagePath = /storage/HelloAssetTutorial
17.   
      
      
      
      
      
    

**WARNING**

In Cadence, storage paths are a type. They are not Strings and are not enclosed by quotes.

One way to check whether or not a storage path has an object in it is to use the built-in [storage.check](https://cadence-lang.org/docs/language/accounts/storage#accountstorage) function with the type and path. If the result is true, then there is an object in account storage that matches the type requested. If it's false, there is not.

**WARNING**

A response of false does not mean the location is empty. If you ask for an apple and the location contains an orange, this function will return false.

This is not likely to occur because projects are encouraged to create storage and public paths that are very unique, but is theoretically possible if projects don't follow this best practice or if there is a malicious app that tries to store things in other projects' paths.

Depending on the needs of your app, you'll use this pattern to decide what to do in each case. For this example, we'll simply use it to change the log message if the storage is in use or create and save the HelloAsset if it is not.

1. Refactor your prepare statement to check and see if the storage path is in use. If it is, update the result message. Otherwise, create and save a HelloAsset:  
    if acct.storage.check<@HelloResource.HelloAsset>(from: storagePath) {
2.   
        self.result = "Unable to save, resource already present."
3.   
    } else {
4.   
        let newHello <- HelloResource.createHelloAsset()
5.   
        acct.storage.save(<-newHello, to: storagePath)
6.   
    }
7.   
      
      
      
      
      
    

- When you [check] a resource, you must put the type of the resource to be borrowed inside the <> after the call to borrow, before the parentheses. The from parameter is the storage path to the object you are borrowing.

9. Update the log in execute to use self.result instead of the hardcoded string:  
    execute {
10.   
        log(self.result)
11.   
    }
12.   
      
      
      
      
      
      
    You should end up with something similar to:  
    import HelloResource from 0x06
13.   
    
14.   
    transaction {
15.   
      var result: String
16.   
    
17.   
      prepare(acct: auth(BorrowValue, SaveValue) &Account) {
18.   
        self.result = "Saved Hello Resource to account."
19.   
        let storagePath = /storage/HelloAssetTutorial
20.   
    
21.   
        if acct.storage.check<@HelloResource.HelloAsset>(from: storagePath) {
22.   
          self.result = "Unable to save, resource already present."
23.   
        } else {
24.   
          let newHello <- HelloResource.createHelloAsset()
25.   
          acct.storage.save(<-newHello, to: storagePath)
26.   
        }
27.   
      }
28.   
    
29.   
      execute {
30.   
        log(self.result)
31.   
      }
32.   
    }
33.   
      
      
      
      
      
    
34. Use Send to send the transaction again, both with accounts that have and have not yet created and stored an instance of HelloAsset.

Now you'll see an appropriate log whether or not a new resource was created and saved.

**Loading a Hello transaction**

The following shows you how to use a transaction to call the hello() method from the HelloAsset resource.

1. Open the transaction named Load Hello, which is empty.
2. Stub out a transaction that imports HelloResource and passes in an account [reference](https://cadence-lang.org/docs/language/references) with the BorrowValue authorization entitlement, which looks something like this:  
      
      
      
      
      
    load_hello.cdc  
      
      
    import HelloResource from 0x06
3.   
    
4.   
    transaction {
5.   
    
6.   
        prepare(acct: auth(BorrowValue) &Account) {
7.   
            // TODO
8.   
        }
9.   
    }
10.   
      
      
      
      
      
    

- You just learned how to [borrow](https://cadence-lang.org/docs/language/accounts/storage#accessing-objects) a [reference](https://cadence-lang.org/docs/language/references) to a resource. You could use an if statement to handle the possibility that the resource isn't there, but if you want to simply terminate execution, a common practice is to combine a panic statement with the [nil-coalescing operator (??)](https://cadence-lang.org/docs/language/operators/optional-operators#nil-coalescing-operator-).
- This operator executes the statement on the left side. If that is nil, the right side is evaluated and returned. In this case, the return is irrelevant, because we're going to cause a panic and terminate execution.

12. Create a variable with a [reference](https://cadence-lang.org/docs/language/references) to the HelloAsset resource stored in the user's account. Use panic if this resource is not found:  
    let helloAsset = acct.storage.borrow<&HelloResource.HelloAsset>(from: /storage/HelloAssetTutorial)
13.   
        ?? panic("The signer does not have the HelloAsset resource stored at /storage/HelloAssetTutorial. Run the `Create Hello` Transaction to store the resource")
14.   
      
      
      
      
      
    
15. Use log to log the return from a call to the hello() function.

**DANGER**

Borrowing a [reference](https://cadence-lang.org/docs/language/references) does not allow you to move or destroy a resource, but it does allow you to mutate data inside that resource via one of the resource's functions.

Your transaction should be similar to:

import HelloResource from 0x06

  

transaction {

    prepare(acct: auth(BorrowValue, LoadValue, SaveValue) &Account) {

        let helloAsset = acct.storage.borrow<&HelloResource.HelloAsset>(from: /storage/HelloAssetTutorial)

            ?? panic("The signer does not have the HelloAsset resource stored at /storage/HelloAssetTutorial. Run the `Create Hello` Transaction again to store the resource")

  

        log(helloAsset.hello())

    }

}

  

In Cadence, we have the resources to leave very detailed error messages. Check out the error messages in the [Non-Fungible Token Contract](https://github.com/onflow/flow-nft/blob/master/contracts/NonFungibleToken.cdc#L115-L121) and [Generic NFT Transfer transaction](https://github.com/onflow/flow-nft/blob/master/transactions/generic_transfer_with_address_and_type.cdc#L46-L50) in the Flow NFT GitHub repo for examples of production error messages.

Test your transaction with several accounts to evaluate all possible cases.

**Reviewing the resource contract**

In this tutorial you learned how to create [resources](https://cadence-lang.org/docs/language/resources) in Cadence. You implemented a smart contract that is accessible in all scopes. The smart contract has a resource declared that implemented a function called hello(), that returns the string "Hello, World!". It also declares a function that can create a resource.

Next, you implemented a transaction to create the resource and save it in the account calling it.

Finally, you used a transaction to [borrow](https://cadence-lang.org/docs/language/accounts/storage#accessing-objects) a [reference](https://cadence-lang.org/docs/language/references) to the HelloAsset resource from account storage and call the hello method

Now that you have completed the tutorial, you can:

- Instantiate a resource in a smart contract with the create keyword.
- Save, move, and load resources using the [Account Storage API](https://cadence-lang.org/docs/language/accounts/storage) and the [move operator](https://cadence-lang.org/docs/language/operators/assign-move-force-swap#move-operator--) (<-).
- Use [borrow](https://cadence-lang.org/docs/language/accounts/storage#accessing-objects) to access and use a function in a resource.
- Use the prepare phase of a transaction to load resources from account storage.
- Set and use variables in both the prepare and execute phase.
- Use the [nil-coalescing operator (??)](https://cadence-lang.org/docs/language/operators/optional-operators#nil-coalescing-operator-) to panic if a resource is not found.

**Reference Solution**

**WARNING**

You are not saving time by skipping the reference implementation. You'll learn much faster by doing the tutorials as presented!

Reference solutions are functional, but may not be optimal.

- [Reference Solution](https://play.flow.com/6f74fe85-465d-4e4f-a534-1895f6a3c0a6)

  

**Resources and the Move (<-) Operator**

This tutorial builds your understanding of [accounts](https://cadence-lang.org/docs/language/accounts/) and how to interact with them by introducing [resources](https://cadence-lang.org/docs/language/resources). Resources are a special type found in Cadence that are used for any virtual items, properties, or any other sort of data that are owned by an account. They can only exist in one place at a time, which means they can be moved or borrowed, but they cannot be copied.

Working with resources requires you to take a few more steps to complete some tasks, but this level of explicit control makes it nearly impossible to accidentally duplicate, break, or burn an asset.

**Objectives**

After completing this tutorial, you'll be able to:

- Instantiate a resource in a smart contract with the create keyword.
- Save, move, and load resources using the [Account Storage API](https://cadence-lang.org/docs/language/accounts/storage) and the [move operator](https://cadence-lang.org/docs/language/operators/assign-move-force-swap#move-operator--) (<-).
- Use [borrow](https://cadence-lang.org/docs/language/accounts/storage#accessing-objects) to access and use a function in a resource.
- Use the prepare phase of a transaction to load resources from account storage.
- Set and use variables in both the prepare and execute phase.
- Use the [nil-coalescing operator (??)](https://cadence-lang.org/docs/language/operators/optional-operators#nil-coalescing-operator-) to panic if a resource is not found.

**Resources**

[Resources](https://cadence-lang.org/docs/language/resources) are one of the most important and unique features in Cadence. They're a composite type, like a struct or a class in other languages, but with some special rules designed to avoid many of the traditional dangers in smart contract development. The short version is that resources can only exist in one location at a time — they cannot be copied, duplicated, or have multiple references.

Here is an example definition of a resource:

access(all) resource Money {

    access(all) let balance: Int

  

    init() {

        self.balance = 0

    }

}

  

As you can see, it looks just like a regular struct definition. The difference, however, is in the behavior.

Resources are useful when you want to model direct ownership of an asset or an object. By direct ownership, we mean the ability to own an actual object in your storage that represents your asset, instead of just a password or certificate that allows you to access it somewhere else.

Traditional structs or classes from other conventional programming languages are not an ideal way to represent direct ownership because they can be copied. This means that a coding error can easily result in creating multiple copies of the same asset, which breaks the scarcity requirements needed for these assets to have real value.

We must consider loss and theft at the scale of a house, a car, a bank account, or even a horse. It's worth a little bit of extra code to avoid accidentally duplicating ownership of one of these properties!

Resources solve this problem by making creation, destruction, and movement of assets explicit.

**Implementing a contract with resources**

Open the starter code for this tutorial in the Flow Playground at [play.flow.com/b999f656-5c3e-49fa-96f2-5b0a4032f4f1](https://play.flow.com/b999f656-5c3e-49fa-96f2-5b0a4032f4f1).

The HelloResource.cdc file contains the following code:

  

  

  

  

  

HelloResource.cdc

  

  

access(all) contract HelloResource {

  // TODO

}

**Defining a resource**

Similar to other languages, Cadence can declare type definitions within deployed contracts. A type definition is simply a description of how a particular set of data is organized. It is not a copy or instance of that data on its own.

Any account can import these definitions to interact with objects of those types.

The key difference between a resource and a struct or class is the access scope for resources:

- Each instance of a resource can only exist in exactly one _location_ and cannot be copied.

- Here, location refers to account storage, a temporary variable in a function, a storage field in a contract, and so on.

- Resources must be explicitly moved from one location to another when accessed.
- Resources also cannot go out of scope at the end of function execution. They must be explicitly stored somewhere or explicitly destroyed.
- A resource can only be created in the scope that it is defined in.

- This prevents anyone from being able to create arbitrary amounts of resource objects that others have defined.

These characteristics make it impossible to accidentally lose a resource from a coding mistake.

Add a resource called HelloAsset that contains a function to return a string containing "Hello Resources!":

  

  

  

  

  

HelloResource.cdc

  

  

access(all) contract HelloResource {

    access(all) resource HelloAsset {

        // A transaction can call this function to get the "Hello Resources!"

        // message from the resource.

        access(all) view fun hello(): String {

            return "Hello Resources!"

        }

    }

}

A few notes on this function:

- access(all) makes the function publicly accessible.
- view indicates that the function does not modify state.
- The function return type is a String.
- The function is not present on the contract itself and cannot be called by interacting with the contract.

**WARNING**

If you're used to Solidity, you'll want to take note that the view keyword in Cadence is used in the same cases as both view and pure in Solidity.

**Creating a resource**

The following steps show you how to create a resource with the create keyword and the [move operator](https://cadence-lang.org/docs/language/operators/assign-move-force-swap#move-operator--) (<-).

You use the create keyword to initialize a resource. Resources can only be created by the contract that defines them and must be created before they can be used.

The move operator <- is used to move a resource — you cannot use the assignment operator =. When you initialize them or assign then to a new variable, you use the move operator <- to literally move the resource from one location to another. The old variable or location that was holding it will no longer be valid after the move.

1. Create a resource called first_resource:// Note the `@` symbol to specify that it is a resource
2.   
    var first_resource: @AnyResource <- create AnyResource()
3.   
      
      
      
      
      
    
4. Move the resource:var second_resource <- first_resource
5.   
      
      
      
      
      
      
    The name first_resource is no longer valid or usable:// Bad code, will generate an error
6.   
    var third_resource <- first_resource
7.   
      
      
      
      
      
    
8. Add a function called createHelloAsset that creates and returns a HelloAsset resource:  
      
      
      
      
    HelloResource.cdc  
      
      
    access(all) fun createHelloAsset(): @HelloAsset {
9.   
        return <-create HelloAsset()
10.   
    }
11.   
      
      
      
      
      
    

- Unlike the hello() function, this function does exist on the contract and can be called directly. Doing so creates an instance of the HelloAsset resource, moves it through the return of the function to the location calling the function — the same as you'd expect for other languages.
- Remember, when resources are referenced, the @ symbol is placed at the beginning. In the function above, the return type is a resource of the HelloAsset type.

13. Deploy this code to account 0x06 by clicking the Deploy button.

**Creating a Hello transaction**

The following shows you how to create a transaction that calls the createHelloAsset() function and saves a HelloAsset resource to the account's storage.

Open the transaction named Create Hello, which contains the following code:

  

  

  

  

  

create_hello.cdc

  

  

import HelloResource from 0x06

  

transaction {

  // TODO

}

We've already imported the HelloResource contract for you and stubbed out a transaction. Unlike the transaction in Hello World, you will need to modify the user's account, which means you will need to use the prepare phase to access and modify the account that is going to get an instance of the resource.

**Prepare phase**

To prepare:

1. Create a prepare phase with the SaveValue authorization [entitlement](https://cadence-lang.org/docs/language/access-control#entitlements) to the user's account.
2. Use create to create a new instance of the HelloAsset.
3. Save the new resource in the user's account.
4. Inside the transaction, stub out the prepare phase with the authorization [entitlement](https://cadence-lang.org/docs/language/access-control#entitlements):  
    import HelloResource from 0x06
5.   
    
6.   
    transaction {
7.   
      prepare(acct: auth(SaveValue) &Account) {
8.   
        // TODO
9.   
      }
10.   
    }
11.   
      
      
      
      
      
    
12. Use the createHelloAsset function in HelloResource to create an instance of the resource inside of the prepeare and _move_ it into a constant:  
    let newHello <- HelloResource.createHelloAsset()
13.   
      
      
      
      
      
    

You'll get an error for loss of resource, which is one of the best features of Cadence! The language prevents you from accidentally destroying a resource at the syntax level.

**Storage paths**

In Cadence Accounts, objects are stored in [paths](https://cadence-lang.org/docs/language/accounts/paths). Paths represent a file system for user accounts, where an object can be stored at any user-defined path. Usually, contracts will specify for the user where objects from that contract should be stored. This enables any code to know how to access these objects in a standard way.

Paths start with the character /, followed by the domain, the path separator /, and finally the identifier. The identifier must start with a letter and can only be followed by letters, numbers, or the underscore _. For example, the path /storage/test has the domain storage and the identifier test.

There are two valid domains: storage and public.

Paths in the storage domain have type StoragePath, and paths in the public domain have the type PublicPath. Both StoragePath and PublicPath are subtypes of Path.

Paths are not strings and do not have quotes around them.

Use the account reference with the SaveValue authorization [entitlement](https://cadence-lang.org/docs/language/access-control#entitlements) to move the new resource into storage located in /storage/HelloAssetTutorial:

acct.storage.save(<-newHello, to: /storage/HelloAssetTutorial)

  

The first parameter in save is the object that is being stored, and the to parameter is the path that the object is being stored at. The path must be a storage path, so only the domain /storage/ is allowed in the to parameter.

Notice that the error for loss of resource has been resolved.

If there is already an object stored under the given path, the program aborts. Remember, the Cadence type system ensures that a resource can never be accidentally lost. When moving a resource to a field, into an array, into a dictionary, or into storage, there is the possibility that the location already contains a resource.

Cadence forces the developer to explicitly handle the case of an existing resource so that it is not accidentally lost through an overwrite.

It is also very important when choosing the name of your paths to pick an identifier that is very specific and unique to your project.

Currently, account storage paths are global, so there is a chance that projects could use the same storage paths, which could cause path conflicts! This could be a headache for you, so choose unique path names to avoid this problem.

**Execute phase**

Use the execute phase to log a message that the resource was successfully saved:

execute {

    log("Saved Hello Resource to account.")

}

  

We'll learn more realistic uses of this phase soon.

You should have something similar to:

import HelloResource from 0x06

  

transaction {

        prepare(acct: auth(SaveValue) &Account) {

        let newHello <- HelloResource.createHelloAsset()

        acct.storage.save(<-newHello, to: /storage/HelloAssetTutorial)

    }

  

execute {

        log("Saved Hello Resource to account.")

}

}

  

This is our first transaction using the prepare phase!

The prepare phase is the only place that has access to the signing account, via [account references (&Account)](https://cadence-lang.org/docs/language/accounts/).

Account references have access to many different methods that are used to interact with an account, such as to save a resource to the account's storage.

By not allowing the execute phase to access account storage and using entitlements, we can statically verify which assets and areas/paths of the signers' account a given transaction can modify.

Browser wallets and applications that submit transactions for users can use this to show what a transaction could alter, giving users information about transactions that wallets will be executing for them, and confidence that they aren't getting fed a malicious or dangerous transaction from an app or wallet.

To execute:

1. Select account 0x06 as the only signer.
2. Click the Send button to submit the transaction. _You'll see in the log:_"Saved Hello Resource to account."
3.   
      
      
      
      
      
    
4. Use Send to send the transaction again from account 0x06 _You'll now get an error, because there's already a resource in /storage/HelloAssetTutorial:_execution error code 1: [Error Code: 1101] error caused by: 1 error occurred:
5.   
       * transaction execute failed: [Error Code: 1101] cadence runtime error: Execution failed:
6.   
    error: failed to save object: path /storage/HelloAssetTutorial in account 0x0000000000000009 already stores an object
7.   
      --> 805f4e247a920635abf91969b95a63964dcba086bc364aedc552087334024656:19:8
8.   
       |
9.   
    19 |         acct.storage.save(<-newHello, to: /storage/HelloAssetTutorial)
10.   
       |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
11.   
      
      
      
      
      
    
12. Remove the line of code that saves newHello to storage.

- Again, you'll get an error for newHello that says loss of resource. This means that you are not handling the resource properly. Remember that if you ever see this error in any of your programs, it means there is a resource somewhere that is not being explicitly stored or destroyed. Add the line back before you forget!

**Review storage**

Now that you have executed the transaction, account 0x06 has the newly created HelloWorld.HelloAsset resource stored in its storage. You can verify this by clicking on account 0x06 on the bottom left. This opens a view of the different contracts and objects in the account.

The resource you created appears in Account Storage:

{

    "value": [

        {

            "key": {

                "value": "value",

                "type": "String"

            },

            "value": {

                "value": {

                    "id": "A.0000000000000006.HelloResource.HelloAsset",

                    "fields": [

                        {

                            "value": {

                                "value": "269380348805120",

                                "type": "UInt64"

                            },

                            "name": "uuid"

                        }

                    ]

                },

                "type": "Resource"

            }

        },

        {

            "key": {

                "value": "type",

                "type": "String"

            },

            "value": {

                "value": "A.0000000000000006.HelloResource.HelloAsset",

                "type": "String"

            }

        },

        {

            "key": {

                "value": "path",

                "type": "String"

            },

            "value": {

                "value": {

                    "domain": "storage",

                    "identifier": "HelloAssetTutorial"

                },

                "type": "Path"

            }

        }

    ],

    "type": "Dictionary"

}

  

You'll also see FlowToken objects and the HelloResource Contract.

Run the transaction from account 0x07 and compare the differences between the accounts.

**Check for existing storage**

In real applications, you need to check the location path you are storing in to make sure both cases are handled properly.

1. Update the authorization [entitlement](https://cadence-lang.org/docs/language/access-control#entitlements) in the prepare phase to include BorrowValue:  
    prepare(acct: auth(BorrowValue, SaveValue) &Account) {
2.   
        // Existing code...
3.   
    }
4.   
      
      
      
      
      
    
5. Add a transaction-level (similar to contract-level or class-level) variable to store a result String.

- Similar to a class-level variable in other languages, these go at the top, inside the transaction scope, but not inside anything else. They are accessible in both the prepare and execute statements of a transaction:

7. import HelloResource from 0x06
8.   
    
9.   
    transaction {
10.   
        var result: String
11.   
        // Other code...
12.   
    }
13.   
      
      
      
      
      
    

- You'll get an error: missing initialization of field 'result' in type 'Transaction'. not initialized
- In transactions, variables at the transaction level must be initialized in the prepare phase.

15. Initialize the result message and create a constant for the storage path:  
    self.result = "Saved Hello Resource to account."
16.   
    let storagePath = /storage/HelloAssetTutorial
17.   
      
      
      
      
      
    

**WARNING**

In Cadence, storage paths are a type. They are not Strings and are not enclosed by quotes.

One way to check whether or not a storage path has an object in it is to use the built-in [storage.check](https://cadence-lang.org/docs/language/accounts/storage#accountstorage) function with the type and path. If the result is true, then there is an object in account storage that matches the type requested. If it's false, there is not.

**WARNING**

A response of false does not mean the location is empty. If you ask for an apple and the location contains an orange, this function will return false.

This is not likely to occur because projects are encouraged to create storage and public paths that are very unique, but is theoretically possible if projects don't follow this best practice or if there is a malicious app that tries to store things in other projects' paths.

Depending on the needs of your app, you'll use this pattern to decide what to do in each case. For this example, we'll simply use it to change the log message if the storage is in use or create and save the HelloAsset if it is not.

1. Refactor your prepare statement to check and see if the storage path is in use. If it is, update the result message. Otherwise, create and save a HelloAsset:  
    if acct.storage.check<@HelloResource.HelloAsset>(from: storagePath) {
2.   
        self.result = "Unable to save, resource already present."
3.   
    } else {
4.   
        let newHello <- HelloResource.createHelloAsset()
5.   
        acct.storage.save(<-newHello, to: storagePath)
6.   
    }
7.   
      
      
      
      
      
    

- When you [check] a resource, you must put the type of the resource to be borrowed inside the <> after the call to borrow, before the parentheses. The from parameter is the storage path to the object you are borrowing.

9. Update the log in execute to use self.result instead of the hardcoded string:  
    execute {
10.   
        log(self.result)
11.   
    }
12.   
      
      
      
      
      
      
    You should end up with something similar to:  
    import HelloResource from 0x06
13.   
    
14.   
    transaction {
15.   
      var result: String
16.   
    
17.   
      prepare(acct: auth(BorrowValue, SaveValue) &Account) {
18.   
        self.result = "Saved Hello Resource to account."
19.   
        let storagePath = /storage/HelloAssetTutorial
20.   
    
21.   
        if acct.storage.check<@HelloResource.HelloAsset>(from: storagePath) {
22.   
          self.result = "Unable to save, resource already present."
23.   
        } else {
24.   
          let newHello <- HelloResource.createHelloAsset()
25.   
          acct.storage.save(<-newHello, to: storagePath)
26.   
        }
27.   
      }
28.   
    
29.   
      execute {
30.   
        log(self.result)
31.   
      }
32.   
    }
33.   
      
      
      
      
      
    
34. Use Send to send the transaction again, both with accounts that have and have not yet created and stored an instance of HelloAsset.

Now you'll see an appropriate log whether or not a new resource was created and saved.

**Loading a Hello transaction**

The following shows you how to use a transaction to call the hello() method from the HelloAsset resource.

1. Open the transaction named Load Hello, which is empty.
2. Stub out a transaction that imports HelloResource and passes in an account [reference](https://cadence-lang.org/docs/language/references) with the BorrowValue authorization entitlement, which looks something like this:  
      
      
      
      
      
    load_hello.cdc  
      
      
    import HelloResource from 0x06
3.   
    
4.   
    transaction {
5.   
    
6.   
        prepare(acct: auth(BorrowValue) &Account) {
7.   
            // TODO
8.   
        }
9.   
    }
10.   
      
      
      
      
      
    

- You just learned how to [borrow](https://cadence-lang.org/docs/language/accounts/storage#accessing-objects) a [reference](https://cadence-lang.org/docs/language/references) to a resource. You could use an if statement to handle the possibility that the resource isn't there, but if you want to simply terminate execution, a common practice is to combine a panic statement with the [nil-coalescing operator (??)](https://cadence-lang.org/docs/language/operators/optional-operators#nil-coalescing-operator-).
- This operator executes the statement on the left side. If that is nil, the right side is evaluated and returned. In this case, the return is irrelevant, because we're going to cause a panic and terminate execution.

12. Create a variable with a [reference](https://cadence-lang.org/docs/language/references) to the HelloAsset resource stored in the user's account. Use panic if this resource is not found:  
    let helloAsset = acct.storage.borrow<&HelloResource.HelloAsset>(from: /storage/HelloAssetTutorial)
13.   
        ?? panic("The signer does not have the HelloAsset resource stored at /storage/HelloAssetTutorial. Run the `Create Hello` Transaction to store the resource")
14.   
      
      
      
      
      
    
15. Use log to log the return from a call to the hello() function.

**DANGER**

Borrowing a [reference](https://cadence-lang.org/docs/language/references) does not allow you to move or destroy a resource, but it does allow you to mutate data inside that resource via one of the resource's functions.

Your transaction should be similar to:

import HelloResource from 0x06

  

transaction {

    prepare(acct: auth(BorrowValue, LoadValue, SaveValue) &Account) {

        let helloAsset = acct.storage.borrow<&HelloResource.HelloAsset>(from: /storage/HelloAssetTutorial)

            ?? panic("The signer does not have the HelloAsset resource stored at /storage/HelloAssetTutorial. Run the `Create Hello` Transaction again to store the resource")

  

        log(helloAsset.hello())

    }

}

  

In Cadence, we have the resources to leave very detailed error messages. Check out the error messages in the [Non-Fungible Token Contract](https://github.com/onflow/flow-nft/blob/master/contracts/NonFungibleToken.cdc#L115-L121) and [Generic NFT Transfer transaction](https://github.com/onflow/flow-nft/blob/master/transactions/generic_transfer_with_address_and_type.cdc#L46-L50) in the Flow NFT GitHub repo for examples of production error messages.

Test your transaction with several accounts to evaluate all possible cases.

**Reviewing the resource contract**

In this tutorial you learned how to create [resources](https://cadence-lang.org/docs/language/resources) in Cadence. You implemented a smart contract that is accessible in all scopes. The smart contract has a resource declared that implemented a function called hello(), that returns the string "Hello, World!". It also declares a function that can create a resource.

Next, you implemented a transaction to create the resource and save it in the account calling it.

Finally, you used a transaction to [borrow](https://cadence-lang.org/docs/language/accounts/storage#accessing-objects) a [reference](https://cadence-lang.org/docs/language/references) to the HelloAsset resource from account storage and call the hello method

Now that you have completed the tutorial, you can:

- Instantiate a resource in a smart contract with the create keyword.
- Save, move, and load resources using the [Account Storage API](https://cadence-lang.org/docs/language/accounts/storage) and the [move operator](https://cadence-lang.org/docs/language/operators/assign-move-force-swap#move-operator--) (<-).
- Use [borrow](https://cadence-lang.org/docs/language/accounts/storage#accessing-objects) to access and use a function in a resource.
- Use the prepare phase of a transaction to load resources from account storage.
- Set and use variables in both the prepare and execute phase.
- Use the [nil-coalescing operator (??)](https://cadence-lang.org/docs/language/operators/optional-operators#nil-coalescing-operator-) to panic if a resource is not found.

**Reference Solution**

**WARNING**

You are not saving time by skipping the reference implementation. You'll learn much faster by doing the tutorials as presented!

Reference solutions are functional, but may not be optimal.

- [Reference Solution](https://play.flow.com/6f74fe85-465d-4e4f-a534-1895f6a3c0a6)

  

**Capabilities**

This tutorial builds on your understanding of [accounts](https://cadence-lang.org/docs/language/accounts/) and [resources](https://cadence-lang.org/docs/language/resources). You'll learn how to interact with resources using [capabilities](https://cadence-lang.org/docs/language/capabilities) and [entitlements](https://cadence-lang.org/docs/language/access-control#entitlements).

**REMINDER**

In Cadence, resources are a composite type like a struct or a class, but with some special rules:

- Each instance of a resource can only exist in exactly one location and cannot be copied.
- Resources must be explicitly moved from one location to another when accessed.
- Resources also cannot go out of scope at the end of function execution — they must be explicitly stored somewhere or destroyed.

**Objectives**

After completing this tutorial, you'll be able to:

- Interact with [resources](https://cadence-lang.org/docs/language/resources) created using transactions.
- Write transactions to create [capabilities](https://cadence-lang.org/docs/language/capabilities) to extend resource access scope from the owner to anyone (public).
- Write and execute a script that interacts with the resource through the capability.

**Use cases for capabilities and entitlements**

Let's look at why you would want to use capabilities and entitlements to expand access to resources in a real-world context. A real user's account and stored objects will contain functions and fields that need varying levels of access scope and privacy.

If you're working on an app that allows users to exchange tokens, you'll want different features available in different use cases. While you definitely want to make a feature like withdrawing tokens from an account only accessible by the owner of the tokens, your app should allow anybody to deposit tokens.

**INFO**

In Cadence, users have complete control over their storage, and their storage is tied directly to their accounts. This feature allows amazing benefits including peer-to-peer transfers of property and it being impossible to accidentally burn an asset by sending it to an unused address. The one mixed blessing is that you can't airdrop tokens or NFTs without the recipient signing a transaction. Less spam, but you'll need to use a claim mechanism if the recipient doesn't already have a vault for your asset.

Capabilities and entitlements are what allows for this detailed control of access to owned assets. They allow a user to indicate which of the functionality of their account and owned objects should be accessible to themselves, their trusted friends, and the public.

For example, a user might want to allow a friend of theirs to use some of their money to spend. In this case, they could create an entitled capability that gives the friend access to only this part of their account, instead of having to hand over full control.

Another example is when a user authenticates a trading app for the first time, the trading app could ask the user for a capability object that allows the app to access the trading functionality of a user's account so that the app doesn't need to ask the user for a signature every time it wants to do a trade. The user can choose to empower the app, and that app alone, for this functionality and this functionality alone.

**Access resources with capabilities**

As a smart contract developer, you need explicit permission from the owner of an account to access its [storage](https://cadence-lang.org/docs/language/accounts/storage). Capabilities allow an account owner to grant access to specific fields and functions on objects stored in their account.

First, you'll write a transaction in which you'll issue a new capability using the issue function. This capability creates a link to the user's HelloAsset resource object. It then publishes that link to the account's public space, so others can access it.

Next, you'll write a script that anyone can use that links to borrow a [reference](https://cadence-lang.org/docs/language/references) to the underlying object and call the hello() function.

**Creating capabilities and references to stored resources**

Continue working with your code from the previous tutorial. Alternately, open a fresh copy here: [play.flow.com/6f74fe85-465d-4e4f-a534-1895f6a3c0a6](https://play.flow.com/6f74fe85-465d-4e4f-a534-1895f6a3c0a6).

If you started with the playground linked above, be sure to deploy the HelloResource contract with account 0x06 and call the Create Hello transaction, also with 0x06.

**Preparing the account capabilities**

To prepare:

1. Create a new transaction called Create Link.
2. Import HelloResource and stub out a transaction with a prepare phase.

- Cadence allows for static analysis of imported contracts. You'll get errors in the transactions and scripts that import HelloResource from 0x06 if you haven't deployed that contract.

4.   
      
      
      
      
    create_link.cdc  
      
      
    import HelloResource from 0x06
5.   
    
6.   
    transaction {
7.   
      prepare() {
8.   
        // TODO
9.   
      }
10.   
    }
11.   
      
      
      
      
      
    
12. Pass an &Account reference into prepare with the capabilities needed to give the transaction the ability to create and publish a capability:  
      
      
      
      
    create_link.cdc  
      
      
    import HelloResource from 0x06
13.   
    
14.   
    transaction {
15.   
      prepare(account: auth(
16.   
        IssueStorageCapabilityController,
17.   
        PublishCapability
18.   
      ) &Account) {
19.   
        // TODO
20.   
      }
21.   
    }
22.   
      
      
      
      
      
    

The [IssueStorageCapabilityController](https://cadence-lang.org/docs/language/accounts/capabilities#accountstoragecapabilities-and-accountaccountcapabilities) allows the transaction to [issue](https://cadence-lang.org/docs/language/accounts/capabilities#issuing-capabilities) a new capability, which includes storing that capability to the user's account. [PublishCapability](https://cadence-lang.org/docs/language/accounts/capabilities#accountcapabilities) allows the transaction to [publish](https://cadence-lang.org/docs/language/accounts/capabilities#publishing-capabilities) a capability and make it available to other users — in this case, we'll make it public.

**Capability-based access control**

[Capabilities](https://cadence-lang.org/docs/language/capabilities) allow the owners of objects to specify what functionality of their private objects is available to others. Think of it kind of like an account's API, if you're familiar with the concept.

The account owner has private objects stored in their storage, like their collectibles or their money, but they might still want others to be able to see what collectibles they have in their account, or they want to allow anyone to access the deposit functionality for a certain asset.

Since these objects are stored in private storage by default, the owner must provide authorization to open up access to them.

We create capabilities to accomplish this, and the account owner must sign a transaction to [issue](https://cadence-lang.org/docs/language/accounts/capabilities#issuing-capabilities) and [publish](https://cadence-lang.org/docs/language/accounts/capabilities#publishing-capabilities) them.

Every capability has a borrow method, which creates a reference to the object that the capability is linked to. This reference is used to read fields or call methods on the object they reference, as if the owner of the reference had the actual object.

It is important to remember that someone else who has access to a capability cannot move or destroy the object that the capability is linked to! They can only access fields that the owner has explicitly declared in the type specification and authorization level of the [issue](https://cadence-lang.org/docs/language/accounts/capabilities#issuing-capabilities) method.

**Issuing the capability**

Capabilities are created with the [issue](https://cadence-lang.org/docs/language/accounts/capabilities#issuing-capabilities) function and can be stored in variables or constants.

In the prepare phase, issue a capability to allow access to the HelloAsset [resource](https://cadence-lang.org/docs/language/resources) instance in the Create Hello transaction saved in /storage/HelloAssetTutorial:

let capability = account

  .capabilities

  .storage

  .issue<&HelloResource.HelloAsset>(/storage/HelloAssetTutorial)

  

**DANGER**

In our capability example, we had the user sign a transaction that gave public access to everything found in the HelloAsset resource!

When you're writing real transactions, follow the principle of giving minimal access. While the capability cannot move or destroy an object, it might be able to mutate data inside of it in a way that the owner does not desire.

For example, if you added a function to allow the owner of the resource to change the greeting message, this code would open that function up to anyone and everyone!

let capability = account

  .capabilities

  .storage

  .issue<&HelloResource.HelloAsset>(/storage/HelloAssetTutorial)

  

The capability says that whoever borrows a reference from this capability has access to the fields and methods that are specified by the type and entitlements in <>. The specified type has to be a subtype of the object type being linked to, meaning that it cannot contain any fields or functions that the linked object doesn't have.

A reference is referred to by the & symbol. Here, the capability references the HelloAsset object, so we specify <&HelloResource.HelloAsset> as the type, which gives access to everything in the HelloAsset object.

The argument to the issue function is the path to the object in storage that it is linked to. When a capability is issued, a [capability controller](https://cadence-lang.org/docs/language/accounts/capabilities#accountcapabilities) is created for it in account.capabilities. This controller allows the creator of the capability to have fine-grained control over the capability.

Capabilities usually link to objects in the /storage/ domain, but can also be created for Account objects. Account capabilities will not be covered in this tutorial.

**Publishing the capability**

Now that your transaction has created the capability with the [issue](https://cadence-lang.org/docs/language/accounts/capabilities#issuing-capabilities) function and saved it in a constant, you can use the [publish](https://cadence-lang.org/docs/language/accounts/capabilities#publishing-capabilities) function to store the capability in a place where it can be used by anyone.

In the prepare phase, use the [publish](https://cadence-lang.org/docs/language/accounts/capabilities#publishing-capabilities) function to publish the capability at /public/HelloAssetTutorial:

account.capabilities.publish(capability, at: /public/HelloAssetTutorial)

  

You should end up with a transaction similar to:

  

  

  

  

  

Create

  

  

import HelloResource from 0x06

  

transaction {

  prepare(account: auth(

    IssueStorageCapabilityController,

    PublishCapability

  ) &Account) {

    let capability = account

      .capabilities

      .storage

      .issue<&HelloResource.HelloAsset>(/storage/HelloAssetTutorial)

  

    account

      .capabilities

      .publish(capability, at: /public/HelloAssetTutorial)

  }

}

**Executing the transaction to publish the capability**

**WARNING**

It is expected that the following implementation will work the first time and fail the second. The object cannot be saved because something is already at the path.

1. Ensure account 0x06 is still selected as a transaction signer.
2. Click the Send button to send the transaction.
3. Send it a second time.

As you learned in the [resources tutorial](https://cadence-lang.org/docs/tutorial/resources), Cadence prevents you from writing code that might accidentally overwrite an object in storage, thus mutating or even destroying a piece of your users' digital property.

On your own, refactor your Create Link transaction to elegantly handle a scenario where an object is already stored at /public/HelloAssetTutorial.

**Using the capability in a script**

Now that you've published the capability with public access, anyone who wants to can write transactions or scripts that make use of it.

1. Create a script called GetGreeting.
2. Import HelloResource and give it public access. To avoid syntax errors while writing the function, you may wish to add a temporary and obvious return value:  
      
      
      
      
    GetGreeting.cdc  
      
      
    import HelloResource from 0x06
3.   
    
4.   
    access(all) fun main(): String {
5.   
      // TODO
6.   
      return "TODO";
7.   
    }
8.   
      
      
      
      
      
    

- You'll need a reference to the public account object for the 0x06 account to be able to access public capabilities within it.

10. Use getAccount to get a reference to account 0x06. Hardcode it for now:let helloAccount = getAccount(0x06)
11.   
      
      
      
      
      
    

- Addresses are not strings and thus do not have quotes around them.

13. Use borrow to borrow the public capability for your Create Link transaction saved in /public/HelloAssetTutorial.

- Your script should return helloReference.hello().
- You've already borrowed something before. Try to implement this on your own. Hint: this time, you're borrowing a capability from the account, not something from storage. Don't forget to handle the case where the object can't be found!_You should end up with a script similar to:_  
    

15.   
      
      
      
      
    GetGreeting.cdc  
      
      
    import HelloResource from 0x06
16.   
    
17.   
    access(all) fun main(): String {
18.   
        let helloAccount = getAccount(0x06)
19.   
    
20.   
        let helloReference = helloAccount
21.   
            .capabilities
22.   
            .borrow<&HelloResource.HelloAsset>(/public/HelloAssetTutorial)
23.   
            ?? panic("Could not borrow a reference to the HelloAsset capability")
24.   
    
25.   
        return helloReference.hello()
26.   
    }
27.   
      
      
      
      
      
    
28. Use Execute to execute your script._You'll see "Hello, World!" logged to the console._  
    

Note that scripts don't need any authorization and can only access public information. You've enabled the user to make this capability public through the transaction you wrote and they signed. Anyone can write their own scripts to interact with your contracts this way!

At the end of the script execution, the helloReference value is lost, but that is ok because while it references a resource, it isn't the actual resource itself. It's ok to lose it.

**Deleting capabilities**

**DANGER**

While most apps will need to depend on users storing resources that allow the user to interact with the app, avoid constructing your app logic such that it depends on something in a user's storage for important data. They own their storage and can delete anything in it at any time without asking anyone.

For example, if you stored the amount of debt for tokens you'd lent a user as a standalone resource in their account, they could simply delete the storage and erase the debt. Instead, store that data in your smart contract.

The owner of an object can effectively [revoke capabilities](https://cadence-lang.org/docs/language/accounts/capabilities#revoking-capabilities) they have created by using the delete method on the Capability Controller that was created for the capability when it was issued.

Additionally, if the referenced object in storage is moved, capabilities that have been created from that storage path are invalidated.

**Reviewing capabilities**

This tutorial expanded on the idea of resources in Cadence by expanding access scope to a resource using capabilities and covering more account storage API use cases.

You deployed a smart contract with a resource, then created a capability to grant access to that resource. With the capability, you used the borrow method in a script to create a reference to the capability. You then used the reference to call the resource's hello() function. This is important because scripts cannot access account storage without using capabilities.

Now that you have completed the tutorial, you should be able to:

- Interact with [resources](https://cadence-lang.org/docs/language/resources) created using transactions.
- Write transactions to create [capabilities](https://cadence-lang.org/docs/language/capabilities) to extend resource access scope from the owner to anyone (public).
- Write and execute a script that interacts with the resource through the capability.

You're on the right track to building more complex applications with Cadence. Now is a great time to check out the [Cadence Best Practices document](https://cadence-lang.org/docs/design-patterns), [Anti-patterns document](https://cadence-lang.org/docs/anti-patterns), and the first NFT tutorial!

**Reference Solution**

**WARNING**

You are not saving time by skipping the reference implementation. You'll learn much faster by doing the tutorials as presented!

Reference solutions are functional, but may not be optimal.

- [Reference Solution](https://play.flow.com/6f74fe85-465d-4e4f-a534-1895f6a3c0a6)

  

**Basic NFT**

In this tutorial, we're going to deploy, store, and transfer Non-Fungible Tokens (NFTs). The NFT is an integral part of blockchain technology. An NFT is a digital asset that represents ownership of something unique and indivisible. Unlike fungible tokens, which operate more like money, you can't divide an NFT, and the owner is likely to be upset if you were to swap one for another without their consent. Examples of NFTs include: [CryptoKitties](https://www.cryptokitties.co/), [Top Shot Moments](https://nbatopshot.com/), tickets to a really fun concert, or even real property such as a horse or a house!

Production-quality NFTs on Flow implement the [Flow NFT Standard](https://github.com/onflow/flow-nft), which defines a basic set of properties for NFTs on Flow.

This tutorial teaches you a basic method of creating simple NFTs to illustrate important language concepts, but will not use the full NFT Standard for the sake of simplicity.

**TIP**

If you're already comfortable with Cadence and have found this page looking for information on how to build production-ready NFTs, check out the [NFT Guide](https://developers.flow.com/build/guides/nft) and [Flow NFT Standard](https://github.com/onflow/flow-nft) repository.

**Objectives**

After completing this tutorial, you'll be able to:

- Deploy a basic NFT contract and type definitions.
- Create an NFT object and store it in a user's account storage.
- Write a transaction to mint an NFT and create a capability so others can view it.
- Transfer an NFT from one account to another.
- Use a script to see if an NFT is stored in an account.
- Implement and utilize a dictionary in Cadence.

**NFTs on Cadence**

Instead of being represented in a central ledger, like in most smart contract languages, Cadence represents each NFT as a [resource](https://cadence-lang.org/docs/language/resources) object that users store in their accounts. This strategy is a response to the lessons learned by the Flow team (the Chief Architect of Flow is the original proposer and co-author of the [ERC-721 NFT standard](https://github.com/ethereum/eips/issues/721)).

It allows NFTs to benefit from the resource ownership rules that are enforced by the [type system](https://cadence-lang.org/docs/language/values-and-types/) — resources can only have a single owner, they cannot be duplicated, and they cannot be lost due to accidental or malicious programming errors. These protections ensure that owners know that their NFT is safe and can represent an asset that has real value, and helps prevent developers from breaking this trust with easy-to-make programming mistakes.

When users on Flow want to transact with each other, they can do so peer-to-peer, without having to interact with a central NFT contract, by calling resource-defined methods in both users' accounts.

NFTs in a real-world context make it possible to trade assets and prove who the owner of an asset is. On Flow, NFTs are interoperable: they can be used in different smart contracts and app contexts in an account.

**The simplest possible NFT**

Open the starter code for this tutorial in the Flow Playground: [play.flow.com/ea3aadb6-1ce6-4734-9792-e8fd334af7dc](https://play.flow.com/ea3aadb6-1ce6-4734-9792-e8fd334af7dc).

At their core, NFTs are simply a way to create true ownership of unique digital property. The simplest possible implementation is a resource with a unique id number.

Implement a simple NFT by creating a [resource](https://cadence-lang.org/docs/language/resources) with a constant id that is assigned in init. The id should be public:

access(all) resource NFT {

  

    access(all) let id: UInt64

  

    init(initID: UInt64) {

        self.id = initID

    }

}

  

**Adding basic metadata**

An NFT is also usually expected to include some metadata like a name, description, traits, or a picture. Historically, most of this metadata has been stored off-chain, and the on-chain token only contains a URL or something similar that points to the off-chain metadata.

This practice was necessary due to the original costs of doing anything onchain, but it created the illusion that the actual content of an NFT was permanent and onchain. Unfortunately, the metadata and images for many older NFT collections can vanish (and sadly, sometimes _have_ vanished) at any time.

In Flow, storing this data offchain is possible, but you can—_and normally should_—store all the metadata associated with a token directly on-chain. Unlike many other blockchain networks, you do not need to consider string storage or manipulation as particularly expensive.

**TIP**

This tutorial describes a simplified implementation. Check out the [the NFT metadata guide](https://developers.flow.com/build/advanced-concepts/metadata-views) if you want to learn how to do this in production.

Add a public metadata variable to your NFT. For now, it can be a simple String-to-String [dictionary](https://cadence-lang.org/docs/language/values-and-types/dictionaries#dictionary-types). Update the init to also initialize a description in your metadata. It should now look similar to:

access(all) resource NFT {

    access(all) let id: UInt64

    access(all) var metadata: {String: String}

  

    init(initID: UInt64, initDescription: String) {

        self.id = initID

        self.metadata = {"description": initDescription}

    }

}

  

**Creating the NFT**

As with any complex type in any language, now that you've created the definition for the type, you need to add a way to instantiate new instances of that type, since these instances are the NFTs. This simple NFT type must be initialized with an id number and a String description.

Traditionally, NFTs are provided with id numbers that indicate the order in which they were minted. To handle this, you can use a simple counter:

1. Add a public, contract-level field to keep track of the last assigned id number.access(contract) var counter: UInt64
2.   
      
      
      
      
      
    

- You're going to immediately get an error in the editor with counter.
- Contract-level fields must be initialized in the init function.

4. Add an init function to the BasicNFT contract and initialize counter to zero:init() {
5.   
        self.counter = 0
6.   
    }
7.   
      
      
      
      
      
    
8. Add a public function to increment the counter and create and return an NFT with a provided description.

**WARNING**

We're creating a public function that allows anyone to provide any string. Take care when building real apps that will be exposed to humanity.

access(all) fun mintNFT(description: String): @NFT {

    self.counter = self.counter + 1

    return <- create NFT(initID: self.counter, initDescription: description)

}

  

Remember, when you work with a [resource](https://cadence-lang.org/docs/language/resources), you must use the [move operator](https://cadence-lang.org/docs/language/operators/assign-move-force-swap#move-operator--) (<-) to move it from one location to another.

**Adding an NFT to your account**

You've gone through the trouble of creating this NFT contract — you deserve the first NFT!

Protect yourself from snipers by updating the init function to give yourself the first NFT. You'll need to mint it and save it to your account storage:

self

    .account

    .storage

    .save(<-self.mintNFT(description: "First one for me!"), to: /storage/BasicNFTPath)

  

**NFT capability**

Saving the NFT to your account will give you one, but it will be locked away where no apps can see or access it. Since you've just learned how to create capabilities in the previous tutorial, you can use the same techniques here to create a capability to give others the ability to access the NFT.

**WARNING**

In Cadence, users own and control their data. A user can destroy a capability such as this whenever they choose. If you want complete control over NFTs or other data, you'd need to store it directly in the contract.

Most of the time, you probably won't want to do this because it will limit what your users can do with their own property without your permission. You don't want to end up in a situation where your users would buy more of your umbrellas to use for shade on sunny days, except you've made it so that they only open when it's raining.

Cadence contracts are deployed to the account of the deployer. As a result, the contract is in the deployer's storage, and the contract itself has read and write access to the storage of the account that they are deployed to by using the built-in [self.account](https://cadence-lang.org/docs/language/contracts) field. This is an [account reference](https://cadence-lang.org/docs/language/accounts/) (&Account), authorized and entitled to access and manage all aspects of the account, such as account storage, capabilities, keys, and contracts.

You can access any of the account functions with self.account by updating the init function to create and publish a [capability](https://cadence-lang.org/docs/language/capabilities) allowing public access to the NFT:

let capability = self

    .account

    .capabilities

    .storage

    .issue<&NFT>(/storage/BasicNFTPath)

  

self

    .account

    .capabilities

    .publish(capability, at: /public/BasicNFTPath)

  

**DANGER**

The capability you are creating gives everyone full access to all properties of the resource. It does not allow other users or developers to move or destroy the resource and is thus harmless.

However, if the resource contained functions to mutate data within the token, this capability would allow anyone to call it and mutate the data!

You might be tempted to add this code to mintNFT so that you can reuse it for anyone who wants to mint the NFT and automatically create the related capability.

The code will work, but it will not function the way you're probably expecting it to. In the context of being called from a function inside a contract, self.account refers to the account of the contract deployer, not the caller of the function. That's you!

Adding self.account.save or self.account.publish to mintNFT allows anyone to attempt to mint and publish capabilities to your account, so don't do it!

**DANGER**

Passing a [fully authorized account reference](https://cadence-lang.org/docs/anti-patterns#avoid-using-fully-authorized-account-references-as-a-function-parameter) as a function parameter is a dangerous anti-pattern.

**Deploying and testing**

Deploy the contract and check the storage for account 0x06.

You'll be able to find your NFT in the storage for 0x06:

"value": {

    "value": {

        "id": "A.0000000000000006.BasicNFT.NFT",

        "fields": [

            {

                "value": {

                    "value": "41781441855488",

                    "type": "UInt64"

                },

                "name": "uuid"

            },

            {

                "value": {

                    "value": "1",

                    "type": "UInt64"

                },

                "name": "id"

            },

            {

                "value": {

                    "value": [

                        {

                            "key": {

                                "value": "description",

                                "type": "String"

                            },

                            "value": {

                                "value": "First one for me!",

                                "type": "String"

                            }

                        }

                    ],

                    "type": "Dictionary"

                },

                "name": "metadata"

            }

        ]

    },

    "type": "Resource"

}

  

**Getting the number of an NFT owned by a user**

We can see the NFT from the storage view for each account, but it's much more useful to write a script or transaction that can do that for any account. You can follow a similar technique as the last tutorial and create a script to use the capability.

Add a script called GetNFTNumber that returns the id number of the NFT owned by an address. It should accept the Address of the account you wish to check as an argument.

Try to do this on your own. You should end up with something similar to:

import BasicNFT from 0x06

  

access(all) fun main(address: Address): UInt64 {

  let account = getAccount(address)

  

  let nftReference = account

    .capabilities

    .borrow<&BasicNFT.NFT>(/public/BasicNFTPath)

    ?? panic("Could not borrow a reference\n")

  

    return nftReference.id

}

  

**Minting with a transaction**

You usually don't want a contract with just one NFT given to the account holder. One strategy is to allow anyone who wants to mint an NFT. To do this, you can simply create a transaction that calls the mintNFT function you added to your contract, and adds the capability for others to view the NFT:

1. Create a transaction called MintNFT.cdc that mints an NFT for the caller with the description they provide. You'll need entitlements to borrow values, save values, and issue and publish capabilities.
2. Verify that the NFT isn't already stored in the location used by the contract:  
      
      
      
      
    MintNFT.cdc  
      
      
    import BasicNFT from 0x06
3.   
    
4.   
    transaction {
5.   
       prepare(account: auth(
6.   
          BorrowValue,
7.   
          SaveValue,
8.   
          IssueStorageCapabilityController,
9.   
          PublishCapability
10.   
          ) &Account) {
11.   
          if account.storage.borrow<&BasicNFT.NFT>(from: /storage/BasicNFTPath) != nil {
12.   
              panic("This user has a token already!")
13.   
          }
14.   
          // TODO
15.   
       }
16.   
    }
17.   
      
      
      
      
      
    
18. Use the mintNFT function to create an NFT, and then save that NFT in the user's account storage:account.storage
19.   
       .save(<-BasicNFT.mintNFT(description: "Hi there!"), to: /storage/BasicNFTPath)
20.   
      
      
      
      
      
    
21. Create and publish a capability to access the NFT:let capability = account
22.   
       .capabilities
23.   
       .storage
24.   
       .issue<&BasicNFT.NFT>(/storage/BasicNFTPath)
25.   
    
26.   
    account
27.   
       .capabilities
28.   
       .publish(capability, at: /public/BasicNFTPath)
29.   
      
      
      
      
      
    
30. Call the MintNFT transaction from account 0x06.

- It will fail because you minted an NFT with 0x06 when you deployed the contract.

32. Call MintNFT from account 0x07. Then, Execute the GetNFTNumber script for account 0x07.

You'll see the NFT number 2 returned in the log.

**Performing a basic transfer**

Users, independently or with the help of other developers, have the inherent ability to delete or transfer any resources in their accounts, including those created by your contracts. To perform a basic transfer:

1. Open the Basic Transfer transaction. We've stubbed out the beginnings of a transfer transaction for you. Note that we're preparing account references for not one, but two accounts: the sender and the recipient.  
      
      
      
      
    Basic  
      
      
    import BasicNFT from 0x06
2.   
    
3.   
    transaction {
4.   
       prepare(
5.   
          signer1: auth(LoadValue) &Account,
6.   
          signer2: auth(SaveValue) &Account
7.   
       ) {
8.   
          // TODO
9.   
       }
10.   
    }
11.   
      
      
      
      
      
    

- While a transaction is open, you can select one or more accounts to sign a transaction. This is because, in Flow, multiple accounts can sign the same transaction, giving access to their private storage.

13. Write a transaction to execute the transfer. You'll need to load() the NFT from signer1's storage and save() it into signer2's storage:import BasicNFT from 0x06
14.   
    
15.   
    transaction {
16.   
       prepare(
17.   
          signer1: auth(LoadValue) &Account,
18.   
          signer2: auth(SaveValue) &Account
19.   
       ) {
20.   
          let nft <- signer1.storage.load<@BasicNFT.NFT>(from: /storage/BasicNFTPath)
21.   
              ?? panic("Could not load NFT from the first signer's storage")
22.   
    
23.   
          // WARNING:  Incomplete code, see below
24.   
          signer2.storage.save(<-nft, to: /storage/BasicNFTPath)
25.   
       }
26.   
    }
27.   
      
      
      
      
      
    
28. Select both account 0x06 and account 0x08 as the signers. Make sure account 0x06 is the first signer.
29. Click the Send button to send the transaction.
30. Verify the NFT is in account storage for account 0x08.
31. Run the GetNFTNumber script to check account 0x08 to see if a user has an NFT.

- You'll get an error here. The reason is that you haven't created or published the capability on account 0x08 to access and return the id number of the NFT owned by that account. You can do this as a part of your transaction, but remember that it isn't required. Another dev, or sophisticated user, could do the transfer without publishing a capability.

33. On your own, refactor your transaction to publish a capability in the new owner's account.

- You're also not making sure that the recipient doesn't already have an NFT in the storage location, so go ahead and add that check as well.

You should end up with something similar to:

import BasicNFT from 0x06

  

transaction {

    prepare(

        signer1: auth(LoadValue) &Account,

        signer2: auth(

            SaveValue,

            IssueStorageCapabilityController,

            PublishCapability) &Account

    ) {

        let nft <- signer1.storage.load<@BasicNFT.NFT>(from: /storage/BasicNFTPath)

            ?? panic("Could not load NFT from the first signer's storage")

  

        if signer2.storage.check<&BasicNFT.NFT>(from: /storage/BasicNFTPath) {

            panic("The recipient already has an NFT")

        }

  

        signer2.storage.save(<-nft, to: /storage/BasicNFTPath)

  

        let capability = signer2

        .capabilities

        .storage

        .issue<&BasicNFT.NFT>(/storage/BasicNFTPath)

  

        signer2

            .capabilities

            .publish(capability, at: /public/BasicNFTPath)

    }

}

  

**Capabilities referencing moved objects**

What about the capability you published for account 0x06 to access the NFT? What happens to that?

Run GetNFTNumber for account 0x06 to find out.

You'll get an error here as well, but this is expected. Capabilities that reference an object in storage return nil if that storage path is empty.

**DANGER**

The capability itself is not deleted. If you move an object of the same type back to the storage location reference by the capability, the capability will function again.

**Reviewing Basic NFTs**

In this tutorial, you learned how to create a basic NFT with minimal functionality. Your NFT can be held, viewed, and transferred, though it does not adhere to the official standard, doesn't allow anyone to own more than one, and is missing other features.

Now that you have completed the tutorial, you should be able to:

- Deploy a basic NFT contract and type definitions.
- Create an NFT object and store it in a user's account storage.
- Write a transaction to mint an NFT and create a capability so others can view it.
- Transfer an NFT from one account to another.
- Use a script to see if an NFT is stored in an account.

In the next tutorial, you'll learn how to make more complete NFTs that allow each user to possess many NFTs from your collection.

**Reference Solution**

**WARNING**

You are not saving time by skipping the reference implementation. You'll learn much faster by doing the tutorials as presented!

Reference solutions are functional, but may not be optimal.

- [Reference Solution](https://play.flow.com/4a74242f-bf77-4efd-9742-31a2b7580b8e)

  

**Intermediate NFTs**

In the [last tutorial](https://cadence-lang.org/docs/tutorial/non-fungible-tokens-1), you implemented a simple NFT that users could mint, hold, and trade, but there was a serious flaw: each user could only hold one NFT at a time. In this tutorial, you'll improve your implementation to allow it to grant users multiple NFTs and with the tools you need to manage them.

**TIP**

If you're already comfortable with Cadence and have found this page looking for information on how to build production-ready NFTs, check out the [NFT Guide](https://developers.flow.com/build/guides/nft) and the [Flow NFT Standard](https://github.com/onflow/flow-nft) repository.

**Objectives**

After completing this tutorial, you'll be able to:

- Implement a collection [resource](https://cadence-lang.org/docs/language/resources) that can manage multiple NFTs on behalf of a user.
- Create an [entitlement](https://cadence-lang.org/docs/language/access-control) to limit some functionality of a [resource](https://cadence-lang.org/docs/language/resources) to the owner.
- Handle errors more elegantly with functions that generate error messages.

**Storing multiple NFTs in a collection**

Open the starter code for this tutorial in the Flow Playground: [play.flow.com/9da6f80f-cd79-4797-a067-47a57dc54770](https://play.flow.com/9da6f80f-cd79-4797-a067-47a57dc54770).

This tutorial continues from the last one, but we'll be doing significant refactoring. The provided starter contains the NFT resource, but removes the code and transactions for creating NFTs and capabilities to interact with them. You'll replace those with a more sophisticated approach that will allow collections of NFTs.

It also adds some constants for the paths we'll be using, so we don't need to worry about typos as we add them to several transactions and scripts.

As you've likely noticed, the setup and operations that we used in the previous tutorial are not very scalable. Users need a way to store multiple NFTs from a collection and tools to manage all of those NFTs from a single place.

Using a [dictionary](https://cadence-lang.org/docs/language/values-and-types/dictionaries) on its own to store our NFTs would solve the problem of having to use different storage paths for each NFT, but it doesn't solve all the problems.

**Resources that own resources**

Instead, we can use a powerful feature of Cadence — resources owning other resources! We'll define a new Collection resource as our NFT storage place to enable more sophisticated ways to interact with our NFTs. This pattern comes with interesting powers and side effects.

Since the Collection explicitly owns the NFTs in it, the owner could transfer all of the NFTs at once by just transferring the single collection. In addition to allowing easy batch transfers, this means that if a unique NFT wants to own another unique NFT, like a CryptoKitty owning a hat accessory, the Kitty literally stores the hat in its own fields and effectively owns it.

The hat belongs to the CryptoKitty that it is stored in, and the hat can be transferred separately or along with the CryptoKitty that owns it. Cadence is a fully object-oriented language, so ownership is indicated by where an object is stored, not just an entry in a ledger.

**DANGER**

When the NFT Collection resource is destroyed with the destroy command, all the resources stored in the dictionary are also destroyed.

**Adding an NFT collection**

Add a public resource definition called Collection to the IntermediateNFT contract. In it, add a public [dictionary](https://cadence-lang.org/docs/language/values-and-types/dictionaries) called ownedNFTs that maps NFTs to their Uint64 id numbers. Initialize ownedNFTs with an empty dictionary:

access(all) resource Collection {

    access(all) var ownedNFTs: @{UInt64: NFT}

  

    init () {

        self.ownedNFTs <- {}

    }

}

  

**TIP**

Cadence is an object-oriented language. Inside a composite type, such as a [resource](https://cadence-lang.org/docs/language/resources), self refers to the instance of that type and not the contract itself.

Dictionary definitions in Cadence don't always need the @ symbol in the type specification, but because the ownedNFTs mapping stores resources, the whole field must become a resource type. Therefore, you need the @ symbol indicating that ownedNFTs is a resource type.

As a result, all the rules that apply to resources apply to this type.

**Writing utility functions**

It's helpful for a collection to be able to handle some basic operations, such as accepting an NFT into the collection, validating whether or not a token is present, or sharing a list of all token IDs.

1. Write a function in the Collection resource to deposit a token into ownedNFTs:  
    access(all) fun deposit(token: @NFT) {
2.   
        self.ownedNFTs[token.id] <-! token
3.   
    }
4.   
      
      
      
      
      
    

- Notice that we're using the <-! force assignment operator to move the token. This will still give a runtime error if the location already has something else stored, but it won't give a typecheck error like the <- move operator would in this instance.

6. Write a function called idExists that returns a Bool - true if the id is present and false if it is not.
7. Write a function called getIDs that returns an array of the UInt64 ids of all NFTs found in the collection. Make use of the built-in keys function present on the dictionary type:  
    access(all) view fun idExists(id: UInt64): Bool {
8.   
        return self.ownedNFTs[id] != nil
9.   
    }
10.   
    
11.   
    access(all) view fun getIDs(): [UInt64] {
12.   
        return self.ownedNFTs.keys
13.   
    }
14.   
      
      
      
      
      
    

**Collection capabilities**

For the NFT Collection, we will publish a capability to allow anyone to access the utility functions you just created — depositing NFTs into it, verifying if an NFT is in the collection, or getting the ids of all NFTs present. We'll also need functionality to withdraw an NFT and remove it from the collection, but we obviously don't want just anyone to be able to do that — _only_ the owner.

**Capability security**

This is where an important layer of access control comes in — Cadence utilizes [capability security](https://cadence-lang.org/docs/language/capabilities), which means that for any given object, a user is allowed to access a field or method of that object if they either:

- are the owner of the object, or
- have a valid reference to that field or method (note that references can only be created from capabilities, and capabilities can only be created by the owner of the object).

When a user stores their NFT Collection in their account storage, it is by default not available for other users to access because it requires access to the authorized account object (auth(Storage) &Account) which is only accessible by a transaction that the owner authorizes and signs.

To give external accounts access to the access(all) fields and functions, the owner (usually with the help of a developer creating a transaction) creates a link to the object in storage.

This link creates a capability. From there, it could be passed as a parameter to a function for one-time-use, or it could be put in the /public/ domain of the user's account so that anyone can access it.

You've done this already when you've written transactions to issue and publish capabilities.

**Using entitlements**

We do not want everyone in the network to be able to call our withdraw function, though.

In Cadence, any reference can be freely up-casted or down-casted to any subtype or supertype that the reference conforms to. This means that if you had a reference of the type &ExampleNFT.Collection, this would expose all the access(all) functions on the Collection.

This is a powerful feature that is very useful, but it also means if there is any privileged functionality on a resource that has a public capability, then this functionality cannot be access(all).

It needs to use [entitlements](https://cadence-lang.org/docs/language/access-control#entitlements).

Entitlements enable you to restrict the scope of access at a granular level, with the option to group restrictions under similarly named entitlements. Owners of resources can then use these entitlements to grant access to the subset of actions enabled by the authorized reference.

**TIP**

If you're used to Solidity, you can think of this as being similar to frameworks that enable you to use modifiers to limit some functions to specific addresses with the correct role, such as onlyOwner. It's quite a bit more powerful, though!

1. Define an [entitlement](https://cadence-lang.org/docs/language/access-control) called Withdraw in your contract at the contract level.  
    access(all) entitlement Withdraw
2.   
      
      
      
      
      
    

- You've now effectively created a type of lock that can only be opened by someone with the right key - or the owner of the property, who always has access natively.

4. Implement a withdraw function inside the Collection resource. It should:

- Only allow access to addresses with the Withdraw [entitlement](https://cadence-lang.org/docs/language/access-control).
- Accept the id of the NFT to be withdrawn as an argument.
- Return an error if the NFT with that id is not present in the account's ownedNFTs.
- Return the actual token resource.

6. You should end up with something similar to:  
    access(Withdraw) fun withdraw(withdrawID: UInt64): @NFT {
7.   
        let token <- self.ownedNFTs.remove(key: withdrawID)
8.   
            ?? panic("Could not withdraw an ExampleNFT.NFT with id="
9.   
                 .concat(withdrawID.toString())
10.   
                 .concat("Verify that the collection owns the NFT ")
11.   
                 .concat("with the specified ID first before withdrawing it."))
12.   
    
13.   
       return <-token
14.   
    }
15.   
      
      
      
      
      
    

Providing an access scope of access(Withdraw) locks this functionality to only the owner who has the [resource](https://cadence-lang.org/docs/language/resources) directly in their storage, or to any address possessing a reference to this resource that has the Withdraw entitlement.

As with other types defined in contracts, these are namespaced to the deployer and contract. The full name of Withdraw would be something like 0x06.IntermediateNFT.Withdraw. More than one contract or account can declare separate and distinct entitlements with the same name.

**Issuing an entitlement**

The owner of an object is the only one who can sign a transaction to create an entitled capability or reference.

In the above example, if you wanted to make the withdraw function publicly accessible, you could issue the capability as an _entitled_ capability by specifying all the entitlements in the capability's type specification using the auth keyword:

// DANGEROUS CODE EXAMPLE - DO NOT USE

let cap = self.account.capabilities.storage

    .issue<auth(ExampleNFT.Withdraw) &ExampleNFT.Collection>(

        self.CollectionStoragePath

    )

self.account.capabilities.publish(cap, at: self.CollectionPublicPath)

  

Now, anyone could borrow that capability as the entitled version it was issued as:

let entitledCollectionRef = recipient.capabilities

    .borrow<auth(ExampleNFT.Withdraw) &ExampleNFT.Collection>(ExampleNFT.CollectionPublicPath)

    ?? panic("Could not borrow a reference to the ExampleNFT.Collection")

  

let stolenNFT <- entitledCollectionRef.withdraw(withdrawID: 1)

  

Later tutorials will cover more nuanced methods for sharing an [entitlement](https://cadence-lang.org/docs/language/access-control).

**Creating empty collections**

Finally, your contract needs a way to create an empty collection to initialize the user's account when they start collecting your NFTs.

Add a function to create and return an empty Collection:

access(all) fun createEmptyCollection(): @Collection {

    return <- create Collection()

}

  

**Error handling**

Thinking ahead, many of the transactions that we might write (or other developers composing on our contracts) will need to borrow a reference to a user's collection. We can make everyone's lives easier by adding a function to help create that error in a nice and consistent manner.

Write a function at the contract level called collectionNotConfiguredError that accepts an address and returns a descriptive error message that the collection was not found:

access(all) fun collectionNotConfiguredError(address: Address): String {

    return "Could not borrow a collection reference to recipient's IntermediateNFT.Collection"

        .concat(" from the path ")

        .concat(IntermediateNFT.CollectionPublicPath.toString())

        .concat(". Make sure account ")

        .concat(address.toString())

        .concat(" has set up its account ")

        .concat("with an IntermediateNFT Collection.")

    }

  

**Deploying the contract**

Deploy the IntermediateNFT contract with account 0x06.

**Creating collections**

We'll need several transactions to manage our NFT collection. The first is one to allow users to create a collection on their account.

On your own, implement a transaction in CreateCollection.cdc to create and save a Collection in the caller's account, and also issue and publish a capability for that collection.

You should end up with something similar to:

import IntermediateNFT from 0x06

  

transaction {

    prepare(account: auth(SaveValue, Capabilities) &Account) {

        // You may want to make sure one doesn't exist, but the native error is descriptive as well

        let collection <- IntermediateNFT.createEmptyCollection()

  

        account.storage.save(<-collection, to: IntermediateNFT.CollectionStoragePath)

  

        log("Collection created")

  

        let cap = account.capabilities.storage.issue<&IntermediateNFT.Collection>(IntermediateNFT.CollectionStoragePath)

        account.capabilities.publish(cap, at: IntermediateNFT.CollectionPublicPath)

  

        log("Capability created")

    }

}

  

Test your transaction by creating Collections for several accounts. Try it with accounts that do and do not have Collections already, and verify that the correct behavior occurs.

**Minting an NFT**

To mint an NFT:

1. Add a transaction to mint an NFT and grant it to the caller. Use the prepare phase to borrow a reference to the caller's Collection and store it in a transaction-level field.
2. Use execute to create the NFT and use the Collection's deposit function to save it in the Collection.

- It's a better practice to separate code that accesses accounts and storage to collect authorized references from the code that executes the changes to state. You can pass arguments, such as the String for the NFT description by defining parameters on the transaction.

4. Your transaction should be similar to:  
    import IntermediateNFT from 0x06
5.   
    
6.   
    transaction(description: String) {
7.   
        let receiverRef: &IntermediateNFT.Collection
8.   
    
9.   
        prepare(account: auth(BorrowValue) &Account) {
10.   
            self.receiverRef = account.capabilities
11.   
                .borrow<&IntermediateNFT.Collection>(IntermediateNFT.CollectionPublicPath)
12.   
                ?? panic(IntermediateNFT.collectionNotConfiguredError(address: account.address))
13.   
       }
14.   
    
15.   
       execute {
16.   
           let newNFT <- IntermediateNFT.mintNFT(description: description)
17.   
    
18.   
           self.receiverRef.deposit(token: <-newNFT)
19.   
    
20.   
           log("NFT Minted and deposited to minter's Collection")
21.   
       }
22.   
    }
23.   
      
      
      
      
      
    
24. Test your transaction by minting several NFTs for several accounts. Try it with accounts that do and do not have Collections and verify that the correct behavior occurs.

**Printing the NFTs owned by an account**

Remember, you can use scripts to access functionality that doesn't need authorization, such as the function to getIDs for all the NFTs in a Collection.

Write a script to PrintNFTs for the provided address.

You can also pass arguments into the main function in a script:

import IntermediateNFT from 0x06

  

access(all) fun main(address: Address): [UInt64] {

    let nftOwner = getAccount(address)

  

    let capability = nftOwner.capabilities.get<&IntermediateNFT.Collection>(IntermediateNFT.CollectionPublicPath)

  

    let receiverRef = nftOwner.capabilities

        .borrow<&IntermediateNFT.Collection>(IntermediateNFT.CollectionPublicPath)

        ?? panic(IntermediateNFT.collectionNotConfiguredError(address: address))

  

  

    log("Account "

      .concat(address.toString())

      .concat(" NFTs")

    )

  

    return receiverRef.getIDs()

}

  

**Transferring NFTs**

Finally, you'll want to provide a method for users to Transfer NFTs to one another. To do so, you'll need to withdraw the NFT from the owner's Collection and deposit it to the recipient.

This transaction is not bound by the Withdraw capability, because the caller will be the account that has the NFT in storage, which automatically possesses full entitlement to everything in its own storage. It also doesn't need the permission of or a signature from the recipient, because we gave the deposit function access(all) and published a public capability to it.

1. Start by stubbing out a transaction that accepts a recipientAddress and tokenId. It should have a transaction-level field called transferToken to store the NFT temporarily, between the prepare and execute phases:  
    import IntermediateNFT from 0x06
2.   
    
3.   
    transaction(recipientAddress: Address, tokenId: UInt64) {
4.   
        let transferToken: @IntermediateNFT.NFT
5.   
    
6.   
        prepare(account: auth(BorrowValue) &Account) {
7.   
            // TODO
8.   
       }
9.   
    
10.   
       execute {
11.   
           // TODO
12.   
       }
13.   
    }
14.   
      
      
      
      
      
    
15. In prepare, get a reference to the sender's Collection and use it to move (<-) the token out of their collection and into transferToken:  
    let collectionRef = account.storage
16.   
        .borrow<auth(IntermediateNFT.Withdraw) &IntermediateNFT.Collection>(from: IntermediateNFT.CollectionStoragePath)
17.   
        ?? panic(IntermediateNFT.collectionNotConfiguredError(address: account.address))
18.   
    
19.   
    self.transferToken <- collectionRef.withdraw(withdrawID: tokenId)
20.   
      
      
      
      
      
    
21. Use execute to execute the transfer by getting a public reference to the recipient's account, using that to get a reference to the capability for the recipient's Collection, and using the deposit function to move (<-) the NFT:  
    let recipient = getAccount(recipientAddress)
22.   
    
23.   
    let receiverRef = recipient.capabilities
24.   
        .borrow<&IntermediateNFT.Collection>(IntermediateNFT.CollectionPublicPath)
25.   
        ?? panic(IntermediateNFT.collectionNotConfiguredError(address: recipient.address))
26.   
    
27.   
    receiverRef.deposit(token: <-self.transferToken)
28.   
    
29.   
    log("NFT ID transferred to account "
30.   
        .concat(recipient.address.toString()))
31.   
      
      
      
      
      
    
32. Test your transaction by transferring several NFTs in several accounts. Try various combinations, and use the PrintNFTs script to make sure the NFTs move as expected.

**Reviewing intermediate NFTs**

In this tutorial, you learned how to expand the functionality of your basic NFT to allow users to create collections of NFTs, then mint and trade those collections. You also learned more about the details of [entitlements](https://cadence-lang.org/docs/language/access-control#entitlements) and how you can use them to protect functionality so that only those who are supposed to be able to access something are able to.

Now that you have completed the tutorial, you should be able to:

- Implement a collection [resource](https://cadence-lang.org/docs/language/resources) that can manage multiple NFTs on behalf of a user.
- Create an [entitlement](https://cadence-lang.org/docs/language/access-control) to limit some functionality of a [resource](https://cadence-lang.org/docs/language/resources) to the owner.
- Handle errors more elegantly with functions that generate error messages.

In the next tutorial, you'll learn how to create fungible token collections.

**Reference Solution**

**WARNING**

You are not saving time by skipping the reference implementation. You'll learn much faster by doing the tutorials as presented!

Reference solutions are functional, but may not be optimal.

- [Reference Solution](https://play.flow.com/72bf4f76-fa1a-4b24-8f5e-f1e5aab9f39d)

  

**Fungible Tokens**

Some of the most popular contract classes on blockchains today are fungible tokens. These contracts create homogeneous tokens that can be transferred to other users and spent as currency (e.g., ERC-20 on Ethereum).

In traditional software and smart contracts, balances for each user are tracked by a central ledger, such as a dictionary:

// Solidity Example

// SIMPLIFIED ERC20 EXAMPLE. DO NOT USE THIS CODE FOR YOUR PROJECT

contract LedgerToken {

    mapping (address => uint) public balances;

    uint public supply;

  

    function transfer(address _to, uint _amount) public {

        require(_balances[msg.sender] >= amount, "Insufficent funds");

        balances[msg.sender] -= _amount;

        balances[_to] += _amount;

    }

}

  

// Cadence Example

// BAD CODE EXAMPLE. DO NOT USE THIS CODE FOR YOUR PROJECT

contract LedgerToken {

    // Tracks every user's balance

    access(contract) let balances: {Address: UFix64}

  

    // Transfer tokens from one user to the other

    // by updating their balances in the central ledger

    access(all)

    fun transfer(from: Address, to: Address, amount: UFix64) {

        balances[from] = balances[from] - amount

        balances[to] = balances[to] + amount

    }

}

  

This is an immensely dangerous pattern — all the funds are stored in one account, the contract itself, which means that they can all be stolen at once if a vulnerability is found.

With Cadence, we use the new resource-oriented paradigm to implement fungible tokens and avoid using a central ledger, because there are inherent problems with using a central ledger that are detailed in the [Fungible Tokens section below](https://cadence-lang.org/docs/tutorial/fungible-tokens#fungible-tokens-on-flow).

**WARNING**

This tutorial implements a working fungible token, but it has been simplified for educational purposes and is not what you should use in production.

If you've found this tutorial looking for information on how to implement a real token, see the [Flow Fungible Token standard](https://github.com/onflow/flow-ft) for the standard interface and example implementation, and the [Fungible Token Developer Guide](https://developers.flow.com/build/guides/fungible-token) for details on creating a production-ready version of a Fungible Token contract.

In this tutorial, we're going to deploy, store, and transfer fungible tokens.

**Objectives**

After completing this tutorial, you'll be able to:

- Compare and contrast how tokens are stored in Flow Cadence compared to Ethereum.
- Utilize the UFix64 type to allow decimals without converting back and forth with 10^18.
- Implement a vault [resource](https://cadence-lang.org/docs/language/resources) to manage the functionality needed for fungible tokens.
- Use [interfaces](https://cadence-lang.org/docs/language/interfaces) to enforce the presence of specified functions and fields.
- Write transactions to transfer tokens safely from one account to another.
- Develop scripts to read account balances.
- Use preconditions and postconditions to perform checks before or after a function call completes.

**Flow network token**

In Flow, the [native network token (FLOW)](https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowToken.cdc) is implemented as a normal fungible token smart contract using a smart contract similar to the one you'll build in this tutorial - with all the features and properties found in the [Fungible Token Developer Guide](https://developers.flow.com/build/guides/fungible-token).

There are special transactions and hooks that allow it to be used for transaction execution fees, storage fees, and staking, but besides that, developers and users are able to treat it and use it just like any other token in the network!

**Fungible tokens on Flow**

Flow Cadence implements fungible tokens differently than other blockchains. As a result:

- Ownership is decentralized and does not rely on a central ledger.
- Bugs and exploits present less risk for users and less opportunity for attackers.
- There is no risk of integer underflow or overflow.
- Assets cannot be duplicated, and it is very hard for them to be lost, stolen, or destroyed.
- Code can be composable.

**Fungible tokens on Ethereum**

The following example showcases how Solidity (the smart contract language for the Ethereum Blockchain, among others) implements fungible tokens, with only the code for storage and transferring tokens shown for brevity.

  

  

  

  

  

ERC20.sol

  

  

// Solidity Example

// SIMPLIFIED ERC20 EXAMPLE. DO NOT USE THIS CODE FOR YOUR PROJECT

contract LedgerToken {

    mapping (address => uint) public balances;

    uint public supply;

  

    function transfer(address _to, uint _amount) public {

        require(_balances[msg.sender] >= amount, "Insufficent funds");

        balances[msg.sender] -= _amount;

        balances[_to] += _amount;

    }

}

As you can see, Solidity uses a central ledger system for its fungible tokens. There is one contract that manages the state of the tokens, and every time that a user wants to do anything with their tokens, they must interact with the central ERC20 contract. This contract handles access control for all functionality, implements all of its own correctness checks, and enforces rules for all of its users.

If there's a bug, such as accidentally making the _transfer function accessible to the wrong user, a [reentrancy](https://docs.soliditylang.org/en/latest/security-considerations.html#reentrancy) issue, or another bug, an attacker can immediately exploit the entire contract and the tokens owned by all users.

// BAD CODE - DO NOT USE

// Anyone can transfer funds out of any account!

function exploitableTransfer(address, _from, address _to, uint _amount) public {

    balances[_from] -= _amount;

    balances[_to] += _amount;

}

  

**Intuiting ownership with resources**

Instead of using a central ledger system, Flow utilizes a few different concepts to provide better safety, security, and clarity for smart contract developers and users. Primarily, tokens are stored in each user's vault, which is a [resource](https://cadence-lang.org/docs/language/resources) similar to the collection you created to store NFTs in the previous tutorial.

This approach simplifies access control because instead of a central contract having to check the sender of a function call, most function calls happen on resource objects stored in users' accounts, and each user natively has sole control over the resources stored in their accounts.

This approach also helps protect against potential bugs. In a Solidity contract with all the logic and state contained in a central contract, an exploit is likely to affect all users who are involved in the contract.

In Cadence, if there is a bug in the resource logic, an attacker would have to exploit the bug in each token holder's account individually, which is much more complicated and time-consuming than it is in a central ledger system.

**Constructing a vault**

Our vault will be a simplified version of the one found in the [Flow Fungible Token standard](https://github.com/onflow/flow-ft). We'll follow some of the same practices, including using [interfaces](https://cadence-lang.org/docs/language/interfaces) to standardize the properties of our vault and make it easier for other contracts to interact with it.

Open the starter code for this tutorial in the Flow Playground: [play.flow.com/359cf1a1-63cc-4774-9c09-1b63ed83379b](https://play.flow.com/359cf1a1-63cc-4774-9c09-1b63ed83379b)

In ExampleToken.cdc, you'll see:

  

  

  

  

  

ExampleToken.cdc

  

  

access(all) contract ExampleToken {

  

    access(all) entitlement Withdraw

  

    access(all) let VaultStoragePath: StoragePath

    access(all) let VaultPublicPath: PublicPath

  

  

    init() {

        self.VaultStoragePath = /storage/CadenceFungibleTokenTutorialVault

        self.VaultPublicPath = /public/CadenceFungibleTokenTutorialReceiver

    }

}

Before you can add your vault, you'll need to implement the various pieces it will depend on.

**Supply and balance**

The two most basic pieces of information for a fungible token are a method of tracking the balance of a given user and the total supply for the token. In Cadence, you'll usually want to use UFix64 — a [fixed-point number](https://cadence-lang.org/docs/language/values-and-types/fixed-point-nums-ints#fixed-point-numbers).

Fixed-point numbers are essentially integers with a scale, represented by a decimal point. They make it much easier to work with money-like numbers as compared to endlessly handling conversions to and from the 10^18 or 10^9 representation of a value.

Implement a contract-level [fixed-point number](https://cadence-lang.org/docs/language/values-and-types/fixed-point-nums-ints#fixed-point-numbers) to track the totalSupply of the token, and init it:

access(all) var totalSupply: UFix64

  

self.totalSupply = 0.0;

  

**Creating interfaces**

You'll also need a place to store the balance of any given user's vault. You could simply add a variable in the vault [resource](https://cadence-lang.org/docs/language/resources) definition to do this, _and it would work_, but it's not the best option for composability.

Instead, let's use this opportunity to create some [interfaces](https://cadence-lang.org/docs/language/interfaces).

In Cadence, interfaces are abstract types used to specify behavior in types that _implement_ the interface. Using them helps compatibility and composability by breaking larger constructions down into standardized parts that can be used by more than one contract for more than one use case. For example, the interface we'll create for Receiver is used by the vault, but it's also something you'd use for any other resource that needs to be able to receive tokens, such as a contract that pools a collection of tokens and splits them between several addresses.

In the following steps, you'll create three interfaces to handle the three functional areas of the vault:

- A Balance interface for the balance of tokens stored in the vault.
- A Provider interface that can provide tokens by withdrawing them from the vault.
- A Receiver interface that can safely deposit tokens from one vault into another.

1. Create a Balance interface, requiring a public UFix64 called balance. It should be public:  
    access(all) resource interface Balance {
2.   
        access(all) var balance: UFix64
3.   
    }
4.   
      
      
      
      
      
    

- This one is pretty simple. It just defines the type of variable that anything implementing it will need to have to keep track of a token balance.

6. Create the Provider interface. In it, define a withdraw function. It should have the Withdraw access [entitlement](https://cadence-lang.org/docs/language/access-control), accept an argument for amount, and return a Vault resource type. This should also be public.
7. To prevent an error, stub out the Vault resource as well:  
    access(all) resource interface Provider {
8.   
        access(Withdraw) fun withdraw(amount: UFix64): @Vault
9.   
    }
10.   
    
11.   
    access(all) resource Vault {}
12.   
      
      
      
      
      
      
    This [interface](https://cadence-lang.org/docs/language/interfaces) will require resources implementing it to have a withdraw function, but it doesn't provide any limitations to how that function works. For example, it could be implemented such that the amount of tokens returned is double the withdrawn amount. While there might be a use case for that effect, it's not what you want for a normal token standard.  
    You can allow for flexibility, such as allowing a Provider to select randomly from several vaults to determine the payer, while enforcing that the amount withdrawn is appropriate by adding a post condition to the function. [Function preconditions and postconditions](https://cadence-lang.org/docs/language/functions#function-preconditions-and-postconditions) can be used to restrict the inputs and outputs of a function.  
    In a postcondition, the special constant result is used to reference the return of the function. They're written following the rules of [statements](https://cadence-lang.org/docs/language/syntax#semicolons) and can contain multiple conditions. Optionally, a : can be added after the last statement, containing an error message to be passed if the postcondition fails.
13. Add a post condition that returns a descriptive and nicely formatted error if the amount returned in the vault from the function doesn't match the amount passed into the function:  
    access(Withdraw) fun withdraw(amount: UFix64): @Vault {
14.   
        post {
15.   
            result.balance == amount:
16.   
                "ExampleToken.Provider.withdraw: Cannot withdraw tokens!"
17.   
                .concat("The balance of the withdrawn tokens (").concat(result.balance.toString())
18.   
                .concat(") is not equal to the amount requested to be withdrawn (")
19.   
                .concat(amount.toString()).concat(")")
20.   
       }
21.   
    }
22.   
      
      
      
      
      
    

- This post condition will be added automatically to the withdraw function in a resource implementing Provider.

24. Implement an [interface](https://cadence-lang.org/docs/language/interfaces) called Receiver, containing a function called deposit that accepts a Vault:  
    access(all) resource interface Receiver {
25.   
        access(all) fun deposit(from: @Vault)
26.   
    }
27.   
      
      
      
      
      
    

**Implementing the vault**

You're finally ready to implement the vault:

1. Start by updating the stub for a Vault to implement Balance, Provider, and Receiver.  
    access(all) resource Vault: Balance, Provider, Receiver {
2.   
       // TODO
3.   
    }
4.   
      
      
      
      
      
      
    _You'll get errors:_  
    resource `ExampleToken.Vault` does not conform to resource interface `ExampleToken.Balance`. `ExampleToken.Vault` is missing definitions for members: Balance
5.   
      
      
      
      
      
      
    And similar errors for Provider and Receiver. Similar to inheriting from a virtual class in other languages, implementing the interfaces requires you to implement the properties from those interfaces in your resource.
6. Implement balance in the vault. You'll also need to initialize it.
7. Initialize it with the balance passed into the init for the resource itself:  
    access(all) var balance: UFix64
8.   
    
9.   
    init(balance: UFix64) {
10.   
        self.balance = balance
11.   
    }
12.   
      
      
      
      
      
      
    The pattern we're setting up here lets us create vaults and give them a balance in one go. Doing so is useful for several tasks — creating a temporary Vault to hold a balance during a transaction also creates most of the functionality you need to do complex tasks with that balance.  
    For example, you might want to set up a conditional transaction that deposits the balance in the vaults in different addresses based on whether or not a part of the transaction is successful.
13. Implement withdraw function for the vault. It should contain a precondition that validates that the user actually possesses equal to or greater than the number of tokens they are withdrawing.

- While this functionality is probably something we'd want in every vault, we can't put the requirement in the [interface](https://cadence-lang.org/docs/language/interfaces) because the interface doesn't have access to the balance.

15. access(Withdraw) fun withdraw(amount: UFix64): @Vault {
16.   
        pre {
17.   
            self.balance >= amount:
18.   
                "ExampleToken.Vault.withdraw: Cannot withdraw tokens! "
19.   
                .concat("The amount requested to be withdrawn (").concat(amount.toString())
20.   
                .concat(") is greater than the balance of the Vault (")
21.   
                .concat(self.balance.toString()).concat(").")
22.   
       }
23.   
       self.balance = self.balance - amount
24.   
       return <-create Vault(balance: amount)
25.   
    }
26.   
      
      
      
      
      
    
27. Implement the deposit function for the vault. Depositing should move the entire balance from the provided vault, and then destroy that vault. Remember, we're transferring tokens by creating a vault and funding it with the amount to transfer. It's not needed once the deposit has emptied it.  
    access(all) fun deposit(from: @Vault) {
28.   
        self.balance = self.balance + from.balance
29.   
        destroy from
30.   
    }
31.   
      
      
      
      
      
    

You must do something with the Vault resource after it's moved into the function. Again, you can safely destroy it, because it's now empty, and you don't need it anymore.

**Creating vaults**

We'll also need a way to create empty vaults to onboard new users, or to create vaults for a variety of other uses.

Add a function to the contract to create an empty Vault:

access(all) fun createEmptyVault(): @Vault {

    return <-create Vault(balance: 0.0)

}

  

We'll use this when we create a transaction to set up new users.

**Error handling**

As before, you can anticipate some of the errors that other developers building transactions and scripts that interact with your contract might encounter. At the very least, it's likely that there will be many instances when an attempt is made to borrow a Vault that is not present or lacks a capability for the caller to borrow it.

Add a function to generate a helpful error if an attempt to borrow a Vault fails:

access(all) fun vaultNotConfiguredError(address: Address): String {

    return "Could not borrow a collection reference to recipient's ExampleToken.Vault"

        .concat(" from the path ")

        .concat(ExampleToken.VaultPublicPath.toString())

        .concat(". Make sure account ")

        .concat(address.toString())

        .concat(" has set up its account ")

        .concat("with an ExampleToken Vault.")

}

  

**Minting**

Next, you need a way to actually create, or mint, tokens. For this example, we'll define a VaultMinter resource that has the power to mint and airdrop tokens to any address that possesses a vault, or at least something with the Receiver [interface](https://cadence-lang.org/docs/language/interfaces) for this token.

Only the owner of this resource will be able to mint tokens.

To do so, we use a [capability](https://cadence-lang.org/docs/language/capabilities) with a reference to the resource or interface we want to require as the type: Capability<&{Receiver}>.

Define a public [resource](https://cadence-lang.org/docs/language/resources) with a public function mintTokens that accepts an amount of tokens to mint, and a recipient that must possess the Receiver [capability](https://cadence-lang.org/docs/language/capabilities):

access(all) resource VaultMinter {

    access(all) fun mintTokens(amount: UFix64, recipient: Capability<&{Receiver}>) {

        let recipientRef = recipient.borrow()

        ?? panic(ExampleToken.vaultNotConfiguredError(address: recipient.address))

  

        ExampleToken.totalSupply = ExampleToken.totalSupply + UFix64(amount)

        recipientRef.deposit(from: <-create Vault(balance: amount))

    }

}

  

**TIP**

Don't be misled by the access(all) [entitlement](https://cadence-lang.org/docs/language/access-control) for this resource. This entitlement only allows public access to the VaultMinter type. It does not give access to the instance we'll create in a moment. That instance will be owned by the publisher of the contract and is the only one that can be created since there isn't a function to create more and VaultMinter does not have a public init function.

**Final contract setup**

The last task with the contract is to update the init function in your contract, which saves yourself a little bit of time by creating a VaultMinter in your account.

Update the contract init function to create and save an instance of VaultMinter:

self

    .account

    .storage

    .save(<-create VaultMinter(),

        to: /storage/CadenceFungibleTokenTutorialMinter

    )

  

After doing all of this, your contract should be similar to:

access(all) contract ExampleToken {

  

    access(all) entitlement Withdraw

  

    access(all) let VaultStoragePath: StoragePath

    access(all) let VaultPublicPath: PublicPath

  

    access(all) var totalSupply: UFix64

  

    access(all) resource interface Balance {

        access(all) var balance: UFix64

    }

  

    access(all) resource interface Provider {

        access(Withdraw) fun withdraw(amount: UFix64): @Vault {

            post {

                result.balance == amount:

                    "ExampleToken.Provider.withdraw: Cannot withdraw tokens!"

                    .concat("The balance of the withdrawn tokens (").concat(result.balance.toString())

                    .concat(") is not equal to the amount requested to be withdrawn (")

                    .concat(amount.toString()).concat(")")

            }

        }

    }

  

    access(all) resource interface Receiver {

        access(all) fun deposit(from: @Vault)

    }

  

    access(all) resource Vault: Balance, Provider, Receiver {

        access(all) var balance: UFix64

  

        init(balance: UFix64) {

            self.balance = balance

        }

  

        access(Withdraw) fun withdraw(amount: UFix64): @Vault {

            pre {

                self.balance >= amount:

                    "ExampleToken.Vault.withdraw: Cannot withdraw tokens! "

                    .concat("The amount requested to be withdrawn (").concat(amount.toString())

                    .concat(") is greater than the balance of the Vault (")

                    .concat(self.balance.toString()).concat(").")

            }

            self.balance = self.balance - amount

            return <-create Vault(balance: amount)

        }

  

        access(all) fun deposit(from: @Vault) {

            self.balance = self.balance + from.balance

            destroy from

        }

    }

  

    access(all) fun createEmptyVault(): @Vault {

        return <-create Vault(balance: 0.0)

    }

  

    access(all) fun vaultNotConfiguredError(address: Address): String {

        return "Could not borrow a collection reference to recipient's ExampleToken.Vault"

            .concat(" from the path ")

            .concat(ExampleToken.VaultPublicPath.toString())

            .concat(". Make sure account ")

            .concat(address.toString())

            .concat(" has set up its account ")

            .concat("with an ExampleToken Vault.")

    }

  

    access(all) resource VaultMinter {

        access(all) fun mintTokens(amount: UFix64, recipient: Capability<&{Receiver}>) {

            let recipientRef = recipient.borrow()

            ?? panic(ExampleToken.vaultNotConfiguredError(address: recipient.address))

  

            ExampleToken.totalSupply = ExampleToken.totalSupply + UFix64(amount)

            recipientRef.deposit(from: <-create Vault(balance: amount))

        }

    }

  

    init() {

        self.VaultStoragePath = /storage/CadenceFungibleTokenTutorialVault

        self.VaultPublicPath = /public/CadenceFungibleTokenTutorialReceiver

  

        self

            .account

            .storage

            .save(<-create VaultMinter(),

                to: /storage/CadenceFungibleTokenTutorialMinter

            )

  

        self.totalSupply = 0.0;

    }

}

  

Deploy the ExampleToken contract with account 0x06.

**Setting up an account transaction**

We'll now need to create several transactions and scripts to manage interactions with the vault. The first step is to set up a user's account. It needs to:

- Create an empty vault.
- Save that vault in the caller's storage.
- Issue a capability for the vault.
- Publish that capability.

You've already learned how to do everything you need for this, so you should be able to implement it on your own.

Implement the Set Up Account transaction. You should end up with something similar to:

import ExampleToken from 0x06

  

transaction {

    prepare(signer: auth(BorrowValue, IssueStorageCapabilityController, PublishCapability, SaveValue) &Account) {

        // You may wish to check if a vault already exists here

  

        let vaultA <- ExampleToken.createEmptyVault()

  

        signer.storage.save(<-vaultA, to: ExampleToken.VaultStoragePath)

  

        let receiverCap = signer.capabilities.storage.issue<&ExampleToken.Vault>(

            ExampleToken.VaultStoragePath

        )

  

        signer.capabilities.publish(receiverCap, at: ExampleToken.VaultPublicPath)

    }

}

  

**Minting tokens**

The next transaction is another one that you should be able to implement on your own. Give it a try, and check the solution if you need to. Your transaction should:

- Accept an Address for the recipient and an amount.
- Store transaction-level references to the VaultMinter and Receiver.
- Borrow a reference to the VaultMinter in the caller's storage.
- Get the recipient's Receiver capability.
- Use the above to call the mintTokens function in the minter.

Implement the Mint Tokens transaction. You should end up with something similar to:

import ExampleToken from 0x06

  

transaction(recipient: Address, amount: UFix64) {

    let mintingRef: &ExampleToken.VaultMinter

    var receiver: Capability<&{ExampleToken.Receiver}>

  

    prepare(signer: auth(BorrowValue) &Account) {

        self.mintingRef = signer.storage.borrow<&ExampleToken.VaultMinter>(from: /storage/CadenceFungibleTokenTutorialMinter)

            ?? panic(ExampleToken.vaultNotConfiguredError(address: recipient))

  

        let recipient = getAccount(recipient)

  

        // Consider further error handling if this fails

        self.receiver = recipient.capabilities.get<&{ExampleToken.Receiver}>

            (ExampleToken.VaultPublicPath)

  

    }

  

    execute {

        // Mint 30 tokens and deposit them into the recipient's Vault

        self.mintingRef.mintTokens(amount: 30.0, recipient: self.receiver)

  

        log("30 tokens minted and deposited to account "

            .concat(self.receiver.address.toString()))

    }

}

  

Test out your minting function by attempting to mint tokens to accounts that do and do not have vaults.

**Checking account balances**

You can mint tokens now. Probably. But it's hard to tell if you have a bug without a way to check an account's balance. You can do this with a script, using techniques you've already learned.

Write a script to check the balance of an address. It should accept an argument for an address. In this script, get and borrow a reference to that address's Vault from the VaultPublicPath, and return a nicely formatted string containing the balance.

You should end up with something similar to:

import ExampleToken from 0x06

  

access(all)

fun main(address: Address): String {

    let account = getAccount(address)

  

    let accountReceiverRef = account.capabilities.get<&{ExampleToken.Balance}>(ExampleToken.VaultPublicPath)

                            .borrow()

            ?? panic(ExampleToken.vaultNotConfiguredError(address: address))

  

    return("Balance for "

        .concat(address.toString())

        .concat(": ").concat(accountReceiverRef.balance.toString())

        )

}

  

**Transferring tokens**

Transferring tokens from one account to another takes a little more coordination and a more complex transaction. When an account wants to send tokens to a different account, the sending account calls their own withdraw function first, which subtracts tokens from their resource's balance and temporarily creates a new resource object that holds this balance.

1. Initialize a transaction-level variable to hold a temporary vault. Borrow a reference for the sender's vault with the Withdraw entitlement and send it to the temporary vault:  
    import ExampleToken from 0x06
2.   
    
3.   
    transaction(recipient: Address, amount: UFix64) {
4.   
        var temporaryVault: @ExampleToken.Vault
5.   
    
6.   
      prepare(signer: auth(BorrowValue) &Account) {
7.   
           let vaultRef = signer.storage.borrow<auth(ExampleToken.Withdraw) &ExampleToken.Vault>(
8.   
                   from: ExampleToken.VaultStoragePath)
9.   
                ?? panic(ExampleToken.vaultNotConfiguredError(address: signer.address))
10.   
    
11.   
           self.temporaryVault <- vaultRef.withdraw(amount: amount)
12.   
       }
13.   
    }
14.   
      
      
      
      
      
      
    The sending account then gets a reference to the recipient's published capability and calls the recipient account's deposit function, which literally moves the resource instance to the other account, adds the temporary vault's balance to their balance, and then destroys the used resource.
15. Use the execute phase to deposit the tokens in the temporaryVault into the recipient's vault:

execute{

    let receiverAccount = getAccount(recipient)

  

    let receiverRef = receiverAccount

        .capabilities

        .borrow<&ExampleToken.Vault>(ExampleToken.VaultPublicPath)

        ?? panic(ExampleToken.vaultNotConfiguredError(address: recipient))

  

       receiverRef.deposit(from: <-self.temporaryVault)

  

       log("Withdraw/Deposit succeeded!")

   }

  

The resource is destroyed by the deposit function. It needs to be destroyed because Cadence enforces strict rules around resource interactions. A resource can never be left hanging in a piece of code. It either needs to be explicitly destroyed or stored in an account's storage.

This rule ensures that resources, which often represent real value, do not get lost because of a coding error.

You'll notice that the arithmetic operations aren't explicitly protected against overflow or underflow:

self.balance = self.balance - amount

  

Cadence has built-in overflow and underflow protection, so it is not a risk. We are also using unsigned numbers in this example, so as mentioned earlier, the vault`s balance cannot go below 0.

Additionally, the requirement that an account contains a copy of the token's resource type in its storage ensures that funds cannot be lost by being sent to the wrong address.

If an address doesn't have the correct resource type imported, the transaction will revert, ensuring that transactions sent to the wrong address are not lost.

**DANGER**

Every Flow account is initialized with a default Flow Token Vault in order to pay for storage fees and transaction [fees](https://developers.flow.com/build/basics/fees.md#fees). If an address is in use, it will be able to accept Flow tokens, without a user or developer needing to take further action. If that account becomes lost, any tokens inside will be lost as well.

**Reviewing fungible tokens**

In this tutorial, you learned how to create a simplified version of fungible tokens on Flow. You build a vault [resource](https://cadence-lang.org/docs/language/resources) to safely store tokens inside the owner's storage, and use [interfaces](https://cadence-lang.org/docs/language/interfaces) to define and enforce the properties a vault should have. By using [interfaces](https://cadence-lang.org/docs/language/interfaces), your definition is flexible and composable. Other developers can use all or parts of these definitions to build new apps and contracts that are compatible with yours.

You also practiced writing transactions on your own, and learned some new techniques, such as writing error messages more easily, using paths stored in the contract, and separating different parts of the transaction into their appropriate sections — prepare and execute.

Now that you have completed the tutorial, you should be able to:

- Compare and contrast how tokens are stored in Flow Cadence compared to Ethereum.
- Utilize the UFix64 type to allow decimals without converting back and forth with 10^18.
- Implement a vault [resource](https://cadence-lang.org/docs/language/resources) to manage the functionality needed for fungible tokens.
- Use [interfaces](https://cadence-lang.org/docs/language/interfaces) to enforce the presence of specified functions and fields.
- Write transactions to transfer tokens safely from one account to another.
- Develop scripts to read account balances.
- Use preconditions and postconditions to perform checks before or after a function call completes.

If you're ready to try your hand at implementing a production-quality token, head over to the [Fungible Token Developer Guide](https://developers.flow.com/build/guides/fungible-token).

In the next tutorial, you'll combine the techniques and patterns you've learned for the classic challenge — building an NFT marketplace!

**Reference solution**

**WARNING**

You are not saving time by skipping the reference implementation. You'll learn much faster by doing the tutorials as presented!

Reference solutions are functional, but may not be optimal.

- [Reference Solution](https://play.flow.com/b0f19641-0831-4192-ae25-ae745b1cab55)

  

**Marketplace Setup**

**In the** [**Marketplace Tutorial**](https://cadence-lang.org/docs/tutorial/marketplace-compose)**, we're going to create a marketplace that uses both the fungible and non-fungible token (NFT) contracts that we have learned about in previous tutorials. First, you'll execute a series of transactions to set up the accounts that you'll need to complete the marketplace tutorial. Next, you'll build the marketplace itself.**

**WARNING**

**If you're farther along with your Cadence learning journey and found this page looking for a production-ready marketplace, check out the** [**NFTStorefront repo**](https://github.com/onflow/nft-storefront)**!**

**Objectives**

**In this tutorial, you'll simply execute transactions that you've already written and validate that the setup is complete. It's only necessary because the playground is not actually a blockchain, so the state is transient.**

**Getting started**

**Open the starter code for this tutorial in the Flow Playground:** [**play.flow.com/463a9a08-deb0-455a-b2ed-4583ea6dcb64**](https://play.flow.com/463a9a08-deb0-455a-b2ed-4583ea6dcb64)**.**

**Your goal for this exercise is to set up the ephemeral playground into the state the blockchain would be in when you begin building a marketplace. It's also a great chance to practice some of what you've learned already. You'll need to:**

- Deploy the NFT contract on account 0x06.
- Deploy the fungible token contract on account 0x07.
- Set up account 0x08 and 0x09 to handle NFTs and tokens compatible with the simplified contracts you've built.
- Give fungible tokens to 0x08.
- Give an NFT to 0x09.

**To start, you'll need to deploy some copies of the contracts you've built in the previous tutorials, and call transactions you've already built. For your convenience, they've been provided in the starter playground.**

1. Open the ExampleToken contract. This is the same contract from the fungible token tutorial.
2. Deploy the ExampleToken code to account 0x06.
3. Switch to the IntermediateNFT contract.
4. Deploy the NFT code to account 0x07 by selecting it as the deploying signer.

**Account setup transactions**

**Next, you'll need to execute transactions to set up accounts** 0x08 **and** 0x09 **to be able to work with the contracts for the marketplace. You've already built these transactions in previous exercises.**

**TIP**

**Remember: On Flow, accounts must maintain a balance of $FLOW proportional to the amount of storage the account is using. Furthermore, placing something in the storage of an account requires that the receiving account has a capability that can accept the asset type. As a result, accounts can not accept arbitrary data (including tokens!) from random contracts without first executing a transaction to allow it.**

**This might seem like a burden, but it's great! Thanks to this feature, one of the most common causes of burning assets is impossible on Flow. You can not send property to a random address — only those that know how to receive it!**

**NFT setup**

**Open the** NFT Setup **transaction:**

import IntermediateNFT from 0x07

  

transaction() {

  prepare(acct: auth(SaveValue, Capabilities) &Account) {

    // Create an empty NFT collection

    acct.storage.save(<-IntermediateNFT.createEmptyCollection(), to: IntermediateNFT.CollectionStoragePath)

  

    // Create a public capability for the Collection

    let cap = acct.capabilities.storage.issue<&IntermediateNFT.Collection>(IntermediateNFT.CollectionStoragePath)

    acct.capabilities.publish(cap, at: IntermediateNFT.CollectionPublicPath)

  }

  

  execute {

    log("Empty NFT Collection Created")

  }

}

  

**This transaction will:**

- prepare an account reference with permissions to create and save capabilities.
- Call createEmptyCollection() from the IntermediateNFT contract to create a collection.
- Create and publish public capabilities for the NFT collection.

**Run the transaction using** 0x08 **as the signer, then run it again for** 0x09**.**

**Fungible token setup**

**Open the** Fungible Token Setup **transaction:**

import ExampleToken from 0x06

  

transaction() {

    prepare(acct: auth(SaveValue, Capabilities) &Account) {

        // Create a vault and save it in account storage

        acct.storage.save(<-ExampleToken.createEmptyVault(), to: ExampleToken.VaultStoragePath)

  

        // Create and publish a receiver for the fungible tokens

        let cap = acct.capabilities.storage.issue<&ExampleToken.Vault>(

            ExampleToken.VaultStoragePath

        )

  

        acct.capabilities.publish(cap, at: ExampleToken.VaultPublicPath)

    }

  

    execute {

        log("Vault Created")

    }

}

  

**This transaction will:**

- Instantiate a constant for and borrow a reference to the ExampleToken contract.
- Create and add an empty ExampleToken vault.
- Add the Receiver [capability](https://cadence-lang.org/docs/language/capabilities) and [publish](https://cadence-lang.org/docs/language/accounts/capabilities#publishing-capabilities) it.

**Run the transaction using** 0x08 **as the signer, then run it again for** 0x09**.**

**Minting NFTs**

**Now that you've set up both accounts to be able to receive NFTs, it's time to give account** 0x08 **an NFT to sell to** 0x09**.**

**REMINDER**

**The** IntermediateNFT **contract allows anyone to freely mint NFTs. You wouldn't want this ability in production, but it is in here to streamline the tutorial.**

**You've already written a transaction to mint an NFT, so we've provided it here. You just need to call it:**

import IntermediateNFT from 0x07

  

transaction(description: String) {

    let receiverRef: &IntermediateNFT.Collection

  

    prepare(account: auth(BorrowValue) &Account) {

        self.receiverRef = account.capabilities

            .borrow<&IntermediateNFT.Collection>(IntermediateNFT.CollectionPublicPath)

            ?? panic(IntermediateNFT.collectionNotConfiguredError(address: account.address))

    }

  

    execute {

        let newNFT <- IntermediateNFT.mintNFT(description: description)

  

        self.receiverRef.deposit(token: <-newNFT)

  

        log("NFT Minted and deposited to minter's Collection")

    }

}

  

**Mint an NFT with account** 0x08**.**

**Minting fungible tokens**

**You've also set up both accounts to be able to receive non-fungible tokens from** ExampleToken**.**

**REMINDER**

**The** ExampleToken **contract only allows the owner of the contract to mint NFTs.**

**You've already written a transaction to mint fungible tokens, so we've provided it here. You just need to call it:**

import ExampleToken from 0x06

  

transaction(recipient: Address, amount: UFix64) {

    let mintingRef: &ExampleToken.VaultMinter

    var receiver: Capability<&{ExampleToken.Receiver}>

  

    prepare(signer: auth(BorrowValue) &Account) {

        self.mintingRef = signer.storage.borrow<&ExampleToken.VaultMinter>(from: /storage/CadenceFungibleTokenTutorialMinter)

            ?? panic(ExampleToken.vaultNotConfiguredError(address: recipient))

  

        let recipient = getAccount(recipient)

  

        // Consider further error handling if this fails

        self.receiver = recipient.capabilities.get<&{ExampleToken.Receiver}>

            (ExampleToken.VaultPublicPath)

  

    }

  

    execute {

        // Mint tokens and deposit them into the recipient's Vault

        self.mintingRef.mintTokens(amount: amount, recipient: self.receiver)

  

        log("Tokens minted and deposited to account "

            .concat(self.receiver.address.toString()))

    }

}

  

**Call** Mint Tokens **with account** 0x06 **as the signer to grant 40 tokens to** 0x09 **and 20 tokens to** 0x08**.**

**Validating the setup**

**We've provided a script called** Validate Setup **that you can use to make sure you've completed the setup correctly.**

**Run the** Validate Setup **script and resolve any issues.**

**The script should not panic, and you should see something like this output:**

...64807.OwnerInfo(acct8Balance: 40.00000000, acct9Balance: 40.00000000, acct8IDs: [1], acct9IDs: [])

  

**Conclusion**

**With your playground now in the correct state, you're ready to continue with the next tutorial.**

**Now that you have completed this tutorial, you are able to:**

- Set up accounts and deploy contracts required for a basic NFT marketplace on Flow.
- Configure account storage and capabilities for fungible and non-fungible tokens.
- Validate the correct setup of accounts and assets in preparation for marketplace operations.

**You do not need to open a new playground session for the marketplace tutorial. You can just continue using this one.**

**Reference solution**

**WARNING**

**You are not saving time by skipping to the reference implementation. You'll learn much faster by doing the tutorials as presented!**

**Reference solutions are functional, but may not be optimal.**

- [Reference Solution](https://play.flow.com/463a9a08-deb0-455a-b2ed-4583ea6dcb64)

  

**Marketplace**

In this tutorial, we're going to create a simplified marketplace that uses both the fungible and non-fungible token (NFT) contracts that we built in previous tutorials.

**WARNING**

This tutorial uses the simplified fungible and non-fungible tokens you built in this series. It is not suitable for production. If you're ready to build or work with a production-quality marketplace, check out the [NFT storefront repo](https://github.com/onflow/nft-storefront). This contract is already deployed to testnet and mainnet and can be used by anyone for any generic NFT sale!

Marketplaces are a popular application of blockchain technology and smart contracts. People with digital collectibles such as NFTs need to be able to buy and sell them — either with the network token or their fungible tokens.

More than just a convenience, marketplaces demonstrate one of the most compelling arguments for developing digital property on blockchains. In web 2, each developer needed to build their own bespoke systems for buying, selling, trading, and storing digital property. Onchain, if you build digital property that adheres to the appropriate standards, your digital collectibles, items, etc., will automatically appear on several marketplace apps built by experts in marketplaces who have made them the focus of their attention and business.

**Objectives**

After completing this tutorial, you'll be able to:

- Construct an NFT marketplace that allows users to buy and sell NFTs in exchange for $FLOW or your fungible token.
- Utilize [interfaces](https://cadence-lang.org/docs/language/interfaces), [resources](https://cadence-lang.org/docs/language/resources), and [capabilities](https://cadence-lang.org/docs/language/capabilities) to write composable code that takes advantage of resources built by others and allows others to build on your products.
- Construct and emit [events](https://cadence-lang.org/docs/language/events) to share contract actions and states with other apps and services

**Prerequisites**

To complete this tutorial, you must have completed the [Marketplace Setup Tutorial](https://cadence-lang.org/docs/tutorial/marketplace-setup). If you need to, you can start from the [Setup Reference Solution](https://play.flow.com/463a9a08-deb0-455a-b2ed-4583ea6dcb64), but you'll need to follow the [Marketplace Setup Tutorial](https://cadence-lang.org/docs/tutorial/marketplace-setup) to deploy the contracts and call the setup transactions.

**Building with composability**

Now that there are contracts deployed for both fungible and non-fungible tokens, we can build a marketplace that uses both. We've picked the words _there are_ in the prior sentence on purpose. It doesn't matter that you created these contracts. If they were deployed onchain, instead of in the ephemeral simulation in the playground, anyone could complete this tutorial to build a marketplace that works with your NFTs and tokens.

It's one of the most powerful and useful properties of building onchain and it's called _composability_ — the ability for developers to leverage shared resources, such as code, digital property, and user bases, and use them as building blocks for a new application.

This isn't an entirely new concept — we're used to reusing code, open source projects, etc. But the degree and scale are much higher. For example, if you're building an onchain version of a web forum, you don't need to do anything to allow your users to have a profile picture beyond allowing them to select which PFP they own from the list of PFP collections you choose to incorporate into your app.

You're happy because you get a solution that works for your users for minimal effort, and the PFP collection creator is happy because their work becomes more valuable and desirable the more places it can be used an seen. Everybody wins!

Flow is designed to enable composability through interfaces, resources and capabilities:

- [Interfaces](https://cadence-lang.org/docs/language/interfaces) allow projects to support any generic type as long as it supports a standard set of functionality specified by an interface.
- [Resources](https://cadence-lang.org/docs/language/resources) can be passed around and owned by accounts, contracts or even other resources, unlocking different use cases depending on where the resource is stored.
- [Capabilities](https://cadence-lang.org/docs/language/capabilities) allow exposing user-controlled sets of functionality and permissions through special objects that enforce strict security with Cadence's type system.

The combination of these features allow developers to do more with less, re-using known safe code and design patterns to create new, powerful, and unique interactions!

**Building a marketplace**

To create a marketplace, we need to integrate the functionality of both fungible and non-fungible tokens into a single contract that gives users control over their money and assets. To accomplish this, we'll create a composable smart contract.

**Marketplace design**

A traditional way to implement a marketplace is to have a central smart contract that users deposit their NFTs and their price into, and anyone can come by and buy the token for that price.

This approach is reasonable, but it centralizes the process and takes away options from the owners. A better option that's possible with Cadence is to allow users to maintain ownership of the NFTs that they are trying to sell while they are trying to sell them. Instead of taking a centralized approach, each user can list a sale from within their own account.

They'll do this by using a marketplace contract you'll build to store an instance of a @SaleCollection resource in their account storage.

Then, the seller, independently or through an app, can either provide a link to their sale to an application that can list it centrally on a website, or even to a central sale aggregator smart contract if they want the entire transaction to stay onchain.

**Validating setup**

If you haven't just completed the [Marketplace Setup](https://cadence-lang.org/docs/tutorial/marketplace-setup) tutorial, run the Validate Setup script to double-check that your contracts and accounts are in the correct state to begin building the marketplace.

**INFO**

Remember, we only need to do this again to ensure that the ephemeral state of the playground is set up correctly. Otherwise, you'd already have contracts and users with accounts that are configured ready to go.

The following output appears if your accounts are set up correctly:

s.8250c68d2bb3c5398d7f9eac7114a4ac1b7df1d0984d92058b9373f696a1d6a9.OwnerInfo(acct8Balance: 40.00000000, acct9Balance: 40.00000000, acct8IDs: [1], acct9IDs: [])

  

**Setting up an NFT marketplace**

Add a new contract called BasicMarketplace. It needs to import both of the existing contracts:

import ExampleToken from 0x06

import IntermediateNFT from 0x07

  

access(all) contract BasicMarketplace {

    // TODO

}

  

**INFO**

Remember, you don't need to own a contract to be able to import it or use any of its public functionality!

**Adding appropriate events**

As in Solidity, Cadence smart contracts can emit developer-defined [events](https://cadence-lang.org/docs/language/events) during execution, which can be used to log data that can be observed offchain. This can be used by frontends, and other apps or platforms, including block explorers and data aggregators, which can monitor the state of the contract and related NFTs.

Events in Cadence are declared in a similar fashion as functions, but they start with an access control declaration. The event keyword follows, then the name and parameters in parentheses. You can use most of the same types as functions, but you cannot use resources. Resources are moved when used as an argument, and using them and events don't have a method to put them somewhere else or destroy them.

access(all) event ForSale(id: UInt64, price: UFix64, owner: Address?)

access(all) event PriceChanged(id: UInt64, newPrice: UFix64, owner: Address?)

access(all) event NFTPurchased(id: UInt64, price: UFix64, seller: Address?, buyer: Address?)

access(all) event SaleCanceled(id: UInt64, seller: Address?)

  

We can anticipate that we'll want to emit events when users take standard actions with the contract, such as when NFTs are listed, purchased, the price is changed, or the sale is cancelled.

We're marking the addresses as optional, because there's some circumstances where an NFT might not have an owner, so those addresses would be nil.

**Creating a resource to put items up for sale**

Next, we need to configure a [resource](https://cadence-lang.org/docs/language/resources) that users can use to put their NFTs up for sale, and other users can use to then purchase those NFTs for fungible tokens. In it, you'll need to add:

- A [capability](https://cadence-lang.org/docs/language/capabilities) to access the owner's collection.
- A place to store the prices of NFTs for sale.
- A [capability](https://cadence-lang.org/docs/language/capabilities) to deposit tokens into the sellers vault when an NFT is purchased.

You'll also need functions to:

- Allow the owner to list an NFT for sale.
- Allow the owner to cancel a sale.
- Allow the owner to change the price.
- Allow a third party to buy the NFT, and deposit the purchase price in the seller's vault.

**Definition and initialization**

To define and initialize:

1. Create the resource definition:  
    access(all) resource SaleCollection  {
2.   
        // TODO
3.   
    }
4.   
      
      
      
      
      
      
    **REMINDER  
    **In this case, access(all) is giving public scope to the definition of the resource type, not any given instance of the resource or anything in one of those instances. It's good to make these public so that others can build contracts and apps that interact with yours.  
      
    
5. In it, add a variable to store a capability for the owner's collection with the ability to withdraw from the collection:  
    access(self) let ownerCollection: Capability<auth(ExampleNFT.Withdraw) &ExampleNFT.Collection>
6.   
      
      
      
      
      
      
    **REMINDER  
    **You'll get errors until after you write the init function and assign values to these properties.  
      
    
7. Add a dictionary to relate NFT ids to the sale price for that NFT:  
    access(self) let prices: {UInt64: UFix64}
8.   
      
      
      
      
      
      
    **REMINDER  
    **access(self) limits access to the resource itself, from within the resource.  
      
    
9. Add a variable to store a capability for a sellers fungible token vault's receiver:  
    access(account) let ownerVault: Capability<&{ExampleToken.Receiver}>
10.   
      
      
      
      
      
    

**Resource-owned capabilities**

You first learned about basic function and use of [capabilities](https://cadence-lang.org/docs/language/capabilities) in the [capabilities tutorial](https://cadence-lang.org/docs/tutorial/capabilities). They're links to private objects in account storage that specify and expose a subset of the resource they are linked to.

With the marketplace contract, we are utilizing a new feature of capabilities — they can be stored anywhere! Lots of functionality is contained within resources, and developers will sometimes want to be able to access some of the functionality of resources from within different resources or contracts.

We stored two different capabilities in the marketplace sale collection:

access(self) var ownerCollection: Capability<auth(ExampleNFT.Withdraw) &ExampleNFT.Collection>

access(account) let ownerVault: Capability<&{ExampleToken.Receiver}>

  

If an object like a contract or resource owns a capability, they can borrow a reference to that capability at any time to access that functionality without having to get it from the owner's account every time.

This is especially important if the owner wants to expose some functionality that is only intended for one person, meaning that the link for the capability is not stored in a public path.

We do that in this example, because the sale collection stores a capability that can access the withdraw functionality of the IntermediateNFT.Collection with the IntermediateNFT.Withdraw entitlement. It needs this because it withdraws the specified NFT in the purchase() method to send to the buyer.

It is important to remember that control of a capability does not equal ownership of the underlying resource. You can use the capability to access that resource's functionality, but you can't use it to fake ownership. You need the actual resource (identified by the prefixed @ symbol) to prove ownership.

Additionally, these capabilities can be stored anywhere, but if a user decides that they no longer want the capability to be used, they can revoke it by getting the controller for the capability from their account with the getControllers method and delete the capability with delete.

Here is an example that deletes all of the controllers for a specified storage path:

let controllers = self.account.capabilities.storage.getControllers(forPath: storagePath)

for controller in controllers {

    controller.delete()

}

  

After this, any capabilities that use that storage path are rendered invalid.

**Initializing the**

**Resource**

Initialize the resource with arguments for the capabilities needed from the account calling the create transaction.

In init, we can take advantage of [preconditions](https://cadence-lang.org/docs/language/functions#function-preconditions-and-postconditions) to make sure that the user has the appropriate capabilities needed to support this functionality by using [.check()](https://cadence-lang.org/docs/language/accounts/capabilities#checking-the-existence-of-public-capabilities) for the relevant capabilities.

You could use the pattern we've used before with errors, but since these won't be useful outside of init, we can also just include them inside it:

access(all) resource SaleCollection  {

    access(self) let ownerCollection: Capability<auth(IntermediateNFT.Withdraw) &IntermediateNFT.Collection>

    access(self) let prices: {UInt64: UFix64}

    access(account) let ownerVault: Capability<&{ExampleToken.Receiver}>

  

    init (ownerCollection: Capability<auth(IntermediateNFT.Withdraw) &IntermediateNFT.Collection>,

            ownerVault: Capability<&{ExampleToken.Receiver}>) {

  

        pre {

            // Check that the owner's collection capability is correct

            ownerCollection.check():

                "ExampleMarketplace.SaleCollection.init: "

                .concat("Owner's NFT Collection Capability is invalid! ")

                .concat("Make sure the owner has set up an `IntermediateNFT.Collection` ")

                .concat("in their account and provided a valid capability")

  

            // Check that the fungible token vault capability is correct

            ownerVault.check():

                "ExampleMarketplace.SaleCollection.init: "

                .concat("Owner's Receiver Capability is invalid! ")

                .concat("Make sure the owner has set up an `ExampleToken.Vault` ")

                .concat("in their account and provided a valid capability")

        }

        self.ownerCollection = ownerCollection

        self.ownerVault = ownerVault

        self.prices = {}

    }

}

  

**Owner functions**

Next, we can add the functions that allow the owner to manage their sales. For this, you'll need to first create an [entitlement](https://cadence-lang.org/docs/language/access-control#entitlements) to lock the functionality away so that only the owner can use it. Remember, entitlements are declared at the contract level:

// Existing events

access(all) event ForSale(id: UInt64, price: UFix64, owner: Address?)

access(all) event PriceChanged(id: UInt64, newPrice: UFix64, owner: Address?)

access(all) event NFTPurchased(id: UInt64, price: UFix64, seller: Address?, buyer: Address?)

access(all) event SaleCanceled(id: UInt64, seller: Address?)

  

// New entitlement

access(all) entitlement Owner

  

**INFO**

Strictly speaking, we're not actually going to use this entitlement. We're using it to "lock" the functionality, but we're not giving the entitlement to any other accounts. The owner doesn't need to use this "key" to unlock the functions limited with it — they automatically have access.

1. Add a function that the owner of the resource can use to list one of their tokens for sale, and emit an event that they've done so.
2. Use a precondition to return an error if they don't own the token they're trying to list. As before, this is probably the only place where this error will be useful, so it can be placed directly in the function:  
    access(Owner) fun listForSale(tokenID: UInt64, price: UFix64) {
3.   
        pre {
4.   
            self.ownerCollection.borrow()!.idExists(id: tokenID):
5.   
                "ExampleMarketplace.SaleCollection.listForSale: "
6.   
                .concat("Cannot list token ID ").concat(tokenID.toString())
7.   
                .concat(" . This NFT ID is not owned by the seller.")
8.   
                .concat("Make sure an ID exists in the sellers NFT Collection")
9.   
                .concat(" before trying to list it for sale")
10.   
       }
11.   
       // store the price in the price array
12.   
       self.prices[tokenID] = price
13.   
    
14.   
       emit ForSale(id: tokenID, price: price, owner: self.owner?.address)
15.   
    }
16.   
      
      
      
      
      
    
17. Add a function to allow changing the price. It should also emit the appropriate event:  
    access(Owner) fun changePrice(tokenID: UInt64, newPrice: UFix64) {
18.   
        self.prices[tokenID] = newPrice
19.   
    
20.   
        emit PriceChanged(id: tokenID, newPrice: newPrice, owner: self.owner?.address)
21.   
    }
22.   
      
      
      
      
      
    
23. Add a function that allows the owner to cancel their sale. You don't need to do anything with the token itself, as it hasn't left the owners account:  
    access(Owner) fun cancelSale(tokenID: UInt64) {
24.   
        // remove the price
25.   
        self.prices.remove(key: tokenID)
26.   
        self.prices[tokenID] = nil
27.   
    
28.   
        // Nothing needs to be done with the actual token because it is already in the owner's collection
29.   
    }
30.   
      
      
      
      
      
    

**INFO**

Solidity devs, take note here! In Cadence, you can build an NFT marketplace without needing to transfer NFTs to a third party or needing to give a third party permission to take the NFT.

**Purchasing an NFT**

Now, you need to add a function that anyone can call and use to purchase the NFT. It needs to accept arguments for:

- The token to be purchased.
- The recipient's collection that is going to receive the NFT.
- A vault containing the purchase price.

access(all) fun purchase(

        tokenID: UInt64,

        recipient: Capability<&IntermediateNFT.Collection>, buyTokens: @ExampleToken.Vault

    ) {

    // TODO

}

  

**WARNING**

You are not providing the purchaser's vault here — that's an anti-pattern. Instead, create a temporary vault and use that to transfer the tokens.

You'll also want to use preconditions to check and provide errors as appropriate for:

- The NFT with the provided ID is for sale.
- The buyer has included the correct amount of tokens in the provided vault.
- The buyer has the collection capability needed to receive the NFT.

pre {

    self.prices[tokenID] != nil:

        "ExampleMarketplace.SaleCollection.purchase: "

        .concat("Cannot purchase NFT with ID ")

        .concat(tokenID.toString())

        .concat(" There is not an NFT with this ID available for sale! ")

        .concat("Make sure the ID to purchase is correct.")

    buyTokens.balance >= (self.prices[tokenID] ?? 0.0):

        "ExampleMarketplace.SaleCollection.purchase: "

        .concat(" Cannot purchase NFT with ID ")

        .concat(tokenID.toString())

        .concat(" The amount provided to purchase (")

        .concat(buyTokens.balance.toString())

        .concat(") is less than the price of the NFT (")

        .concat(self.prices[tokenID]!.toString())

        .concat("). Make sure the ID to purchase is correct and ")

        .concat("the correct amount of tokens have been used to purchase.")

    recipient.borrow != nil:

        "ExampleMarketplace.SaleCollection.purchase: "

        .concat(" Cannot purchase NFT with ID ")

        .concat(tokenID.toString())

        .concat(". The buyer's NFT Collection Capability is invalid.")

}

  

Assuming these checks all pass, your function then needs to:

- Get a reference of the price of the token then clear it.
- Get a reference to the owner's vault and deposit the tokens from the transaction vault.
- Get a reference to the NFT receiver for the buyer.
- Deposit the NFT into the buyer's collection.
- Emit the appropriate event.

// get the value out of the optional

let price = self.prices[tokenID]!

  

self.prices[tokenID] = nil

  

let vaultRef = self.ownerVault.borrow()

    ?? panic("Could not borrow reference to owner token vault")

  

// deposit the purchasing tokens into the owners vault

vaultRef.deposit(from: <-buyTokens)

  

// borrow a reference to the object that the receiver capability links to

// We can force-cast the result here because it has already been checked in the pre-conditions

let receiverReference = recipient.borrow()!

  

// deposit the NFT into the buyers collection

receiverReference.deposit(token: <-self.ownerCollection.borrow()!.withdraw(withdrawID: tokenID))

  

emit NFTPurchased(id: tokenID, price: price, seller: self.owner?.address, buyer: receiverReference.owner?.address)

  

The full function should be similar to:

// purchase lets a user send tokens to purchase an NFT that is for sale

access(all) fun purchase(tokenID: UInt64,

                            recipient: Capability<&IntermediateNFT.Collection>, buyTokens: @ExampleToken.Vault) {

    pre {

        self.prices[tokenID] != nil:

            "ExampleMarketplace.SaleCollection.purchase: "

            .concat("Cannot purchase NFT with ID ")

            .concat(tokenID.toString())

            .concat(" There is not an NFT with this ID available for sale! ")

            .concat("Make sure the ID to purchase is correct.")

        buyTokens.balance >= (self.prices[tokenID] ?? 0.0):

            "ExampleMarketplace.SaleCollection.purchase: "

            .concat(" Cannot purchase NFT with ID ")

            .concat(tokenID.toString())

            .concat(" The amount provided to purchase (")

            .concat(buyTokens.balance.toString())

            .concat(") is less than the price of the NFT (")

            .concat(self.prices[tokenID]!.toString())

            .concat("). Make sure the ID to purchase is correct and ")

            .concat("the correct amount of tokens have been used to purchase.")

        recipient.borrow != nil:

            "ExampleMarketplace.SaleCollection.purchase: "

            .concat(" Cannot purchase NFT with ID ")

            .concat(tokenID.toString())

            .concat(". The buyer's NFT Collection Capability is invalid.")

    }

  

    let price = self.prices[tokenID]!

    self.prices[tokenID] = nil

  

    let vaultRef = self.ownerVault.borrow()

        ?? panic("Could not borrow reference to owner token vault")

    vaultRef.deposit(from: <-buyTokens)

  

    // borrow a reference to the object that the receiver capability links to

    // We can force-cast the result here because it has already been checked in the pre-conditions

    let receiverReference = recipient.borrow()!

  

    receiverReference.deposit(token: <-self.ownerCollection.borrow()!.withdraw(withdrawID: tokenID))

  

    emit NFTPurchased(id: tokenID, price: price, seller: self.owner?.address, buyer: receiverReference.owner?.address)

}

  

**Views**

Finally, add a couple of views so that others can read the prices for NFTs and which ones are for sale:

access(all) view fun idPrice(tokenID: UInt64): UFix64? {

    return self.prices[tokenID]

}

  

access(all) view fun getIDs(): [UInt64] {

    return self.prices.keys

}

  

**Creating a**

**SaleCollection**

Last, but not least, you need to add a contract-level function that allows users to create their own SaleCollection resource. It needs to accept the same arguments as the init for the resource, pass them into the create call, and return the newly-created resource:

**WARNING**

Make sure you don't accidentally put this function inside the SaleCollection resource!

access(all) fun createSaleCollection(

    ownerCollection: Capability<auth(IntermediateNFT.Withdraw) &IntermediateNFT.Collection>,

    ownerVault: Capability<&{ExampleToken.Receiver}>

): @SaleCollection

{

    return <- create SaleCollection(ownerCollection: ownerCollection, ownerVault: ownerVault)

}

  

**Marketplace contract summary**

That's it! You've completed the contract needed to allow anyone who owns the NFTs and fungible tokens you've created to sell one, accepting payment in the other! This marketplace contract has resources that function similarly to the NFT Collection you built in [Non-Fungible Tokens](https://cadence-lang.org/docs/tutorial/non-fungible-tokens-1), with a few differences and additions.

This marketplace contract has methods to add and remove NFTs, but instead of storing the NFT resource object in the sale collection, the user provides a capability to their main collection that allows the listed NFT to be withdrawn and transferred when it is purchased. When a user wants to put their NFT up for sale, they do so by providing the ID and the price to the listForSale() function.

Then, another user can call the purchase() function, sending an ExampleToken.Vault that contains the currency they are using to make the purchase. The buyer also includes a capability to their NFT ExampleNFT.Collection so that the purchased token can be immediately deposited into their collection when the purchase is made.

The owner of the sale saves a capability to their Fungible Token Receiver within the sale. This allows the sale resource to be able to immediately deposit the currency that was used to buy the NFT into the owners Vault when a purchase is made.

Finally, a marketplace contract includes appropriate events that are emitted when important actions happen. External apps can monitor these events to know the state of the smart contract.

**Deployment**

Deploy the marketplace contract with account 0x0a.

**Using the marketplace**

Now that you've set up your user accounts, and deployed the contracts for the NFT, fungible token, and marketplace, it's time to write a few transactions to tie everything together.

**INFO**

One of the most useful features of Cadence is that transactions are code written in Cadence. You can use this to add functionality after deploying your contracts — you're not limited to only the functions you thought of when you wrote the contract.

**Building a transaction to create a sale**

Now it's time to write a transaction to create a SaleCollection and list account 0x08's token for sale.

**TIP**

Depending on your app design, you might want to break these steps up into separate transactions to set up the the SaleCollection and add an NFT to it.

1. Import the three contracts and add a prepare statement with auth to SaveValue, StorageCapabilities, and PublishCapability:  
    import ExampleToken from 0x06
2.   
    import IntermediateNFT from 0x07
3.   
    import BasicMarketplace from 0x0a
4.   
    
5.   
    transaction {
6.   
        prepare(acct: auth(SaveValue, StorageCapabilities, PublishCapability) &Account) {
7.   
            // TODO
8.   
        }
9.   
    }
10.   
      
      
      
      
      
    
11. Complete the following in prepare:

- Borrow a reference to the user's vault.
- Create an entitled capability to the user's NFT collection.
- Use these to to create a SaleCollection and store it in a constant.

13. let receiver = acct.capabilities.get<&{ExampleToken.Receiver}>(ExampleToken.VaultPublicPath)
14.   
    let collectionCapability = acct.capabilities.storage.issue
15.   
                                <auth(IntermediateNFT.Withdraw) &IntermediateNFT.Collection>
16.   
                                (IntermediateNFT.CollectionStoragePath)
17.   
    let sale <- BasicMarketplace.createSaleCollection(ownerCollection: collectionCapability, ownerVault: receiver)
18.   
      
      
      
      
      
    
19. Use your sale instance of the collection to create a sale. Afterwards, move (<-) it into account storage:  
    sale.listForSale(tokenID: 1, price: 10.0)
20.   
    acct.storage.save(<-sale, to: /storage/NFTSale)
21.   
      
      
      
      
      
      
    **TIP  
    **You might be tempted to change the order here to handle creating the SaleCollection and storing it first, then using it to create a sale.  
    This won't work because resources can only be moved — they can't be copied. Once you move (<-) sale to storage, sale is no longer usable.  
      
    
22. Create and publish a public capability so that others can use the public functions of this resource to find and purchase NFTs:  
    let publicCap = acct.capabilities.storage.issue<&BasicMarketplace.SaleCollection>(/storage/NFTSale)
23.   
    acct.capabilities.publish(publicCap, at: /public/NFTSale)
24.   
      
      
      
      
      
    
25. Call the transaction with account 0x08.

**Checking for NFTs to purchase**

Let's create a script to ensure that the sale was created correctly:

1. Add a new one called GetSaleIDsAndPrices.
2. Import the contracts and stub out a script that accepts an Address as an argument and returns a UInt64 array:  
    import ExampleToken from 0x06
3.   
    import IntermediateNFT from 0x07
4.   
    import BasicMarketplace from 0x0a
5.   
    
6.   
    access(all)
7.   
    fun main(address: Address): [UInt64] {
8.   
       // TODO
9.   
    }
10.   
      
      
      
      
      
    
11. In the script:

- Use the address to get a public account object for that address.
- Attempt to borrow a reference to the public capability for the SaleCollection in that account:

- Panic and return an error if it's not found.
- Call getIDs if it is, and return the list of NFTs for sale.

13. import ExampleToken from 0x06
14.   
    import IntermediateNFT from 0x07
15.   
    import BasicMarketplace from 0x0a
16.   
    
17.   
    access(all)
18.   
    fun main(address: Address): [UInt64] {
19.   
    
20.   
        let account = getAccount(address)
21.   
    
22.   
        let saleRef = account.capabilities.borrow<&BasicMarketplace.SaleCollection>(/public/NFTSale)
23.   
            ?? panic("Could not borrow a reference to the SaleCollection capability for the address provided")
24.   
    
25.   
        return saleRef.getIDs()
26.   
    }
27.   
      
      
      
      
      
    
28. Run the script. You should be part of the way there:  
    [1]
29.   
      
      
      
      
      
      
    The script returns an array containing the one NFT for sale, but what about the prices? We added a function to return the price of a given NFT, but not a list or array.  
    We could update the contract since we own it (another power of Cadence), but even if we didn't, we could always add functionality via a script.
30. Update your script to create a struct to return the data in, then fetch the list of IDs, loop through them to get the prices, and return an array with the prices:  
    import ExampleToken from 0x06
31.   
    import IntermediateNFT from 0x07
32.   
    import BasicMarketplace from 0x0a
33.   
    
34.   
    access(all) struct Pair {
35.   
        access(all) let id: UInt64
36.   
        access(all) let value: UFix64
37.   
    
38.   
        init(id: UInt64, value: UFix64) {
39.   
            self.id = id
40.   
            self.value = value
41.   
        }
42.   
    }
43.   
    
44.   
    access(all)
45.   
    fun main(address: Address): [Pair] {
46.   
    
47.   
        let account = getAccount(address)
48.   
    
49.   
        let saleRef = account.capabilities.borrow<&BasicMarketplace.SaleCollection>(/public/NFTSale)
50.   
            ?? panic("Could not borrow a reference to the SaleCollection capability for the address provided")
51.   
    
52.   
        let ids = saleRef.getIDs()
53.   
    
54.   
        let pricePairs: [Pair] = []
55.   
    
56.   
        for id in ids {
57.   
            let pair = Pair(id: id, value: saleRef.idPrice(tokenID: id) ?? 0.0)
58.   
            pricePairs.append(pair)
59.   
        }
60.   
    
61.   
        return pricePairs
62.   
    }
63.   
      
      
      
      
      
    

**Purchasing an NFT**

Finally, you can add a transaction that a buyer can use to purchase the seller's NFT with their fungible tokens.

1. Create a transaction called PurchaseNFT, import the contract, and stub it out:  
    import ExampleToken from 0x06
2.   
    import IntermediateNFT from 0x07
3.   
    import BasicMarketplace from 0x0a
4.   
    
5.   
    transaction(sellerAddress: Address, tokenID: UInt64, price: UFix64) {
6.   
    
7.   
        let collectionCapability: Capability<&IntermediateNFT.Collection>
8.   
        let temporaryVault: @ExampleToken.Vault
9.   
    
10.   
        prepare(acct: auth(BorrowValue) &Account) {
11.   
            // TODO
12.   
        }
13.   
    
14.   
        execute {
15.   
            // TODO
16.   
        }
17.   
    }
18.   
      
      
      
      
      
    
19. Complete the following in prepare:

- get the collectionCapability for the caller's NFT collection.
- borrow an authorized reference to the buyers token vault.
- Withdraw the purchase price from the buyers vault and move (<-) it into the temporary vault.

21. self.collectionCapability = acct.capabilities.get<&IntermediateNFT.Collection>(IntermediateNFT.CollectionPublicPath)
22.   
    
23.   
    let vaultRef = acct
24.   
        .storage.borrow<auth(ExampleToken.Withdraw) &ExampleToken.Vault>(from: /storage/CadenceFungibleTokenTutorialVault)
25.   
        ?? panic("Could not borrow a reference to "
26.   
                     .concat("ExampleToken.Vault")
27.   
                     .concat(". Make sure the user has set up an account ")
28.   
                     .concat("with an ExampleToken Vault and valid capability."))
29.   
    
30.   
    self.temporaryVault <- vaultRef.withdraw(amount: price)
31.   
      
      
      
      
      
    
32. Complete the following in execute:

- Get a reference to the public account for the sellerAddress.
- borrow a reference to the seller's SaleCollection.
- Call purchase with the tokenID, buyers collection capability, and the temporary vault.

34. let seller = getAccount(sellerAddress)
35.   
    
36.   
    let saleRef = seller.capabilities.get<&BasicMarketplace.SaleCollection>(/public/NFTSale)
37.   
                        .borrow()
38.   
        ?? panic("Could not borrow a reference to "
39.   
                     .concat("the seller's ExampleMarketplace.SaleCollection")
40.   
                     .concat(". Make sure the seller has set up an account ")
41.   
                     .concat("with an ExampleMarketplace SaleCollection and valid capability."))
42.   
    
43.   
    saleRef.purchase(tokenID: tokenID, recipient: self.collectionCapability, buyTokens: <-self.temporaryVault)
44.   
      
      
      
      
      
    
45. Call the transaction with account 0x09 to purchase the token with id 1 from 0x08 for 10.0 tokens.

**Verifying the NFT was purchased correctly**

You've already written the scripts you need to check for NFT ownership and token balances. Copy them over from your earlier projects, or use the ones below:

import ExampleToken from 0x06

  

access(all)

fun main(address: Address): String {

    let account = getAccount(address)

  

    let accountReceiverRef = account.capabilities.get<&{ExampleToken.Balance}>(ExampleToken.VaultPublicPath)

                            .borrow()

            ?? panic(ExampleToken.vaultNotConfiguredError(address: address))

  

    return("Balance for "

        .concat(address.toString())

        .concat(": ").concat(accountReceiverRef.balance.toString())

        )

}

  

import IntermediateNFT from 0x07

  

access(all) fun main(address: Address): [UInt64] {

    let nftOwner = getAccount(address)

  

    let capability = nftOwner.capabilities.get<&IntermediateNFT.Collection>(IntermediateNFT.CollectionPublicPath)

  

    let receiverRef = nftOwner.capabilities

        .borrow<&IntermediateNFT.Collection>(IntermediateNFT.CollectionPublicPath)

        ?? panic(IntermediateNFT.collectionNotConfiguredError(address: address))

  

  

    log("Account "

      .concat(address.toString())

      .concat(" NFTs")

    )

  

    return receiverRef.getIDs()

}

  

**Creating a marketplace for any generic NFT**

The previous examples show how a simple marketplace can be created for a specific class of NFTs. However, users will want to have a marketplace where they can buy and sell any NFT they want, regardless of its type.

To learn more about a completely decentralized example of a generic marketplace, check out the [NFT storefront repo](https://github.com/onflow/nft-storefront). This contract is already deployed to testnet and mainnet and can be used by anyone for any generic NFT sale!

**Accepting payment in $FLOW**

What about accepting payment in the network token, [$FLOW](https://developers.flow.com/build/core-contracts/flow-token)? We can't quite update this simplified marketplace to accept it, but it's actually quite simple to do so because the network token follows the [Flow Fungible Token standard](https://github.com/onflow/flow-ft).

In other words, if you configure your marketplace to accept any token that follows the full standard, it will also be able to use the Flow token!

**Conclusion**

In this tutorial, you constructed a simplified NFT marketplace on Flow using the composability of Cadence resources, interfaces, and capabilities. You learned how to:

- Build a marketplace contract that allows users to list, buy, and sell NFTs in exchange for fungible tokens.
- Leverage capabilities and entitlements to securely manage access and transfers.
- Emit and observe events to track marketplace activity.
- Write and execute transactions and scripts to interact with the marketplace and verify asset ownership and balances.

By completing this tutorial, you are now able to:

- Construct composable smart contracts that integrate multiple token standards.
- Implement secure and flexible resource management using Cadence's type system.
- Develop and test end-to-end flows for NFT sales and purchases on Flow.

If you're ready to take your skills further, explore the [NFT storefront repo](https://github.com/onflow/nft-storefront) for a production-ready, generic NFT marketplace, or try extending your marketplace to support additional features and token types!

**Reference solution**

**WARNING**

You are not saving time by skipping the reference implementation. You'll learn much faster by doing the tutorials as presented!

Reference solutions are functional, but may not be optimal.

- [Reference Solution](https://play.flow.com/d8906744-aa9b-4323-9f72-ccf78ab8e4b2)

  

**Voting Contract**

**In this tutorial, we're going to deploy a contract that allows users to vote on multiple proposals that a voting administrator controls.**

  

**With the advent of blockchain technology and smart contracts, it has become popular to try to create decentralized voting mechanisms that allow large groups of users to vote completely on chain. This tutorial will provide an example for how this might be achieved by using a resource-oriented programming model.**

**We'll take you through these steps to get comfortable with the Voting contract.**

1. Deploy the contract to account 0x06
2. Create proposals for users to vote on
3. Use a transaction with multiple signers to directly transfer the Ballot resource to another account.
4. Record and cast your vote in the central Voting contract
5. Read the results of the vote

**Open the starter code for this tutorial in the** [**Flow Playground**](https://play.flow.com/e8e2af39-370d-4a52-9f0b-bfb3b12c7eff)

**A Voting Contract in Cadence**

**In this contract, a Ballot is represented as a resource.**

**An administrator can give Ballots to other accounts, then those accounts mark which proposals they vote for and submit the Ballot to the central smart contract to have their votes recorded.**

**Using a** [**resource**](https://cadence-lang.org/docs/language/resources) **type is logical for this application, because if a user wants to delegate their vote, they can send that Ballot to another account, and the use case of voting ballots benefits from the uniqueness and existence guarantees inherent to resources.**

**Write the Contract**

**Open Contract 1 - the** ApprovalVoting **contract. Follow the instructions in the comments of the contract to write your own approval voting contract.**

**Instructions for transactions are also included in the sample transactions.**

  

  

  

  

  

ApprovalVoting.cdc

  

  

/*

*

*   In this example, we want to create a simple approval voting contract

*   where a polling place issues ballots to addresses.

*

*   The run a vote, the Admin deploys the smart contract,

*   then initializes the proposals

*   using the initialize_proposals.cdc transaction.

*   The array of proposals cannot be modified after it has been initialized.

*

*   Then they will give ballots to users by

*   using the issue_ballot.cdc transaction.

*

*   Every user with a ballot is allowed to approve any number of proposals.

*   A user can choose their votes and cast them

*   with the cast_vote.cdc transaction.

*

*.  See if you can code it yourself!

*

*/

  

access(all)

contract ApprovalVoting {

  

    // Field: An array of strings representing proposals to be approved

  

    // Field: A dictionary mapping the proposal index to the number of votes per proposal

  

    // Entitlement: Admin entitlement that restricts the privileged fields

    // of the Admin resource

  

    // Resource: Ballot resource that is issued to users.

    // When a user gets a Ballot object, they call the `vote` function

    // to include their votes for each proposal, and then cast it in the smart contract

    // using the `cast` function to have their vote included in the polling

    // Remember to track which proposals a user has voted yes for in the Ballot resource

    // and remember to include proper pre and post conditions to ensure that no mistakes are made

    // when a user submits their vote

    access(all) resource Ballot {

  

    }

  

    // Resource: Administrator of the voting process

    // initialize the proposals and to provide a function for voters

    // to get a ballot resource

    // Remember to include proper conditions for each function!

    // Also make sure that the privileged fields are secured with entitlements!

    access(all) resource Administrator {

  

    }

  

    // Public function: A user can create a capability to their ballot resource

    // and send it to this function so its votes are tallied

    // Remember to include a provision so that a ballot can only be cast once!

  

    // initialize the contract fields by setting the proposals and votes to empty

    // and create a new Admin resource to put in storage

    init() {

  

    }

}

**Deploy the Contract**

1. In the bottom right deployment modal, press the arrow to expand and make sure account 0x06 is selected as the signer.
2. Click the Deploy button to deploy it to account 0x06

**Perform Voting**

**Performing the common actions in this voting contract only takes three types of transactions.**

1. Initialize Proposals
2. Send Ballot to a voter
3. Cast Vote

**We have a transaction for each step that we provide a skeleton of for you. With the** ApprovalVoting **contract deployed to account** 0x06**:**

1. Open Transaction 1 which should have Create Proposals
2. Submit the transaction with account 0x06 selected as the only signer.

  

  

  

  

  

CreateProposals.cdc

  

  

import ApprovalVoting from 0x06

  

// This transaction allows the administrator of the Voting contract

// to create new proposals for voting and save them to the smart contract

  

transaction {

    // Fill in auth() with the correct entitlements you need!

    prepare(admin: auth()) {

  

        // borrow a reference to the admin Resource

        // remember to use descriptive error messages!

  

        // Call the initializeProposals function

        // to create the proposals array as an array of strings

        // Maybe we could create two proposals for the local basketball league:

        // ["Longer Shot Clock", "Trampolines instead of hardwood floors"]

  

        // Issue and public a public capability to the Administrator resource

        // so that voters can get their ballots!

    }

  

    post {

        // Verify that the proposals were initialized properly

    }

  

}

**This transaction allows the** Administrator **of the contract to create new proposals for voting and save them to the smart contract. They do this by calling the** initializeProposals **function on their stored** Administrator **resource, giving it two new proposals to vote on. We use the** post **block to ensure that there were two proposals created, like we wished for.**

**Next, the** Administrator **needs to hand out** Ballot**s to the voters. There isn't an easy** deposit **function this time for them to send a** Ballot **to another account, so how would they do it?**

**Putting Resource Creation in public capabilities**

**Unlike our other tutorial contracts, the Approval Voting contract puts its Ballot creation function in a resource instead of as a public function in a contract.**

**This way, the admin can control who can and cannot create a Ballot resource. There are also ways to consolidate all of the voting logic into the Admin resource so that there can be multiple sets of proposals being voted on at the same time without having to deploy a new contract for each one!**

**Here, we're just exposing the create ballot function through a public capability for simplicity, so lets use the transaction for a voter to create a ballot.**

1. Open the Create Ballot transaction.
2. Select account 0x07 as a signer.
3. Submit the transaction by clicking the Send button

  

  

  

  

  

CreateBallot.cdc

  

  

  

import ApprovalVoting from 0x06

  

// This transaction allows a user

// to create a new ballot and store it in their account

// by calling the public function on the Admin resource

// through its public capability

  

transaction {

    // fill in the correct entitlements!

    prepare(voter: auth() &Account) {

  

        // Get the administrator's public account object

        // and borrow a reference to their Administrator resource

  

        // create a new Ballot by calling the issueBallot

        // function of the admin Reference

  

        // store that ballot in the voter's account storage

    }

}

**After this transaction, account** 0x07 **should now have a** Ballot **resource object in its account storage. You can confirm this by selecting** 0x07 **from the lower-left sidebar and seeing** Ballot **resource listed under the** Storage **field.**

**Casting a Vote**

**Now that account** 0x07 **has a** Ballot **in their storage, they can cast their vote. To do this, they will call the** vote **method on their stored resource, then cast that** Ballot **by passing it to the** cast **function in the main smart contract.**

1. Open the Cast Ballot transaction.
2. Select account 0x07 as the only transaction signer.
3. Click the send button to submit the transaction.

  

  

  

  

  

CastBallot.cdc

  

  

import ApprovalVoting from 0x06

  

// This transaction allows a voter to select the votes they would like to make

// and cast that vote by using the cast vote function

// of the ApprovalVoting smart contract

  

transaction {

    // fill in the correct entitlements!

    prepare(voter: auth() &Account) {

  

        // Borrow a reference to the Ballot resource in the Voter's storage

  

        // Vote on the proposal

  

        // Issue a capability to the Ballot resource in the voter's storage

  

        // Cast the vote by submitting it to the smart contract

    }

  

    post {

        // verify that the votes were cast properly

    }

}

**In this transaction, the user votes for one of the proposals by submitting their votes on their own ballot and then sending the capability.**

**Reading the result of the vote**

**At any time, anyone could read the current tally of votes by directly reading the fields of the contract. You can use a script to do that, since it does not need to modify storage.**

1. Open the Get Votes script.
2. Click the execute button to run the script.

  

  

  

  

  

GetVotes.cdc

  

  

import ApprovalVoting from 0x06

  

// This script allows anyone to read the tallied votes for each proposal

//

  

// Fill in a return type that can properly represent the number of votes

// for each proposal

// This might need a custom struct to represent the data

access(all) fun main(): {

  

    // Access the public fields of the contract to get

    // the proposal names and vote counts

  

    // return them to the calling context

  

}

**The return type should reflect the number of votes that were cast for each proposal with the** Cast Vote **transaction.**

**Other Voting possibilities**

**This contract was a very simple example of voting in Cadence. It clearly couldn't be used for a real-world voting situation, but hopefully you can see what kind of features could be added to it to ensure practicality and security.**

  

**Syntax and Glossary**

This comprehensive glossary provides detailed explanations and code examples for the most important syntax, symbols, operators, keywords, functions, and concepts in Cadence. Each entry includes a clear description of the feature's purpose, usage patterns, and common scenarios, helping both new and experienced developers quickly understand Cadence's unique resource-oriented programming model.

Use this guide as a complete reference to navigate Cadence's syntax, resource management, access control, and blockchain-specific features.

**Comments**

Comments can be used to document code. A comment is text that is not executed.

_Single-line comments_ start with two slashes (//). These comments can go on a line by themselves, or they can go directly after a line of code:

// This is a comment on a single line.

// Another comment line that is not executed.

  

let x = 1  // Here is another comment after a line of code.

  

_Multi-line comments_ start with a slash and an asterisk (/*) and end with an asterisk and a slash (*/):

/* This is a comment which

spans multiple lines. */

  

Comments may be nested:

/* /* this */ is a valid comment */

  

Multi-line comments are balanced:

/* this is a // comment up to here */ this is not part of the comment */

  

**Documentation comments**

Documentation comments (also known as _doc-strings_ or _doc-comment_) are a special set of comments that can be processed by tools (e.g., to generate human-readable documentation or provide documentation in an IDE).

Doc-comments either start with three slashes (///) on each line or are surrounded by /** and **/:

/// This is a documentation comment for `x`.

/// It spans multiple lines.

  

let x = 1

  

/**

  This is a documentation comment

  which also spans multiple lines.

**/

  

**Identifiers**

Identifiers can start with any upper or lowercase letter (A-Z, a-z) or an underscore (_). This may be followed by zero or more upper and lower case letters, underscores, and numbers (0-9). Identifiers can not begin with a number:

// Valid: title-case

//

PersonID

  

// Valid: with underscore

//

token_name

  

// Valid: leading underscore and characters

//

_balance

  

// Valid: leading underscore and numbers

_8264

  

// Valid: characters and number

//

account2

  

// Invalid: leading number

//

1something

  

// Invalid: invalid character #

_#1

  

// Invalid: various invalid characters

//

!@#$%^&*

  

**Reserved identifiers**

The following identifiers are reserved, as they are keywords of the language:

- if, else, while, for, in, as
- break, continue, return
- true, false, nil
- let, var
- create, destroy, emit
- fun, pre, post,
- auth, access
- self, init
- contract, event, struct, resource, interface, entitlement, enum, mapping, attachment, result
- transaction, prepare, execute
- switch, case, default
- import, include
- require, requires, static, native, pub, priv, try, catch, finally, goto, const, export, throw, throws, where, final, internal, typealias, repeat, guard, is

**Conventions**

By convention, variables, constants, and functions have lowercase identifiers, and types have title-case identifiers.

**Symbols and operators**

**&**

**(ampersand)**

The & (ampersand) symbol creates [references](https://cadence-lang.org/docs/language/references) to values in Cadence, allowing you to access data without moving it. When used at the beginning of an expression, it creates a reference to a value, which can be either authorized (with the auth modifier) or unauthorized. Authorized references include entitlements that specify what operations can be performed on the referenced value, while unauthorized references provide read-only access. The ampersand is also used in [logical AND operations](https://cadence-lang.org/docs/language/operators/arithmetic-logical-operators#logical-operators) when doubled (&&), allowing boolean expressions to be combined with short-circuit evaluation.

let a: String = "hello"

let refOfA: &String = &a as &String

let authRef: auth(X) &String = &a as auth(X) &String

let result = true && false // logical AND

  

**@**

**(at symbol)**

The @ (at) symbol is a crucial resource type annotation in Cadence that indicates a type is a [resource](https://cadence-lang.org/docs/language/resources) rather than a regular value. Resources in Cadence are unique, non-copyable types that must be explicitly moved between variables, functions, and storage locations. The @ symbol must appear at the beginning of the type declaration, emphasizing that the entire type acts as a resource. This annotation is required for resource instantiation, function parameters, return types, and variable declarations involving resources.

resource NFT {

    access(all) var id: UInt64

    access(all) var metadata: String

}

  

let myNFT: @NFT <- create NFT(id: 1, metadata: "Rare item")

fun transfer(nft: @NFT) { /* resource handling */ }

  

**:**

**(colon)**

The : (colon) symbol serves multiple purposes in Cadence syntax. It's primarily used for type annotations, allowing you to explicitly declare the type of variables, constants, function parameters, and return types. The colon also appears in [ternary conditional operators](https://cadence-lang.org/docs/language/operators/bitwise-ternary-operators#ternary-conditional-operator) to separate the _then_ and _else_ branches, providing a concise way to write conditional expressions. Additionally, colons are used in access modifiers and entitlement declarations to specify access control and authorization requirements.

let value: Int = 42 // type annotation

fun calculate(x: Int, y: Int): Int { return x + y } // parameter and return types

let result = condition ? value1 : value2 // ternary operator

  

**=**

**(equals)**

The = (equals) symbol is the assignment operator in Cadence, used to assign values to variables and constants. For regular values (non-resources), the equals sign performs a copy assignment, creating a new copy of the value. For resources, the equals sign cannot be used directly; instead, the move operator <- must be used to explicitly transfer ownership. The equals sign is also used in constant declarations with let and variable declarations with var, and it appears in comparison operations when doubled (==) for equality testing.

let constant = 5 // constant declaration

var mutable = 10 // variable declaration

mutable = 15 // assignment

let isEqual = a == b // equality comparison

  

**!**

**(exclamation mark)**

The ! (exclamation mark) symbol has two distinct uses depending on its position relative to a value. When placed before a boolean expression, it performs logical negation, inverting the truth value of the expression. When placed after an optional value, it performs [force unwrapping](https://cadence-lang.org/docs/language/operators/optional-operators#force-unwrap-operator-), extracting the contained value from the optional or causing a runtime panic if the optional is nil. Force unwrapping should be used carefully as it can cause program termination, and safer alternatives like nil-coalescing (??) or optional binding should be preferred when possible.

let isTrue = true

let isFalse = !isTrue // logical negation

let optionalValue: Int? = 42

let unwrapped = optionalValue! // force unwrap (dangerous if nil)

  

**/**

**(forward slash)**

The / (forward slash) symbol serves as both a mathematical [division operator](https://cadence-lang.org/docs/language/operators/arithmetic-logical-operators#arithmetic-operators) and a path separator in Cadence. In arithmetic expressions, it performs division between numeric values, returning the quotient. In [path](https://cadence-lang.org/docs/language/accounts/paths) expressions, it separates the components of storage paths, which are used to access data in account storage. Paths follow the format /domain/identifier where domain can be storage or public, and the identifier specifies the specific storage location or capability.

let quotient = 10 / 2 // arithmetic division

let storagePath = /storage/myResource // storage path

let publicPath = /public/myCapability // public path

  

**<-**

**(move operator)**

The [<- (move operator)](https://cadence-lang.org/docs/language/resources#the-move-operator--) is essential for resource management in Cadence, explicitly indicating when a [resource](https://cadence-lang.org/docs/language/resources) is being transferred from one location to another. Unlike regular values that are copied, resources must be moved using this operator to maintain their uniqueness and prevent accidental duplication. The move operator is required when creating resources, assigning them to variables, passing them as function arguments, returning them from functions, or storing them in account storage. This explicit movement ensures that resources follow Cadence's linear type system and prevents resource leaks or double-spending scenarios.

resource Token {

    access(all) var amount: UInt64

}

  

let token <- create Token(amount: 100) // resource creation

let newOwner <- token // resource transfer

fun mint(): @Token { return <- create Token(amount: 50) } // resource return

  

**<-!**

**(force-assignment move operator)**

The [<-! (force-assignment move operator)](https://cadence-lang.org/docs/language/operators/assign-move-force-swap#force-assignment-operator--) is a specialized move operator that moves a resource into an optional variable, but only if the variable is currently nil. If the target variable already contains a resource, the operation will abort the program execution. This operator is useful for ensuring that optional resource variables are only assigned once, providing a safety mechanism against accidental overwrites. It's commonly used in initialization patterns where you want to guarantee that a resource is only moved into an empty optional container.

resource NFT {

    access(all) var id: UInt64

}

  

var myNFT: @NFT? <- nil

myNFT <-! create NFT(id: 1) // succeeds because myNFT is nil

// myNFT <-! create NFT(id: 2) // would abort because myNFT is not nil

  

**<->**

**(swap operator)**

The [<-> (swap operator)](https://cadence-lang.org/docs/language/operators/assign-move-force-swap#swapping-operator--) exchanges two resources between variables without requiring a temporary variable. This operator is particularly useful for resource management scenarios where you need to swap ownership of two resources atomically. The swap operation is guaranteed to be atomic and cannot fail, making it ideal for scenarios where you need to exchange resources in a single operation. This operator is commonly used in trading scenarios, resource reallocation, or any situation where two parties need to exchange resources simultaneously.

resource Coin {

    access(all) var value: UInt64

}

  

let coinA: @Coin <- create Coin(value: 10)

let coinB: @Coin <- create Coin(value: 20)

coinA <-> coinB // now coinA has value 20, coinB has value 10

  

**+**

**,**

**-**

**,**

*****

**,**

**%**

**(arithmetic operators)**

The [arithmetic operators](https://cadence-lang.org/docs/language/operators/arithmetic-logical-operators#arithmetic-operators) +, -, *, and % perform standard mathematical operations on numeric types in Cadence. The plus operator (+) adds two values, the minus operator (-) subtracts the right operand from the left, the asterisk operator (*) multiplies two values, and the percentage sign (%) returns the remainder of division. These operators work with all numeric types including Int, UInt, Int8, UInt8, and so on, and follow standard operator precedence rules. Cadence also supports compound assignment operators like +=, -=, *=, and %= for more concise code. Cadence does not support the increment/decrement operators ++, --.

let sum = 5 + 3 // addition

let difference = 10 - 4 // subtraction

let product = 6 * 7 // multiplication

let remainder = 17 % 5 // modulo

var value = 10

value += 5 // compound assignment

  

**?**

**(question mark)**

The ? (question mark) symbol has multiple uses in Cadence, primarily for optional types and conditional operations. When following a type, it creates an optional type that can either contain a value or be nil, providing a safe way to handle potentially missing values. In [ternary conditional expressions](https://cadence-lang.org/docs/language/operators/bitwise-ternary-operators#ternary-conditional-operator), the question mark separates the condition from the _then_ branch. The question mark is also used in the [nil-coalescing operator (??)](https://cadence-lang.org/docs/language/operators/optional-operators#nil-coalescing-operator-) to provide a default value when an optional is nil, and in optional chaining to safely access properties or call methods on optional values.

let optionalInt: Int? = nil // optional type

let result = condition ? value1 : value2 // ternary operator

let safeValue = optionalInt ?? 0 // nil-coalescing

let length = optionalString?.length // optional chaining

  

**_**

**(underscore)**

The _ (underscore) symbol serves multiple purposes in Cadence syntax. It can be used in identifiers and variable names to improve readability, particularly for separating words in compound names. In numeric literals, underscores can be used as separators to make large numbers more readable without affecting their value. When used as an argument label in [function](https://cadence-lang.org/docs/language/functions) declarations, the underscore indicates that no argument label is required when calling the function, allowing for more natural function calls. The underscore is also used in pattern matching to ignore specific values or in unused variable declarations.

let user_name = "Alice" // identifier separator

let large_number = 1_000_000 // numeric separator

fun double(_ x: Int): Int { return x * 2 } // no argument label

let result = double(5) // no label needed

  

**;**

**(semicolon)**

The ; (semicolon) symbol is used as a separator between declarations and statements. A semicolon can be placed after any declaration and statement, but can be omitted between declarations if only one statement appears on the line.

// Declare a constant, without a semicolon.

//

let a = 1

  

// Declare a variable, with a semicolon.

//

var b = 2;

  

// Declare a constant and a variable on a single line, separated by semicolons.

//

let d = 1; var e = 2

  

**Punctuation marks**

**.**

**(dot/period)**

The . (dot) symbol serves multiple purposes in Cadence syntax. It's primarily used for member access, allowing you to access properties, methods, and nested types of objects and types. The dot operator is used to call functions on objects, access struct and resource fields, and navigate through nested structures. Dots are also used in decimal numbers to separate the integer and fractional parts, and in qualified type names to specify the namespace or module where a type is defined.

let length = "hello".length // member access

let balance = token.balance // property access

token.transfer(amount: 10) // method call

let decimal = 3.14 // decimal number

let nft: MyContract.NFT // qualified type name

  

**,**

**(comma)**

The , (comma) symbol is used to separate multiple items in lists, function parameters, type parameters, and other multi-item contexts in Cadence. Commas separate function arguments, array elements, dictionary key-value pairs, and type parameters in generic declarations. They're also used to separate multiple variable declarations in a single statement and to separate multiple return values in tuple types. Proper comma usage is essential for clear, readable code structure.

fun add(a: Int, b: Int, c: Int): Int { return a + b + c } // function parameters

let array = [1, 2, 3, 4, 5] // array elements

let dict = {"key1": "value1", "key2": "value2"} // dictionary pairs

let a, b, c = 1, 2, 3 // multiple declarations

let tuple: (Int, String, Bool) // tuple type

  

**()**

**(parentheses)**

The () (parentheses) symbol has multiple uses in Cadence syntax. They're used to group expressions and control operator precedence in mathematical and logical expressions. Parentheses are required around function parameters in function calls. They also serve to group conditions in control flow statements and to create type annotations for function types. Parentheses are essential for disambiguating complex expressions and ensuring proper evaluation order.

let result = (a + b) * c // expression grouping

fun calculate(x: Int, y: Int): Int { return x + y } // function parameters

let functionType: (Int, Int) -> Int // function type

if (condition1 && condition2) { /* code */ } // grouped condition

  

**<>**

**(angle brackets)**

Angle brackets (<>) are _not_ used for generics like in many other languages — Cadence doesn't have traditional generic functions or structs — but they _are_ used in a few specific syntactic contexts related to type parameters and type instantiation. Specifically, angle brackets are used to specify type parameters for certain built-in or standard library types that are type constructors. Angle brackets are also used to specify the borrow type when working with capabilities and when specifying the authorized type with some Cadence APIs. You can also use angle brackets to define explicit element types for collections.

// FungibleToken.Vault is a generic composite type in the standard interface.

// <ExampleToken.Vault> tells Cadence the concrete vault type to use:

  

let vault: FungibleToken.Vault<ExampleToken.Vault>

  

// The Capability<...> is a generic capability type:

let cap: Capability<&ExampleToken.Vault{FungibleToken.Receiver}>

  

// Inside <...>, you define the type that will be borrowed when

// using the capability. For example:

let receiverCap: Capability<&ExampleToken.Vault{FungibleToken.Receiver}>

    = account.getCapability<&ExampleToken.Vault{FungibleToken.Receiver}>(/public/receiver)

  

// No < > = Cadence infers; With < > = you're explicitly

// telling it the type:

let vaultRef = account

    .getCapability<&ExampleToken.Vault{FungibleToken.Receiver}>(/public/receiver)

    .borrow()

let numbers: [Int] = []

let moreNumbers = [] as [Int]

  

// The type annotation uses square brackets for collections,

// but when inside other parameterized types, < > is used:

let dict: {String: Int} = {}

let capDict: {String: Capability<&ExampleToken.Vault>} = {}

// Here, the < > is within Capability<...> inside the dictionary value type.

  

**{}**

**(curly brackets)**

The {} (curly brackets) symbol is used to define code blocks, scopes, and composite data structures in Cadence. They're used to group statements in functions, control flow statements, and resource/struct definitions. Curly brackets are also used to create dictionary literals and to define the body of functions, initializers, and methods. They establish the scope for variable declarations and control the lifetime of local variables and borrowed references.

fun example() {

    let localVar = 42 // code block

    if condition {

        // nested block

    }

}

  

resource NFT {

    access(all) var id: UInt64 // resource definition

    init(id: UInt64) {

        self.id = id // initializer block

    }

}

  

let dict = {"key": "value"} // dictionary literal

  

**[]**

**(square brackets)**

The [] (square brackets) symbol is used for array operations and type annotations in Cadence. They're used to create array literals, access array elements by index, and specify array types in type annotations. Square brackets are also used in dictionary key access and to specify the size of fixed-size arrays. They're essential for working with collections and implementing array-based data structures and algorithms.

let array = [1, 2, 3, 4, 5] // array literal

let firstElement = array[0] // array access

let arrayType: [String] // array type annotation

let fixedArray: [Int; 5] // fixed-size array

let dict = {"key": "value"}

let value = dict["key"] // dictionary access

  

**`**

**(backtick)**

The ` (backtick) symbol is _not_ used and has no syntactic meaning at all in Cadence syntax.

When working with string declarations, use double quotes (" ") instead:

let s = `hello`  // Error: use double quotes for strings

let s = "hello"

  

**Whitespace**

Whitespace has no semantic meaning in Cadence syntax. It is used only to separate tokens.

**Keywords and access control**

**access**

The access keyword is fundamental to Cadence's access control system, specifying who can access and modify declarations like variables, functions, and types. Access modifiers include access(all) for public access, access(contract) for contract-scoped access, access(account) for account-scoped access, and access(self) for private access. The access keyword can also be used with entitlements to create fine-grained authorization systems, allowing specific operations only when the caller has the required entitlements. This system ensures that resources and sensitive data are protected according to the principle of least privilege.

access(all) var publicVariable: String

access(contract) fun contractOnlyFunction() { }

access(account) resource PrivateResource { }

access(E) fun authorizedFunction() { } // requires entitlement E

  

**let**

The let keyword declares immutable constants in Cadence, creating values that cannot be modified after initialization. Constants declared with let must be initialized with a value when declared, and their type can be explicitly specified or inferred from the initial value. For resources, let constants still require the move operator (<-) for assignment, and the resource cannot be moved out of the constant once assigned. The let keyword is preferred over var when a value doesn't need to change, as it provides compile-time guarantees about immutability and can enable compiler optimizations.

let constantValue = 42 // immutable constant

let typedConstant: String = "Hello" // explicit type

let resourceConstant: @NFT <- create NFT(id: 1) // immutable resource

  

**var**

The var keyword declares mutable variables in Cadence, allowing values to be modified after initialization. Variables declared with var can be reassigned new values of the same type, and for resources, they can be moved in and out using the move operators. The var keyword is essential for maintaining state in contracts and resources, allowing data to be updated as the program executes. Like let, the type can be explicitly specified or inferred, and access modifiers can be applied to control who can read or modify the variable.

var mutableValue = 10 // mutable variable

mutableValue = 20 // can be reassigned

var resourceVariable: @Token? <- nil // mutable resource variable

resourceVariable <- create Token(amount: 100) // can be assigned

  

**fun**

The fun keyword declares functions in Cadence, which are reusable blocks of code that can accept parameters and return values. Functions can be declared at the top level, within contracts, resources, or structs, and their access level determines who can call them. Functions can accept both regular values and resources as parameters, and they can return values, resources, or nothing (void). The function signature includes parameter types, return type, and access modifiers, and functions can be overloaded based on parameter types and labels.

access(all) fun add(a: Int, b: Int): Int {

    return a + b

}

  

access(contract) fun transfer(token: @Token, to: Address) {

    // resource transfer logic

}

  

**resource**

The resource keyword declares resource types in Cadence, which are unique, non-copyable types that represent digital assets or scarce resources. Resources must be explicitly created, moved, and destroyed, and they cannot be duplicated or lost accidentally. Resources can contain both regular values and other resources, and they can define functions (methods) that operate on the resource's data. The resource keyword is central to Cadence's resource-oriented programming model, ensuring that digital assets follow the same rules as physical assets in terms of ownership and transfer.

resource NFT {

    access(all) var id: UInt64

    access(all) var owner: Address

  

    init(id: UInt64, owner: Address) {

        self.id = id

        self.owner = owner

    }

  

    access(all) fun transfer(to: Address) {

        self.owner = to

    }

}

  

**struct**

The struct keyword declares structure types in Cadence, which are composite types that group related data together. Unlike resources, structs are copyable and follow value semantics, meaning they are duplicated when assigned or passed as parameters. Structs can contain fields of various types, including other structs, and they can define functions that operate on the struct's data. Structs are commonly used for organizing data that doesn't represent unique assets, such as metadata, configuration, or temporary data structures.

struct Metadata {

    access(all) var name: String

    access(all) var description: String

    access(all) var tags: [String]

  

    init(name: String, description: String, tags: [String]) {

        self.name = name

        self.description = description

        self.tags = tags

    }

}

  

**contract**

The contract keyword declares smart contracts in Cadence, which are the primary unit of deployment and organization for blockchain code. Contracts can contain resources, structs, functions, and other declarations, and they provide a namespace for organizing related functionality. Contracts are deployed to specific accounts and can interact with each other through interfaces and capabilities. The contract keyword is essential for creating reusable, composable blockchain applications that can be deployed and upgraded independently.

access(all) contract MyContract {

    access(all) resource NFT {

        access(all) var id: UInt64

        init(id: UInt64) { self.id = id }

    }

  

    access(all) fun mintNFT(id: UInt64): @NFT {

        return <- create NFT(id: id)

    }

}

  

**interface**

The interface keyword declares interface types in Cadence, which define a contract for what methods and properties a type must implement. Interfaces enable polymorphism and allow different types to be used interchangeably as long as they implement the required interface. Interfaces can declare function signatures, property requirements, and resource requirements, and they can be used as types for parameters, return values, and variables. The interface keyword is crucial for creating flexible, reusable code that can work with multiple implementations.

access(all) interface Transferable {

    access(all) fun transfer(to: Address)

    access(all) var owner: Address

}

  

access(all) resource NFT: Transferable {

    access(all) var owner: Address

  

    access(all) fun transfer(to: Address) {

        self.owner = to

    }

}

  

**attachment**

The attachment keyword declares [attachment types](https://cadence-lang.org/docs/language/attachments) in Cadence, which allow developers to extend struct or resource types (even ones they did not create) with new functionality without requiring the original author to plan for the intended behavior. Attachments are declared using the syntax attachment <Name> for <Type>: <Conformances> { ... } and can only be declared with all access. The attachment's kind (struct or resource) is automatically determined by the type it extends. Attachments are not first-class values and cannot exist independently of their base value, but they can be created using attach expressions, accessed via type indexing, and removed using remove statements.

access(all) resource R {

    access(all) let x: Int

    init(x: Int) { self.x = x }

}

  

access(all) attachment A for R {

    access(all) let derivedX: Int

    init(scalar: Int) {

        self.derivedX = base.x * scalar

    }

}

  

// Creating and using attachments

let r <- create R(x: 5)

let r2 <- attach A(scalar: 3) to <-r

let attachmentRef = r2[A] // access attachment via type indexing

  

**enum**

The enum keyword declares [enumeration](https://cadence-lang.org/docs/language/enumerations) types in Cadence, which define a set of named constant values. Enums can contain simple cases, and they provide [type safety](https://cadence-lang.org/docs/language/types-and-type-system/type-safety) by ensuring only valid enum values can be used. Enums are commonly used for representing states, types, or categories in a program. The enum keyword helps create more readable and maintainable code by replacing magic numbers or strings with meaningful named constants.

access(all) enum Status: UInt8 {

  

    access(all)

    case pending

  

    access(all)

    case active

  

    access(all)

    case completed

}

  

let status: Status = Status.active

  

**Resource management functions**

**create**

The create keyword is used to instantiate new resources in Cadence, calling the resource's initializer to set up the new instance. The create keyword must be used with the move operator (<-) to assign the newly created resource to a variable or return it from a function. Resources can only be created within the contract that defines them or through authorized functions, ensuring that resource creation is controlled and auditable. The create keyword is essential for minting new digital assets, creating new instances of resources, and initializing resource hierarchies.

resource Token {

    access(all) var amount: UInt64

    init(amount: UInt64) { self.amount = amount }

}

  

let newToken <- create Token(amount: 100) // resource creation

fun mint(): @Token { return <- create Token(amount: 50) } // creation in function

  

**destroy**

The destroy keyword is used to explicitly destroy resources in Cadence, permanently removing them from the system and freeing up any associated storage. The destroy keyword must be used with the move operator (<-) to consume the resource being destroyed. Destroying a resource is irreversible and should be done carefully, typically only when the resource is no longer needed or when implementing burning mechanisms for digital assets. The destroy keyword ensures that resources follow a complete lifecycle from creation to destruction, preventing resource leaks.

resource Token {

    access(all) var amount: UInt64

    init(amount: UInt64) { self.amount = amount }

}

  

let token: @Token <- create Token(amount: 100)

destroy token // permanently removes the resource

  

**.borrow**

The .borrow function provides temporary access to a resource without moving it, returning a reference that can be used to read or modify the resource's properties and call its functions. The borrow function is essential for resource management when you need to access a resource's data without transferring ownership. Borrowed references can be either authorized or unauthorized, depending on the access requirements, and they automatically become invalid when the borrowing scope ends. The borrow function is commonly used for reading resource state, calling resource methods, and implementing complex resource interactions.

resource NFT {

    access(all) var id: UInt64

    access(all) var metadata: String

  

    access(all) fun updateMetadata(newMetadata: String) {

        self.metadata = newMetadata

    }

}

  

let nft: @NFT <- create NFT(id: 1, metadata: "Original")

let ref = &nft as &NFT

ref.updateMetadata("Updated") // borrow and modify

let id = ref.id // borrow and read

  

**.link**

The .link function creates a capability that provides controlled access to a resource or function, allowing other accounts to interact with it through the capability system. The link function specifies the target path, the type of access being granted, and the restrictions on that access. Capabilities can be linked to either public or private storage paths, and they can include entitlements that define what operations are allowed. The link function is fundamental to Cadence's capability-based security model, enabling secure cross-account interactions while maintaining access control.

resource NFT {

    access(all) var id: UInt64

    access(all) fun transfer(to: Address) { /* transfer logic */ }

}

  

let nft: @NFT <- create NFT(id: 1)

account.storage.save(<- nft, to: /storage/myNFT)

account.link<&NFT>(/public/myNFTCap, target: /storage/myNFT) // create capability

  

**.unlink**

The .unlink function removes a capability from account storage, revoking the access that was previously granted through the capability. The unlink function takes the path where the capability was stored and removes it, making the linked resource or function no longer accessible through that capability. This function is important for access control management, allowing accounts to revoke permissions when they're no longer needed or when security requirements change. The unlink function is commonly used in permission management systems and when cleaning up temporary access grants.

// Remove a previously linked capability

account.unlink(/public/myNFTCap)

  

**.getCapability**

The .getCapability function retrieves a capability from account storage, allowing you to access the capability's target resource or function. The getCapability function returns an optional capability, which will be nil if no capability exists at the specified path. This function is essential for capability-based programming, allowing accounts to access resources and functions that have been shared with them through the capability system. The getCapability function is commonly used in cross-account interactions and when implementing permission-based access patterns.

let capability = account.getCapability<&NFT>(/public/myNFTCap)

if let nftRef = capability.borrow() {

    // Use the borrowed reference

    nftRef.transfer(to: newOwner)

}

  

**Storage and account functions**

**account.storage.save**

The account.storage.save function stores a value or resource in account storage at a specified path. This function is essential for persisting data on the blockchain, allowing resources and values to be stored permanently in an account's storage space. The save function requires the move operator (<-) for resources and can store both regular values and resources. The storage path must be unique within the account, and the function will overwrite any existing value at that path. This function is commonly used for storing NFTs, tokens, and other digital assets in user accounts.

resource NFT {

    access(all) var id: UInt64

    init(id: UInt64) { self.id = id }

}

  

let nft: @NFT <- create NFT(id: 1)

account.storage.save(<- nft, to: /storage/myNFT) // save resource

account.storage.save("metadata", to: /storage/metadata) // save value

  

**account.storage.load**

The account.storage.load function retrieves a value or resource from account storage at a specified path. This function returns an optional value, which will be nil if no value exists at the specified path or if the type doesn't match. For resources, the load function requires the move operator (<-) to transfer ownership from storage to the variable. The load function is essential for accessing stored data and is commonly used in conjunction with save to implement persistent storage patterns.

let nft <- account.storage.load<@NFT>(from: /storage/myNFT)

let metadata = account.storage.load<String>(from: /storage/metadata)

  

**account.storage.borrow**

The account.storage.borrow function provides temporary access to a stored resource without moving it from storage. This function returns a reference to the resource that can be used to read or modify the resource's properties and call its functions. The borrow function is useful when you need to access a resource's data without removing it from storage, and it's commonly used for reading resource state or calling resource methods. The borrowed reference becomes invalid when the borrowing scope ends.

let nftRef = account.storage.borrow<&NFT>(from: /storage/myNFT)

if let ref = nftRef {

    let id = ref.id // read property

    ref.updateMetadata("New metadata") // call method

}

  

**Type system keywords**

**AnyStruct**

The AnyStruct type is a top type in Cadence that can hold any struct value, providing maximum flexibility when you need to work with different struct types. AnyStruct is commonly used in generic containers, event parameters, and situations where you need to store or pass around different types of structs. When using AnyStruct, you typically need to perform type checking or type casting to access the specific properties or methods of the underlying struct. This type is essential for creating flexible, reusable code that can work with various struct types.

let anyValue: AnyStruct = "Hello" // can hold any struct

let anotherValue: AnyStruct = 42 // can hold different types

  

**AnyResource**

The AnyResource type is a top type in Cadence that can hold any resource value, allowing you to work with different resource types in a generic way. AnyResource is commonly used in generic containers, capability systems, and situations where you need to store or pass around different types of resources. When using AnyResource, you typically need to perform type checking or type casting to access the specific properties or methods of the underlying resource. This type is essential for creating flexible resource management systems.

let anyResource: AnyResource <- create SomeResource()

let anotherResource: AnyResource <- create AnotherResource()

  

**Void**

The Void type represents the absence of a value in Cadence, used when a function doesn't return anything or when you need to explicitly indicate that no value is expected. Functions that don't have a return statement or explicitly return Void are said to return nothing. The Void type is commonly used in function signatures, event definitions, and situations where you need to explicitly indicate that no value is being returned or expected. This type helps make code intentions clear and provides type safety.

fun doSomething(): Void {

    // function that doesn't return a value

}

  

fun anotherFunction() { // implicitly returns Void

    // function body

}

  

**Never**

The Never type represents a function that never returns normally, typically because it always throws an error or aborts execution. The Never type is used in function signatures to indicate that the function will not complete successfully and return a value. This type is commonly used in error handling functions, assertion functions, and functions that perform critical operations that must succeed or fail completely. The Never type helps make error handling explicit and provides compile-time guarantees about function behavior.

fun assert(condition: Bool): Never {

    if !condition {

        panic("Assertion failed")

    }

}

  

**Control flow keywords**

**if**

The if keyword provides conditional execution in Cadence, allowing code to be executed only when a specified condition is true. If statements can include optional else clauses to handle the case when the condition is false, and they can be chained with else if clauses for multiple conditions. The condition in an if statement must evaluate to a boolean value, and the code blocks can contain any valid Cadence code including variable declarations, function calls, and resource operations. If statements are fundamental to implementing business logic and conditional behavior in smart contracts.

if condition {

    // execute when condition is true

} else if anotherCondition {

    // execute when anotherCondition is true

} else {

    // execute when no conditions are true

}

  

**while**

The while keyword creates loops that execute a block of code repeatedly as long as a specified condition remains true. The condition is evaluated before each iteration, and the loop continues until the condition becomes false. While loops are useful for iterating over data structures, implementing retry logic, and performing operations that need to continue until a certain state is reached. Care must be taken to ensure that while loops eventually terminate to prevent infinite loops that could consume excessive gas.

var counter = 0

while counter < 10 {

    // execute while counter is less than 10

    counter = counter + 1

}

  

**for**

The for keyword creates loops for iterating over collections like arrays, dictionaries, and ranges in Cadence. For loops can iterate over the elements of a collection, providing access to each element in sequence. The for keyword is commonly used with the in keyword to specify the collection being iterated over, and the loop variable can be used to access the current element. For loops are essential for processing collections of data, implementing batch operations, and performing operations on multiple items.

let numbers = [1, 2, 3, 4, 5]

for number in numbers {

    // process each number

}

  

for i in 0...5 {

    // iterate over range

}

  

**return**

The return keyword exits a function and optionally provides a value to be returned to the caller. The return keyword can be used with or without a value, depending on the function's return type. When used with a value, the value must match the function's declared return type. The return keyword immediately terminates function execution, making it useful for early exits and conditional returns. For functions that return resources, the return keyword must be used with the move operator (<-) to transfer ownership of the resource.

fun add(a: Int, b: Int): Int {

    return a + b // return with value

}

  

fun earlyExit(condition: Bool) {

    if condition {

        return // early exit without value

    }

    // continue execution

}

  

**Error handling**

**panic**

The panic function immediately aborts the execution of the current transaction with an optional error message. The panic function is used for critical errors that cannot be recovered from, such as assertion failures, invalid state conditions, or security violations. When panic is called, the entire transaction is rolled back, and any changes made during the transaction are discarded. The panic function is commonly used in assertion functions, input validation, and error conditions that indicate a fundamental problem with the program's logic or state.

fun assert(condition: Bool, message: String) {

    if !condition {

        panic(message) // abort with error message

    }

}

  

fun divide(a: Int, b: Int): Int {

    if b == 0 {

        panic("Division by zero") // critical error

    }

    return a / b

}

  

**pre**

**and**

**post**

The pre and post keywords are used for function [pre-conditions and post-conditions](https://cadence-lang.org/docs/language/pre-and-post-conditions) in Cadence, providing a way to specify requirements and guarantees about function behavior. Pre-conditions (pre) specify conditions that must be true before a function is called, while post-conditions (post) specify conditions that must be true after the function completes. These conditions are checked at runtime and will cause a panic if they are not satisfied. Pre and post conditions help ensure function correctness and provide documentation about function requirements and guarantees.

fun transfer(amount: UInt64): UInt64 {

    pre {

        amount > 0: "Amount must be positive"

    }

    post {

        result > 0: "Result must be positive"

    }

    return amount

}

  

**Events and logging**

**event**

The event keyword declares event types in Cadence, which are used to emit structured data that can be indexed and queried by blockchain clients. Events are essential for creating transparent, auditable blockchain applications that can communicate state changes and important occurrences to external systems. Events can contain various data types including structs, resources, and primitive types, and they are emitted using the emit keyword. Events are commonly used for tracking transactions, state changes, and important business events in smart contracts.

access(all) event TransferEvent(

    from: Address,

    to: Address,

    amount: UInt64

)

  

fun transfer(to: Address, amount: UInt64) {

    // transfer logic

    emit TransferEvent(from: self.owner, to: to, amount: amount)

}

  

**emit**

The emit keyword is used to emit events in Cadence, broadcasting structured data to the blockchain network for indexing and querying by external systems. The emit keyword is followed by an event instance and any parameters that the event requires. Emitted events are permanently recorded on the blockchain and can be used for auditing, analytics, and triggering external processes. The emit keyword is commonly used in conjunction with the event keyword to create transparent, auditable blockchain applications.

access(all) event NFTMinted(id: UInt64, owner: Address)

  

fun mintNFT(id: UInt64): @NFT {

    let nft <- create NFT(id: id)

    emit NFTMinted(id: id, owner: self.owner) // emit event

    return <- nft

}

  

**Composite type keywords**

**init**

The init keyword declares initializer functions in Cadence, which are special functions that set up new instances of types when they are created. Initializers are called automatically when creating new instances using the create keyword for resources or when declaring structs and other types. The init function can accept parameters to configure the new instance, and it's responsible for setting up the initial state of the object. Initializers are essential for ensuring that objects are properly initialized with valid state.

resource NFT {

    access(all) var id: UInt64

    access(all) var owner: Address

  

    init(id: UInt64, owner: Address) {

        self.id = id

        self.owner = owner

    }

}

  

**self**

The self keyword refers to the current instance of a type within its methods and initializers. The self keyword is used to access the current object's properties and methods, distinguishing them from local variables or parameters with the same names. In resource and struct methods, self is used to modify the object's state, access its properties, and call other methods on the same object. The self keyword is essential for object-oriented programming patterns in Cadence.

resource Token {

    access(all) var balance: UInt64

  

    access(all) fun transfer(amount: UInt64) {

        self.balance = self.balance - amount // access own property

    }

  

    access(all) fun getBalance(): UInt64 {

        return self.balance // return own property

    }

}

# Constants and Variable Declarations

Constants and variables are declarations that bind a value and [type](https://cadence-lang.org/docs/language/types-and-type-system/type-safety) to an identifier. Constants are initialized with a value and cannot be reassigned afterwards. Variables are initialized with a value and can be reassigned later. Declarations can be created in any scope, including the global scope.

Constant means that the _identifier's_ association is constant, not the _value_ itself — the value may still be changed if it is mutable. For example, you can change the values inside of a constant array, but you cannot replace the array assignment with a new array.

Constants are declared using the `let` keyword. Variables are declared using the `var` keyword. The keywords are followed by the identifier, an optional [type annotation](https://cadence-lang.org/docs/language/types-and-type-system/type-annotations), an equals sign `=`, and the initial value:

``   // Declare a constant named `a`.    //    let a = 1        // Invalid: re-assigning to a constant.    //    a = 2        // Declare a variable named `b`.    //    var b = 3        // Assign a new value to the variable named `b`.    //    b = 4            ``

Variables and constants **must** be initialized:

`   // Invalid: the constant has no initial value.    //    let a            `

The names of the variable or constant declarations in each scope must be unique. Declaring another variable or constant with a name that is already declared in the current scope is invalid, regardless of kind or type:

``   // Declare a constant named `a`.    //    let a = 1        // Invalid: cannot re-declare a constant with name `a`,    // as it is already used in this scope.    //    let a = 2        // Declare a variable named `b`.    //    var b = 3        // Invalid: cannot re-declare a variable with name `b`,    // as it is already used in this scope.    //    var b = 4        // Invalid: cannot declare a variable with the name `a`,    // as it is already used in this scope,    // and it is declared as a constant.    //    var a = 5            ``

However, variables can be redeclared in sub-scopes:

``   // Declare a constant named `a`.    //    let a = 1        if true {    // Declare a constant with the same name `a`.    // This is valid because it is in a sub-scope.    // This variable is not visible to the outer scope.        let a = 2    }        // `a` is `1`            ``

A variable cannot be used as its own initial value:

`   // Invalid: Use of variable in its own initial value.    let a = a            `

# Values and Types

Values are handled in the following way:

- Values are objects (e.g., booleans, integers, or arrays).
- Values are typed.

See the following articles to learn more about values and types:

- [Booleans, Numeric Literals, and Integers](https://cadence-lang.org/docs/language/values-and-types/booleans-numlits-ints)
- [Fixed-Point Numbers and Functions](https://cadence-lang.org/docs/language/values-and-types/fixed-point-nums-ints)
- [Minimum and Maximum Values, Saturation Arithmetic, and Floating-Point Numbers](https://cadence-lang.org/docs/language/values-and-types/min-max-saturation-floating-pt-nums)
- [Addresses and Address Functions](https://cadence-lang.org/docs/language/values-and-types/addresses-functions)
- [AnyStruct/AnyResource, Optionals, and Never](https://cadence-lang.org/docs/language/values-and-types/anystruct-anyresource-opts-never)
- [Strings and Characters](https://cadence-lang.org/docs/language/values-and-types/strings-and-characters)
- [Arrays](https://cadence-lang.org/docs/language/values-and-types/arrays)
- [Dictionaries](https://cadence-lang.org/docs/language/values-and-types/dictionaries)
- [InclusiveRange](https://cadence-lang.org/docs/language/values-and-types/inclusive-range)

# Booleans, Numeric Literals, and Integers

## Booleans

The two boolean values `true` and `false` have the type `Bool`.

## Numeric literals

Numbers can be written in various bases. Numbers are assumed to be decimal by default. Non-decimal literals have a specific prefix:

|Numeral system|Prefix|Characters|
|---|---|---|
|**Decimal**|_None_|one or more numbers (`0` to `9`)|
|**Binary**|`0b`|one or more zeros or ones (`0` or `1`)|
|**Octal**|`0o`|one or more numbers in the range `0` to `7`|
|**Hexadecimal**|`0x`|one or more numbers, or characters `a` to `f`, lowercase or uppercase|

``   // A decimal number    //    1234567890 // is `1234567890`        // A binary number    //    0b101010 // is `42`        // An octal number    //    0o12345670 // is `2739128`        // A hexadecimal number    //    0x1234567890ABCabc // is `1311768467294898876`        // Invalid: unsupported prefix 0z    //    0z0        // A decimal number with leading zeros. Not an octal number!    00123 // is `123`        // A binary number with several trailing zeros.    0b001000 // is `8`            ``

Decimal numbers may contain underscores (`_`) to logically separate components:

`   let largeNumber = 1_000_000        // Invalid: Value is not a number literal, but a variable.    let notNumber = _123            `

Underscores are allowed for all numeral systems:

`   let binaryNumber = 0b10_11_01            `

## Integers

Integers are numbers without a fractional part. They are either _signed_ (positive, zero, or negative) or _unsigned_ (positive or zero).

Signed integer types that check for overflow and underflow have an `Int` prefix and can represent values in the following ranges:

- **`Int8`**: -2^7 through 2^7 − 1 (-128 through 127)
- **`Int16`**: -2^15 through 2^15 − 1 (-32768 through 32767)
- **`Int32`**: -2^31 through 2^31 − 1 (-2147483648 through 2147483647)
- **`Int64`**: -2^63 through 2^63 − 1 (-9223372036854775808 through 9223372036854775807)
- **`Int128`**: -2^127 through 2^127 − 1
- **`Int256`**: -2^255 through 2^255 − 1
- **`Int`**: unbounded

Unsigned integer types that check for overflow and underflow have a `UInt` prefix and can represent values in the following ranges:

- **`UInt8`**: 0 through 2^8 − 1 (255)
- **`UInt16`**: 0 through 2^16 − 1 (65535)
- **`UInt32`**: 0 through 2^32 − 1 (4294967295)
- **`UInt64`**: 0 through 2^64 − 1 (18446744073709551615)
- **`UInt128`**: 0 through 2^128 − 1
- **`UInt256`**: 0 through 2^256 − 1
- **`UInt`**: unbounded >= 0

Unsigned integer types that do **not** check for overflow and underflow (i.e., wrap around) include the `Word` prefix and can represent values in the following ranges:

- **`Word8`**: 0 through 2^8 − 1 (255)
- **`Word16`**: 0 through 2^16 − 1 (65535)
- **`Word32`**: 0 through 2^32 − 1 (4294967295)
- **`Word64`**: 0 through 2^64 − 1 (18446744073709551615)
- **`Word128`**: 0 through 2^128 − 1 (340282366920938463463374607431768211455)
- **`Word256`**: 0 through 2^256 − 1 (115792089237316195423570985008687907853269984665640564039457584007913129639935)

The types are independent types (i.e., they are not subtypes of each other).

See the section about [arithmetic operators](https://cadence-lang.org/docs/language/operators/arithmetic-logical-operators#arithmetic-operators) for further information about the behavior of the different integer types.

``   // Declare a constant that has type `UInt8` and the value 10.    let smallNumber: UInt8 = 10            ``

`   // Invalid: negative literal cannot be used as an unsigned integer    //    let invalidNumber: UInt8 = -10            `

As shown above, there are two arbitrary precision integer types, `Int` and `UInt`:

`   let veryLargeNumber: Int = -10000000000000000000000000000000    let veryLargeNonNegativeNumber: UInt = 10000000000000000000000000000000            `

Integer literals are [inferred](https://cadence-lang.org/docs/language/types-and-type-system/type-inference) to have type `Int`, or if the literal occurs in a position that expects an explicit type (e.g., in a variable declaration with an explicit type annotation):

``   let someNumber = 123        // `someNumber` has type `Int`            ``

Negative integers are encoded in two's complement representation.

Integer types are not converted automatically. Types must be explicitly converted, which can be done by calling the constructor of the type with the integer type:

``   let x: Int8 = 1    let y: Int16 = 2        // Invalid: the types of the operands, `Int8` and `Int16` are incompatible.    let z = x + y        // Explicitly convert `x` from `Int8` to `Int16`.    let a = Int16(x) + y        // `a` has type `Int16`        // Invalid: The integer literal is expected to be of type `Int8`,    // but the large integer literal does not fit in the range of `Int8`.    //    let b = x + 1000000000000000000000000            ``

### Integer functions

Integers have multiple built-in functions you can use.

- `   view fun toString(): String            `
    
    Returns the string representation of the integer.
    
    `   let answer = 42        answer.toString() // is "42"            `
    
- `   view fun toBigEndianBytes(): [UInt8]            `
    
    Returns the byte array representation (`[UInt8]`) in big-endian order of the integer.
    
    ``   let largeNumber = 1234567890        largeNumber.toBigEndianBytes() // is `[73, 150, 2, 210]`            ``
    

All integer types support the following functions:

- `   view fun T.fromString(_ input: String): T?            `
    
    Attempts to parse an integer value from a base-10 encoded string, returning `nil` if the string is invalid.
    
    For a given integer `n` of type `T`, `T.fromString(n.toString())` is equivalent to wrapping `n` up in an [optional](https://cadence-lang.org/docs/language/values-and-types/anystruct-anyresource-opts-never#optionals).
    
    Strings are invalid if:
    
    - they contain non-digit characters.
    - they don't fit in the target type.
    
    For signed integer types like `Int64` and `Int`, the string may optionally begin with a `+` or `-` sign prefix.
    
    For unsigned integer types like `Word64`, `UInt64`, and `UInt`, sign prefices are not allowed.
    
    Examples:
    
    `   let fortyTwo: Int64? = Int64.fromString("42") // ok        let twenty: UInt? = UInt.fromString("20") // ok        let nilWord: Word8? = Word8.fromString("1024") // nil, out of bounds        let negTwenty: Int? = Int.fromString("-20") // ok            `
    
- `   view fun T.fromBigEndianBytes(_ bytes: [UInt8]): T?            `
    
    Attempts to parse an integer value from a byte array representation (`[UInt8]`) in big-endian order, returning `nil` if the input bytes are invalid.
    
    For a given integer `n` of type `T`, `T.fromBigEndianBytes(n.toBigEndianBytes())` is equivalent to wrapping `n` up in an [optional](https://cadence-lang.org/docs/language/values-and-types/anystruct-anyresource-opts-never#optionals).
    
    The bytes are invalid if:
    
    - the length of the bytes array exceeds the number of bytes needed for the target type.
    - they don't fit in the target type.
    
    Examples:
    
    `   let fortyTwo: UInt32? = UInt32.fromBigEndianBytes([42]) // ok        let twenty: UInt? = UInt.fromBigEndianBytes([0, 0, 20]) // ok        let nilWord: Word8? = Word8.fromBigEndianBytes("[0, 22, 0, 0, 0, 0, 0, 0, 0]") // nil, out of bounds        let nilWord2: Word8? = Word8.fromBigEndianBytes("[0, 0]") // nil, size (2) exceeds number of bytes needed for Word8 (1)        let negativeNumber: Int64? = Int64.fromBigEndianBytes([128, 0, 0, 0, 0, 0, 0, 1]) // ok -9223372036854775807            `

# Fixed-Point Numbers and Functions

## Fixed-point numbers

🚧 Status

Currently only the 64-bit wide (`Fix64`, `UFix64`), and 128-bit wide (`Fix128`, `UFix128`) types are available. More fixed-point number types will be added in a future release.

Fixed-point numbers are useful for representing fractional values. They have a fixed number of digits after a decimal point.

They are essentially integers which are scaled by a factor. For example, the value 1.23 can be represented as 1230 with a scaling factor of 1/1000. The scaling factor is the same for all values of the same type and stays the same during calculations.

Fixed-point numbers in Cadence have a scaling factor with a power of 10, instead of a power of 2 (i.e., they are decimal, not binary).

Signed fixed-point number types have the prefix `Fix`, have the following factors, and can represent values in the following ranges:

- **`Fix64`**: Factor 1e-8; `-92233720368.54775808` through `92233720368.54775807`
- **`Fix128`**: Factor 1e-24; `-170141183460469.231731687303715884105728` through `170141183460469.231731687303715884105727`

Unsigned fixed-point number types have the prefix `UFix`, have the following factors, and can represent values in the following ranges:

- **`UFix64`**: Factor 1e-8; `0.0` through `184467440737.09551615`
- **`UFix128`**: Factor 1e-24; `0.0` through `340282366920938.463463374607431768211455`

### Fixed-point type inference

An untyped positive fixed-point literal is assumed to be of type `UFix64`, whereas an untyped negative fixed-point literal is assumed to be of type `Fix64`.

``   var v1 = 1.23 // v1 would have the type `UFix64`        var v2 = -1.23 // v2 would have the type `Fix64`            ``

Type annotations can be used to construct a fixed-point value belong to a specific type. e.g:

``   var v1: Fix64 = 1.23 // v1 would have the type `Fix64`        var v2: Fix128 = -1.23 // v2 would have the type `Fix128`            ``

### Fixed-point number functions

Fixed-Point numbers have multiple built-in functions you can use:

- `   view fun toString(): String            `
    
    Returns the string representation of the fixed-point number.
    
    ``   // For `Fix64`    let fix64: Fix64 = 1.23    fix64.toString() // is "1.23000000"        // For `Fix128`    let fix128: Fix128 = 1.23    fix128.toString() // is "1.230000000000000000000000"            ``
    
- `   view fun toBigEndianBytes(): [UInt8]            `
    
    Returns the byte array representation (`[UInt8]`) in big-endian order of the fixed-point number.
    
    ``   // For `Fix64`    let fix64: Fix64 = 1.23    fix64.toBigEndianBytes() // is `[0, 0, 0, 0, 7, 84, 212, 192]`        // For `Fix128`    let fix128: Fix128 = 1.23    fix128.toBigEndianBytes() // is `[0, 0, 0, 0, 0, 1, 4, 118, 111, 0, 236, 179, 164, 192, 0, 0]`            ``
    

All fixed-point types support the following functions:

- `   view fun T.fromString(_ input: String): T?            `
    
    Attempts to parse a fixed-point value from a base-10 encoded string, returning `nil` if the string is invalid.
    
    For a given fixed-point numeral `n` of type `T`, `T.fromString(n.toString())` is equivalent to wrapping `n` up in an `optional`.
    
    Strings are invalid if:
    
    - they contain non-digit characters.
    - they don't fit in the target type.
    - they're missing a decimal or fractional component. For example, both `0.` and `.1` are invalid strings, but `0.1` is accepted.
    
    For signed types like `Fix64` and `Fix128`, the string may optionally begin with a `+` or `-` sign prefix.
    
    For unsigned types like `UFix64` and `UFix128`, sign prefixes are not allowed.
    
    Examples:
    
    `   let nil1: UFix64? = UFix64.fromString("0.") // nil, fractional part is required        let nil2: UFix64? = UFix64.fromString(".1") // nil, decimal part is required        let smol: UFix64? = UFix64.fromString("0.1") // ok        let smolString: String = "-0.1"        let nil3: UFix64? = UFix64.fromString(smolString) // nil, unsigned types don't allow a sign prefix        let smolFix64: Fix64? = Fix64.fromString(smolString) // ok            `
    
- `   view fun T.fromBigEndianBytes(_ bytes: [UInt8]): T?            `
    
    Attempts to parse an integer value from a byte array representation (`[UInt8]`) in big-endian order, returning `nil` if the input bytes are invalid.
    
    For a given integer `n` of type `T`, `T.fromBigEndianBytes(n.toBigEndianBytes())` is equivalent to wrapping `n` up in an [optional](https://cadence-lang.org/docs/language/values-and-types/anystruct-anyresource-opts-never#optionals).
    
    The bytes are invalid if:
    
    - the length of the bytes array exceeds the number of bytes needed for the target type.
    - they don't fit in the target type.
    
    Examples:
    
    `   let fortyTwo: UFix64? = UFix64.fromBigEndianBytes([0, 0, 0, 0, 250, 86, 234, 0]) // ok, 42.0        let nilWord: UFix64? = UFix64.fromBigEndianBytes("[100, 22, 0, 0, 0, 0, 0, 0, 0]") // nil, out of bounds        let nilWord2: Fix64? = Fix64.fromBigEndianBytes("[0, 22, 0, 0, 0, 0, 0, 0, 0]") // // nil, size (9) exceeds number of bytes needed for Fix64 (8)        let negativeNumber: Fix64? = Fix64.fromBigEndianBytes([255, 255, 255, 255, 250, 10, 31, 0]) // ok, -1            `
    

## Number type casting

Casting between number types (e.g. `Int` to `UInt`, `Fix64` to `Int`) using the [casting operators](https://cadence-lang.org/docs/language/operators/casting-operators) (`as`, `as?` and `as!`) is not supported.

To convert between number types, the conversion functions ((e.g. `UInt(_)`)) must be used. These conversion functions have the same name as the desired type.

``   let value: UInt8 = 1        let intValue: Int? = value as? Int    // intValue is `nil` and has type `Int?`        let validInt: Int = Int(value)    // validInt is `1` and has type `Int`            ``

When converting from a larger number type to a smaller one (narrowing), the conversion will succeed if the value can be represented in the smaller type. If it cannot an error will be thrown indicating overflow or underflow. Converting to a larger number type will always succeed.

``   let intValue: Int16 = 256        let uintValue: UInt8 = UInt8(intValue)    // error: overflow, UInt8 has max value of `255`        let validUInt: UInt16 = UInt16(intValue)    // validUInt is `256` and has type `UInt16`        let largerIntValue: Int = Int(intValue)    // largerIntValue is `256` and has type `Int`            ``

Converting from integer types to fixed point types and vice versa is supported by calling the conversion functions as well. The same conditions as narrowing applies, an error will be thrown if the value cannot be represented in the range.

``   let intValue: Int = -1        let fixValue: Fix64 = Fix64(intValue)    // fixValue is `-1.00000000` and has type `Fix64`        let ufixValue: UFix64 = UFix64(intValue)    // error: underflow, UFix64 has min value `0.0`            ``

# Minimum and Maximum Values, Saturation Arithmetic, and Floating-Point Numbers

## Minimum and maximum values

The minimum and maximum values for all integer and fixed-point number types are available through the fields `min` and `max`.

For example:

``   let max = UInt8.max    // `max` is 255, the maximum value of the type `UInt8`            ``

``   let max = UFix64.max    // `max` is 184467440737.09551615, the maximum value of the type `UFix64`            ``

## Saturation arithmetic

Integers and fixed-point numbers support saturation arithmetic, which means that arithmetic operations, such as addition or multiplications, are saturating at the numeric bounds instead of overflowing.

- If the result of an operation is greater than the maximum value of the operands' type, the maximum is returned.
- If the result is lower than the minimum of the operands' type, the minimum is returned.

Saturating addition, subtraction, multiplication, and division are provided as functions with the prefix `saturating`:

- `Int8`, `Int16`, `Int32`, `Int64`, `Int128`, `Int256`, `Fix64`:
    
    - `saturatingAdd`
    - `saturatingSubtract`
    - `saturatingMultiply`
    - `saturatingDivide`
- `Int`:
    
    - none
- `UInt8`, `UInt16`, `UInt32`, `UInt64`, `UInt128`, `UInt256`, `UFix64`:
    
    - `saturatingAdd`
    - `saturatingSubtract`
    - `saturatingMultiply`
- `UInt`:
    
    - `saturatingSubtract`

``   let a: UInt8 = 200    let b: UInt8 = 100    let result = a.saturatingAdd(b)    // `result` is 255, the maximum value of the type `UInt8`            ``

## Floating-point numbers

There is **no** support for floating point numbers.

Smart Contracts are not intended to work with values that include error margins and therefore floating point arithmetic is not appropriate here.

Instead, consider using [fixed point numbers](https://cadence-lang.org/docs/language/values-and-types/fixed-point-nums-ints).

[Edit this page](https://github.com/onflow/cadence-lang.org/tree/main/docs/language/values-and-types/min-max-saturation-floating-pt-nums.md)

# Addresses and Address Functions

## Addresses

The type `Address` represents an address. Addresses are unsigned integers with a size of 64 bits (8 bytes). Hexadecimal integer literals can be used to create address values:

``   // Declare a constant that has type `Address`.    //    let someAddress: Address = 0x436164656E636521        // Invalid: Initial value is not compatible with type `Address`,    // it is not a number.    //    let notAnAddress: Address = ""        // Invalid: Initial value is not compatible with type `Address`.    // The integer literal is valid, however, it is larger than 64 bits.    //    let alsoNotAnAddress: Address = 0x436164656E63652146757265766572            ``

Integer literals are not inferred to be an address:

``   // Declare a number. Even though it happens to be a valid address,    // it is not inferred as it.    //    let aNumber = 0x436164656E636521        // `aNumber` has type `Int`            ``

An `Address` can also be created using a byte array or string.

``   // Declare an address with hex representation as 0x436164656E636521.    let someAddress: Address = Address.fromBytes([67, 97, 100, 101, 110, 99, 101, 33])        // Invalid: Provided value is not compatible with type `Address`. The function panics.    let invalidAddress: Address = Address.fromBytes([12, 34, 56, 11, 22, 33, 44, 55, 66, 77, 88, 99, 111])        // Declare an address with the string representation as "0x436164656E636521".    let addressFromString: Address? = Address.fromString("0x436164656E636521")        // Invalid: Provided value does not have the "0x" prefix. Returns Nil    let addressFromStringWithoutPrefix: Address? = Address.fromString("436164656E636521")        // Invalid: Provided value is an invalid hex string. Return Nil.    let invalidAddressForInvalidHex: Address? = Address.fromString("0xZZZ")        // Invalid: Provided value is larger than 64 bits. Return Nil.    let invalidAddressForOverflow: Address? = Address.fromString("0x436164656E63652146757265766572")            ``

### Address functions

Addresses have multiple built-in functions you can use.

- `   view fun toString(): String            `
    
    Returns the string representation of the address. The result has a `0x` prefix and is zero-padded.
    
    `   let someAddress: Address = 0x436164656E636521    someAddress.toString() // is "0x436164656E636521"        let shortAddress: Address = 0x1    shortAddress.toString() // is "0x0000000000000001"            `
    
- `   view fun toBytes(): [UInt8]            `
    
    Returns the byte array representation (`[UInt8]`) of the address.
    
    ``   let someAddress: Address = 0x436164656E636521        someAddress.toBytes() // is `[67, 97, 100, 101, 110, 99, 101, 33]`            ``

# AnyStruct, AnyResource, Optionals, and Never

`AnyStruct` is the top type of all non-resource types (i.e., all non-resource types are a subtype of it).

`AnyResource` is the top type of all resource types.

``   // Declare a variable that has the type `AnyStruct`.    // Any non-resource typed value can be assigned to it, for example an integer,    // but not resource-typed values.    //    var someStruct: AnyStruct = 1        // Assign a value with a different non-resource type, `Bool`.    someStruct = true        // Declare a structure named `TestStruct`, create an instance of it,    // and assign it to the `AnyStruct`-typed variable    //    struct TestStruct {}        let testStruct = TestStruct()        someStruct = testStruct        // Declare a resource named `TestResource`        resource TestResource {}        // Declare a variable that has the type `AnyResource`.    // Any resource-typed value can be assigned to it,    // but not non-resource typed values.    //    var someResource: @AnyResource <- create TestResource()        // Invalid: Resource-typed values can not be assigned    // to `AnyStruct`-typed variables    //    someStruct <- create TestResource()        // Invalid: Non-resource typed values can not be assigned    // to `AnyResource`-typed variables    //    someResource = 1            ``

However, using `AnyStruct` and `AnyResource` does not allow you to opt out of type checking. It is invalid to access fields and call functions on these types, as they have no fields and functions.

``   // Declare a variable that has the type `AnyStruct`.    // The initial value is an integer,    // but the variable still has the explicit type `AnyStruct`.    //    let a: AnyStruct = 1        // Invalid: Operator cannot be used for an `AnyStruct` value (`a`, left-hand side)    // and an `Int` value (`2`, right-hand side).    //    a + 2            ``

`AnyStruct` and `AnyResource` may be used like other types. For example, they may be the element type of [arrays](https://cadence-lang.org/docs/language/values-and-types/arrays) or be the element type of an [optional type](https://cadence-lang.org/docs/language/values-and-types/anystruct-anyresource-opts-never#optionals).

``   // Declare a variable that has the type `[AnyStruct]`,    // i.e. an array of elements of any non-resource type.    //    let anyValues: [AnyStruct] = [1, "2", true]        // Declare a variable that has the type `AnyStruct?`,    // i.e. an optional type of any non-resource type.    //    var maybeSomething: AnyStruct? = 42        maybeSomething = "twenty-four"        maybeSomething = nil            ``

`AnyStruct` is also the super-type of all non-resource optional types, and `AnyResource` is the super-type of all resource optional types.

`   let maybeInt: Int? = 1    let anything: AnyStruct = maybeInt            `

[Conditional downcasting](https://cadence-lang.org/docs/language/operators/casting-operators#conditional-downcasting-operator-as) allows coercing a value that has the type `AnyStruct` or `AnyResource` back to its original type.

## Optionals

Optionals are values which can represent the absence of a value. Optionals have two cases: either there is a value or there is nothing.

An optional type is declared using the `?` suffix for another type. For example, `Int` is a non-optional integer and `Int?` is an optional integer (i.e., either nothing or an integer).

The value representing nothing is `nil`.

``   // Declare a constant which has an optional integer type,    // with nil as its initial value.    //    let a: Int? = nil        // Declare a constant which has an optional integer type,    // with 42 as its initial value.    //    let b: Int? = 42        // Invalid: `b` has type `Int?`, which does not support arithmetic.    b + 23        // Invalid: Declare a constant with a non-optional integer type `Int`,    // but the initial value is `nil`, which in this context has type `Int?`.    //    let x: Int = nil            ``

Optionals can be created for any value, not just for literals.

``   // Declare a constant which has a non-optional integer type,    // with 1 as its initial value.    //    let x = 1        // Declare a constant which has an optional integer type.    // An optional with the value of `x` is created.    //    let y: Int? = x        // Declare a variable which has an optional any type, i.e. the variable    // may be `nil`, or any other value.    // An optional with the value of `x` is created.    //    var z: AnyStruct? = x            ``

A non-optional type is a subtype of its optional type.

``   var a: Int? = nil    let b = 2    a = b        // `a` is `2`            ``

Optional types may be contained in other types (e.g., [arrays](https://cadence-lang.org/docs/language/values-and-types/arrays) or even optionals.)

`   // Declare a constant which has an array type of optional integers.    let xs: [Int?] = [1, nil, 2, nil]        // Declare a constant which has a double optional type.    //    let doubleOptional: Int?? = nil            `

See the [optional operators](https://cadence-lang.org/docs/language/operators/optional-operators) section for information on how to work with optionals.

## Never

`Never` is the bottom type (i.e., it is a subtype of all types). There is no value that has type `Never`.

`Never` can be used as the return type for functions that never return normally. For example, it is the return type of the function [`panic`](https://cadence-lang.org/docs/language/built-in-functions#panic).

``   // Declare a function named `crashAndBurn` which will never return,    // because it calls the function named `panic`, which never returns.    //    fun crashAndBurn(): Never {    panic("An unrecoverable error occurred")    }        // Invalid: Declare a constant with a `Never` type, but the initial value is an integer.    //    let x: Never = 1        // Invalid: Declare a function which returns an invalid return value `nil`,    // which is not a value of type `Never`.    //    fun returnNever(): Never {    return nil    }            ``

# Strings and Characters

Strings and characters are used as follows:

- Strings are collections of characters.
- Strings have the type `String` and characters have the type `Character`.
- Strings can be used to work with text in a Unicode-compliant way.
- Strings are immutable.

String and character literals are enclosed in double quotation marks (`"`):

`   let someString = "Hello, world!"            `

String literals may contain escape sequences. An escape sequence starts with a backslash (`\`):

- `\0`: Null character
- `\\`: Backslash
- `\t`: Horizontal tab
- `\n`: Line feed
- `\r`: Carriage return
- `\"`: Double quotation mark
- `\'`: Single quotation mark
- `\u`: A Unicode scalar value, written as `\u{x}`, where `x` is a 1–8 digit hexadecimal number, which needs to be a valid Unicode scalar value (i.e., in the range 0 to 0xD7FF and 0xE000 to 0x10FFFF inclusive).

``   // Declare a constant which contains two lines of text    // (separated by the line feed character `\n`), and ends    // with a thumbs up emoji, which has code point U+1F44D (0x1F44D).    //    let thumbsUpText =    "This is the first line.\nThis is the second line with an emoji: \u{1F44D}"            ``

The type `Character` represents a single, human-readable character. Characters are extended grapheme clusters, which consist of one or more Unicode scalars.

For example, the single character `ü` can be represented in several ways in Unicode. First, it can be represented by a single Unicode scalar value `ü` ("LATIN SMALL LETTER U WITH DIAERESIS", code point U+00FC). Second, the same single character can be represented by two Unicode scalar values: `u` ("LATIN SMALL LETTER U", code point U+0075), and "COMBINING DIAERESIS" (code point U+0308). The combining Unicode scalar value is applied to the scalar before it, which turns a `u` into a `ü`.

Still, both variants represent the same human-readable character `ü`:

``   let singleScalar: Character = "\u{FC}"    // `singleScalar` is `ü`    let twoScalars: Character = "\u{75}\u{308}"    // `twoScalars` is `ü`            ``

Another example where multiple Unicode scalar values are rendered as a single, human-readable character is a flag emoji. These emojis consist of two "REGIONAL INDICATOR SYMBOL LETTER" Unicode scalar values:

``   // Declare a constant for a string with a single character, the emoji    // for the Canadian flag, which consists of two Unicode scalar values:    // - REGIONAL INDICATOR SYMBOL LETTER C (U+1F1E8)    // - REGIONAL INDICATOR SYMBOL LETTER A (U+1F1E6)    //    let canadianFlag: Character = "\u{1F1E8}\u{1F1E6}"    // `canadianFlag` is `🇨🇦`            ``

## String templates / String Interpolation

String templates, or string interpolation, allow constants, variables, and expressions to be inlined into strings simplifying the process of constructing dynamic strings. String templates are currently supported in single-line literals by wrapping the target in parentheses and prefixing it with a backslash (`\`).

The target in the parentheses must support the built-in function `toString()`, meaning it must evaluate to a `String`, `Number`, `Address`, `Character`, `Bool` or `Path`. Carriage returns, line feeds and nested string literals are not supported inside the parentheses.

``   let result = 2 + 2    let template: String = "2 + 2 = \(result)" // `template` is `2 + 2 = 4`    // Invalid: Empty string template    let empty: String = "\()"    // Invalid: Nested string template    let nested: String = "outer string \( "\(inner template)" )"    // Invalid: Unsupported type    let x: [AnyStruct] = ["tmp", 1]    let arr: String = "\(x)"            ``

## String fields and functions

Strings have multiple built-in functions you can use:

- `   let length: Int            `
    
    Returns the number of characters in the string as an integer.
    
    ``   let example = "hello"        // Find the number of elements of the string.    let length = example.length    // `length` is `5`            ``
    
- `   let utf8: [UInt8]            `
    
    The byte array of the UTF-8 encoding.
    
    ``   let flowers = "Flowers \u{1F490}"    let bytes = flowers.utf8    // `bytes` is `[70, 108, 111, 119, 101, 114, 115, 32, 240, 159, 146, 144]`            ``
    
- `   view fun concat(_ other: String): String            `
    
    Concatenates the string `other` to the end of the original string, but does not modify the original string. This function creates a new string whose length is the sum of the lengths of the string the function is called on and the string given as a parameter.
    
    ``   let example = "hello"    let new = "world"        // Concatenate the new string onto the example string and return the new string.    let helloWorld = example.concat(new)    // `helloWorld` is now `"helloworld"`            ``
    
- `   view fun slice(from: Int, upTo: Int): String            `
    
    Returns a string slice of the characters in the given string from start index `from` up to, but not including, the end index `upTo`. This function creates a new string whose length is `upTo - from`. It does not modify the original string. If either of the parameters are out of the bounds of the string, or the indices are invalid (`from > upTo`), then the function will fail.
    
    ``   let example = "helloworld"        // Create a new slice of part of the original string.    let slice = example.slice(from: 3, upTo: 6)    // `slice` is now `"low"`        // Run-time error: Out of bounds index, the program aborts.    let outOfBounds = example.slice(from: 2, upTo: 10)        // Run-time error: Invalid indices, the program aborts.    let invalidIndices = example.slice(from: 2, upTo: 1)            ``
    
- `   view fun decodeHex(): [UInt8]            `
    
    Returns an array containing the bytes represented by the given hexadecimal string.
    
    The given string must only contain hexadecimal characters and must have an even length. If the string is malformed, the program aborts.
    
    ``   let example = "436164656e636521"        example.decodeHex() // is `[67, 97, 100, 101, 110, 99, 101, 33]`            ``
    
- `   view fun toLower(): String            `
    
    Returns a string where all upper case letters are replaced with lowercase characters.
    
    ``   let example = "Flowers"        example.toLower() // is `flowers`            ``
    
- `   view fun replaceAll(of: String, with: String): String            `
    
    Returns a string where all occurences of `of` are replaced with `with`. If `of` is empty, it matches at the beginning of the string and after each UTF-8 sequence yielding k+1 replacements for a string of length k.
    
    ``   let example = "abababa"        example.replaceAll(of: "a", with: "o") // is `obobobo`            ``
    
- `   view fun split(separator: String): [String]            `
    
    Returns the variable-sized array of strings created splitting the receiver string on the `separator`.
    
    ``   let example = "hello world"        example.split(separator: " ") // is `["hello", "world"]`            ``
    
- `   view fun count(_ substr: String): Int            `
    
    Returns the number of times the provided `substr` appears in the string. This function only counts each character once (see below).
    
    `   let example = "11111"        example.count("11") // is 2            `
    
- `   view fun index(of: String): Int            `
    
    Returns the index of the first (leftmost) occurrence of `of` in the string or `-1` if `of` does not occur in the string.
    
    `   let example = "abcabc"        example.index(of: "a") // is 0    example.index(of: "d") // is -1            `
    
- `   view fun contains(_ other: String): Bool            `
    
    Returns `true` if the string contains `other`, `false` otherwise.
    
    `   let example = "abcdef"        example.contains("abcdefg") // is false            `
    

The `String` type also provides the following functions:

- `   view fun String.encodeHex(_ data: [UInt8]): String            `
    
    Returns a hexadecimal string for the given byte array
    
    ``   let data = [1 as UInt8, 2, 3, 0xCA, 0xDE]        String.encodeHex(data) // is `"010203cade"`            ``
    
- `   view fun String.join(_ strings: [String], separator: String): String            `
    
    Returns the string created by joining the array of `strings` with the provided `separator`.
    
    `   let strings = ["hello", "world"]    String.join(strings, separator: " ") // is "hello world"            `
    

`String`s are also indexable, returning a `Character` value.

`   let str = "abc"    let c = str[0] // is the Character "a"            `

- `   view fun String.fromUTF8(_ input: [UInt8]): String?            `
    
    Attempts to convert a UTF-8 encoded byte array into a `String`. This function returns `nil` if the byte array contains invalid UTF-8, such as incomplete codepoint sequences or undefined graphemes.
    
    For a given string `s`, `String.fromUTF8(s.utf8)` is equivalent to wrapping `s` up in an [optional](https://cadence-lang.org/docs/language/values-and-types/anystruct-anyresource-opts-never#optionals).
    

## Character fields and functions

`Character` values can be converted into `String` values using the `toString` function:

- ``   view fun toString(): String`            ``
    
    Returns the string representation of the character.
    
    `   let c: Character = "x"        c.toString() // is "x"            `
    
- `   view fun String.fromCharacters(_ characters: [Character]): String            `
    
    Builds a new `String` value from an array of `Character`s. Because `String`s are immutable, this operation makes a copy of the input array.
    
    `   let rawUwU: [Character] = ["U", "w", "U"]    let uwu: String = String.fromCharacters(rawUwU) // "UwU"            `
    
- `   let utf8: [UInt8]            `
    
    The byte array of the UTF-8 encoding.
    
    ``   let a: Character = "a"    let a_bytes = a.utf8 // `a_bytes` is `[97]`        let bouquet: Character = "\u{1F490}"    let bouquet_bytes = bouquet.utf8 // `bouquet_bytes` is `[240, 159, 146, 144]`            ``

# Arrays

Arrays consist of the following:

- Arrays are mutable, ordered collections of values.
- Arrays may contain a value multiple times.
- Array literals start with an opening square bracket `[` and end with a closing square bracket `]`.

`   // An empty array    //    []        // An array with integers    //    [1, 2, 3]            `

## Array types

Arrays either have a fixed size or are variably sized (i.e., elements can be added and removed).

Fixed-size array types have the form `[T; N]`, where `T` is the element type and `N` is the size of the array. `N` must be statically known, meaning that it needs to be an integer literal. For example, a fixed-size array of 3 `Int8` elements has the type `[Int8; 3]`.

Variable-size array types have the form `[T]`, where `T` is the element type. For example, the type `[Int16]` specifies a variable-size array of elements that have type `Int16`.

All values in an array must have a type, which is a subtype of the array's element type (`T`).

It is important to understand that arrays are value types and are only ever copied when used as an initial value for a constant or variable, when assigning to a variable, when used as function argument, or when returned from a function call.

`   let size = 2    // Invalid: Array-size must be an integer literal    let numbers: [Int; size] = []        // Declare a fixed-sized array of integers    // which always contains exactly two elements.    //    let array: [Int8; 2] = [1, 2]        // Declare a fixed-sized array of fixed-sized arrays of integers.    // The inner arrays always contain exactly three elements,    // the outer array always contains two elements.    //    let arrays: [[Int16; 3]; 2] = [    [1, 2, 3],    [4, 5, 6]    ]        // Declare a variable length array of integers    var variableLengthArray: [Int] = []        // Mixing values with different types is possible    // by declaring the expected array type    // with the common supertype of all values.    //    let mixedValues: [AnyStruct] = ["some string", 42]            `

Array types are covariant in their element types. For example, `[Int]` is a subtype of `[AnyStruct]`. This is safe because arrays are value types and not reference types.

## Array indexing

To get the element of an array at a specific index, the following indexing syntax can be used: the array is followed by an opening square bracket `[`, the indexing value, and ends with a closing square bracket `]`.

Indexes start at 0 for the first element in the array.

Accessing an element which is out of bounds results in a fatal error at run-time and aborts the program.

``   // Declare an array of integers.    let numbers = [42, 23]        // Get the first number of the array.    //    numbers[0] // is `42`        // Get the second number of the array.    //    numbers[1] // is `23`        // Run-time error: Index 2 is out of bounds, the program aborts.    //    numbers[2]            ``

``   // Declare an array of arrays of integers, i.e. the type is `[[Int]]`.    let arrays = [[1, 2], [3, 4]]        // Get the first number of the second array.    //    arrays[1][0] // is `3`            ``

To set an element of an array at a specific index, the indexing syntax can be used as well.

``   // Declare an array of integers.    let numbers = [42, 23]        // Change the second number in the array.    //    // NOTE: The declaration `numbers` is constant, which means that    // the *name* is constant, not the *value* – the value, i.e. the array,    // is mutable and can be changed.    //    numbers[1] = 2        // `numbers` is `[42, 2]`            ``

## Array fields and functions

Arrays have multiple built-in fields and functions that can be used to get information about and manipulate the contents of the array.

The field `length`, and the functions `concat`, and `contains` are available for both variable-sized and fixed-sized or variable-sized arrays.

- `   let length: Int            `
    
    The number of elements in the array.
    
    ``   // Declare an array of integers.    let numbers = [42, 23, 31, 12]        // Find the number of elements of the array.    let length = numbers.length        // `length` is `4`            ``
    
- `   access(all)    view fun concat(_ array: T): T            `
    
    Concatenates the parameter `array` to the end of the array the function is called on, but does not modify that array.
    
    Both arrays must be the same type `T`.
    
    This function creates a new array whose length is the sum of the length of the array the function is called on and the length of the array given as the parameter.
    
    ``   // Declare two arrays of integers.    let numbers = [42, 23, 31, 12]    let moreNumbers = [11, 27]        // Concatenate the array `moreNumbers` to the array `numbers`    // and declare a new variable for the result.    //    let allNumbers = numbers.concat(moreNumbers)        // `allNumbers` is `[42, 23, 31, 12, 11, 27]`    // `numbers` is still `[42, 23, 31, 12]`    // `moreNumbers` is still `[11, 27]`            ``
    
- `   access(all)    view fun contains(_ element: T): Bool            `
    
    Returns true if the given element of type `T` is in the array.
    
    ``   // Declare an array of integers.    let numbers = [42, 23, 31, 12]        // Check if the array contains 11.    let containsEleven = numbers.contains(11)    // `containsEleven` is `false`        // Check if the array contains 12.    let containsTwelve = numbers.contains(12)    // `containsTwelve` is `true`        // Invalid: Check if the array contains the string "Kitty".    // This results in a type error, as the array only contains integers.    //    let containsKitty = numbers.contains("Kitty")            ``
    
- `   access(all)    view fun firstIndex(of: T): Int?            `
    
    Returns the index of the first element matching the given object in the array, nil if no match. Available if `T` is not resource-kinded and equatable.
    
    ``   // Declare an array of integers.    let numbers = [42, 23, 31, 12]        // Check if the array contains 31    let index = numbers.firstIndex(of: 31)    // `index` is 2        // Check if the array contains 22    let index = numbers.firstIndex(of: 22)    // `index` is nil            ``
    
- `   access(all)    view fun slice(from: Int, upTo: Int): [T]            `
    
    Returns an array slice of the elements in the given array from start index `from` up to, but not including, the end index `upTo`. This function creates a new array whose length is `upTo - from`. It does not modify the original array. If either of the parameters are out of the bounds of the array, or the indices are invalid (`from > upTo`), then the function will fail.
    
    ``   let example = [1, 2, 3, 4]        // Create a new slice of part of the original array.    let slice = example.slice(from: 1, upTo: 3)    // `slice` is now `[2, 3]`        // Run-time error: Out of bounds index, the program aborts.    let outOfBounds = example.slice(from: 2, upTo: 10)        // Run-time error: Invalid indices, the program aborts.    let invalidIndices = example.slice(from: 2, upTo: 1)            ``
    
- `   access(all)    view fun reverse(): [T]            `
    
    Returns a new array with contents in the reversed order. Available if `T` is not resource-kinded.
    
    ``   let example = [1, 2, 3, 4]        // Create a new array which is the reverse of the original array.    let reversedExample = example.reverse()    // `reversedExample` is now `[4, 3, 2, 1]`            ``
    
    `   access(all)    view fun reverse(): [T; N]            `
    
    Returns a new fixed-sized array of same size with contents in the reversed order.
    
    ``   let fixedSizedExample: [String; 3] = ["ABC", "XYZ", "PQR"]        // Create a new array which is the reverse of the original array.    let fixedArrayReversedExample = fixedSizedExample.reverse()    // `fixedArrayReversedExample` is now `["PQR", "XYZ", "ABC"]`            ``
    
- `   access(all)    fun map(_ f: fun(T): U): [U]            `
    
    Returns a new array whose elements are produced by applying the mapper function on each element of the original array. Available if `T` is not resource-kinded.
    
    ``   let example = [1, 2, 3]    let trueForEven =    fun (_ x: Int): Bool {    return x % 2 == 0    }        let mappedExample: [Bool] = example.map(trueForEven)    // `mappedExample` is `[False, True, False]`    // `example` still remains as `[1, 2, 3]`        // Invalid: Map using a function which accepts a different type.    // This results in a type error, as the array contains `Int` values while function accepts    // `Int64`.    let functionAcceptingInt64 =    fun (_ x: Int64): Bool {    return x % 2 == 0    }    let invalidMapFunctionExample = example.map(functionAcceptingInt64)            ``
    
    The `map` function is also available for fixed-sized arrays:
    
    `   access(all)    fun map(_ f: fun(T): U): [U; N]            `
    
    Returns a new fixed-sized array whose elements are produced by applying the mapper function on each element of the original array. Available if `T` is not resource-kinded.
    
    ``   let fixedSizedExample: [String; 3] = ["ABC", "XYZYX", "PQR"]    let lengthOfString =    fun (_ x: String): Int {    return x.length    }        let fixedArrayMappedExample = fixedSizedExample.map(lengthOfString)    // `fixedArrayMappedExample` is now `[3, 5, 3]`    // `fixedSizedExample` still remains as ["ABC", "XYZYX", "PQR"]        // Invalid: Map using a function which accepts a different type.    // This results in a type error, as the array contains `String` values while function accepts    // `Bool`.    let functionAcceptingBool =    fun (_ x: Bool): Int {    return 0    }    let invalidMapFunctionExample = fixedSizedExample.map(functionAcceptingBool)            ``
    
- `   access(all)    view fun filter(_ f: view fun(T): Bool): [T]            `
    
    Returns a new array whose elements are filtered by applying the filter function on each element of the original array. Available if `T` is not resource-kinded.
    
    ``   let example = [1, 2, 3]    let trueForEven =    fun (_ x: Int): Bool {    return x % 2 == 0    }        let filteredExample: [Int] = example.filter(trueForEven)    // `filteredExample` is `[2]`    // `example` still remains as `[1, 2, 3]`        // Invalid: Filter using a function which accepts a different type.    // This results in a type error, as the array contains `Int` values while function accepts    // `Int64`.    let functionAcceptingInt64 =    fun (_ x: Int64): Bool {    return x % 2 == 0    }    let invalidFilterFunctionExample = example.filter(functionAcceptingInt64)            ``
    
    The `filter` function is also available for fixed-sized arrays:
    
    `   access(all)    view fun filter(_ f: view fun(T): Bool): [T]            `
    
    Returns a new **variable-sized** array whose elements are filtered by applying the filter function on each element of the original array. Available if `T` is not resource-kinded.
    
    ``   let fixedSizedExample: [String; 3] = ["AB", "XYZYX", "PQR"]    let lengthOfStringGreaterThanTwo =    fun (_ x: String): Bool {    return x.length > 2    }        let fixedArrayFilteredExample = fixedSizedExample.filter(lengthOfStringGreaterThanTwo)    // `fixedArrayFilteredExample` is `["XYZYX", "PQR"]`    // `fixedSizedExample` still remains as ["AB", "XYZYX", "PQR"]        // Invalid: Filter using a function which accepts a different type.    // This results in a type error, as the array contains `String` values while function accepts    // `Bool`.    let functionAcceptingBool =    fun (_ x: Bool): Bool {    return True    }    let invalidFilterFunctionExample = fixedSizedExample.filter(functionAcceptingBool)            ``
    

## Variable-size array functions

The following functions can only be used on variable-sized arrays. It is invalid to use one of these functions on a fixed-sized array.

- `   access(Mutate | Insert)    fun append(_ element: T): Void            `
    
    Adds the new element `element` of type `T` to the end of the array.
    
    The new element must be the same type as all the other elements in the array.
    
    This function [mutates](https://cadence-lang.org/docs/language/access-control) the array.
    
    ``   // Declare an array of integers.    let numbers = [42, 23, 31, 12]        // Add a new element to the array.    numbers.append(20)    // `numbers` is now `[42, 23, 31, 12, 20]`        // Invalid: The parameter has the wrong type `String`.    numbers.append("SneakyString")            ``
    
- `   access(Mutate | Insert)    fun appendAll(_ array: T): Void            `
    
    Adds all the elements from `array` to the end of the array the function is called on.
    
    Both arrays must be the same type `T`.
    
    This function [mutates](https://cadence-lang.org/docs/language/access-control) the array.
    
    ``   // Declare an array of integers.    let numbers = [42, 23]        // Add new elements to the array.    numbers.appendAll([31, 12, 20])    // `numbers` is now `[42, 23, 31, 12, 20]`        // Invalid: The parameter has the wrong type `[String]`.    numbers.appendAll(["Sneaky", "String"])            ``
    
- `   access(Mutate | Insert)    fun insert(at: Int, _ element: T): Void            `
    
    Inserts the new element `element` of type `T` at the given `index` of the array.
    
    The new element must be of the same type as the other elements in the array.
    
    The `index` must be within the bounds of the array. If the index is outside the bounds, the program aborts.
    
    The existing element at the supplied index is not overwritten.
    
    All the elements after the new inserted element are shifted to the right by one.
    
    This function [mutates](https://cadence-lang.org/docs/language/access-control) the array.
    
    ``   // Declare an array of integers.    let numbers = [42, 23, 31, 12]        // Insert a new element at position 1 of the array.    numbers.insert(at: 1, 20)    // `numbers` is now `[42, 20, 23, 31, 12]`        // Run-time error: Out of bounds index, the program aborts.    numbers.insert(at: 12, 39)            ``
    
- `   access(Mutate | Remove)    fun remove(at: Int): T            `
    
    Removes the element at the given `index` from the array and returns it.
    
    The `index` must be within the bounds of the array. If the index is outside the bounds, the program aborts.
    
    This function [mutates](https://cadence-lang.org/docs/language/access-control) the array.
    
    ``   // Declare an array of integers.    let numbers = [42, 23, 31]        // Remove element at position 1 of the array.    let twentyThree = numbers.remove(at: 1)    // `numbers` is now `[42, 31]`    // `twentyThree` is `23`        // Run-time error: Out of bounds index, the program aborts.    numbers.remove(at: 19)            ``
    
- `   access(Mutate | Remove)    fun removeFirst(): T            `
    
    Removes the first element from the array and returns it.
    
    The array must not be empty. If the array is empty, the program aborts.
    
    This function [mutates](https://cadence-lang.org/docs/language/access-control) the array.
    
    ``   // Declare an array of integers.    let numbers = [42, 23]        // Remove the first element of the array.    let fortytwo = numbers.removeFirst()    // `numbers` is now `[23]`    // `fortywo` is `42`        // Remove the first element of the array.    let twentyThree = numbers.removeFirst()    // `numbers` is now `[]`    // `twentyThree` is `23`        // Run-time error: The array is empty, the program aborts.    numbers.removeFirst()            ``
    
- `   access(Mutate | Remove)    fun removeLast(): T            `
    
    Removes the last element from the array and returns it.
    
    The array must not be empty. If the array is empty, the program aborts.
    
    This function [mutates](https://cadence-lang.org/docs/language/access-control) the array.
    
    ``   // Declare an array of integers.    let numbers = [42, 23]        // Remove the last element of the array.    let twentyThree = numbers.removeLast()    // `numbers` is now `[42]`    // `twentyThree` is `23`        // Remove the last element of the array.    let fortyTwo = numbers.removeLast()    // `numbers` is now `[]`    // `fortyTwo` is `42`        // Run-time error: The array is empty, the program aborts.    numbers.removeLast()            ``
    
- `   access(all)    fun toConstantSized<[T; N]>(): [T; N]?            `
    
    Converts a variable-sized array to a constant-sized array if the number of elements matches the target size `N` and the original variable-sized array has type `T`. Available if `T` is not resource-kinded.
    
    Returns nil if the number of elements does not match the target size `N`.
    
    `   // Declare an array of integers.    let numbers = [42, 23]        // Change to a constant-sized array    let numbersConst = numbers.toConstantSized<[Int; 2]>()    // numbersConst has the type [Int; 2]?            `
    

## Constant-size array functions

- `   access(all)    fun toVariableSized(): [T]            `
    
    Converts a constant-sized array to a variable-sized array of the same type `T`. Available if `T` is not resource-kinded.
    
    `   // Declare an array of integers.    let numbers: [Int16; 3] = [1, 2, 3]        // Change to a constant-sized array    let numbersVar = numbers.toVariableSized()    // numbersVar has the type [Int]            `

# Dictionaries

Dictionaries are mutable, unordered collections of key-value associations. Dictionaries may contain a key only once and may contain a value multiple times.

- Dictionary literals start with an opening brace `{` and end with a closing brace `}`.
- Keys are separated from values by a colon, and key-value associations are separated by commas.

`   // An empty dictionary    //    {}        // A dictionary which associates integers with booleans    //    {    1: true,    2: false    }            `

## Dictionary types

Dictionary types have the form `{K: V}`, where `K` is the type of the key, and `V` is the type of the value. For example, a dictionary with `Int` keys and `Bool` values has type `{Int: Bool}`.

In a dictionary, all keys must have a type that is a subtype of the dictionary's key type (`K`), and all values must have a type that is a subtype of the dictionary's value type (`V`).

``   // Declare a constant that has type `{Int: Bool}`,    // a dictionary mapping integers to booleans.    //    let booleans = {    1: true,    0: false    }        // Declare a constant that has type `{Bool: Int}`,    // a dictionary mapping booleans to integers.    //    let integers = {    true: 1,    false: 0    }        // Mixing keys with different types, and mixing values with different types,    // is possible by declaring the expected dictionary type with the common supertype    // of all keys, and the common supertype of all values.    //    let mixedValues: {String: AnyStruct} = {    "a": 1,    "b": true    }            ``

Dictionary types are covariant in their key and value types. For example, `{Int: String}` is a subtype of `{AnyStruct: String}` and also a subtype of `{Int: AnyStruct}`. This is safe because dictionaries are value types and not reference types.

## Dictionary Access

To get the value for a specific key from a dictionary, the following access syntax can be used: the dictionary is followed by an opening square bracket `[`, the key, and ends with a closing square bracket `]`.

Accessing a key returns an [optional](https://cadence-lang.org/docs/language/values-and-types/anystruct-anyresource-opts-never#optionals): if the key is found in the dictionary, the value for the given key is returned; and if the key is not found, `nil` is returned.

``   // Declare a constant that has type `{Int: Bool}`,    // a dictionary mapping integers to booleans.    //    let booleans = {    1: true,    0: false    }        // The result of accessing a key has type `Bool?`.    //    booleans[1] // is `true`    booleans[0] // is `false`    booleans[2] // is `nil`        // Invalid: Accessing a key which does not have type `Int`.    //    booleans["1"]            ``

``   // Declare a constant that has type `{Bool: Int}`,    // a dictionary mapping booleans to integers.    //    let integers = {    true: 1,    false: 0    }        // The result of accessing a key has type `Int?`    //    integers[true] // is `1`    integers[false] // is `0`            ``

To set the value for a key of a dictionary, the access syntax can be used as well.

``   // Declare a constant that has type `{Int: Bool}`,    // a dictionary mapping booleans to integers.    //    let booleans = {    1: true,    0: false    }        // Assign new values for the keys `1` and `0`.    //    booleans[1] = false    booleans[0] = true    // `booleans` is `{1: false, 0: true}`            ``

## Dictionary fields and functions

- `   let length: Int            `
    
    The number of entries in the dictionary.
    
    ``   // Declare a dictionary mapping strings to integers.    let numbers = {"fortyTwo": 42, "twentyThree": 23}        // Find the number of entries of the dictionary.    let length = numbers.length        // `length` is `2`            ``
    
- `   access(Mutate | Insert)    fun insert(key: K, _ value: V): V?            `
    
    Inserts the given value of type `V` into the dictionary under the given `key` of type `K`.
    
    The inserted key must have the same type as the dictionary's key type, and the inserted value must have the same type as the dictionary's value type.
    
    Returns the previous value as an optional if the dictionary contained the key; otherwise, returns `nil`.
    
    Updates the value if the dictionary already contained the key.
    
    This function [mutates](https://cadence-lang.org/docs/language/access-control) the dictionary.
    
    ``   // Declare a dictionary mapping strings to integers.    let numbers = {"twentyThree": 23}        // Insert the key `"fortyTwo"` with the value `42` into the dictionary.    // The key did not previously exist in the dictionary,    // so the result is `nil`    //    let old = numbers.insert(key: "fortyTwo", 42)        // `old` is `nil`    // `numbers` is `{"twentyThree": 23, "fortyTwo": 42}`            ``
    
- `   access(Mutate | Remove)    fun remove(key: K): V?            `
    
    Removes the value for the given `key` of type `K` from the dictionary.
    
    Returns the value of type `V` as an optional if the dictionary contained the key; otherwise, returns `nil`.
    
    This function [mutates](https://cadence-lang.org/docs/language/access-control) the dictionary.
    
    ``   // Declare a dictionary mapping strings to integers.    let numbers = {"fortyTwo": 42, "twentyThree": 23}        // Remove the key `"fortyTwo"` from the dictionary.    // The key exists in the dictionary,    // so the value associated with the key is returned.    //    let fortyTwo = numbers.remove(key: "fortyTwo")        // `fortyTwo` is `42`    // `numbers` is `{"twentyThree": 23}`        // Remove the key `"oneHundred"` from the dictionary.    // The key does not exist in the dictionary, so `nil` is returned.    //    let oneHundred = numbers.remove(key: "oneHundred")        // `oneHundred` is `nil`    // `numbers` is `{"twentyThree": 23}`            ``
    
- `   let keys: [K]            `
    
    Returns an array of the keys of type `K` in the dictionary. This does not modify the dictionary — it just returns a copy of the keys as an array. If the dictionary is empty, this returns an empty array. The ordering of the keys is undefined.
    
    ``   // Declare a dictionary mapping strings to integers.    let numbers = {"fortyTwo": 42, "twentyThree": 23}        // Find the keys of the dictionary.    let keys = numbers.keys        // `keys` has type `[String]` and is `["fortyTwo","twentyThree"]`            ``
    
- `   let values: [V]            `
    
    Returns an array of the values of type `V` in the dictionary. This does not modify the dictionary — it just returns a copy of the values as an array. If the dictionary is empty, this returns an empty array.
    
    This field is not available if `V` is a resource type.
    
    ``   // Declare a dictionary mapping strings to integers.    let numbers = {"fortyTwo": 42, "twentyThree": 23}        // Find the values of the dictionary.    let values = numbers.values        // `values` has type [Int] and is `[42, 23]`            ``
    
- `   access(all)    view fun containsKey(key: K): Bool            `
    
    Returns true if the given key of type `K` is in the dictionary.
    
    ``   // Declare a dictionary mapping strings to integers.    let numbers = {"fortyTwo": 42, "twentyThree": 23}        // Check if the dictionary contains the key "twentyFive".    let containsKeyTwentyFive = numbers.containsKey("twentyFive")    // `containsKeyTwentyFive` is `false`        // Check if the dictionary contains the key "fortyTwo".    let containsKeyFortyTwo = numbers.containsKey("fortyTwo")    // `containsKeyFortyTwo` is `true`        // Invalid: Check if the dictionary contains the key 42.    // This results in a type error, as the key type of the dictionary is `String`.    //    let containsKey42 = numbers.containsKey(42)            ``
    
- `   access(all)    fun forEachKey(_ function: fun(K): Bool): Void            `
    
    Iterates through all the keys in the dictionary, exiting early if the passed function returns false. This is more efficient than calling `.keys` and iterating over the resulting array, since an intermediate allocation is avoided. The order of key iteration is undefined, similar to `.keys`.
    
    ``   // Take in a targetKey to look for, and a dictionary to iterate through.    fun myContainsKey(targetKey: String, dictionary: {String: Int}) {    // Declare an accumulator that we'll capture inside a closure.    var found = false        // At each step, `key` will be bound to another key from `dictionary`.    dictionary.forEachKey(fun (key: String): Bool {    found = key == targetKey        // The returned boolean value, signals whether to continue iterating.    // This allows for control flow during the iteration process:    // true = `continue`    // false = `break`    return !found    })        return found    }            ``
    

## Dictionary keys

Dictionary keys must be hashable and equatable.

Most of the built-in types, like booleans and integers, are hashable and equatable, so can be used as keys in dictionaries.

A comprehensive list of valid dictionary key types:

- [Address](https://cadence-lang.org/docs/language/values-and-types/addresses-functions)
- [Bool](https://cadence-lang.org/docs/language/values-and-types/booleans-numlits-ints#booleans)
- [Character](https://cadence-lang.org/docs/language/values-and-types/strings-and-characters)
- [Enum](https://cadence-lang.org/docs/language/enumerations)
- [Numbers](https://cadence-lang.org/docs/language/values-and-types/booleans-numlits-ints#numeric-literals)
- [Paths](https://cadence-lang.org/docs/language/accounts/paths)
- [Runtime-types](https://cadence-lang.org/docs/language/types-and-type-system/run-time-types)
- [String](https://cadence-lang.org/docs/language/values-and-types/strings-and-characters)

# InclusiveRange

An `InclusiveRange<T: Integer>` value represents a range of numerical values between two integers, with the start and end numbers included in the range as suggested by the name.

A range value has a `start`, `end`, and a `step`, which represents the interval at which the range's values are separated from `start` to `end`.

A range can be created using the `InclusiveRange` constructor, which can take two or three arguments.

In the case where the range is constructed with two arguments, the first argument is the `start` and the second is the `end`. The `step` is inferred to be either `1` (when `end >= start`) or `-1` (when `end < start`). For example:

`   // start is 1, end is 100, step is 1    let range: InclusiveRange<UInt> = InclusiveRange(1, 100)            `

Optionally a third, labeled, non-zero `step` argument can be provided to specify a step other than `1`. For example, the following range contains all odd numbers from 1 to 100:

`   // start is 1, end is 100, step is 2    let range: InclusiveRange<UInt> = InclusiveRange(1, 100, step: 2)            `

Note that in this example, even though the specified _end_ of the range is 100, the last actual value the range can attain is 99.

If the specified `step` argument would progress the range away from the `end`, the creation will fail. For example:

`   // Throws an error because a step of -2 cannot progress from 1 to 100    let range: InclusiveRange<Int> = InclusiveRange(1, 100, step: -2)            `

A range requires a type annotation when created.

## InclusiveRange fields and functions

A value of type `InclusiveRange<T>`, where `T` is a number type, has the following fields and functions:

- `   let start: T            `
    
    The start of the range.
    
    ``   // Declare a range of `Int`s    let range = let r: InclusiveRange<Int> = InclusiveRange(3, 9)        // Get the start of the range    let start = range.start        // `start` is `3`            ``
    
- `   let end: T            `
    
    The end of the range.
    
    ``   // Declare a range of `Int`s    let range: InclusiveRange<Int> = InclusiveRange(3, 9)        // Get the end of the range    let end = range.end        // `end` is `9`            ``
    
- `   let step: T            `
    
    The step of the range.
    
    ``   // Declare a range of `Int`s with a `step` of 2    let rangeWithStep: InclusiveRange<Int> = InclusiveRange(3, 9, step: 2)        // Get the step of the range    var step = range.step        // `step` is `2`        // Declare a range of `Int`s without an explicit `step`    let rangeWithStep: InclusiveRange<Int> = InclusiveRange(3, 9)        / Get the step of the range    step = rangeWithStep.step        // `step` is implicitly `1`            ``
    
- `   access(all)    view fun contains(_ element: T): Bool            `
    
    Returns `true` if the given integer is in the `InclusiveRange` sequence, and `false` otherwise.
    
    Specifically, for some `InclusiveRange` `r` defined with `start`, `step`, and `end`, `r.contains(x)` returns true if either:
    
    - `start <= end` and there exists some integer `i >= 0` such that `start + i * step = x` and `x <= end`
    - `start > end` and there exists some integer `i >= 0` such that `start - i * step = x` and `x >= end`
    
    ``   // Declare a range of `Int`s with a `step` of 2    let rangeWithStep: InclusiveRange<Int> = InclusiveRange(3, 9, step: 2)        // `contains` is `true`    var contains = range.contains(5)        // `contains` is `true`    var contains = range.contains(9)        // `contains` is `false`    contains = range.contains(6)        // `contains` is `false`    contains = range.contains(11)            ``
    

## Usage in loops

See [Ranges in loops](https://cadence-lang.org/docs/language/control-flow#ranges-in-loops) for more information.

# Types and Type System

See the following articles to learn more about types and Cadence's type system:

- [Type Annotations](https://cadence-lang.org/docs/language/types-and-type-system/type-annotations)
- [Type Safety](https://cadence-lang.org/docs/language/types-and-type-system/type-safety)
- [Type Inference](https://cadence-lang.org/docs/language/types-and-type-system/type-inference)
- [Composite Types](https://cadence-lang.org/docs/language/types-and-type-system/composite-types)
- [Intersection Types](https://cadence-lang.org/docs/language/types-and-type-system/intersection-types)
- [Run-time Types](https://cadence-lang.org/docs/language/types-and-type-system/run-time-types)
- [Type Hierarchy](https://cadence-lang.org/docs/language/types-and-type-system/type-hierarchy)

# Type Annotations

When declaring a constant or variable, an optional _type annotation_ can be provided, to make it explicit what type the declaration has.

If no type annotation is provided, the type of the declaration is [inferred from the initial value](https://cadence-lang.org/docs/language/types-and-type-system/type-inference).

For function parameters, a type annotation must be provided:

``   // Declare a variable named `boolVarWithAnnotation`, which has an explicit type annotation.    //    // `Bool` is the type of booleans.    //    var boolVarWithAnnotation: Bool = false        // Declare a constant named `integerWithoutAnnotation`, which has no type annotation    // and for which the type is inferred to be `Int`, the type of arbitrary-precision integers.    //    // This is based on the initial value which is an integer literal.    // Integer literals are always inferred to be of type `Int`.    //    let integerWithoutAnnotation = 1        // Declare a constant named `smallIntegerWithAnnotation`, which has an explicit type annotation.    // Because of the explicit type annotation, the type is not inferred.    // This declaration is valid because the integer literal `1` fits into the range of the type `Int8`,    // the type of 8-bit signed integers.    //    let smallIntegerWithAnnotation: Int8 = 1            ``

If a type annotation is provided, the initial value must be of this type. All new values assigned to variables must match their type. This type safety is explained in more detail in [this article](https://cadence-lang.org/docs/language/types-and-type-system/type-safety):

``   // Invalid: declare a variable with an explicit type `Bool`,    // but the initial value has type `Int`.    //    let booleanConstant: Bool = 1        // Declare a variable that has the inferred type `Bool`.    //    var booleanVariable = false        // Invalid: assign a value with type `Int` to a variable which has the inferred type `Bool`.    //    booleanVariable = 1            ``


# Type Safety

The Cadence programming language is a _type-safe_ language.

### Assigning a new value to a variable

When assigning a new value to a variable, the value must be the same type as the variable. For example, if a variable has type `Bool`, it can _only_ be assigned a value that has type `Bool`, and not for example a value that has type `Int`:

``   // Declare a variable that has type `Bool`.    var a = true        // Invalid: cannot assign a value that has type `Int` to a variable which has type `Bool`.    //    a = 0            ``

### Passing arguments to a function

When passing arguments to a function, the types of the values must match the function parameters' types. For example, if a function expects an argument that has type `Bool`, _only_ a value that has type `Bool` can be provided, and not for example a value which has type `Int`:

``   fun nand(_ a: Bool, _ b: Bool): Bool {    return !(a && b)    }        nand(false, false) // is `true`        // Invalid: The arguments of the function calls are integers and have type `Int`,    // but the function expects parameters booleans (type `Bool`).    //    nand(0, 0)            ``

### Converting types

Types are **not** automatically converted. For example, an integer is not automatically converted to a boolean, nor is an `Int32` automatically converted to an `Int8`, nor is an optional integer `Int?` automatically converted to a non-optional integer `Int`, or vice-versa.

``   fun add(_ a: Int8, _ b: Int8): Int8 {    return a + b    }        // The arguments are not declared with a specific type, but they are inferred    // to be `Int8` since the parameter types of the function `add` are `Int8`.    add(1, 2) // is `3`        // Declare two constants which have type `Int32`.    //    let a: Int32 = 3_000_000_000    let b: Int32 = 3_000_000_000        // Invalid: cannot pass arguments which have type `Int32` to parameters which have type `Int8`.    //    add(a, b)            ``


# Type Inference

If a variable or constant declaration is not annotated explicitly with a type, the declaration's type is inferred from the initial value.

### Basic literals

Decimal integer literals and hex literals are inferred to type `Int`:

``   let a = 1    // `a` has type `Int`        let b = -45    // `b` has type `Int`        let c = 0x02    // `c` has type `Int`            ``

Unsigned fixed-point literals are inferred to type `UFix64`. Signed fixed-point literals are inferred to type `Fix64`:

``   let a = 1.2    // `a` has type `UFix64`        let b = -1.2    // `b` has type `Fix64`            ``

Similarly, for other basic literals, the types are inferred in the following manner:

|Literal Kind|Example|Inferred Type (x)|
|---|---|---|
|String literal|`let x = "hello"`|String|
|Boolean literal|`let x = true`|Bool|
|Nil literal|`let x = nil`|Never?|

### Array literals

Array literals are inferred based on the elements of the literal, and to be variable-size. The inferred element type is the _least common super-type_ of all elements:

``   let integers = [1, 2]    // `integers` has type `[Int]`        let int8Array = [Int8(1), Int8(2)]    // `int8Array` has type `[Int8]`        let mixedIntegers = [UInt(65), 6, 275, Int128(13423)]    // `mixedIntegers` has type `[Integer]`        let nilableIntegers = [1, nil, 2, 3, nil]    // `nilableIntegers` has type `[Int?]`        let mixed = [1, true, 2, false]    // `mixed` has type `[AnyStruct]`            ``

### Dictionary literals

Dictionary literals are inferred based on the keys and values of the literal. The inferred type of keys and values is the _least common super-type_ of all keys and values, respectively:

``   let booleans = {    1: true,    2: false    }    // `booleans` has type `{Int: Bool}`        let mixed = {    Int8(1): true,    Int64(2): "hello"    }    // `mixed` has type `{Integer: AnyStruct}`        // Invalid: mixed keys    //    let invalidMixed = {    1: true,    false: 2    }    // The least common super-type of the keys is `AnyStruct`.    // But it is not a valid type for dictionary keys.            ``

### Ternary expression

The ternary expression type is inferred to be the least common super-type of the second and third operands:

``   let a = true ? 1 : 2    // `a` has type `Int`        let b = true ? 1 : nil    // `b` has type `Int?`        let c = true ? 5 : (false ? "hello" : nil)    // `c` has type `AnyStruct`            ``

### Functions

Functions are inferred based on the parameter types and the return type:

``   let add = (a: Int8, b: Int8): Int {    return a + b    }        // `add` has type `fun(Int8, Int8): Int`            ``

Type inference is performed for each expression and statement, and not across statements.

## Ambiguities

There are cases where types cannot be inferred. In these cases, explicit type annotations are required:

``   // Invalid: not possible to infer type based on array literal's elements.    //    let array = []        // Instead, specify the array type and the concrete element type, e.g. `Int`.    //    let array: [Int] = []        // Or, use a simple-cast to annotate the expression with a type.    let array = [] as [Int]            ``

``   // Invalid: not possible to infer type based on dictionary literal's keys and values.    //    let dictionary = {}        // Instead, specify the dictionary type and the concrete key    // and value types, e.g. `String` and `Int`.    //    let dictionary: {String: Int} = {}        // Or, use a simple-cast to annotate the expression with a type.    let dictionary = {} as {String: Int}            ``


# Composite Types

Composite types allow composing simpler types into more complex types. For example, they allow the composition of multiple values into one. Composite types have a name and consist of zero or more named fields and zero or more functions that operate on the data. Each field may have a different type.

Composite types can only be declared within a [contract](https://cadence-lang.org/docs/language/contracts) and nowhere else.

There are two kinds of composite types:

- [**Structures**](https://cadence-lang.org/docs/language/types-and-type-system/composite-types#structures) are _copied_ — they are value types. Structures are useful when copies with an independent state are desired.
- [**Resources**](https://cadence-lang.org/docs/language/resources) are _moved_ — they are linear types and **must** be used **exactly once**. Resources are useful when it is desired to model ownership (a value exists exactly in one location and it should not be lost).

Each kind differs in its usage and behavior, depending on when the value is:

- used as the initial value for a constant or variable
- assigned to a variable
- passed as an argument to a function, and
- returned from a function.

Certain constructs in a blockchain represent assets of real, tangible value, as much as a house, car, or bank account. We must consider the possiblity of literal loss and theft, perhaps even on the scale of millions of dollars.

Structures are not an ideal way to represent this ownership because they can be copied. This would mean that there could be a risk of having multiple copies of certain assets floating around, which breaks the scarcity requirements needed for these assets to have real value and calls into question who actually owns the property.

A structure is much more useful for representing information that can be grouped together in a logical way, but doesn't have value or a need to be able to be owned or transferred.

A structure could for example be used to contain the information associated with a division of a company, but a resource would be used to represent the assets that have been allocated to that organization for spending.

Nesting of resources is only allowed within other resource types, or in data structures like arrays and dictionaries, but not in structures, as that would allow resources to be copied.

## Composite type declaration and creation

Structures are declared using the `struct` keyword, and resources are declared using the `resource` keyword. The keyword is followed by the name:

`   access(all)    struct SomeStruct {    // ...    }        access(all)    resource SomeResource {    // ...    }            `

- Structures and resources are types.
- Structures are created (instantiated) by calling the type like a function.

`   // instantiate a new struct object and assign it to a constant    let a = SomeStruct()            `

The constructor function may require parameters if the [initializer](https://cadence-lang.org/docs/language/types-and-type-system/composite-types#composite-type-fields) of the composite type requires them.

Composite types can only be declared within [contracts](https://cadence-lang.org/docs/language/contracts) and not locally in functions.

- A resource must be created (instantiated) by using the `create` keyword and calling the type like a function.
- Resources can only be created in functions and types that are declared in the same contract in which the resource is declared.

`   // instantiate a new resource object and assign it to a constant    let b <- create SomeResource()            ` //->

## Composite type fields

Fields are declared like variables and constants. However, the initial values for fields are set in the initializer, **not** in the field declaration. All fields **must** be initialized in the initializer, exactly once.

Having to provide initial values in the initializer might seem restrictive, but this ensures that all fields are always initialized in one location, the initializer, and the initialization order is clear.

The initialization of all fields is checked statically and it is invalid to not initialize all fields in the initializer. Also, it is statically checked that a field is definitely initialized before it is used.

The initializers main purpose is to initialize fields, though it may also contain other code. Just like a function, it may declare parameters and may contain arbitrary code. However, it has no return type (i.e., it is always `Void`).

- The initializer is declared using the `init` keyword.
- The initializer always follows any fields.

There are two kinds of fields:

- **Constant fields** — are also stored in the composite value, but after they have been initialized with a value, they **cannot** have new values assigned to them afterwards. A constant field must be initialized exactly once.
    
    Constant fields are declared using the `let` keyword.
    
- **Variable fields** — are stored in the composite value and can have new values assigned to them.
    
    Variable fields are declared using the `var` keyword.
    
    |Field Kind|Assignable|Keyword|
    |---|---|---|
    |**Variable field**|Yes|`var`|
    |**Constant field**|**No**|`let`|
    

In initializers, the special constant `self` refers to the composite value that is to be initialized.

If a composite type is to be stored, all of its field types must be storable. Non-storable types are:

- [Functions](https://cadence-lang.org/docs/language/functions)
- [Accounts](https://cadence-lang.org/docs/language/accounts/) — `Account`
- [Transactions](https://cadence-lang.org/docs/language/transactions)
- [References](https://cadence-lang.org/docs/language/references) — References are ephemeral. Consider [storing a capability and borrowing it](https://cadence-lang.org/docs/language/capabilities) when needed instead.

Fields can be read (if they are constant or variable) and set (if they are variable), using the access syntax: the composite value is followed by a dot (`.`) and the name of the field.

``   // Declare a structure named `Token`, which has a constant field    // named `id` and a variable field named `balance`.    //    // Both fields are initialized through the initializer.    //    // The public access modifier `access(all)` is used in this example to allow    // the fields to be read in outer scopes. Fields can also be declared    // private so they cannot be accessed in outer scopes.    //    access(all)    struct Token {        access(all)    let id: Int        access(all)    var balance: Int        init(id: Int, balance: Int) {    self.id = id    self.balance = balance    }    }            ``

info

It is invalid to provide the initial value for a field in the field declaration.

`   access(all)    struct StructureWithConstantField {    // Invalid: It is invalid to provide an initial value in the field declaration.    // The field must be initialized by setting the initial value in the initializer.    //    access(all)    let id: Int = 1    }            `

The field access syntax must be used to access fields — fields are not available as variables.

``   access(all)    struct Token {        access(all)    let id: Int        init(initialID: Int) {    // Invalid: There is no variable with the name `id` available.    // The field `id` must be initialized by setting `self.id`.    //    id = initialID    }    }            ``

The initializer is **not** automatically derived from the fields. It must be explicitly declared.

``   access(all)    struct Token {        access(all)    let id: Int        // Invalid: Missing initializer initializing field `id`.    }            ``

A composite value can be created by calling the constructor and providing the field values as arguments.

The value's fields can be accessed on the object after it is created:

``   let token = Token(id: 42, balance: 1_000_00)        token.id // is `42`    token.balance // is `1_000_000`        token.balance = 1    // `token.balance` is `1`        // Invalid: assignment to constant field    //    token.id = 23            ``

Initializers do not support overloading.

Initializers can also be declared with the `view` keyword to indicate that they do not perform any mutating operations and to allow them to be called from within other `view` functions. In an initializer, writes to `self` are considered `view` (unlike within other composite functions), as the value being constructed here is by definition local to the context calling the initializer:

`   access(all)    struct Token {        access(all)    let id: Int        access(all)    var balance: Int        view init(id: Int, balance: Int) {    self.id = id    self.balance = balance    }    }            `

## Composite type functions

Composite types may contain functions. Just like in the initializer, the special constant `self` refers to the composite value that the function is called on:

``   // Declare a structure named "Rectangle", which represents a rectangle    // and has variable fields for the width and height.    //    access(all)    struct Rectangle {        access(all)    var width: Int        access(all)    var height: Int        init(width: Int, height: Int) {    self.width = width    self.height = height    }        // Declare a function named "scale", which scales    // the rectangle by the given factor.    //    access(all)    fun scale(factor: Int) {    self.width = self.width * factor    self.height = self.height * factor    }    }        let rectangle = Rectangle(width: 2, height: 3)    rectangle.scale(factor: 4)    // `rectangle.width` is `8`    // `rectangle.height` is `12`            ``

Functions do not support overloading.

## Composite type subtyping

Two composite types are compatible if and only if they refer to the same declaration by name (i.e., nominal typing applies instead of structural typing).

Even if two composite types declare the same fields and functions, the types are only compatible if their names match:

``   // Declare a structure named `A` which has a function `test`    // which has type `fun(): Void`.    //    struct A {    fun test() {}    }        // Declare a structure named `B` which has a function `test`    // which has type `fun(): Void`.    //    struct B {    fun test() {}    }        // Declare a variable named which accepts values of type `A`.    //    var something: A = A()        // Invalid: Assign a value of type `B` to the variable.    // Even though types `A` and `B` have the same declarations,    // a function with the same name and type, the types' names differ,    // so they are not compatible.    //    something = B()        // Valid: Reassign a new value of type `A`.    //    something = A()            ``

## Composite type behavior

The following describes the behavior of composite types.

### Structures

Structures are **copied** when they are:

- used as an initial value for a constant or variable
- assigned to a different variable
- passed as an argument to a function, and
- returned from a function.

Accessing a field or calling a function of a structure does not copy it.

``   // Declare a structure named `SomeStruct`, with a variable integer field.    //    access(all)    struct SomeStruct {        access(all)    var value: Int        init(value: Int) {    self.value = value    }        fun increment() {    self.value = self.value + 1    }    }        // Declare a constant with value of structure type `SomeStruct`.    //    let a = SomeStruct(value: 0)        // *Copy* the structure value into a new constant.    //    let b = a        b.value = 1    // NOTE: `b.value` is 1, `a.value` is *`0`*        b.increment()    // `b.value` is 2, `a.value` is `0`            ``

### Optional chaining

You can access fields and functions of composite types by using optional chaining.

If a composite type with fields and functions is wrapped in an optional, optional chaining can be used to get those values or call the function without having to get the value of the optional first.

Optional chaining is used by adding a `?` before the `.` access operator for fields or functions of an optional composite type.

- When getting a field value or calling a function with a return value, the access returns the value as an optional. If the object doesn't exist, the value will always be `nil`.
- When calling a function on an optional like this, if the object doesn't exist, nothing will happen and the execution will continue.

It is still invalid to access an undeclared field of an optional composite type:

`   // Declare a struct with a field and method.    access(all)    struct Value {        access(all)    var number: Int        init() {    self.number = 2    }        access(all)    fun set(new: Int) {    self.number = new    }        access(all)    fun setAndReturn(new: Int): Int {    self.number = new    return new    }    }            `

1. Create a new instance of the struct as an optional:
    
    `   let value: Value? = Value()            `
    
2. Create another optional with the same type, but nil:
    
    `   let noValue: Value? = nil            `
    
3. Access the `number` field using optional chaining:
    
    `   let twoOpt = value?.number            `
    
    - Because `value` is an optional, `twoOpt` has type `Int?`:
    
    `   let two = twoOpt ?? 0            `
    
    - `two` is `2`.
4. Try to access the `number` field of `noValue`, which has type `Value?`. This still returns an `Int?`:
    
    `   let nilValue = noValue?.number            `
    
    - This time, since `noValue` is `nil`, `nilValue` will also be `nil`.
5. Try to call the `set` function of `value`. The function call is performed, as `value` is not nil:
    
    `   value?.set(new: 4)            `
    
6. Try to call the `set` function of `noValue`. The function call is _not_ performed, as `noValue` is nil:
    
    `   noValue?.set(new: 4)            `
    
7. Call the `setAndReturn` function, which returns an `Int`. Because `value` is an optional, the return value is type `Int?`:
    
    `   let sixOpt = value?.setAndReturn(new: 6)    let six = sixOpt ?? 0            `
    
    - `six` is `6`.

This is also possible by using the force-unwrap operator (`!`).

Forced-optional chaining is used by adding a `!` before the `.` access operator for fields or functions of an optional composite type.

When getting a field value or calling a function with a return value, the access returns the value. If the object doesn't exist, the execution will panic and revert.

It is still invalid to access an undeclared field of an optional composite type:

`   // Declare a struct with a field and method.    access(all)    struct Value {        access(all)    var number: Int        init() {    self.number = 2    }        access(all)    fun set(new: Int) {    self.number = new    }        access(all)    fun setAndReturn(new: Int): Int {    self.number = new    return new    }    }            `

1. Create a new instance of the struct as an optional:
    
    `   let value: Value? = Value()            `
    
2. Create another optional with the same type, but nil:
    
    `   let noValue: Value? = nil            `
    
3. Access the `number` field using force-optional chaining:
    
    `   let two = value!.number            `
    
    - `two` is `2`
4. Try to access the `number` field of `noValue`, which has type `Value?`.
    
    - Run-time error: This time, since `noValue` is `nil`, the program execution will revert.
    
    `   let number = noValue!.number            `
    
5. Call the `set` function of the struct.
    
    `   value!.set(new: 4)            `
    
    - This succeeds and sets the value to 4
    
    `   noValue!.set(new: 4)            `
    
    - Run-time error: Since `noValue` is nil, the value is not set and the program execution reverts.
6. Call the `setAndReturn` function, which returns an `Int`. Because we use force-unwrap before calling the function, the return value is type `Int`:
    
    `   let six = value!.setAndReturn(new: 6)            `
    
    - `six` is `6`

### Resources

Resources are explained in detail [in this article](https://cadence-lang.org/docs/language/resources).

## Unbound references and nulls

There is **no** support for `null`.

## Inheritance and abstract types

There is **no** support for inheritance. Inheritance is a feature common in other programming languages, which allows including the fields and functions of one type in another type.

Instead, follow the "composition over inheritance" principle, the idea of composing functionality from multiple individual parts, rather than building an inheritance tree.

Furthermore, there is also **no** support for abstract types. An abstract type is a feature common in other programming languages, that prevents creating values of the type and only allows the creation of values of a subtype. In addition, abstract types may declare functions, but omit the implementation of them and instead require subtypes to implement them.

Instead, consider using [interfaces](https://cadence-lang.org/docs/language/interfaces).

# Intersection Types

Interface types cannot be used in type annotations directly; instead, they must be used as part of intersection types. An intersection type represents a value that conforms to all of the interfaces listed in the intersection.

The syntax of a intersection type is `{U1, U2, ... Un}`, where the types `U1` to `Un` are the interfaces to which the type conforms.

The members and functions of any of the set of interfaces are available.

Intersection types are useful for writing functions that work on a variety of different inputs. For example, by using an intersection type for a parameter's type, the function may accept any concrete value that implements all the interfaces in that intersection. The value is restricted to the functionality of the intersection; if the function accidentally attempts to access other functionality, this is prevented by the static checker.

``   access(all)    struct interface HasID {    access(all)    let id: String    }        access(all)    struct A: HasID {        access(all)    let id: String        init(id: String) {    self.id = id    }    }        access(all)    struct B: HasID {        access(all)    let id: String        init(id: String) {    self.id = id    }    }        // Create two instances, one of type `A`, and one of type `B`.    // Both types conform to interface `HasID`, so the structs can be assigned    // to variables with type `{HasID}`: Some resource type which only allows    // access to the functionality of resource interface `HasID`        let hasID1: {HasID} = A(id: "1")    let hasID2: {HasID} = B(id: "2")        // Declare a function named `getID` which has one parameter with type `{HasID}`.    // The type `{HasID}` is a short-hand for `AnyStruct{HasID}`:    // Some structure which only allows access to the functionality of interface `HasID`.    //    access(all)    fun getID(_ value: {HasID}): String {    return value.id    }        let id1 = getID(hasID1)    // `id1` is "1"        let id2 = getID(hasID2)    // `id2` is "2"            ``

If more than two interfaces are present in an intersection type, any concrete value of that type must implement both of them:

``   access(all)    struct interface HasMetadata {    access(all)    var metadata: AnyStruct    }        access(all)    struct C: HasID, HasMetadata {        access(all)    let id: String        access(all)    var metadata: AnyStruct        init(id: String) {    self.id = id    self.metadata = []    }        access(all)    fun setMetadata(_ data: AnyStruct) {    self.metadata = data    }    }        // valid, because `C` implements both `HasID` and `HasMetadata`.    let hasID3: {HasID, HasMetadata} = C(id: "3")        // Invalid, because `A` implements only `HasID`.    let hasID4: {HasID, HasMetadata} = A(id: "4")            ``

# Run-time Types

Types can be represented at run-time. To create a type value, use the constructor function `Type<T>()`, which accepts the static type as a type argument.

This is similar to `T.self` in Swift, `T::class`/`KClass<T>` in Kotlin, and `T.class`/`Class<T>` in Java.

For example, to represent the type `Int` at run-time:

`   let intType: Type = Type<Int>()            `

This works for both built-in and user-defined types. For example, to get the type value for a resource:

``   resource Collectible {}        let collectibleType = Type<@Collectible>()        // `collectibleType` has type `Type`            ``

Type values are comparable.

`       Type<Int>() == Type<Int>()        Type<Int>() != Type<String>()            `

The method `view fun isSubtype(of: Type): Bool` can be used to compare the run-time types of values.

`   Type<Int>().isSubtype(of: Type<Int>()) // true        Type<Int>().isSubtype(of: Type<String>()) // false        Type<Int>().isSubtype(of: Type<Int?>()) // true            `

To get the run-time type's fully qualified type identifier, use the `let identifier: String` field:

`   let type = Type<Int>()    type.identifier // is "Int"            `

`   // in account 0x1        struct Test {}        let type = Type<Test>()    type.identifier // is "A.0000000000000001.Test"            `

## Getting the type from a value

The method `view fun getType(): Type` can be used to get the run-time type of a value:

``   let something = "hello"        let type: Type = something.getType()    // `type` is `Type<String>()`            ``

This method returns the **concrete run-time type** of the object, **not** the static type.

``   // Declare a variable named `something` that has the *static* type `AnyResource`    // and has a resource of type `Collectible`    //    let something: @AnyResource <- create Collectible()        // The resource //->'s concrete run-time type is `Collectible`    //    let type: Type = something.getType()    // `type` is `Type<@Collectible>()`            

## Constructing a run-time type

Run-time types can also be constructed from type identifier strings using built-in constructor functions:

`   view fun CompositeType(_ identifier: String): Type?    view fun InterfaceType(_ identifier: String): Type?    view fun IntersectionType(types: [String]): Type?            `

Given a type identifier (or a list of identifiers for interfaces in the case of `IntersectionType`), these functions will look up nominal types and produce their run-time equivalents. If the provided identifiers do not correspond to any types, or (in the case of `IntersectionType`) the provided combination of identifiers would not type-check statically, these functions will produce `nil`:

``   struct Test: I {}    struct interface I {}    let type: Type = CompositeType("A.0000000000000001.Test")    // `type` is `Type<Test>`        let type2: Type = IntersectionType(    restrictions: ["A.0000000000000001.I"]    )    // `type2` is `Type<{I}>`            ``

Other built-in functions will construct compound types from other run-types.

``   view fun OptionalType(_ type: Type): Type    view fun VariableSizedArrayType(_ type: Type): Type    view fun ConstantSizedArrayType(type: Type, size: Int): Type    view fun FunctionType(parameters: [Type], return: Type): Type    // returns `nil` if `key` is not valid dictionary key type    view fun DictionaryType(key: Type, value: Type): Type?    // returns `nil` if `type` is not a reference type    view fun CapabilityType(_ type: Type): Type?    view fun ReferenceType(entitlements: [String], type: Type): Type?    view fun InclusiveRangeType(_ type: Type): Type?            ``

## Asserting the type of a value

The method `view fun isInstance(_ type: Type): Bool` can be used to check if a value has a certain type, using the concrete run-time type, and considering subtyping rules:

``   // Declare a variable named `collectible` that has the *static* type `Collectible`    // and has a resource of type `Collectible`    //    let collectible: @Collectible <- create Collectible()        // The resource is an instance of type `Collectible`,    // because the concrete run-time type is `Collectible`    //    collectible.isInstance(Type<@Collectible>()) // is `true`        // The resource is an instance of type `AnyResource`,    // because the concrete run-time type `Collectible` is a subtype of `AnyResource`    //    collectible.isInstance(Type<@AnyResource>()) // is `true`        // The resource is *not* an instance of type `String`,    // because the concrete run-time type `Collectible` is *not* a subtype of `String`    //    collectible.isInstance(Type<String>()) // is `false`            ``

info

The **concrete run-time type** of the object is used, **not** the static type.

``   // Declare a variable named `something` that has the *static* type `AnyResource`    // and has a resource of type `Collectible`    //    let something: @AnyResource <- create Collectible()        // The resource is an instance of type `Collectible`,    // because the concrete run-time type is `Collectible`    //    something.isInstance(Type<@Collectible>()) // is `true`        // The resource is an instance of type `AnyResource`,    // because the concrete run-time type `Collectible` is a subtype of `AnyResource`    //    something.isInstance(Type<@AnyResource>()) // is `true`        // The resource is *not* an instance of type `String`,    // because the concrete run-time type `Collectible` is *not* a subtype of `String`    //    something.isInstance(Type<String>()) // is `false`            ``

For example, this allows implementing a marketplace sale resource:

``   access(all)    resource SimpleSale {        /// The resource for sale.    /// Once the resource is sold, the field becomes `nil`.    ///    access(all)    var resourceForSale: @AnyResource?        /// The price that is wanted for the purchase of the resource.    ///    access(all)    let priceForResource: UFix64        /// The type of currency that is required for the purchase.    ///    access(all)    let requiredCurrency: Type    access(all)    let paymentReceiver: Capability<&{FungibleToken.Receiver}>        /// `paymentReceiver` is the capability that will be borrowed    /// once a valid purchase is made.    /// It is expected to target a resource that allows depositing the paid amount    /// (a vault which has the type in `requiredCurrency`).    ///    init(    resourceForSale: @AnyResource,    priceForResource: UFix64,    requiredCurrency: Type,    paymentReceiver: Capability<&{FungibleToken.Receiver}>    ) {    self.resourceForSale <- resourceForSale    self.priceForResource = priceForResource    self.requiredCurrency = requiredCurrency    self.paymentReceiver = paymentReceiver    }        /// buyObject allows purchasing the resource for sale by providing    /// the required funds.    /// If the purchase succeeds, the resource for sale is returned.    /// If the purchase fails, the program aborts.    ///    access(all)    fun buyObject(with funds: @FungibleToken.Vault): @AnyResource {    pre {    // Ensure the resource is still up for sale    self.resourceForSale != nil: "The resource has already been sold"    // Ensure the paid funds have the right amount    funds.balance >= self.priceForResource: "Payment has insufficient amount"    // Ensure the paid currency is correct    funds.isInstance(self.requiredCurrency): "Incorrect payment currency"    }        // Transfer the paid funds to the payment receiver    // by borrowing the payment receiver capability of this sale resource    // and depositing the payment into it        let receiver = self.paymentReceiver.borrow()    ?? panic("failed to borrow payment receiver capability")        receiver.deposit(from: <-funds)    let resourceForSale <- self.resourceForSale <- nil    return <-resourceForSale    }    }            ``

[Edit this page](https://github.com/onflow/cadence-lang.org/tree/main/docs/language/types-and-type-system/run-time-types.md)


# Operators

Operators are special symbols that perform a computation for one or more values. They are either unary, binary, or ternary:

- Unary operators perform an operation for a single value. The unary operator symbol appears before the value.
- Binary operators operate on two values. The binary operator symbol appears between the two values (infix).
- Ternary operators operate on three values. The first operator symbol appears between the first and second value, and the second operator symbol appears between the second and third value (infix).

See the following articles to learn more about the various types of operators:

- [Assignment, Move, Force-Assignment, and Swapping Operators](https://cadence-lang.org/docs/language/operators/assign-move-force-swap)
- [Arithmetic and Logical Operators](https://cadence-lang.org/docs/language/operators/arithmetic-logical-operators)
- [Comparison Operators](https://cadence-lang.org/docs/language/operators/comparison-operators)
- [Bitwise and Ternary Conditional Operators](https://cadence-lang.org/docs/language/operators/bitwise-ternary-operators)
- [Casting Operators](https://cadence-lang.org/docs/language/operators/casting-operators)
- [Optional Operators](https://cadence-lang.org/docs/language/operators/optional-operators)
- [Prescedence and Associativity](https://cadence-lang.org/docs/language/operators/prescedence-associativity)

# Assignment, Move, Force-Assignment, and Swapping Operators

## Assignment operator (`=`)

The binary assignment operator `=` can be used to assign a new value to a variable. It is only allowed in a statement and is not allowed in expressions:

``   var a = 1    a = 2    // `a` is `2`            var b = 3    var c = 4        // Invalid: The assignment operation cannot be used in an expression.    a = b = c        // Instead, the intended assignment must be written in multiple statements.    b = c    a = b            ``

Assignments to constants are invalid.

`   let a = 1    // Invalid: Assignments are only for variables, not constants.    a = 2            `

The left-hand side of the assignment operand must be an identifier. For arrays and dictionaries, this identifier can be followed by one or more index or access expressions.

``   // Declare an array of integers.    let numbers = [1, 2]        // Change the first element of the array.    numbers[0] = 3        // `numbers` is `[3, 2]`            ``

``   // Declare an array of arrays of integers.    let arrays = [[1, 2], [3, 4]]        // Change the first element in the second array    arrays[1][0] = 5        // `arrays` is `[[1, 2], [5, 4]]`            ``

``   let dictionaries = {    true: {1: 2},    false: {3: 4}    }        dictionaries[false][3] = 0        // `dictionaries` is `{    // true: {1: 2},    // false: {3: 0}    //}`            ``

## Move operator (`<-`)

The move operator (`<-`) is unique to Cadence and is used to move [resource types](https://cadence-lang.org/docs/language/resources) from one location to another. It works similar to the assignment operator (`=`) you're used to from most programming languages, except that the data in the location on the right side of the statement is **destroyed** by the operation:

``   // Declare a resource named `SomeResource`, with a variable integer field.        access(all)    resource SomeResource {        access(all)    var value: Int        init(value: Int) {    self.value = value    }    }        // Declare a constant with value of resource type `SomeResource`.        let a: @SomeResource <- create SomeResource(value: 5)        // *Move* the resource value to a new constant.        let b <- a        // Invalid Line Below: Cannot use constant `a` anymore as the resource that it    // referred to was moved to constant `b`.        a.value // Error: a no longer exists        // Constant `b` owns the resource.        b.value // equals 5            ``

## Force-assignment operator (`<-!`)

The force-assignment operator (`<-!`) assigns a resource-typed value to an optional-typed variable if the variable is nil. If the variable being assigned to is non-nil, the execution of the program aborts.

The force-assignment operator is only used for [resource types](https://cadence-lang.org/docs/language/resources).

## Swapping operator (`<->`)

The binary swap operator `<->` can be used to exchange the values of two variables. It is only allowed in a statement and is not allowed in expressions:

``   var a = 1    var b = 2    a <-> b    // `a` is `2`    // `b` is `1`        var c = 3        // Invalid: The swap operation cannot be used in an expression.    a <-> b <-> c        // Instead, the intended swap must be written in multiple statements.    b <-> c    a <-> b            ``

Both sides of the swap operation must be variable, assignment to constants is invalid.

`   var a = 1    let b = 2        // Invalid: Swapping is only possible for variables, not constants.    a <-> b            `

Both sides of the swap operation must be an identifier, followed by one or more index or access expressions.

# Arithmetic and Logical Operators

## Arithmetic operators

The unary pefix operator `-` negates an integer:

``   let a = 1    -a // is `-1`            ``

There are four binary arithmetic operators:

- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`
- Remainder: `%`

``   let a = 1 + 2    // `a` is `3`            ``

The arguments for the operators need to be of the same type. The result is always the same type as the arguments.

The division and remainder operators abort the program when the divisor is zero.

Arithmetic operations on the signed integer types `Int8`, `Int16`, `Int32`, `Int64`, `Int128`, `Int256`, and on the unsigned integer types `UInt8`, `UInt16`, `UInt32`, `UInt64`, `UInt128`, and `UInt256` do not cause values to overflow or underflow - the program will abort with a fatal overflow error.

``   let a: UInt8 = 255        // Run-time error: The result `256` does not fit in the range of `UInt8`,    // thus a fatal overflow error is raised and the program aborts    //    let b = a + 1            ``

``   let a: Int8 = 100    let b: Int8 = 100        // Run-time error: The result `10000` does not fit in the range of `Int8`,    // thus a fatal overflow error is raised and the program aborts    //    let c = a * b            ``

``   let a: Int8 = -128        // Run-time error: The result `128` does not fit in the range of `Int8`,    // thus a fatal overflow error is raised and the program aborts    //    let b = -a            ``

Arithmetic operations on the unsigned integer types `Word8`, `Word16`, `Word32`, and `Word64` **can cause values to overflow or underflow**.

For example, the maximum value of an unsigned 8-bit integer is 255 (binary 11111111). Adding 1 results in an overflow, truncation to 8 bits, and the value 0:

`   // 11111111 = 255    // + 1    // = 100000000 = 0            `

``   let a: Word8 = 255    a + 1 // is `0`            ``

Similarly, for the minimum value 0, subtracting 1 wraps around and results in the maximum value 255:

`   // 00000000    // - 1    // = 11111111 = 255            `

``   let b: Word8 = 0    b - 1 // is `255`            ``

### Arithmetics on number super-types

Arithmetic operators are not supported for number supertypes (`Number`, `SignedNumber`, `FixedPoint`, `SignedFixedPoint`, `Integer`, and `SignedInteger`), as they may or may not succeed at run-time:

`   let x: Integer = 3 as Int8    let y: Integer = 4 as Int8        let z: Integer = x + y // Static error            `

Values of these types must be cast to the desired type before performing the arithmetic operation:

`   let z: Integer = (x as! Int8) + (y as! Int8)            `

## Logical operators

Logical operators work with the boolean values `true` and `false`.

- Logical NOT: `!a`
    
    This unary prefix operator logically negates a boolean:
    
    ``   let a = true    !a // is `false`            ``
    
- Logical AND: `a && b`
    
    ``   true && true // is `true`        true && false // is `false`        false && true // is `false`        false && false // is `false`            ``
    
    If the left-hand side is false, the right-hand side is not evaluated.
    
- Logical OR: `a || b`
    
    ``   true || true // is `true`        true || false // is `true`        false || true // is `true`        false || false // is `false`            ``
    
    If the left-hand side is true, the right-hand side is not evaluated.

# Comparison Operators

Comparison operators work with boolean and integer values.

## Equality `==`

- Equality: `==` is supported for booleans, numbers, addresses, strings, characters, enums, paths, `Type` values, references, and `Void` values (`()`). Variable-sized arrays, fixed-size arrays, dictionaries, and optionals also support equality tests if their inner types do.
    
    Both sides of the equality operator may be optional, even of different levels; for example, it is possible to compare a non-optional with a double-optional (`??`):
    
    ``   1 == 1 // is `true`        1 == 2 // is `false`            ``
    
    ``   true == true // is `true`        true == false // is `false`            ``
    
    ``   let x: Int? = 1    x == nil // is `false`            ``
    
    ``   let x: Int = 1    x == nil // is `false`            ``
    
    ``   // Comparisons of different levels of optionals are possible.    let x: Int? = 2    let y: Int?? = nil    x == y // is `false`            ``
    
    ``   // Comparisons of different levels of optionals are possible.    let x: Int? = 2    let y: Int?? = 2    x == y // is `true`            ``
    
    ``   // Equality tests of arrays are possible if their inner types are equatable.    let xs: [Int] = [1, 2, 3]    let ys: [Int] = [1, 2, 3]    xs == ys // is `true`        let xss: [[Int]] = [xs, xs, xs]    let yss: [[Int]] = [ys, ys, ys]    xss == yss // is `true`            ``
    
    ``   // Equality also applies to fixed-size arrays. If their lengths differ, the result is a type error.    let xs: [Int; 2] = [1, 2]    let ys: [Int; 2] = [0 + 1, 1 + 1]    xs == ys // is `true`            ``
    
    ``   // Equality tests of dictionaries are possible if the key and value types are equatable.    let d1 = {"abc": 1, "def": 2}    let d2 = {"abc": 1, "def": 2}    d1 == d2 // is `true`        let d3 = {"abc": {1: {"a": 1000}, 2: {"b": 2000}}, "def": {4: {"c": 1000}, 5: {"d": 2000}}}    let d4 = {"abc": {1: {"a": 1000}, 2: {"b": 2000}}, "def": {4: {"c": 1000}, 5: {"d": 2000}}}    d3 == d4 // is `true`            ``
    

## Inequality `!=`

- Inequality: `!=` is supported for booleans, numbers, addresses, strings, characters, enums, paths, `Type` values, references, and `Void` values (`()`). Variable-sized arrays, fixed-size arrays, dictionaries, and optionals also support inequality tests if their inner types do.
    
    Both sides of the inequality operator may be optional, even of different levels; for example, it is possible to compare a non-optional with a double-optional (`??`):
    
    ``   1 != 1 // is `false`        1 != 2 // is `true`            ``
    
    ``   true != true // is `false`        true != false // is `true`            ``
    
    ``   let x: Int? = 1    x != nil // is `true`            ``
    
    ``   let x: Int = 1    x != nil // is `true`            ``
    
    ``   // Comparisons of different levels of optionals are possible.    let x: Int? = 2    let y: Int?? = nil    x != y // is `true`            ``
    
    ``   // Comparisons of different levels of optionals are possible.    let x: Int? = 2    let y: Int?? = 2    x != y // is `false`            ``
    
    ``   // Inequality tests of arrays are possible if their inner types are equatable.    let xs: [Int] = [1, 2, 3]    let ys: [Int] = [4, 5, 6]    xs != ys // is `true`            ``
    
    ``   // Inequality also applies to fixed-size arrays. If their lengths differ, the result is a type error.    let xs: [Int; 2] = [1, 2]    let ys: [Int; 2] = [1, 2]    xs != ys // is `false`            ``
    
    ``   // Inequality tests of dictionaries are possible if the key and value types are equatable.    let d1 = {"abc": 1, "def": 2}    let d2 = {"abc": 1, "def": 500}    d1 != d2 // is `true`        let d3 = {"abc": {1: {"a": 1000}, 2: {"b": 2000}}, "def": {4: {"c": 1000}, 5: {"d": 2000}}}    let d4 = {"abc": {1: {"a": 1000}, 2: {"b": 2000}}, "def": {4: {"c": 1000}, 5: {"d": 2000}}}    d3 != d4 // is `false`            ``
    

## Less than `<`

- Less than: `<` is supported for integers, booleans, characters, and strings:
    
    ``   1 < 1 // is `false`        1 < 2 // is `true`        2 < 1 // is `false`        false < true // is `true`        true < true // is `false`        "a" < "b" // is `true`        "z" < "a" // is `false`        "a" < "A" // is `false`        "" < "" // is `false`        "" < "a" // is `true`        "az" < "b" // is `true`        "xAB" < "Xab" // is `false`            ``
    

## Less or equal than `<=`

- Less or equal than: `<=` is supported for integers, booleans, characters, and strings:
    
    ``   1 <= 1 // is `true`        1 <= 2 // is `true`        2 <= 1 // is `false`        false <= true // is `true`        true <= true // is `true`        true <= false // is `false`        "c" <= "a" // is `false`        "z" <= "z" // is `true`        "a" <= "A" // is `false`        "" <= "" // is `true`        "" <= "a" // is `true`        "az" <= "b" // is `true`        "xAB" <= "Xab" // is `false`            ``
    

## Greater than `>`

- Greater than: `>` is supported for integers, booleans, characters, and strings:
    
    ``   1 > 1 // is `false`        1 > 2 // is `false`        2 > 1 // is `true`        false > true // is `false`        true > true // is `false`        true > false // is `true`        "c" > "a" // is `true`        "g" > "g" // is `false`        "a" > "A" // is `true`        "" > "" // is `false`        "" > "a" // is `false`        "az" > "b" // is `false`        "xAB" > "Xab" // is `true`            ``
    

## Greater or equal than `>=`

- Greater or equal than: `>=` is supported for integers, booleans, characters, and strings:
    
    ``   1 >= 1 // is `true`        1 >= 2 // is `false`        2 >= 1 // is `true`        false >= true // is `false`        true >= true // is `true`        true >= false // is `true`        "c" >= "a" // is `true`        "q" >= "q" // is `true`        "a" >= "A" // is `true`        "" >= "" // is `true`        "" >= "a" // is `true`        "az" >= "b" // is `true`        "xAB" >= "Xab" // is `false`            ``
    

### Comparing number super-types

Similar to arithmetic operators, comparison operators are also not supported for number supertypes (`Number`, `SignedNumber` `FixedPoint`, `SignedFixedPoint`, `Integer`, and `SignedInteger`), as they may or may not succeed at run-time:

`   let x: Integer = 3 as Int8    let y: Integer = 4 as Int8        let z: Bool = x > y // Static error            `

Values of these types must be cast to the desired type before performing the arithmetic operation:

`   let z: Bool = (x as! Int8) > (y as! Int8)            `

# Bitwise and Ternary Conditional Operators

## Bitwise operators

Bitwise operators enable the manipulation of individual bits of unsigned and signed integers. They're often used in low-level programming.

- Bitwise AND: `a & b`
    
    Returns a new integer whose bits are 1 only if the bits were 1 in _both_ input integers:
    
    `   let firstFiveBits = 0b11111000    let lastFiveBits = 0b00011111    let middleTwoBits = firstFiveBits & lastFiveBits // is 0b00011000            `
    
- Bitwise OR: `a | b`
    
    Returns a new integer whose bits are 1 only if the bits were 1 in _either_ input integers:
    
    `   let someBits = 0b10110010    let moreBits = 0b01011110    let combinedbits = someBits | moreBits // is 0b11111110            `
    
- Bitwise XOR: `a ^ b`
    
    Returns a new integer whose bits are 1 where the input bits are different, and are 0 where the input bits are the same:
    
    `   let firstBits = 0b00010100    let otherBits = 0b00000101    let outputBits = firstBits ^ otherBits // is 0b00010001            `
    

### Bitwise shifting operators

- Bitwise LEFT SHIFT: `a << b`
    
    Returns a new integer with all bits moved to the left by a certain number of places:
    
    `   let someBits = 4 // is 0b00000100    let shiftedBits = someBits << 2 // is 0b00010000            `
    
- Bitwise RIGHT SHIFT: `a >> b`
    
    Returns a new integer with all bits moved to the right by a certain number of places:
    
    `   let someBits = 8 // is 0b00001000    let shiftedBits = someBits >> 2 // is 0b00000010            `
    

For unsigned integers, the bitwise shifting operators perform [logical shifting](https://en.wikipedia.org/wiki/Logical_shift); for signed integers, they perform [arithmetic shifting](https://en.wikipedia.org/wiki/Arithmetic_shift). Also note that for `a << b` or `a >> b`, `b` must fit into a 64-bit integer.

## Ternary conditional operator

There is only one ternary conditional operator (e.g., `a ? b : c`).

It behaves like an if-statement, but is an expression: if the first operator value is true, the second operator value is returned. If the first operator value is false, the third value is returned.

The first value must be a boolean, or resolve to one (and must have the type `Bool`). The second value and third value can be of any type. The result type is the least common supertype of the second and third value.

``   let x = 1 > 2 ? 3 : 4    // `x` is `4` and has type `Int`        let y = 1 > 2 ? nil : 3    // `y` is `3` and has type `Int?`            ``

# Casting Operators

## Static casting operator (`as`)

The static casting operator `as` can be used to statically type cast a value to a type.

If the static type of the value is a subtype of the given type (the _target_ type), the operator returns the value as the given type.

The cast is performed statically (i.e., when the program is type-checked). Only the static type of the value is considered — not the run-time type of the value.

This means it is not possible to downcast using this operator. Consider using the [conditional downcasting operator `as?`](https://cadence-lang.org/docs/language/operators/casting-operators#conditional-downcasting-operator-as) instead.

``   // Declare a constant named `integer` which has type `Int`.    //    let integer: Int = 1        // Statically cast the value of `integer` to the supertype `Number`.    // The cast succeeds, because the type of the variable `integer`,    // the type `Int`, is a subtype of type `Number`.    // This is an upcast.    //    let number = integer as Number    // `number` is `1` and has type `Number`        // Declare a constant named `something` which has type `AnyStruct`,    // with an initial value which has type `Int`.    //    let something: AnyStruct = 1        // Statically cast the value of `something` to `Int`.    // This is invalid, the cast fails, because the static type of the value is type `AnyStruct`,    // which is not a subtype of type `Int`.    //    let result = something as Int            ``

## Conditional downcasting operator (`as?`)

The conditional downcasting operator `as?` can be used to dynamically type cast a value to a type. The operator returns an optional. If the value has a run-time type that is a subtype of the target type the operator returns the value as the target type; otherwise, the result is `nil`.

The cast is performed at run-time (when the program is executed) and not statically (when the program is checked).

``   // Declare a constant named `something` which has type `AnyStruct`,    // with an initial value which has type `Int`.    //    let something: AnyStruct = 1        // Conditionally downcast the value of `something` to `Int`.    // The cast succeeds, because the value has type `Int`.    //    let number = something as? Int    // `number` is `1` and has type `Int?`        // Conditionally downcast the value of `something` to `Bool`.    // The cast fails, because the value has type `Int`,    // and `Bool` is not a subtype of `Int`.    //    let boolean = something as? Bool    // `boolean` is `nil` and has type `Bool?`            ``

Downcasting works for concrete types, but also works for nested types (e.g., arrays), interfaces, optionals, and so on.

``   // Declare a constant named `values` which has type `[AnyStruct]`,    // i.e. an array of arbitrarily typed values.    //    let values: [AnyStruct] = [1, true]        let first = values[0] as? Int    // `first` is `1` and has type `Int?`        let second = values[1] as? Bool    // `second` is `true` and has type `Bool?`            ``

## Force-downcasting operator (`as!`)

The force-downcasting operator `as!` behaves like the [conditional downcasting operator `as?`](https://cadence-lang.org/docs/language/operators/casting-operators#conditional-downcasting-operator-as). However, if the cast succeeds, it returns a value of the given type instead of an optional; if the cast fails, it aborts the program instead of returning `nil`:

``   // Declare a constant named `something` which has type `AnyStruct`,    // with an initial value which has type `Int`.    //    let something: AnyStruct = 1        // Force-downcast the value of `something` to `Int`.    // The cast succeeds, because the value has type `Int`.    //    let number = something as! Int    // `number` is `1` and has type `Int`        // Force-downcast the value of `something` to `Bool`.    // The cast fails, because the value has type `Int`,    // and `Bool` is not a subtype of `Int`.    //    let boolean = something as! Bool    // Run-time error            ``

## Implicit casting

Cadence does not allow implicit casting (coercion).

`   let value: UInt8 = 1        // invalid: implicit cast    let intValue: Int = value            `

Instead, conversion must be explicitly performed by calling a conversion function. Cadence provides a conversion function for each number type. The functions have the same name as the type, accept any number, and return the number type. If the value cannot be converted, the function panics.

For example, for the type `Int`, the conversion function `fun Int(_ number: Number): Int` is provided.

For example, to convert a `UInt8` value to an `Int` value:

`   let value: UInt8 = 1    let intValue = Int(value)            `

See [Number type casting](https://cadence-lang.org/docs/language/values-and-types/fixed-point-nums-ints#number-type-casting) for more information.

# Optional Operators

## Nil-coalescing operator (`??`)

The nil-coalescing operator `??` returns the value inside an optional if it contains a value, or returns an alternative value if the optional has no value (i.e., the optional value is `nil`).

If the left-hand side is non-nil, the right-hand side is not evaluated:

``   // Declare a constant which has an optional integer type    //    let a: Int? = nil        // Declare a constant with a non-optional integer type,    // which is initialized to `a` if it is non-nil, or 42 otherwise.    //    let b: Int = a ?? 42    // `b` is 42, as `a` is nil            ``

The nil-coalescing operator can only be applied to values that have an optional type:

``   // Declare a constant with a non-optional integer type.    //    let a = 1        // Invalid: nil-coalescing operator is applied to a value which has a non-optional type    // (a has the non-optional type `Int`).    //    let b = a ?? 2            ``

``   // Invalid: nil-coalescing operator is applied to a value which has a non-optional type    // (the integer literal is of type `Int`).    //    let c = 1 ?? 2            ``

The type of the right-hand side of the operator (the alternative value) must be a subtype of the type of left-hand side. This means that the right-hand side of the operator must be the non-optional or optional type matching the type of the left-hand side:

``   // Declare a constant with an optional integer type.    //    let a: Int? = nil    let b: Int? = 1    let c = a ?? b    // `c` is `1` and has type `Int?`        // Invalid: nil-coalescing operator is applied to a value of type `Int?`,    // but the alternative has type `Bool`.    //    let d = a ?? false            ``

## Force unwrap operator (`!`)

The force-unwrap operator (`!`) returns the value inside an optional if it contains a value, or panics and aborts the execution if the optional has no value (i.e., the optional value is `nil`):

``   // Declare a constant which has an optional integer type    //    let a: Int? = nil        // Declare a constant with a non-optional integer type,    // which is initialized to `a` if `a` is non-nil.    // If `a` is nil, the program aborts.    //    let b: Int = a!    // The program aborts because `a` is nil.        // Declare another optional integer constant    let c: Int? = 3        // Declare a non-optional integer    // which is initialized to `c` if `c` is non-nil.    // If `c` is nil, the program aborts.    let d: Int = c!    // `d` is initialized to 3 because c isn't nil.            ``

The force-unwrap operator can only be applied to values that have an optional type:

``   // Declare a constant with a non-optional integer type.    //    let a = 1        // Invalid: force-unwrap operator is applied to a value which has a    // non-optional type (`a` has the non-optional type `Int`).    //    let b = a!            ``

``   // Invalid: The force-unwrap operator is applied    // to a value which has a non-optional type    // (the integer literal is of type `Int`).    //    let c = 1!            ``

# Prescedence and Associativity

Operators have the following precedences, from highest to lowest:

- Unary precedence: `-`, `!`, `<-`
- Cast precedence: `as`, `as?`, `as!`
- Multiplication precedence: `*`, `/`, `%`
- Addition precedence: `+`, `-`
- Bitwise shift precedence: `<<`, `>>`
- Bitwise conjunction precedence: `&`
- Bitwise exclusive disjunction precedence: `^`
- Bitwise disjunction precedence: `|`
- Nil-coalescing precedence: `??`
- Relational precedence: `<`, `<=`, `>`, `>=`
- Equality precedence: `==`, `!=`
- Logical conjunction precedence: `&&`
- Logical disjunction precedence: `||`
- Ternary precedence: `? :`

All operators are left-associative, except for the following operators, which are right-associative:

- Ternary operator
- Nil-coalescing operator

Expressions can be wrapped in parentheses to override precedence conventions (i.e., an alternate order should be indicated), or when the default order should be emphasized (e.g., to avoid confusion). For example, `(2 + 3) * 4` forces addition to precede multiplication, and `5 + (6 * 7)` reinforces the default order.

# Paths

Account storage stores objects under paths. Paths consist of a domain and an identifier.

Paths start with the character `/`, followed by the domain, the path separator `/`, and finally the identifier. The identifier must start with a letter and can only be followed by letters, numbers, or the underscore `_`. For example, the path `/storage/test` has the domain `storage` and the identifier `test`.

There are two valid domains: `storage` and `public`.

Paths in the storage domain have type `StoragePath`, and paths in the public domain have the type `PublicPath`. Both `StoragePath` and `PublicPath` are subtypes of `Path`.

The `storage` domain stores storable objects, such as resources and structs. Objects stored under the `storage` domain are only accessible through account references, which are authorized with a storage entitlement.

The `public` domain stores capabilities, which are accessible by anyone.

## Path functions

`   fun toString(): String            `

Returns the string representation of the path.

`   let storagePath = /storage/path        storagePath.toString() // is "/storage/path"            `

There are also utilities to produce paths from strings:

`   fun PublicPath(identifier: string): PublicPath?    fun StoragePath(identifier: string): StoragePath?            `

Each of these functions take an identifier and produce a path of the appropriate domain:

`   let pathID = "foo"    let path = PublicPath(identifier: pathID) // is /public/foo            `

# Storage

Accounts allow storing storable objects, such as resources and structures.

An account exposes its storage through the `storage` field, which has the type `Account.Storage`.

## `Account.Storage`

Here's an example:

``   access(all)    struct Storage {    /// The current amount of storage used by the account in bytes.    access(all)    let used: UInt64        /// The storage capacity of the account in bytes.    access(all)    let capacity: UInt64        /// All public paths of this account.    access(all)    let publicPaths: [PublicPath]        /// All storage paths of this account.    access(all)    let storagePaths: [StoragePath]        /// Saves the given object into the account's storage at the given path.    ///    /// Resources are moved into storage, and structures are copied.    ///    /// If there is already an object stored under the given path, the program aborts.    ///    /// The path must be a storage path, i.e., only the domain `storage` is allowed.    access(Storage | SaveValue)    fun save<T: Storable>(_ value: T, to: StoragePath)        /// Reads the type of an object from the account's storage, which is stored under the given path,    /// or nil if no object is stored under the given path.    ///    /// If there is an object stored, the type of the object is returned without modifying the stored object.    ///    /// The path must be a storage path, i.e., only the domain `storage` is allowed.    access(all)    view fun type(at path: StoragePath): Type?        /// Loads an object from the account's storage, which is stored under the given path,    /// or nil if no object is stored under the given path.    ///    /// If there is an object stored,    /// the stored resource or structure is moved out of storage and returned as an optional.    ///    /// When the function returns, the storage no longer contains an object under the given path.    ///    /// The given type must be a supertype of the type of the loaded object.    /// If it is not, the function panics.    ///    /// The given type must not necessarily be exactly the same as the type of the loaded object.    ///    /// The path must be a storage path, i.e., only the domain `storage` is allowed.    access(Storage | LoadValue)    fun load<T: Storable>(from: StoragePath): T?        /// Returns a copy of a structure stored in account storage under the given path,    /// without removing it from storage,    /// or nil if no object is stored under the given path.    ///    /// If there is a structure stored, it is copied.    /// The structure stays stored in storage after the function returns.    ///    /// The given type must be a supertype of the type of the copied structure.    /// If it is not, the function panics.    ///    /// The given type must not necessarily be exactly the same as the type of the copied structure.    ///    /// The path must be a storage path, i.e., only the domain `storage` is allowed.    access(Storage | CopyValue)    view fun copy<T: AnyStruct>(from: StoragePath): T?        /// Returns true if the object in account storage under the given path satisfies the given type,    /// i.e. could be borrowed using the given type.    ///    /// The given type must not necessarily be exactly the same as the type of the borrowed object.    ///    /// The path must be a storage path, i.e., only the domain `storage` is allowed.    access(all)    view fun check<T: Any>(from: StoragePath): Bool        /// Returns a reference to an object in storage without removing it from storage.    ///    /// If no object is stored under the given path, the function returns nil.    /// If there is an object stored, a reference is returned as an optional,    /// provided it can be borrowed using the given type.    /// If the stored object cannot be borrowed using the given type, the function panics.    ///    /// The given type must not necessarily be exactly the same as the type of the borrowed object.    ///    /// The path must be a storage path, i.e., only the domain `storage` is allowed    access(Storage | BorrowValue)    view fun borrow<T: &Any>(from: StoragePath): T?        /// Iterate over all the public paths of an account,    /// passing each path and type in turn to the provided callback function.    ///    /// The callback function takes two arguments:    /// 1. The path of the stored object    /// 2. The run-time type of that object    ///    /// Iteration is stopped early if the callback function returns `false`.    ///    /// The order of iteration is undefined.    ///    /// If an object is stored under a new public path,    /// or an existing object is removed from a public path,    /// then the callback must stop iteration by returning false.    /// Otherwise, iteration aborts.    ///    access(all)    fun forEachPublic(_ function: fun(PublicPath, Type): Bool)        /// Iterate over all the stored paths of an account,    /// passing each path and type in turn to the provided callback function.    ///    /// The callback function takes two arguments:    /// 1. The path of the stored object    /// 2. The run-time type of that object    ///    /// Iteration is stopped early if the callback function returns `false`.    ///    /// If an object is stored under a new storage path,    /// or an existing object is removed from a storage path,    /// then the callback must stop iteration by returning false.    /// Otherwise, iteration aborts.    access(all)    fun forEachStored(_ function: fun (StoragePath, Type): Bool)    }        entitlement Storage        entitlement SaveValue    entitlement LoadValue    entitlement CopyValue    entitlement BorrowValue            ``

## Saving objects

`   access(Storage | SaveValue)    fun save<T: Storable>(_ value: T, to: StoragePath)            `

The `save` function saves an object to account storage. The function moves resources and copies structures. If there is already an object stored under the given path, the program aborts. The path must be a storage path, and it must have the domain `storage`.

`T` is the type parameter for the object type. Cadence can infer this type parameter from the argument's type.

## Getting object type information

`   access(all)    view fun type(at path: StoragePath): Type?            `

The `type` function returns the type of the object stored under the given path, or `nil` if the account does not store an object under the given path.

The function does not change the stored object.

The path must be a storage path, and it must have the domain `storage`.

## Loading (removing) objects

`   access(Storage | LoadValue)    fun load<T: Storable>(from: StoragePath): T?            `

The `load` function loads an object from account storage. If there is an object stored under the given path, the function moves the stored resource or structure out of storage and returns it as an optional. If there is no object stored under the given path, the function returns `nil`. When the function returns with an object, the storage no longer stores an object under the given path.

`T` is the type parameter for the object type. Programs must explicitly provide a type argument for the parameter.

The type `T` must be a supertype of the type of the loaded object. If it is not, the program aborts. The given type does not necessarily need to be exactly the same as the type of the loaded object.

The path must be a storage path, and it must have the domain `storage`.

## Copying objects

`   access(Storage | CopyValue)    view fun copy<T: AnyStruct>(from: StoragePath): T?            `

The `copy` function returns a copy of a structure stored in account storage, without removing it from storage. If there is a structure stored under the given path, the function copies the stored structure and returns it as an optional. If there is no structure stored under the given path, the function returns `nil`. When the function returns with an object, the structure stays stored in storage after the function returns.

`T` is the type parameter for the structure type. Programs must explicitly provide a type argument for the parameter.

The type `T` must be a supertype of the type of the copied structure. If it is not, the program aborts. The given type does not necessarily have to be exactly the same as the type of the copied structure.

The path must be a storage path, and it must have the domain `storage`.

## Borrowing objects

`   access(Storage | BorrowValue)    view fun borrow<T: &Any>(from: StoragePath): T?            `

The `borrow` function returns a reference to an objects stored in storage, without removing the object from storage. The function makes it convenient to work with objects in storage without having to move them out of storage.

If there is a structure stored under the given path, the function creates a reference to the object and returns the reference as an optional. If there is no structure stored under the given path, the function returns `nil`.

`T` is the type parameter for the object type. Programs must explicitly provide a type argument for the parameter.

The type argument must be a reference to any type, `&Any` (`Any` is the supertype of all types). The type `T` must be a supertype of the type of the borrowed object. If it is not, the program aborts. The given type does not necessarily have to be exactly the same as the type of the borrowed object.

The path must be a storage path, and it must have the domain `storage`.

## Example

The following steps show you how to declare a resource, create a new instance, and save it in the storage of the account:

1. Declare a resource interface named `HasCount` that has a field `count`:
    
    `   resource interface HasCount {    count: Int    }            `
    
2. Declare a resource named `Counter` that conforms to `HasCount`:
    
    `   resource Counter: HasCount {    access(all)    var count: Int        access(all)    init(count: Int) {    self.count = count    }    }            `
    
    In this example, an authorized reference to an account is available through the constant `account`.
    
3. Create a new instance of the resource type `Counter` and save it in the storage of the account.
    
    - The path `/storage/counter` is used to refer to the stored value.
    - Its identifier `counter` was chosen freely and could be something else.
    
    ``   account.storage.save(    <-create Counter(count: 42),    to: /storage/counter    )        // Run-time error: Storage already contains an object under path `/storage/counter`    //    account.storage.save(    <-create Counter(count: 123),    to: /storage/counter    )            ``
    
4. Load the `Counter` resource from storage path `/storage/counter`.
    
    The new constant `counter` has the type `Counter?` (i.e., it is an optional), and its value is the counter resource that was saved at the beginning of the example:
    
    `   let counter <- account.storage.load<@Counter>(from: /storage/counter)            `
    
    The storage is now empty, there is no longer an object stored under the path `/storage/counter`.
    
5. Load the `Counter` resource again from storage path `/storage/counter`.
    
    The new constant `counter2` has the type `Counter?` and is `nil`, as nothing is stored under the path `/storage/counter` anymore because the previous load moved the counter out of storage:
    
    `   let counter2 <- account.storage.load<@Counter>(from: /storage/counter)            `
    
6. Create another new instance of the resource type `Counter` and save it in the storage of the account.
    
    The path `/storage/otherCounter` is used to refer to the stored value:
    
    `   account.storage.save(    <-create Counter(count: 123),    to: /storage/otherCounter    )            `
    
7. Load the `Vault` resource from storage path `/storage/otherCounter`.
    
    The new constant `vault` has the type `Vault?` and its value is `nil` as there is a resource with type `Counter` stored under the path, which is not a subtype of the requested type `Vault`:
    
    `   let vault <- account.storage.load<@Vault>(from: /storage/otherCounter)            `
    
    The storage still stores a `Counter` resource under the path `/storage/otherCounter`.
    
8. Save the string "Hello, World" in storage under the path `/storage/helloWorldMessage`:
    
    `   account.storage.save(    "Hello, world!",    to: /storage/helloWorldMessage    )            `
    
9. Copy the stored message from storage.
    
    After the copy, the storage still stores the string under the path. Unlike `load`, `copy` does not remove the object from storage:
    
    `   let message = account.storage.copy<String>(from: /storage/helloWorldMessage)            `
    
10. Create a new instance of the resource type `Vault` and save it in the storage of the account:
    
    `   account.storage.save(    <-createEmptyVault(),    to: /storage/vault    )        // Invalid: Cannot copy a resource, as this would allow arbitrary duplication.    //    let vault <- account.storage.copy<@Vault>(from: /storage/vault)            `
    
11. Create a reference to the object stored under path `/storage/counter`, typed as `&Counter`.
    
    - `counterRef` has type `&Counter?` and is a valid reference (i.e., non-`nil`) because the borrow succeeded.
    - There is an object stored under path `/storage/otherCounter` and it has type `Counter`, so it can be borrowed as `&Counter`:
    
    ``   let counterRef = account.storage.borrow<&Counter>(from: /storage/otherCounter)        counterRef?.count // is `42`            ``
    
12. Create a reference to the object stored under path `/storage/otherCounter`, typed as `&{HasCount}`.
    
    `hasCountRef` is non-`nil` as there is an object stored under path `/storage/otherCounter`, and the stored value of type `Counter` conforms to the requested type `{HasCount}` — the type `Counter` implements the intersection type's interface `HasCount`:
    
    `   let hasCountRef = account.storage.borrow<&{HasCount}>(from: /storage/otherCounter)            `
    
13. Create a reference to the object stored under path `/storage/otherCounter`, typed as `&{SomethingElse}`.
    
    `otherRef` is `nil` as there is an object stored under path `/storage/otherCounter`, but the stored value of type `Counter` does not conform to the requested type `{SomethingElse}` — the type `Counter` does not implement the intersection type's interface `SomethingElse`:
    
    `   let otherRef = account.storage.borrow<&{SomethingElse}>(from: /storage/otherCounter)            `
    
14. Create a reference to the object stored under path `/storage/nonExistent`, typed as `&{HasCount}`.
    
    `nonExistentRef` is `nil`, as there is nothing stored under path `/storage/nonExistent`:
    
    `   let nonExistentRef = account.storage.borrow<&{HasCount}>(from: /storage/nonExistent)            `
    

## Iterating over stored objects

The following functions allow iterating over an account's storage:

`   fun forEachPublic(_ function: fun(PublicPath, Type): Bool)    fun forEachStored(_ function: fun(StoragePath, Type): Bool)            `

The functions iterate over all stored objects in the particular domain, by calling the callback function for each stored object, and passing the path and the run-time type of the stored object.

The `Bool` value returned from the callback function determines whether iteration continues. If the callback function returns `true`, iteration proceeds to the next stored object. If the callback function returns `false`, the iteration function stops. The specific order in which the objects are iterated over is undefined, as is the behavior when a path is added or removed from storage.

warning

The iteration functions skip broken objects.

An object could be broken due to invalid types associated with the stored value. For example, the contract for the stored object might have syntactic or semantic errors.

warning

The order of iteration is undefined. Do not rely on any particular behavior.

Saving an object to a path or loading an object from storage during iteration can cause the order in which values are stored to change arbitrarily.

When a program continues to iterate after such an operation, the program aborts.

To avoid such errors, do not save objects to storage or load objects from storage during iteration. If you do perform such an operation, return `false` from the iteration callback to cause the iteration to end after the mutation like so:

`   account.storage.save(1, to: /storage/foo1)    account.storage.save(2, to: /storage/foo2)    account.storage.save(3, to: /storage/foo3)    account.storage.save("qux", to: /storage/foo4)        account.storage.forEachStored(fun (path: StoragePath, type: Type): Bool {    if type == Type<String>() {    // Save a value to storage while iterating    account.storage.save("bar", to: /storage/foo5)        // Returning false here ends iteration after storage is modified,    // preventing the program from aborting    return false    }        return true    })            `

## Storage limit

An account's storage is limited by its storage capacity.

An account's storage used is the sum of the size of all the data that the account stores, in MB. An account's storage capacity is a value that is calculated from the amount of $FLOW that is stored in the account's main $FLOW token vault.

At the end of every transaction, the storage used is compared to the storage capacity. For all accounts involved in the transaction, if the account's storage used is greater than its storage capacity, the transaction fails.

An account exposes its storage used through the `storage.used` field, and its storage capacity through the `storage.capacity` field.

The fields represent current values:

`   // Query the storage used before saving an object    let storageUsedBefore = account.storage.used        // Save a resource into storage    account.storage.save(    <-create Counter(count: 123),    to: /storage/counter    )        // Query the storage used again after saving    let storageUsedAfter = account.storage.used        let storageUsedChanged = storageUsedAfter > storageUsedBefore // is true            `


# Capabilities

Accounts have capabilities associated with them.

See [Capabilities in accounts](https://cadence-lang.org/docs/language/capabilities#capabilities-in-accounts) to learn more.

# Keys

Accounts have keys associated with them. When a key is added to an account, the key can be used to sign a [transaction](https://cadence-lang.org/docs/language/transactions), which in turn gets access to the account and can [perform write operations](https://cadence-lang.org/docs/language/accounts/#performing-write-operations) on it.

An account exposes its keys through the `keys` field, which has the type `Account.Keys`.

## `Account.Keys`

``   access(all)    struct Keys {        /// The total number of unrevoked keys in this account.    access(all)    let count: UInt64        /// Returns the key at the given index, if it exists, or nil otherwise.    ///    /// Revoked keys are always returned, but they have an `isRevoked` field set to true.    access(all)    view fun get(keyIndex: Int): AccountKey?        /// Iterate over all unrevoked keys in this account,    /// passing each key in turn to the provided function.    ///    /// Iteration is stopped early if the function returns `false`.    ///    /// The order of iteration is undefined.    access(all)    fun forEach(_ function: fun(AccountKey): Bool)        /// Adds a new key with the given hashing algorithm and a weight.    ///    /// Returns the added key.    access(Keys | AddKey)    fun add(    publicKey: PublicKey,    hashAlgorithm: HashAlgorithm,    weight: UFix64    ): AccountKey        /// Marks the key at the given index revoked, but does not delete it.    ///    /// Returns the revoked key if it exists, or nil otherwise.    access(Keys | RevokeKey)    fun revoke(keyIndex: Int): AccountKey?    }        entitlement Keys        entitlement AddKey    entitlement RevokeKey            ``

## Account key

An account key has the following structure:

`   access(all)    struct AccountKey {        const accountKeyHashAlgorithmFieldDocString = ``    const accountKeyWeightFieldDocString = ``    const accountKeyIsRevokedFieldDocString = ``        /// The index of the account key.    access(all)    let keyIndex: Int        /// The public key of the account key.    let publicKey: PublicKey        /// The hash algorithm used by the public key.    let hashAlgorithm: HashAlgorithm        /// The weight assigned to the account key,    /// with a maximum of 1000.0    let weight: UFix64        /// The flag indicating whether the key is revoked.    let isRevoked: Bool    }            `

A valid account key's `publicKey` field is a `PublicKey` of either the `ECDSA_P256` or `ECDSA_secp256k1` signature algorithm. Public keys of other signature algorithms supported by Cadence are not valid account public keys.

Refer to the [public keys section](https://cadence-lang.org/docs/language/crypto#public-keys) for more details on the creation and validity of public keys.

A valid account key's `hashAlgorithm` field is either `SHA2_256` or `SHA3_256`. All other hash algorithms supported by Cadence are not valid for hashing with an account key.

Refer to the [hash algorithms section](https://cadence-lang.org/docs/language/crypto#hash-algorithms) for more details on hash algorithms.

## Getting an account key

The functions `keys.get` and `keys.forEach` allow retrieving the keys of an account.

The `get` function allows retrieving a key with a specific index. The function returns the key if it exists, and `nil` otherwise:

`   access(all)    view fun get(keyIndex: Int): AccountKey?            `

The `forEach` function allows iterating over all keys of an account:

`   access(all)    fun forEach(_ function: fun(AccountKey): Bool)            `

For each key of the account, the `forEach` function calls the given callback, passing the key to it. When the callback function returns `true`, the iteration continues, and when it returns `false`, the iteration stops.

warning

The `keys.get` and `keys.forEach` functions include revoked keys, which have the `isRevoked` field set to `true`.

`   access(all)    fun main() {    let account = getAccount(0x42)        // Get the third key from the account.    let thirdKey = account.keys.get(keyIndex: 2)    // ...        // Iterate over all keys of the account.    account.keys.forEach(fun (key: AccountKey): Bool {    // ...    return true    })    }            `

## Adding an account key

The function `keys.add` allows a key to access an account:

`   access(Keys | AddKey)    fun add(    publicKey: PublicKey,    hashAlgorithm: HashAlgorithm,    weight: UFix64    ): AccountKey            `

Calling the `add` function requires access to an account via a reference, which is authorized with the coarse-grained `Keys` entitlement (`auth(Keys) &Account`), or the fine-grained `AddKey` entitlement (`auth(AddKey) &Account`).

For example, to add a public key to an existing account that signed the transaction:

`   transaction(publicKey: [UInt8]) {    prepare(signer: auth(AddKey) &Account) {    let key = PublicKey(    publicKey: publicKey,    signatureAlgorithm: SignatureAlgorithm.ECDSA_P256    )        signer.keys.add(    publicKey: key,    hashAlgorithm: HashAlgorithm.SHA3_256,    weight: 10.0    )    }    }            `

A more complex transaction, which creates an account, has the signer of the transaction pay for the account creation, and authorizes one key to access the account, could look like:

`   transaction(publicKey: [UInt8]) {    prepare(signer: auth(BorrowValue) &Account) {    let key = PublicKey(    publicKey: publicKey,    signatureAlgorithm: SignatureAlgorithm.ECDSA_P256    )        let account = Account(payer: signer)        account.keys.add(    publicKey: key,    hashAlgorithm: HashAlgorithm.SHA3_256,    weight: 10.0    )    }    }            `

## Revoking an account key

The `revoke` function revokes a key from accessing an account. The function only marks the key at the given index as revoked, but never deletes it:

`   access(Keys | RevokeKey)    fun revoke(keyIndex: Int): AccountKey?            `

Calling the `revoke` function requires access to an account via a reference, which is authorized with the coarse-grained `Keys` entitlement (`auth(Keys) &Account`), or the fine-grained `RevokeKey` entitlement (`auth(RevokeKey) &Account`).

For example, to revoke the third key of the account that signed the transaction:

`   transaction {    prepare(signer: auth(RevokeKey) &Account) {    let revokedKey = signer.keys.revoke(keyIndex: 2)    // ...    }    }            `

# Contracts

Accounts store contracts. A contract can also just be an [interface](https://cadence-lang.org/docs/language/interfaces).

See [Contracts](https://cadence-lang.org/docs/language/contracts) for more information.

# Inbox

Accounts have an inbox, which allows making [capabilities](https://cadence-lang.org/docs/language/capabilities) available to specific accounts. The inbox provides a convenient way to _bootstrap_ capabilities, which sets up an initial connection between two accounts that the accounts can use to transfer data or perform actions.

An account exposes its inbox through the `inbox` field, which has the type `Account.Inbox`.

## `Account.Inbox`

``   access(all)    struct Inbox {        /// Publishes a new Capability under the given name,    /// to be claimed by the specified recipient.    access(Inbox | PublishInboxCapability)    fun publish(_ value: Capability, name: String, recipient: Address)        /// Unpublishes a Capability previously published by this account.    ///    /// Returns `nil` if no Capability is published under the given name.    ///    /// Errors if the Capability under that name does not match the provided type.    access(Inbox | UnpublishInboxCapability)    fun unpublish<T: &Any>(_ name: String): Capability<T>?        /// Claims a Capability previously published by the specified provider.    ///    /// Returns `nil` if no Capability is published under the given name,    /// or if this account is not its intended recipient.    ///    /// Errors if the Capability under that name does not match the provided type.    access(Inbox | ClaimInboxCapability)    fun claim<T: &Any>(_ name: String, provider: Address): Capability<T>?    }        entitlement Inbox        entitlement PublishInboxCapability    entitlement UnpublishInboxCapability    entitlement ClaimInboxCapability            ``

## Publishing a capability to the account inbox

An account (the provider) that would like to provide a capability to another account (the recipient) can do so using the `publish` function:

`   access(Inbox | PublishInboxCapability)    fun publish(_ value: Capability, name: String, recipient: Address)            `

Calling the `publish` function requires access to an account via a reference, which is authorized with the coarse-grained `Inbox` entitlement (`auth(Inbox) &Account`), or the fine-grained `PublishInboxCapability` entitlement (`auth(PublishInboxCapability) &Account`).

The function publishes the specified capability using the provided string as an identifier, to be later claimed by the recipient. Note, however, that until the recipient claims the capability, the provider's account stores it, and the capability contributes towards the provider's account storage usage.

Calling this function emits an event, `InboxValuePublished`, that includes the address of both the provider and the recipient, as well as the name and the type of the published capability. Refer to [Inbox Value Published](https://cadence-lang.org/docs/language/core-events#inbox-value-published) for more details on this event.

## Claiming a capability from the account inbox

The intended recipient of a capability can claim a capability from the provider using the `claim` function:

`   access(Inbox | ClaimInboxCapability)    fun claim<T: &Any>(_ name: String, provider: Address): Capability<T>?            `

Calling the `claim` function requires access to an account via a reference, which is authorized with the coarse-grained `Inbox` entitlement (`auth(Inbox) &Account`), or the fine-grained `ClaimInboxCapability` entitlement (`auth(ClaimInboxCapability) &Account`).

If the provider's inbox has a capability stored under the provided name, the calling recipient is the intended recipient, and it conforms to the provided type argument, then the function removes the capability from the provider's inbox and returns it.

If the provider's inbox has no capability stored under the provided name, or if the calling recipient is not the intended recipient, the function returns `nil`. If the borrow type of the capability is not a subtype of the provided type argument, the program aborts.

tip

It is only possible to claim a capability once.

Calling the `claim` function emits an event, `InboxValueClaimed`, that includes the address of both the provider and the recipient, as well as the name of the claimed capability. Refer to [Inbox Value Claimed](https://cadence-lang.org/docs/language/core-events#inbox-value-claimed) for more details on this event.

## Unpublishing a capability from the account inbox

If the provider no longer wishes to publish a capability for some reason, they can unpublish the capability using the `unpublish` function:

`   access(Inbox | UnpublishInboxCapability)    fun unpublish<T: &Any>(_ name: String): Capability<T>?            `

Calling the `unpublish` function requires access to an account via a reference, which is authorized with the coarse-grained `Inbox` entitlement (`auth(Inbox) &Account`), or the fine-grained `UnpublishInboxCapability` entitlement (`auth(UnpublishInboxCapability) &Account`).

If the provider's inbox has a capability stored under the provided name, and it conforms to the provided type argument, then the function removes the capability from the inbox and returns it.

If the provider's inbox has no capability stored under the provided name, the function returns `nil`. If the borrow type of the capability is not a subtype of the provided type argument, the program aborts.

Calling the `unpublish` function emits an event, `InboxValueUnpublished`, which includes the address of the provider and the name of the unpublished capability. Refer to [Inbox Value Unpublished](https://cadence-lang.org/docs/language/core-events#inbox-value-unpublished) for more details on this event.

# Functions

Functions are sequences of statements that perform a specific task. Functions have parameters (inputs) and an optional return value (output). Functions are typed: the function type consists of the parameter types and the return type.

Functions are values (i.e., they can be assigned to constants and variables) and can be passed as arguments to other functions. This behavior is often called _first-class functions_.

## Function declarations

Functions can be declared by using the `fun` keyword, followed by the name of the declaration, the parameters, the optional return type, and the code that should be executed when the function is called.

The parameters must be enclosed in parentheses. The return type, if any, is separated from the parameters by a colon (`:`). The function code must be enclosed in opening and closing braces.

- Each parameter must have a name, which is the name that the argument value will be available as within the function.
- An additional argument label can be provided to require function calls to use the label to provide an argument value for the parameter.
- Argument labels make code more explicit and readable. For example, they avoid confusion about the order of arguments when there are multiple arguments that have the same type.
- Argument labels should be named so they make sense from the perspective of the function call.
- Argument labels precede the parameter name. The special argument label `_` indicates that a function call can omit the argument label. If no argument label is declared in the function declaration, the parameter name is the argument label of the function declaration, and function calls must use the parameter name as the argument label.

Each parameter must have a type annotation, which follows the parameter name after a colon.

Function calls may provide arguments for parameters, which are subtypes of the parameter types.

There is **no** support for optional parameters (i.e., default values for parameters and variadic functions, which are functions that take an arbitrary amount of arguments).

### Examples and explanations

Declare a function named `double`, which multiples a number by two:

`   // The special argument label _ is specified for the parameter,    // so no argument label has to be provided in a function call.    //    fun double(_ x: Int): Int {    return x * 2    }            `

Call the function named `double` with the value 4 for the first parameter:

``   // The argument label can be omitted in the function call as the declaration    // specifies the special argument label _ for the parameter.    //    double(2) // is `4`            ``

It is possible to require argument labels for some parameters and not require argument labels for other parameters.

Declare a function named `clamp`. The function takes an integer value, the lower limit, and the upper limit. It returns an integer between the lower and upper limit:

`   // For the first parameter, the special argument label _ is used,    // so no argument label has to be given for it in a function call.    //    // For the second and third parameter, no argument label is given,    // so the parameter names are the argument labels, i.e., the parameter names    // have to be given as argument labels in a function call.    //    fun clamp(_ value: Int, min: Int, max: Int): Int {    if value > max {    return max    }        if value < min {    return min    }        return value    }            `

Declare a constant, which has the result of a call to the function named `clamp` as its initial value:

``   // For the first argument, no label is given, as it is not required by    // the function declaration (the special argument label `_` is specified).    //    // For the second and this argument the labels must be provided,    // as the function declaration does not specify the special argument label `_`    // for these two parameters.    //    // As the function declaration also does not specify argument labels    // for these parameters, the parameter names must be used as argument labels.    //    let clamped = clamp(123, min: 0, max: 100)    // `clamped` is `100`            ``

Declare a function named `send`, which transfers an amount from one account to another:

``   // The implementation is omitted for brevity.    //    // The first two parameters of the function have the same type, so there is    // a potential that a function call accidentally provides arguments in    // the wrong order.    //    // While the parameter names `senderAddress` and `receiverAddress`    // are descriptive inside the function, they might be too verbose    // to require them as argument labels in function calls.    //    // For this reason the shorter argument labels `from` and `to` are specified,    // which still convey the meaning of the two parameters without being overly    // verbose.    //    // The name of the third parameter, `amount`, is both meaningful inside    // the function and also in a function call, so no argument label is given,    // and the parameter name is required as the argument label in a function call.    //    fun send(from senderAddress: Address, to receivingAddress: Address, amount: Int) {    // The function code is omitted for brevity.    // ...    }            ``

Declare a constant that refers to the sending account's address:

`   // The initial value is omitted for brevity.    //    let sender: Address = // ...            `

Declare a constant that refers to the receiving account's address:

`   // The initial value is omitted for brevity.    //    let receiver: Address = // ...            `

Call the function named `send`:

`   // The function declaration requires argument labels for all parameters,    // so they need to be provided in the function call.    //    // This avoids ambiguity. For example, in some languages (like C) it is    // a convention to order the parameters so that the receiver occurs first,    // followed by the sender. In other languages, it is common to have    // the sender be the first parameter, followed by the receiver.    //    // Here, the order is clear: send an amount from one account to another account.    //    send(from: sender, to: receiver, amount: 100)            `

The order of the arguments in a function call must match the order of the parameters in the function declaration.

Declare a function named `test`, which accepts two parameters named `first` and `second`:

`   fun test(first: Int, second: Int) {    // ...    }        // Invalid: the arguments are provided in the wrong order,    // even though the argument labels are provided correctly.    //    test(second: 1, first: 2)            `

Functions can be nested (i.e., the code of a function may declare further functions).

Declare a function that multiplies a number by two and adds one:

``   fun doubleAndAddOne(_ x: Int): Int {        // Declare a nested function that multiplies a number by two.    //    fun double(_ x: Int) {    return x * 2    }        return double(x) + 1    }        doubleAndAddOne(2) // is `5`            ``

Functions do not support overloading.

## Function expressions

Functions can be also used as expressions. The syntax is the same as for function declarations, except that function expressions have no name (i.e., they are anonymous).

Declare a constant named `double`, which has a function as its value:

``   // The function multiplies a number by two when it is called.    //    // This function's type is `fun (Int): Int`.    //    let double =    fun (_ x: Int): Int {    return x * 2    }            ``

## Function calls

Functions can be called (invoked). Function calls must provide exactly as many argument values as the function has parameters:

``   fun double(_ x: Int): Int {    return x * 2    }        // Valid: the correct number of arguments is provided.    //    double(2) // is `4`        // Invalid: too many arguments are provided.    //    double(2, 3)        // Invalid: too few arguments are provided.    //    double()            ``

## Function types

Function types consist of the `fun` keyword, the function's parameter types, and the function's return type.

The parameter types must be enclosed in parentheses, followed by a colon (`:`), and end with the return type.

Optionally, the `view` keyword can be included before the `fun` keyword to indicate that the type is that of a `view` function.

Declare a function named `add` with the function type `fun(Int, Int): Int`:

`   fun add(a: Int, b: Int): Int {    return a + b    }            `

Declare a constant named `add` with the function type `fun(Int, Int): Int`:

`   let add: fun(Int, Int): Int =    fun (a: Int, b: Int): Int {    return a + b    }            `

If the function has no return type, it implicitly has the return type `Void`.

Declare a constant named `add` with the function type `fun(Int, Int): Int`:

`   let doNothing: fun(): Void =    fun () {}            `

Parentheses also control precedence. For example, a function type `fun(Int): fun(): Int` is the type for a function that accepts one argument with type `Int`, and which returns another function, that takes no arguments and returns an `Int`.

The type `[fun(Int): Int; 2]` specifies an array type of two functions, which accept one integer and return one integer.

Argument labels are not part of the function type. This has the advantage that functions with different argument labels, potentially written by different authors, are compatible as long as the parameter types and the return type match. It has the disadvantage that function calls to plain function values cannot accept argument labels.

Declare a function, which takes one argument that has the type `Int`:

``   // The function has type `fun(Int): Void`.    //    fun foo1(x: Int) {}        // Call function `foo1`. This requires an argument label.    foo1(x: 1)            ``

Declare another function, which takes one argument that has the type `Int`:

``   // The function also has type `fun(Int): Void`.    //    fun foo2(y: Int) {}            ``

Call function `foo2`, which requires an argument label:

`   foo2(y: 2)            `

Declare a variable, which has type `fun(Int): Void`, and use `foo1` as its initial value:

`   var someFoo: fun(Int): Void = foo1            `

Call the function assigned to variable `someFoo`:

`   // This is valid as the function types match.    // This does neither require nor allow argument labels.    //    someFoo(3)            `

Assign function `foo2` to variable `someFoo`:

`   // This is valid as the function types match.    //    someFoo = foo2            `

Call the function assigned to variable `someFoo`:

`   // This does neither require nor allow argument labels.    //    someFoo(4)            `

## Closures

A function may refer to variables and constants of its outer scopes in which it is defined. It is called a closure because it is closing over those variables and constants. A closure can read from the variables and constants and assign to the variables it refers to.

Declare a function named `makeCounter`, which returns a function that, each time when called, returns the next integer, starting at 1:

``   fun makeCounter(): fun(): Int {    var count = 0    return fun (): Int {    // NOTE: read from and assign to the non-local variable    // `count`, which is declared in the outer function.    //    count = count + 1    return count    }    }        let test = makeCounter()    test() // is `1`    test() // is `2`            ``

## Argument passing behavior

When arguments are passed to a function, they are copied. Therefore, values that are passed into a function are unchanged in the caller's scope when the function returns. This behavior is known as [_call by value_](https://en.wikipedia.org/w/index.php?title=Evaluation_strategy&oldid=896280571#Call_by_value).

Declare a function that changes the first two elements of an array of integers:

``   fun change(_ numbers: [Int]) {    // Change the elements of the passed-in array.    // The changes are only local, as the array was copied.    //    numbers[0] = 1    numbers[1] = 2    // `numbers` is `[1, 2]`    }        let numbers = [0, 1]        change(numbers)    // `numbers` is still `[0, 1]`            ``

Parameters are constant (i.e., it is not allowed to assign to them):

`   fun test(x: Int) {    // Invalid: cannot assign to a parameter (constant)    //    x = 2    }            `

## Function pre-conditions and post-conditions

Functions may have pre-conditions and may have post-conditions:

``   fun factorial(_ n: Int): Int {    pre {    // Require the parameter `n` to be greater than or equal to zero.    //    n >= 0:    "factorial is only defined for integers greater than or equal to zero"    }    post {    // Ensure the result will be greater than or equal to 1.    //    result >= 1:    "the result must be greater than or equal to 1"    }        if n < 1 {    return 1    }        return n * factorial(n - 1)    }        factorial(5) // is `120`        // Run-time error: The given argument does not satisfy    // the precondition `n >= 0` of the function, the program aborts.    //    factorial(-2)            ``

See [pre- and post-conditions](https://cadence-lang.org/docs/language/pre-and-post-conditions) for more information.

## View functions

Functions can be annotated as `view` to indicate that they do not modify any external state or any account state. A `view` annotation can be added to the beginning of a function declaration or expression like so:

`   access(all)    view fun foo(): Void {}        let x = view fun(): Void {}        access(all)    struct S {        access(all)    view fun foo(): Void {}        view init()    }            `

All functions that do not have a `view` annotation are considered non-view and cannot be called inside of `view` contexts, such as inside a `view` function or in a precondition or postcondition.

Function types can also have `view` annotations, which are placed after the opening parenthesis but before the parameter list. So, for example, these are valid types:

`   let f: view fun (Int): Int = ...    let h: view fun (): (view fun (): Void) = ...            `

Any function types without a `view` annotation will be considered non-view.

Functions are covariant with respect to `view` annotations, so a `view` function is a subtype of a non-view function with the same parameters and return types. Thus, the following declarations would typecheck:

`   let a: view fun (): Void = view fun() {}    let b: fun (): Void = view fun() {}    let c: fun (): Void = fun() {}    let d: fun(view fun(): Void): Void = fun (x: fun(): Void) {} // contravariance            `

while these would not:

`   let x: view fun (): Void = fun() {}    let y: fun(fun(): Void): Void = fun(f: view fun(): Void) {} // contravariance            `

The operations that are not permitted in `view` contexts are:

- Calling a non-view function (including any functions that modify account state or storage like `save` or `load`).
- Writing to or modifying any resources.
- Writing to or modifying any references.
- Indexed assignment or writes to any variables not statically knowable to have been defined in the current function's scope, or to any resources or references.

So, for example, this code would be allowed:

`   view fun foo(): Int {    let a: [Int] = []    a[0] = 3    return a.length    }            `

while this would not:

`   let a: [Int] = []    view fun foo(): Int {    a[0] = 3    return a.length    }            `

A caveat to this is that in some cases a non-`view` function that only performs a mutation that would be allowed in a `view` context will be rejected as a limitation of the analysis. In particular, users may encounter this with arrays or dictionaries, where a function like:

`   view fun foo(): Int {    let a: [Int] = [0]    a[0] = 1    }            `

is acceptable, because `a` is local to this function, while

`   view fun foo(): Int {    let a: [Int] = [0]    a.append(1)    }            `

will be rejected, because `append` is not `view`.

## Functions are values

Functions are values (_first-class_), so they may be assigned to variables and fields or passed to functions as arguments.

Declare a function named `transform`, which applies a function to each element of an array of integers and returns a new array of the results:

``   access(all)    fun transform(function: fun(Int): Int, integers: [Int]): [Int] {    var newIntegers: [Int] = []    for integer in integers {    newIntegers.append(function(integer))    }    return newIntegers    }        access(all)    fun double(_ integer: Int): Int {    return integer * 2    }        let newIntegers = transform(function: double, integers: [1, 2, 3])    // `newIntegers` is `[2, 4, 6]`            ``

# Pre- and Post-Conditions

Pre-conditions and post-conditions are a unique and powerful feature of Cadence that allow you to specify conditions for execution that must be met for transactions and functions. If they're not met, execution stops and the transaction is reverted. One use is to define specific inputs and outputs for a transaction that make it easy to see what will be transferred, regardless of how complex the transaction execution becomes. This property is particularly useful in using code written by an AI.

To mock out an example:

> **Pre-condition**: The user has 50 Flow.

> **Execution**: Massively complex operation involving swaps between three different currencies, two dexes, and an NFT marketplace.

> **Post-condition**: The user has at least 30 Flow remaining, and owns SuperCoolCollection NFT #54.

## Function pre-conditions and post-conditions

Functions may have pre-conditions and may have post-conditions. They can be used to restrict the inputs (values for parameters) and output (return value) of a function.

- Pre-conditions must be true right before the execution of the function. They are part of the function and introduced by the `pre` keyword, followed by the condition block.
- Post-conditions must be true right after the execution of the function. Post-conditions are part of the function and introduced by the `post` keyword, followed by the condition block.
- A conditions block consists of one or more conditions. Conditions are expressions evaluating to a boolean.
- Conditions may be written on separate lines, or multiple conditions can be written on the same line, separated by a semicolon. This syntax follows the syntax for [statements](https://cadence-lang.org/docs/language/syntax#semicolons).
- Following each condition, an optional description can be provided after a colon. The condition description is used as an error message when the condition fails.
- All conditions **must** appear as the first statements in a function definition and pre-conditions **must** be defined before post-conditions.

In post-conditions, the special constant `result` refers to the result of the function:

``   fun factorial(_ n: Int): Int {    pre {    // Require the parameter `n` to be greater than or equal to zero.    //    n >= 0:    "factorial is only defined for integers greater than or equal to zero"    }    post {    // Ensure the result will be greater than or equal to 1.    //    result >= 1:    "the result must be greater than or equal to 1"    }        if n < 1 {    return 1    }        return n * factorial(n - 1)    }        factorial(5) // is `120`        // Run-time error: The given argument does not satisfy    // the pre-condition `n >= 0` of the function, the program aborts.    //    factorial(-2)            ``

In post-conditions, the special function `before` can be used to get the value of an expression just before the function is called:

``   var n = 0        fun incrementN() {    post {    // Require the new value of `n` to be the old value of `n`, plus one.    //    n == before(n) + 1:    "n must be incremented by 1"    }        n = n + 1    }            ``

Both pre-conditions and post-conditions are considered [`view` contexts](https://cadence-lang.org/docs/language/functions#view-functions); any operations that are not legal in functions with `view` annotations are also not allowed in conditions. In particular, this means that if you wish to call a function in a condition, that function must be `view`.

## Transaction pre-conditions

Transaction pre-conditions function in the same way as [pre-conditions of functions](https://cadence-lang.org/docs/language/pre-and-post-conditions#function-pre-conditions-and-post-conditions).

Pre-conditions are optional and are declared in a `pre` block. They are executed after the `prepare` phase, and are used for checking if explicit conditions hold before executing the remainder of the transaction. The block can have zero or more conditions.

For example, a pre-condition might check the balance before transferring tokens between accounts:

`   pre {    sendingAccount.balance > 0    }            `

If any of the pre-conditions fail, then the remainder of the transaction is not executed and it is completely reverted.

## Transaction post-conditions

Transaction post-conditions are just like [post-conditions of functions](https://cadence-lang.org/docs/language/pre-and-post-conditions#function-pre-conditions-and-post-conditions).

Post-conditions are optional and are declared in a `post` block. They are executed after the execution phase, and are used to verify that the transaction logic has been executed properly. The block can have zero or more conditions.

For example, a token transfer transaction can ensure that the final balance has a certain value:

`   post {    signer.balance == 30.0: "Balance after transaction is incorrect!"    }            `

If any of the post-conditions fail, then the transaction fails and is completely reverted.

## Pre- and post-conditions in interfaces

Interfaces can also define pre- and post-conditions. See the [interfaces](https://cadence-lang.org/docs/language/interfaces) article for more information.

# Built-in Functions

The following describes Cadence's built in functions. Examples are also provided.

## `panic`

`   view fun panic(_ message: String): Never            `

Terminates the program unconditionally and reports a message, which explains why the unrecoverable error occurred.

`   panic("something went wrong: ...")            `

## `assert`

`   view fun assert(_ condition: Bool, message: String)            `

Terminates the program if the given condition is false, and reports a message that explains how the condition is false. Use this function for internal sanity checks.

The message argument is optional.

## `revertibleRandom`

`   view fun revertibleRandom<T: FixedSizeUnsignedInteger>(modulo: T): T            `

Returns a pseudo-random integer.

`T` can be any fixed-size unsigned integer type (`FixedSizeUnsignedInteger`, i.e., `UInt8`, `UInt16`, `UInt32`, `UInt64`, `UInt128`, `UInt256`, `Word8`, `Word16`, `Word32`, `Word64`, `Word128`, or `Word256`).

The modulo argument is optional. If provided, the returned integer is between `0` and `modulo -1`. If not provided, the returned integer is between `0` and the maximum value of `T`. The function errors if `modulo` is equal to 0.

The sequence of returned random numbers is independent for every transaction in each block. Under the hood, Cadence instantiates a cryptographically-secure pseudo-random number generator (CSPRG) for each transaction independently, where the seeds of any two transactions are different with near certainty.

The random numbers returned are unpredictable (unpredictable for miners at block construction time, and unpredictable for cadence logic at time of call), verifiable, as well as _unbiasable_ by miners and previously-running Cadence code. See [Secure random number generator for Flow’s smart contracts](https://forum.flow.com/t/secure-random-number-generator-for-flow-s-smart-contracts/5110) and [FLIP120](https://github.com/onflow/flips/pull/120) for more details.

Nevertheless, developers need to be mindful to use `revertibleRandom()` correctly.

danger

A transaction can atomically revert all of its action. This means that if you're letting users submit transactions, as opposed to you submitting them on your backend with a wallet you control, those users can submit the transaction in such a way that it reverts if the user doesn't like the outcome.

The function usage remains safe when called by a trusted party that does not perform post-selection on the returned random numbers.

This limitation is inherent to any smart contract platform that allows transactions to roll back atomically and cannot be solved through safe randomness alone. In cases where a non-trusted party can interact through their own transactions with smart contracts generating random numbers, it is recommended to use [commit-reveal schemes](https://developers.flow.com/tutorials/native-vrf/commit-reveal-cadence).

## `RLP`

Recursive Length Prefix (RLP) serialization allows the encoding of arbitrarily nested arrays of binary data.

Cadence provides RLP decoding functions in the built-in `RLP` contract, which does not need to be imported.

### `decodeString`

`   view fun decodeString(_ input: [UInt8]): [UInt8]            `

Decodes an RLP-encoded byte array. RLP calls this a _string_. The byte array should only contain a single encoded value for a string.

- If the encoded value type does not match or if it has trailing unnecessary bytes, the program aborts.
- If the function encounters any error while decoding, the program aborts.

### `decodeList`

``   view fun decodeList(_ input: [UInt8]): [[UInt8]]`            ``

Decodes an RLP-encoded list into an array of RLP-encoded items.

Note that this function does not recursively decode, so each element of the resulting array is RLP-encoded data. The byte array should only contain a single encoded value for a list.

- If the encoded value type does not match or if it has trailing unnecessary bytes, the program aborts.
- If the function encounters any error while decoding, the program aborts.

# Control Flow

Control flow statements control the flow of execution in a function.

## Conditional branching: if-statement

If-statements allow a certain piece of code to be executed only when a given condition is true.

The if-statement starts with the `if` keyword, followed by the condition, and the code that should be executed if the condition is true, inside opening and closing braces.

- The condition expression must be a boolean.
- The braces are required and not optional.
- Parentheses around the condition are optional:

``   let a = 0    var b = 0        if a == 0 {    b = 1    }        // Parentheses can be used around the condition, but are not required.    if (a != 0) {    b = 2    }        // `b` is `1`            ``

An additional, optional else-clause can be added to execute another piece of code when the condition is false. The else-clause is introduced by the `else` keyword, followed by braces that contain the code that should be executed:

``   let a = 0    var b = 0        if a == 1 {    b = 1    } else {    b = 2    }        // `b` is `2`            ``

The else-clause can contain another if-statement (i.e., if-statements can be chained together). In this case, the braces can be omitted:

``   let a = 0    var b = 0        if a == 1 {    b = 1    } else if a == 2 {    b = 2    } else {    b = 3    }        // `b` is `3`        if a == 1 {    b = 1    } else {    if a == 0 {    b = 2    }    }        // `b` is `2`            ``

## Optional binding

Optional binding allows getting the value inside an optional. It is a variant of the if-statement.

If the optional contains a value, the first branch is executed and a temporary constant or variable is declared and set to the value contained in the optional; otherwise, the else branch (if any) is executed.

Optional bindings are declared using the `if` keyword like an if-statement, but instead of the boolean test value, it is followed by the `let` or `var` keywords, to either introduce a constant or variable, followed by a name, the equal sign (`=`), and the optional value:

``   let maybeNumber: Int? = 1        if let number = maybeNumber {    // This branch is executed as `maybeNumber` is not `nil`.    // The constant `number` is `1` and has type `Int`.    } else {    // This branch is *not* executed as `maybeNumber` is not `nil`    }            ``

``   let noNumber: Int? = nil        if let number = noNumber {    // This branch is *not* executed as `noNumber` is `nil`.    } else {    // This branch is executed as `noNumber` is `nil`.    // The constant `number` is *not* available.    }            ``

## Switch

Switch-statements compare a value against several possible values of the same type, in order. When an equal value is found, the associated block of code is executed.

The switch-statement starts with the `switch` keyword, followed by the tested value, followed by the cases inside opening and closing braces. The test expression must be equatable. The braces are required and not optional.

Each case is a separate branch of code execution and starts with the `case` keyword, followed by a possible value, a colon (`:`), and the block of code that should be executed if the case's value is equal to the tested value.

The block of code associated with a switch case [does not implicitly fall through](https://cadence-lang.org/docs/language/control-flow#no-implicit-fallthrough), and must contain at least one statement. Empty blocks are invalid.

An optional default case may be given by using the `default` keyword. The block of code of the default case is executed when none of the previous case tests succeed. It must always appear last:

``   fun word(_ n: Int): String {    // Test the value of the parameter `n`    switch n {    case 1:    // If the value of variable `n` is equal to `1`,    // then return the string "one"    return "one"    case 2:    // If the value of variable `n` is equal to `2`,    // then return the string "two"    return "two"    default:    // If the value of variable `n` is neither equal to `1` nor to `2`,    // then return the string "other"    return "other"    }    }        word(1) // returns "one"    word(2) // returns "two"    word(3) // returns "other"    word(4) // returns "other"            ``

### Duplicate cases

Cases are tested in order, so if a case is duplicated, the block of code associated with the first case that succeeds is executed:

``   fun test(_ n: Int): String {    // Test the value of the parameter `n`    switch n {    case 1:    // If the value of variable `n` is equal to `1`,    // then return the string "one"    return "one"    case 1:    // If the value of variable `n` is equal to `1`,    // then return the string "also one".    // This is a duplicate case for the one above.    return "also one"    default:    // If the value of variable `n` is neither equal to `1` nor to `2`,    // then return the string "other"    return "other"    }    }        word(1) // returns "one", not "also one"            ``

### `break`

The block of code associated with a switch case may contain a `break` statement. It ends the execution of the switch statement immediately and transfers control to the code after the switch statement.

### No implicit fallthrough

Unlike switch statements in some other languages, switch statements in Cadence do not _fall through_: execution of the switch statement finishes as soon as the block of code associated with the first matching case is completed. No explicit `break` statement is required.

This makes the switch statement safer and easier to use, avoiding the accidental execution of more than one switch case.

Some other languages implicitly fall through to the block of code associated with the next case, so it is common to write cases with an empty block to handle multiple values in the same way.

To protect developers from writing switch statements that assume this behavior, blocks must have at least one statement. Empty blocks are invalid:

``   fun words(_ n: Int): [String] {    // Declare a variable named `result`, an array of strings,    // which stores the result    let result: [String] = []        // Test the value of the parameter `n`    switch n {    case 1:    // If the value of variable `n` is equal to `1`,    // then append the string "one" to the result array    result.append("one")    case 2:    // If the value of variable `n` is equal to `2`,    // then append the string "two" to the result array    result.append("two")    default:    // If the value of variable `n` is neither equal to `1` nor to `2`,    // then append the string "other" to the result array    result.append("other")    }    return result    }        words(1) // returns `["one"]`    words(2) // returns `["two"]`    words(3) // returns `["other"]`    words(4) // returns `["other"]`            ``

## Looping

The following sections describe looping statements.

### while-statement

While-statements allow a certain piece of code to be executed repeatedly, as long as a condition remains true.

The while-statement starts with the `while` keyword, followed by the condition, and the code that should be repeatedly executed if the condition is true inside opening and closing braces. The condition must be boolean, and the braces are required.

The while-statement will first evaluate the condition. If it is true, the piece of code is executed, and the evaluation of the condition is repeated. If the condition is false, the piece of code is not executed, and the execution of the whole while-statement is finished. Thus, the piece of code is executed zero or more times:

``   var a = 0    while a < 5 {    a = a + 1    }        // `a` is `5`            ``

### For-in statement

For-in statements allow a certain piece of code to be executed repeatedly for each element in an array.

The for-in statement starts with the `for` keyword, followed by the name of the element that is used in each iteration of the loop, followed by the `in` keyword, and then followed by the array that is being iterated through in the loop.

Then, the code that should be repeatedly executed in each iteration of the loop is enclosed in curly braces.

If there are no elements in the data structure, the code in the loop will not be executed at all. Otherwise, the code will execute as many times as there are elements in the array:

`   let array = ["Hello", "World", "Foo", "Bar"]        for element in array {    log(element)    }        // The loop would log:    // "Hello"    // "World"    // "Foo"    // "Bar"            `

Optionally, developers may include an additional variable preceding the element name, separated by a comma. When present, this variable contains the current index of the array being iterated through during each repeated execution (starting from 0):

`   let array = ["Hello", "World", "Foo", "Bar"]        for index, element in array {    log(index)    }        // The loop would log:    // 0    // 1    // 2    // 3            `

To iterate over a dictionary's entries (keys and values), use a for-in loop over the dictionary's keys and get the value for each key:

`   let dictionary = {"one": 1, "two": 2}    for key in dictionary.keys {    let value = dictionary[key]!    log(key)    log(value)    }        // The loop would log:    // "one"    // 1    // "two"    // 2            `

Alternatively, dictionaries carry a method `forEachKey` that avoids allocating an intermediate array for keys:

`   let dictionary = {"one": 1, "two": 2, "three": 3}    dictionary.forEachKey(fun (key: String): Bool {    let value = dictionary[key]    log(key)    log(value)        return key != "two" // stop iteration if this returns false    })            `

### Ranges in loops

An [`InclusiveRange` value](https://cadence-lang.org/docs/language/values-and-types/inclusive-range) can be used in a for-in statement in place of an array or dictionary. In this case, the loop will iterate over all the values contained in the range, beginning with `range.start` and ending with `range.end`. For example:

``   let range: InclusiveRange<UInt> = InclusiveRange(1, 100, step: 2)    var elements : [UInt] = []    for element in range {    elements.append(element)    }    // after this loop, `elements` contains all the odd integers from 1 to 99            ``

Note that in this example, even though `100` is the end of the `range`, it is not included in the loop because it cannot be reached with the given `start` and `step`.

The above loop is equivalent to:

``   let range: InclusiveRange<UInt> = InclusiveRange(1, 100, step: 2)    var elements : [UInt] = []    var index = range.start    while index <= range.end {    elements.append(element)    index = index + range.step    }    // after this loop, `elements` contains all the odd integers from 1 to 99            ``

In general, a for-in loop over an increasing range (a positive `step`) is equivalent to:

`   var index = range.start    while index <= range.end {    // loop body    index = index + range.step    }            `

While a for-in loop over a decreasing range (a negative `step`) is equivalent to:

``   var index = range.start    while index >= range.end {    // loop body    index = index + range.step // `range.step` here is negative, so this decreases `index`    }            ``

Both can be equivalently rewritten to:

`   var index = range.start    while range.contains(index) {    // loop body    index = index + range.step    }            `

### `continue`and`break`

In for-loops and while-loops, the `continue` statement can be used to stop the current iteration of a loop and start the next iteration:

``   var i = 0    var x = 0    while i < 10 {    i = i + 1    if i < 3 {    continue    }    x = x + 1    }    // `x` is `8`            let array = [2, 2, 3]    var sum = 0    for element in array {    if element == 2 {    continue    }    sum = sum + element    }        // `sum` is `3`            ``

The `break` statement can be used to stop the execution of a for-loop or a while-loop:

``   var x = 0    while x < 10 {    x = x + 1    if x == 5 {    break    }    }    // `x` is `5`            let array = [1, 2, 3]    var sum = 0    for element in array {    if element == 2 {    break    }    sum = sum + element    }        // `sum` is `1`            ``

## Immediate function return: return-statement

The return-statement causes a function to return immediately (i.e., any code after the return-statement is not executed). The return-statement starts with the `return` keyword and is followed by an optional expression that should be the return value of the function call. ->//

# Scope

Every function and block (`{` ... `}`) introduces a new scope for declarations. Each function and block can refer to declarations in its scope or any of the outer scopes:

``   let x = 10        fun f(): Int {    let y = 10    return x + y    }        f() // is `20`        // Invalid: the identifier `y` is not in scope.    //    y            ``

``   fun doubleAndAddOne(_ n: Int): Int {    fun double(_ x: Int) {    return x * 2    }    return double(n) + 1    }        // Invalid: the identifier `double` is not in scope.    //    double(1)            ``

Each scope can introduce new declarations (i.e., the outer declaration is shadowed):

``   let x = 2        fun test(): Int {    let x = 3    return x    }        test() // is `3`            ``

Scope is lexical, not dynamic:

``   let x = 10        fun f(): Int {    return x    }        fun g(): Int {    let x = 20    return f()    }        g() // is `10`, not `20`            ``

Declarations are **not** moved to the top of the enclosing function (hoisted):

``   let x = 2        fun f(): Int {    if x == 0 {    let x = 3    return x    }    return x    }    f() // is `2`            ``


# Resources

Resources are types that can only exist in **one** location at a time and **must** be used **exactly once**.

Resources **must** be created (instantiated) by using the `create` keyword.

Before the closing bracket of a function that has resources created or moved into scope, those resources **must** explicitly be either **moved** to a valid storage location or **destroyed**.

They are **moved** when used as an initial value for a constant or variable, when assigned to a different variable, when passed as an argument to a function, and when returned from a function.

Resources can be explicitly **destroyed** using the `destroy` keyword.

Accessing a field or calling a function of a resource does not move or destroy it.

When the resource is moved, the constant or variable that referred to the resource before the move becomes **invalid**. An **invalid** resource cannot be used again.

To make the usage and behavior of resource types explicit, the prefix `@` must be used in type annotations of variable or constant declarations, parameters, and return types.

## The move operator (`<-`)

To make moves of resources explicit, the move operator `<-` must be used when the resource is the initial value of a constant or variable, when it is moved to a different variable, when it is moved to a function as an argument, and when it is returned from a function.

Declare a resource named `SomeResource`, with a variable-integer field:

`   access(all)    resource SomeResource {        access(all)    var value: Int        init(value: Int) {    self.value = value    }    }            `

Declare a constant with a value of resource type `SomeResource`:

`   let a: @SomeResource <- create SomeResource(value: 5)            `

_Move_ the resource value to a new constant:

``   let b <- a            // Invalid Line Below: Cannot use constant `a` anymore as the resource that it    // referred to was moved to constant `b`.        a.value        // Constant `b` owns the resource.        b.value // equals 5            ``

Declare a function that accepts a resource. The parameter has a resource type, so the type annotation must be prefixed with `@`:

`   access(all)    fun use(resource: @SomeResource) {    // ...    }            `

Call function `use`, and move the resource into it:

``   use(resource: <-b)        // Invalid Line Below: Cannot use constant `b` anymore as the resource it    // referred to was moved into function `use`.        b.value            ``

A resource object cannot go out of scope and be dynamically lost. The program must either explicitly destroy it or move it to another context.

Declare another, unrelated value of resource type `SomeResource`:

``   {    let c <- create SomeResource(value: 10)        // Invalid: `c` is not moved or destroyed before the end of the scope, but must be.    // It cannot be lost.    }            ``

Declare another, unrelated value of resource type `SomeResource`:

`       let d <- create SomeResource(value: 20)            `

Destroy the resource referred to by constant `d`:

``   destroy d        // Invalid: Cannot use constant `d` anymore as the resource    // it referred to was destroyed.    //    d.value            ``

To make it explicit that the type is a resource type and must follow the rules associated with resources, it must be prefixed with `@` in all type annotations (e.g., for variable declarations, parameters, or return types).

Declare a constant with an explicit type annotation. The constant has a resource type, so the type annotation must be prefixed with `@`:

`   let someResource: @SomeResource <- create SomeResource(value: 5)            `

Declare a function that consumes a resource and destroys it. The parameter has a resource type, so the type annotation must be prefixed with `@`:

`   access(all)    fun use(resource: @SomeResource) {    destroy resource    }            `

Declare a function that returns a resource:

- The return type is a resource type, so the type annotation must be prefixed with `@`.
- The return statement must also use the `<-` operator to make it explicit the resource is moved.

`   access(all)    fun get(): @SomeResource {    let newResource <- create SomeResource()    return <-newResource    }            `

Resources **must** be used exactly once.

Declare a function that consumes a resource but does not use it:

``   // This function is invalid, because it would cause a loss of the resource.    access(all)    fun forgetToUse(resource: @SomeResource) {    // Invalid: The resource parameter `resource` is not used, but must be.    }            ``

Declare a constant named `res` that has the resource type `SomeResource`:

`   let res <- create SomeResource()            `

Call the function `use` and move the resource `res` into it:

``   use(resource: <-res)        // Invalid: The resource constant `res` cannot be used again,    // as it was moved in the previous function call.    //    use(resource: <-res)        // Invalid: The resource constant `res` cannot be used again,    // as it was moved in the previous function call.    //    res.value            ``

Declare a function that has a resource parameter:

``   // This function is invalid, because it does not always use the resource parameter,    // which would cause a loss of the resource:    access(all)    fun sometimesDestroy(resource: @SomeResource, destroyResource: Bool) {    if destroyResource {    destroy resource    }    // Invalid: The resource parameter `resource` is not always used, but must be.    // The destroy statement is not always executed, so at the end of this function    // it might have been destroyed or not.    }            ``

Declare a function which has a resource parameter:

`   // This function is valid, as it always uses the resource parameter,    // and does not cause a loss of the resource.    //    access(all)    fun alwaysUse(resource: @SomeResource, destroyResource: Bool) {    if destroyResource {    destroy resource    } else {    use(resource: <-resource)    }    }            `

At the end of the function, the resource parameter was definitely used. It was either destroyed or moved in the call of function `use`.

Declare a function that has a resource parameter:

``   // This function is invalid, because it does not always use the resource parameter,    // which would cause a loss of the resource.    //    access(all)    fun returnBeforeDestroy(move: Bool) {    let res <- create SomeResource(value: 1)    if move {    use(resource: <-res)    return    } else {    // Invalid: When this function returns here, the resource variable    // `res` was not used, but must be.    return    }    // Invalid: the resource variable `res` was potentially moved in the    // previous if-statement, and both branches definitely return,    // so this statement is unreachable.    destroy res    }            ``

## Resource variables

Resource variables cannot be assigned to, as that would lead to the loss of the variable's current resource value.

Instead, use a swap statement (`<->`) or shift statement (`<- target <-`) to replace the resource variable with another resource:

``   access(all)    resource R {}        var x <- create R()    var y <- create R()        // Invalid: Cannot assign to resource variable `x`,    // as its current resource would be lost    //    x <- y            ``

Instead, use a swap statement:

``   var replacement <- create R()    x <-> replacement    // `x` is the new resource.    // `replacement` is the old resource.            ``

Or, use the shift statement (`<- target <-`):

``   // This statement moves the resource out of `x` and into `oldX`,    // and at the same time assigns `x` with the new value on the right-hand side.    let oldX <- x <- create R()    // oldX still needs to be explicitly handled after this statement    destroy oldX            ``

## Nested resources

Fields in composite types behave differently when they have a resource type.

Accessing a field or calling a function on a resource field is valid, however, moving a resource out of a variable resource field is **not** allowed. Instead, use a swap statement to replace the resource with another resource. For example:

`   let child <- create Child(name: "Child 1")    child.name // is "Child 1"        let parent <- create Parent(name: "Parent", child: <-child)    parent.child.name // is "Child 1"        // Invalid: Cannot move resource out of variable resource field.    let childAgain <- parent.child            `

Instead, use a swap statement:

``   var otherChild <- create Child(name: "Child 2")    parent.child <-> otherChild    // `parent.child` is the second child, Child 2.    // `otherChild` is the first child, Child 1.            ``

When a resource containing nested resources in fields is destroyed with a `destroy` statement, all the nested resources are also destroyed:

`   // Declare a resource with resource fields    //    access(all)    resource Parent {    var child1: @Child    var child2: @Child    init(child1: @Child, child2: @Child) {    self.child1 <- child1    self.child2 <- child2    }    }            `

The order in which the nested resources are destroyed is deterministic but unspecified, and cannot be influenced by the developer. In this example, when `Parent` is destroyed, the `child1` and `child2` fields are also both destroyed in some unspecified order.

In previous versions of Cadence, it was possible to define a special `destroy` function that would execute arbitrary code when a resource was destroyed, but this is no longer the case.

## Destroy events

While it is not possible to specify arbitrary code to execute upon the destruction of a resource, it is possible to specify a special [event](https://cadence-lang.org/docs/language/events) to be automatically emitted when a resource is destroyed. The event has a reserved name — `ResourceDestroyed` — and it uses a special syntax:

`   resource R {    event ResourceDestroyed(id: UInt64 = self.id)        let id: UInt64        init(_ id: UInt64) {    self.id = id    }    }            `

Whenever a value of type `R` defined this way is destroyed, a special `R.ResourceDestroyed` event is emitted. The special syntax used in the definition of the `ResourceDestroyed` specifies what the values associated with each event parameter will be; in this case, the `id` field of the `R.ResourceDestroyed` event will be the value that the `id` field held immediately before the resource was destroyed. In general, for a `ResourceDestroyed` event defined as:

`   event ResourceDestroyed(field1: T1 = e1, field2: T2 = e2, ...)            `

- The value of `field1` on the event will be the result of evaluating `e1` before destroying the resource.
- The value of `field2` on the event will be the result of evaluating `e2` before destroying the resource, and so on.

As one might expect, `e1` and `e2` must also be expressions of type `T1` and `T2`, respectively.

In order to guarantee that these events can be emitted with no chance of failure at runtime, there are restrictions placed on which kinds of types and expressions can be used in their definitions. In general, an expression defining the value of a field (the `e` in the general definition above) can only be a member or indexed access on `self` (or, `base` in the case of an [attachment](https://cadence-lang.org/docs/language/attachments)), or a literal. The types of event fields are restricted to number types, `String`s, `Boolean`s, `Address`es, and `Path`s.

## Resources in closures

Resources cannot be captured in closures, as that could potentially result in duplications:

``   resource R {}        // Invalid: Declare a function which returns a closure which refers to    // the resource parameter `resource`. Each call to the returned function    // would return the resource, which should not be possible.    //    fun makeCloner(resource: @R): fun(): @R {    return fun (): @R {    return <-resource    }    }        let test = makeCloner(resource: <-create R())            ``

## Resources in arrays and dictionaries

Arrays and dictionaries behave differently when they contain resources: it is **not** allowed to index into an array to read an element at a certain index or assign to it, or index into a dictionary to read a value for a certain key or set a value for the key.

Instead, use a swap statement (`<->`) or shift statement (`<- target <-`) to replace the accessed resource with another resource.

Declare a constant for an array of resources. Then, create two resources and move them into the array (`resources` has type `@[R]`):

`   resource R {}        let resources <- [    <-create R(),    <-create R()    ]        // Invalid: Reading an element from a resource array is not allowed.    //    let firstResource <- resources[0]        // Invalid: Setting an element in a resource array is not allowed,    // as it would result in the loss of the current value.    //    resources[0] <- create R()            `

Instead, when attempting to either read an element or update an element in a resource array, use a swap statement with a variable to replace the accessed element:

``   var res <- create R()    resources[0] <-> res    // `resources[0]` now contains the new resource.    // `res` now contains the old resource.            ``

Use the shift statement to move the new resource into the array at the same time that the old resource is being moved out:

`   let oldRes <- resources[0] <- create R()    // The old object still needs to be handled    destroy oldRes            `

The same applies to dictionaries.

Declare a constant for a dictionary of resources. Then, create two resources and move them into the dictionary (`resources` has type `@{String: R}`):

`   let resources <- {    "r1": <-create R(),    "r2": <-create R()    }        // Invalid: Reading an element from a resource dictionary is not allowed.    // It's not obvious that an access like this would have to remove    // the key from the dictionary.    //    let firstResource <- resources["r1"]            `

Instead, make the removal explicit by using the `remove` function:

`   let firstResource <- resources.remove(key: "r1")        // Invalid: Setting an element in a resource dictionary is not allowed,    // as it would result in the loss of the current value.    //    resources["r1"] <- create R()            `

When attempting to either read an element or update an element in a resource dictionary, use a swap statement with a variable to replace the accessed element.

The result of a dictionary read is optional, as the given key might not exist in the dictionary. The types on both sides of the swap operator must be the same, so also declare the variable as an optional:

``   var res: @R? <- create R()    resources["r1"] <-> res    // `resources["r1"]` now contains the new resource.    // `res` now contains the old resource.            ``

Use the shift statement to move the new resource into the dictionary at the same time that the old resource is being moved out:

`   let oldRes <- resources["r2"] <- create R()    // The old object still needs to be handled    destroy oldRes            `

Resources cannot be moved into arrays and dictionaries multiple times, as that would cause a duplication:

``   let resource <- create R()        // Invalid: The resource variable `resource` can only be moved into the array once.    //    let resources <- [    <-resource,    <-resource    ]            ``

``   let resource <- create R()        // Invalid: The resource variable `resource` can only be moved into the dictionary once.    let resources <- {    "res1": <-resource,    "res2": <-resource    }            ``

Resource arrays and dictionaries can be destroyed:

`   let resources <- [    <-create R(),    <-create R()    ]    destroy resources            `

`   let resources <- {    "r1": <-create R(),    "r2": <-create R()    }    destroy resources            `

The variable array functions, like `append`, `insert`, and `remove`, behave like non-resource arrays. Please note, however, that the result of the `remove` functions must be used:

``   let resources <- [<-create R()]    // `resources.length` is `1`        resources.append(<-create R())    // `resources.length` is `2`        let first <- resource.remove(at: 0)    // `resources.length` is `1`    destroy first        resources.insert(at: 0, <-create R())    // `resources.length` is `2`        // Invalid: The statement ignores the result of the call to `remove`,    // which would result in a loss.    resource.remove(at: 0)        destroy resources            ``

- The variable array function `contains` is not available, as it is impossible: if the resource can be passed to the `contains` function, it is by definition not in the array.
- The variable array function `concat` is not available, as it would result in the duplication of resources.
- The dictionary functions like `insert` and `remove` behave like non-resource dictionaries. Please note, however, that the result of these functions must be used:

``   let resources <- {"r1": <-create R()}    // `resources.length` is `1`        let first <- resource.remove(key: "r1")    // `resources.length` is `0`    destroy first        let old <- resources.insert(key: "r1", <-create R())    // `old` is nil, as there was no value for the key "r1"    // `resources.length` is `1`        let old2 <- resources.insert(key: "r1", <-create R())    // `old2` is the old value for the key "r1"    // `resources.length` is `1`        destroy old    destroy old2    destroy resources            ``

## Resource identifier

Resources have an implicit unique identifier associated with them, implemented by a predeclared public field `let uuid: UInt64` on each resource.

This identifier is automatically set when the resource is created, before the resource's initializer is called (i.e., the identifier can be used in the initializer), and will be unique even after the resource is destroyed (i.e., no two resources will ever have the same identifier).

1. Declare a resource without any fields:
    
    `   resource R {}            `
    
2. Create two resources:
    
    `   let r1 <- create R()    let r2 <- create R()            `
    
3. Get each resource's unique identifier:
    
    `   let id1 = r1.uuid    let id2 = r2.uuid            `
    
4. Destroy the first resource:
    
    `   destroy r1            `
    
5. Create a third resource:
    
    `   let r3 <- create R()        let id3 = r3.uuid        id1 != id2 // true    id2 != id3 // true    id3 != id1 // true            ` ->//
    

warning

The details of how the identifiers are generated is an implementation detail.

Do not rely on or assume any particular behavior in Cadence programs.

## Resource owner

Resources have the implicit field `let owner: &Account?`. If the resource is currently [stored in an account](https://cadence-lang.org/docs/language/accounts/storage), then the field contains the publicly accessible portion of the account. Otherwise the field is `nil`.

The field's value changes when the resource is moved from outside account storage into account storage, when it is moved from the storage of one account to the storage of another account, and when it is moved out of account storage.

# Access Control

Access control allows making certain parts of a program accessible/visible and making other parts inaccessible/invisible.

In Cadence, access control is used in two ways:

1. Access control on objects in account storage, using [capability security](https://cadence-lang.org/docs/language/capabilities).
    
    A user is not able to access an object unless they own the object or have a reference to that object. This means that nothing is truly public by default.
    
    Other accounts cannot read or write the objects in an account unless the owner of the account has granted them access by providing references to the objects.
    

warning

Remember that in this case, `private` refers to programmatic access to the data with a script or transaction. It is **not safe** to store secret or private information in a user's account. The raw data is still public and could be decoded.

This kind of access control is covered in [capabilities](https://cadence-lang.org/docs/language/capabilities) and [capability management](https://cadence-lang.org/docs/language/accounts/capabilities).

1. Access control within contracts and objects, using access modifiers (`access` keyword).

This page covers the second part of access control, using access modifiers.

All declarations, such as [functions](https://cadence-lang.org/docs/language/functions), [composite types](https://cadence-lang.org/docs/language/types-and-type-system/composite-types), and fields, must be prefixed with an access modifier using the `access` keyword.

The access modifier determines where the declaration is accessible/visible. Fields can only be assigned to and mutated from within the same or inner scope.

For example, to make a function publicly accessible (`access(all)` is explained below):

`   access(all)    fun test() {}            `

## Types of access control

There are five levels of access control:

- **Public access** — the declaration is accessible/visible in all scopes. This includes the current scope, inner scopes, and the outer scopes.
    
    A declaration is made publicly accessible using the `access(all)` modifier.
    
    For example, a public field in a type can be accessed on an instance of the type in an outer scope.
    
- **Entitled access** — the declaration is only accessible/visible to the owner of the object, or to [references](https://cadence-lang.org/docs/language/references) that are authorized to the required [entitlements](https://cadence-lang.org/docs/language/access-control#entitlements).
    
    A declaration is made accessible through entitlements by using the `access(E)` syntax, where `E` is a set of one or more entitlements, or a single [entitlement mapping](https://cadence-lang.org/docs/language/access-control#entitlement-mappings).
    
    A reference is considered authorized to an entitlement if that entitlement appears in the `auth` portion of the reference type.
    
    For example, an `access(E, F)` field on a resource `R` can only be accessed by an owned (`@R`-typed) value, or a reference to `R` that is authorized to the `E` and `F` entitlements (`auth(E, F) &R`).
    
- **Account access** — the declaration is only accessible/visible in the scope of the entire account where it is defined. This means that other contracts in the account are able to access it.
    
    A declaration is made accessible by code in the same account, for example other contracts, by using the `access(account)` keyword.
    
- **Contract access** — the declaration is only accessible/visible in the scope of the contract that defined it. This means that other declarations that are defined in the same contract can access it, but not other contracts in the same account.
    
    A declaration is made accessible by code in the same contract by using the `access(contract)` keyword.
    
- **Private access** — the declaration is only accessible/visible in the current and inner scopes.
    
    A declaration is made accessible by code in the same containing type by using the `access(self)` keyword.
    
    For example, an `access(self)` field can only be accessed by functions of the type it is part of, not by code in an outer scope.
    

To summarize the behavior for variable declarations, constant declarations, and fields:

|Declaration kind|Access modifier|Accessible in|Assignable in|Mutable in|
|---|---|---|---|---|
|`let`|`access(self)`|Current and inner|_None_|Current and inner|
|`let`|`access(contract)`|Current, inner, and containing contract|_None_|Current and inner|
|`let`|`access(account)`|Current, inner, and other contracts in same account|_None_|Current and inner|
|`let`|`access(all)`|**All**|_None_|Current and inner|
|`let`|`access(E)`|**All** with required entitlements|_None_|Current and inner|
|`var`|`access(self)`|Current and inner|Current and inner|Current and inner|
|`var`|`access(contract)`|Current, inner, and containing contract|Current and inner|Current and inner|
|`var`|`access(account)`|Current, inner, and other contracts in same account|Current and inner|Current and inner|
|`var`|`access(all)`|**All**|Current and inner|Current and inner|
|`var`|`access(E)`|**All** with required entitlements|Current and inner|Current and inner|

Declarations of [composite types](https://cadence-lang.org/docs/language/types-and-type-system/composite-types) must be public. However, even though the declarations/types are publicly visible, resources can only be created, and events can only be emitted from inside the contract they are declared in:

`   // Declare a private constant, inaccessible/invisible in outer scope.    //    access(self)    let a = 1        // Declare a public constant, accessible/visible in all scopes.    //    access(all)    let b = 2            `

`   // Declare a public struct, accessible/visible in all scopes.    //    access(all)    struct SomeStruct {        // Declare a private constant field, which is only readable    // in the current and inner scopes.    //    access(self)    let a: Int        // Declare a public constant field, which is readable in all scopes.    //    access(all)    let b: Int        // Declare a private variable field, which is only readable    // and writable in the current and inner scopes.    //    access(self)    var c: Int        // Declare a public variable field, which is not settable,    // so it is only writable in the current and inner scopes,    // and readable in all scopes.    //    access(all)    var d: Int        // Arrays and dictionaries declared without (set) cannot be    // mutated in external scopes    access(all)    let arr: [Int]        // The initializer is omitted for brevity.        // Declare a private function, which is only callable    // in the current and inner scopes.    //    access(self)    fun privateTest() {    // ...    }        // Declare a public function, which is callable in all scopes.    //    access(all)    fun publicTest() {    // ...    }        // The initializer is omitted for brevity.        }        let some = SomeStruct()        // Invalid: cannot read private constant field in outer scope.    //    some.a        // Invalid: cannot set private constant field in outer scope.    //    some.a = 1        // Valid: can read public constant field in outer scope.    //    some.b        // Invalid: cannot set public constant field in outer scope.    //    some.b = 2        // Invalid: cannot read private variable field in outer scope.    //    some.c        // Invalid: cannot set private variable field in outer scope.    //    some.c = 3        // Valid: can read public variable field in outer scope.    //    some.d        // Invalid: cannot set public variable field in outer scope.    //    some.d = 4        // Invalid: cannot mutate a public field in outer scope.    //    some.f.append(0)        // Invalid: cannot mutate a public field in outer scope.    //    some.f[3] = 1        // Valid: can call non-mutating methods on a public field in outer scope    some.f.contains(0)            `

## Entitlements

Entitlements provide granular access control to each member of a composite. Entitlements are declared using the syntax `entitlement E`, where `E` is the name of the entitlement.

For example, the following code declares two entitlements called `E` and `F`:

`   entitlement E    entitlement F            `

Entitlements can be imported from other contracts and used the same way as other types. When using entitlements defined in another contract, the same qualified name syntax is used as for other types:

`   contract C {    entitlement E    }            `

Outside of `C`, `E` is used with `C.E` syntax.

Entitlements exist in the same namespace as types, so if a contract declares a resource called `R`, it is impossible to declare an entitlement that is also called `R`.

Entitlements can be used in access modifiers of composite members (fields and functions) to specify which references to those composites are allowed to access those members.

An access modifier can include more than one entitlement, joined with either an `|`, to indicate disjunction ("or"), or a `,`, to indicate conjunction ("and"). The two kinds of separators cannot be combined in the same set.

For example:

``   access(all)    resource SomeResource {        // requires a reference to have an `E` entitlement to read this field    access(E)    let a: Int        // requires a reference to have either an `E` OR an `F` entitlement    // to read this field.    access(E | F)    let b: Int        // requires a reference to have both an `E` AND an `F` entitlement    // to read this field.    access(E, F)    let c: Int        // intializers omitted for brevity    // ...    }            ``

Assuming the following constants exist, which have owned or [reference](https://cadence-lang.org/docs/language/references) types:

`   let r: @SomeResource = // ...    let refE: auth(E) &SomeResource = // ...    let refF: auth(F) &SomeResource = // ...    let refEF: auth(E, F) &SomeResource = // ...    let refEOrF: auth(E | F) &SomeResource = // ...            `

The references can be used as follows:

``   // valid, because `r` is owned and thus is "fully entitled"    r.a    // valid, because `r` is owned and thus is "fully entitled"    r.b    // valid, because `r` is owned and thus is "fully entitled"    r.c        // valid, because `refE` has an `E` entitlement as required    refE.a    // valid, because `refE` has one of the two required entitlements    refE.b    // invalid, because `refE` only has one of the two required entitlements    refE.c        // invalid, because `refF` has an `E` entitlement, not an `F`    refF.a    // valid, because `refF` has one of the two required entitlements    refF.b    // invalid, because `refF` only has one of the two required entitlements    refF.c        // valid, because `refEF` has an `E` entitlement    refEF.a    // valid, because `refEF` has both of the two required entitlements    refEF.b    // valid, because `refEF` has both of the two required entitlements    refEF.c        // invalid, because `refEOrF` might not have an `E` entitlement    // (it may have `F` instead)    refEOrF.a    // valid, because `refEOrF` has one of the two entitlements necessary    refEOrF.b    // invalid, because `refEOrF` is only known to have one of the two    // required entitlements    refEOrF.c            ``

Note that, particularly in this example, how the owned value `r` can access all entitled members on `SomeResource`. Owned values are not affected by entitled declarations.

See [Authorized References](https://cadence-lang.org/docs/language/references#authorized-references) for more information.

### Entitlement mappings

Entitlement mappings are a way to statically declare how entitlements are propagated from parents to child objects in a nesting hierarchy.

When objects have fields that are child objects, entitlement mappings can be used to grant access to the inner object based on the entitlements of the reference to the parent object.

Consider the following example, which uses entitlements to control access to an inner resource:

`   entitlement OuterEntitlement    entitlement InnerEntitlement        resource InnerResource {        access(all)    fun foo() { ... }        access(InnerEntitlement)    fun bar() { ... }    }        resource OuterResource {    access(self)    let childResource: @InnerResource        init(childResource: @InnerResource) {    self.childResource <- childResource    }        // The parent resource has to provide two accessor functions    // which return a reference to the inner resource.    //    // If the reference to the outer resource is unauthorized    // and does not have the OuterEntitlement entitlement,    // the outer resource allows getting an unauthorized reference    // to the inner resource.    //    // If the reference to the outer resource is authorized    // and it has the OuterEntitlement entitlement,    // the outer resource allows getting an authorized reference    // to the inner resource.        access(all)    fun getPubRef(): &InnerResource {    return &self.childResource as &InnerResource    }        access(OuterEntitlement)    fun getEntitledRef(): auth(InnerEntitlement) &InnerResource {    return &self.childResource as auth(InnerEntitlement) &InnerResource    }    }            `

With this pattern, it is possible to store a `InnerResource` in an `OuterResource`, and create different ways to access that nested resource depending on the entitlement one possesses.

An unauthorized reference to `OuterResource` can only be used to call the `getPubRef` function, and thus can only obtain an unauthorized reference to `InnerResource`. That reference to the `InnerResource` then only allows calling the function `foo`, which is publicly accessible, but not function `bar`, as it needs the `InnerEntitlement` entitlement, which is not granted.

However an `OuterEntitlement`-authorized reference to the `OuterResource` can be used to call the `getEntitledRef` function, which returns a `InnerEntitlement`-authorized reference to `InnerResource`, which in turn can be used to call function `bar`.

This pattern is functional, but it is unfortunate that the accessor functions to `InnerResource` have to be "duplicated".

Entitlement mappings should be used to avoid this duplication.

Entitlement mappings are declared by using the syntax:

`   entitlement mapping M {    // ...    }            `

Where `M` is the name of the mapping.

The body of the mapping contains zero or more rules of the form `A -> B`, where `A` and `B` are entitlements. Each rule declares that, given a reference with the entitlement on the left, a reference with the entitlement on the right is produced.

An entitlement mapping thus defines a function from an input set of entitlements (called the _domain_) to an output set (called the _range_ or the _image_).

Using entitlement mappings, the above example could be more concisely written as:

``   entitlement OuterEntitlement    entitlement InnerEntitlement        // Specify a mapping for entitlements called `OuterToInnerMap`,    // which maps the entitlement `OuterEntitlement` to the entitlement `InnerEntitlement`.    entitlement mapping OuterToInnerMap {    OuterEntitlement -> InnerEntitlement    }        resource InnerResource {        access(all)    fun foo() { ... }        access(InnerEntitlement)    fun bar() { ... }    }        resource OuterResource {    // Use the entitlement mapping `OuterToInnerMap`.    //    // This declares that when the field `childResource` is accessed    // using a reference authorized with the entitlement `OuterEntitlement`,    // then a reference with the entitlement `InnerEntitlement` is returned.    //    // This is equivalent to the two accessor functions    // that were necessary in the previous example.    //    access(mapping OuterToInnerMap)    let childResource: @InnerResource        init(childResource: @InnerResource) {    self.childResource <- childResource    }        // No accessor functions are needed.    }        // given some value `r` of type `@OuterResource`        let pubRef = &r as &OuterResource    let pubInnerRef = pubRef.childResource // has type `&InnerResource`        let entitledRef = &r as auth(OuterEntitlement) &OuterResource    let entitledInnerRef = entitledRef.childResource // has type    // `auth(InnerEntitlement) &InnerResource`,as `OuterEntitlement`    // is defined to map to `InnerEntitlement`.        // `r` is an owned value, and is thus considered "fully-entitled"    // to `OuterResource`, so this access yields a value authorized to the    // entire image of `OuterToInnerMap`, in this case `InnerEntitlement`,    // and thus can call `bar`    r.childResource.bar()            ``

Entitlement mappings can be used either in accessor functions (as in the example above), in fields whose types are either references, or containers (composite types, dictionaries, and arrays).

Entitlement mappings need not be 1:1. It is valid to define a mapping where many inputs map to the same output, or where one input maps to many outputs.

Entitlement mappings preserve the "kind" of the set they are mapping. That is, mapping a conjunction ("and") set produces a conjunction set, and mapping a disjunction ("or") set produces a disjunction set.

Because entitlement separators cannot be combined in the same set, attempting to map disjunction ("or") sets through certain complex mappings can result in a type error.

For example, given the following entitlement mapping:

`   entitlement mapping M {    A -> B    A -> C    D -> E    }            `

Attempting to map `(A | D)` through `M` will fail, since `A` should map to `(B, C)` and `D` should map to `E`, but these two outputs cannot be combined into a disjunction ("or") set.

A good example of how entitlement mappings can be used is the [`Account` type](https://cadence-lang.org/docs/language/accounts/).

### The`Identity`entitlement mapping

`Identity` is a special built-in entitlement mapping that maps every input to itself as the output. Any entitlement set passed through the `Identity` map will come out unchanged in the output.

For instance:

``   entitlement X        resource InnerResource {    // ...    }        resource OuterResource {    access(mapping Identity)    let childResource: @InnerResource        access(mapping Identity)    getChildResource(): auth(mapping Identity) &InnerResource {    return &self.childResource    }        init(childResource: @InnerResource) {    self.childResource <- childResource    }    }        fun example(outerRef: auth(X) &OuterResource) {    let innerRef = outerRef.childResource // `innerRef` has type `auth(X) &InnerResource`,    // as `outerRef` was authorized with entitlement `X`    }            `` ->//

One important point to note about the `Identity` mapping, however, is that its full output range is unknown and theoretically infinite. Because of that, accessing an `Identity`-mapped field or function with an owned value will yield an empty output set.

For example, calling `getChildResource()` on an owned `OuterResource` value will produce an unauthorized `&InnerResource` reference.

### Mapping composition

Entitlement mappings can be composed. In the definition of an entitlement mapping, it is possible to include the definition of one or more other mappings, to copy over their mapping relations.

An entitlement mapping is included into another entitlement mapping using the `include M` syntax, where `M` is the name of the entitlement mapping to be included.

In general, an `include M` statement in the definition of an entitlement mapping `N` is equivalent to simply copy-pasting all the relations defined in `M` into `N`'s definition.

Support for `include` is provided primarily to reduce code reuse and promote composition.

For example:

`   entitlement mapping M {    X -> Y    Y -> Z    }        entitlement mapping N {    E -> F    }        entitlement mapping P {    include M    include N    F -> G    }            `

The entitlement mapping `P` includes all of the relations defined in `M` and `N`, along with the additional relations defined in its own definition.

It is also possible to include the `Identity` mapping. Any mapping `M` that includes the `Identity` mapping will map its input set to itself, along with any additional relations defined in the mapping or in other included mappings.

For instance:

`   entitlement mapping M {    include Identity    X -> Y    }            `

The mapping `M` maps the entitlement set `(X)` to `(X, Y)`, and `(Y)` to `(Y)`.

Includes that produce a cyclical mapping are rejected by the type-checker.

### Built-in mutability entitlements

A prominent use case of entitlements is to control access to objects based on mutability.

For example, in a composite, the author would want to control the access to certain fields to be read-only, and some fields to be mutable, and so on.

In order to support this, the following built-in entitlements can be used:

- `Insert`
- `Remove`
- `Mutate`

These are primarily used by the built-in [array](https://cadence-lang.org/docs/language/values-and-types/arrays) and [dictionary](https://cadence-lang.org/docs/language/values-and-types/dictionaries) functions, but are available to be used in access modifiers of any declaration.

While Cadence does not support entitlement composition or inheritance, the `Mutate` entitlement is intended to be used as an equivalent form to the conjunction of the `(Insert, Remove)` entitlement set.

# Capabilities

Cadence supports [capability-based security](https://en.wikipedia.org/wiki/Capability-based_security) through the [object-capability model](https://en.wikipedia.org/wiki/Object-capability_model).

A capability in Cadence is a value that represents the right to access an object and perform certain operations on it. A capability specifies _what_ can be accessed, and _how_ it can be accessed.

Capabilities are unforgeable, transferable, and revocable.

Capabilities can be storage capabilities or account capabilities:

- **Storage capabilities** grant access to [objects in account storage](https://cadence-lang.org/docs/language/accounts/storage) via [paths](https://cadence-lang.org/docs/language/accounts/paths).
- **Account capabilities** grant access to [accounts](https://cadence-lang.org/docs/language/accounts/).

Capabilities can be borrowed to get a [reference](https://cadence-lang.org/docs/language/references) to the stored object or the account it refers to.

Capabilities have the type `Capability<T: &Any>`. The type parameter specifies the kind of reference that can be obtained when borrowing the capability. The type specifies the associated set of access rights through [entitlements](https://cadence-lang.org/docs/language/access-control): the reference type of the capability can be authorized, which grants the owner of the capability the ability to access the fields and functions of the target that require the given entitlements.

For example, a capability that has type `Capability<auth(SaveValue) &Account>` grants access to an account, and allows saving a value into the account.

Each capability has an ID, and the ID is unique **per account/address**.

Capabilities are created and managed through [capability controllers](https://cadence-lang.org/docs/language/capabilities#capabilities-in-accounts).

Capabilities are structs, so they are copyable. They can be used (i.e., borrowed) arbitrarily many times, as long as the target capability controller has not been deleted.

## `Capability`

General syntax:

`   access(all)    struct Capability<T: &Any> {        /// The address of the account that the capability targets:    access(all)    let address: Address        /// The ID of the capability:    access(all)    let id: UInt64        /// Returns a reference to the targeted object.    ///    /// If the capability is revoked, the function returns nil.    ///    /// If the capability targets an object in account storage,    /// and no object is stored at the target storage path,    /// the function returns nil.    ///    /// If the targeted object cannot be borrowed using the given type,    /// the function panics.    ///    access(all)    view fun borrow(): T?        /// Returns true if the capability currently targets an object    /// that satisfies the given type (i.e., could be borrowed using    /// the given type).    ///    access(all)    view fun check(): Bool    }            `

## Capabilities in accounts

An [account](https://cadence-lang.org/docs/language/accounts/) exposes its capabilities through the `capabilities` field, which has the type `Account.Capabilities`.

``   access(all)    struct Capabilities {        /// The storage capabilities of the account:    access(mapping CapabilitiesMapping)    let storage: Account.StorageCapabilities        /// The account capabilities of the account:    access(mapping CapabilitiesMapping)    let account: Account.AccountCapabilities        /// Returns the capability at the given public path.    /// If the capability does not exist,    /// or if the given type is not a supertype of the capability's    /// borrow type, returns an "invalid" capability with ID 0 that    /// will always fail to `check` or `borrow`:    access(all)    view fun get<T: &Any>(_ path: PublicPath): Capability<T>        /// Borrows the capability at the given public path.    /// Returns nil if the capability does not exist, or cannot be    /// borrowed using the given type. The function is equivalent    /// to `get(path).borrow()`:    access(all)    view fun borrow<T: &Any>(_ path: PublicPath): T?        /// Returns true if a capability exists at the given public path:    access(all)    view fun exists(_ path: PublicPath): Bool        /// Publish the capability at the given public path.    ///    /// If there is already a capability published under the given path,    /// the program aborts.    ///    /// The path must be a public path (i.e., only the domain `public`    /// is allowed):    access(Capabilities | PublishCapability)    fun publish(_ capability: Capability, at: PublicPath)        /// Unpublish the capability published at the given path.    ///    /// Returns the capability if one was published at the path.    /// Returns nil if no capability was published at the path:    access(Capabilities | UnpublishCapability)    fun unpublish(_ path: PublicPath): Capability?    }        entitlement Capabilities        entitlement PublishCapability    entitlement UnpublishCapability            ``

## Checking the existence of public capabilities with `.exists()`

The function `capabilities.exists` determines if a public capability was [published](https://cadence-lang.org/docs/language/capabilities#publishing-capabilities) at the given path before:

`   access(all)    view fun exists(_ path: PublicPath): Bool            `

If the account has a capability published under the given path, the function returns true; otherwise, it returns false.

## Getting public capabilities with `.get()`

The function `capabilities.get` obtains a public capability that was [published](https://cadence-lang.org/docs/language/capabilities#publishing-capabilities) before:

`   access(all)    view fun get<T: &Any>(_ path: PublicPath): Capability<T>            `

If the account has a capability with the given type published under the given path, the function returns it.

If the account has no capability published under the given path, or if the given type is not a supertype of the capability's borrow type, the function returns an "invalid" capability with ID 0 that will always fail to `check` or `borrow`.

## Borrowing public capabilities with `.borrow()`

The convenience function `capabilities.borrow` obtains and borrows a public capability that was [published](https://cadence-lang.org/docs/language/capabilities#publishing-capabilities) before, in one step:

`   access(all)    view fun borrow<T: &Any>(_ path: PublicPath): T?            `

If the account has a capability with the given type published under the given path, the function borrows the capability and returns the resulting reference as an optional.

If the account has no capability published under the given path, or the requested type, via the type parameter `T`, and does not match the published capability, the function returns `nil`.

## Managing capabilities

Capabilities can be storage capabilities or account capabilities:

- **Storage capabilities** grant access to [objects in account storage](https://cadence-lang.org/docs/language/accounts/storage) via [paths](https://cadence-lang.org/docs/language/accounts/paths). An account allows the management of storage capabilities through the `capabilities.storage` field, which has the type `Account.StorageCapabilities`.
- **Account capabilities** grant access to [accounts](https://cadence-lang.org/docs/language/accounts/). An account allows the management of account capabilities through the `capabilities.account` field, which has the type `Account.AccountCapabilities`.

A capability, and all its copies, is managed by a capability controller:

- **Storage capabilities** are controlled by storage capability controllers. Storage capability controllers have the type `StorageCapabilityController`.
- **Account capabilities** are controlled by account capability controllers. Account capability controllers have the type `AccountCapabilityController`.

### `Account.StorageCapabilities`and`Account.AccountCapabilities`

``   access(all)    struct StorageCapabilities {        /// Issue/create a new storage capability:    access(Capabilities | StorageCapabilities | IssueStorageCapabilityController)    fun issue<T: &Any>(_ path: StoragePath): Capability<T>        /// Issue/create a new storage capability:    access(Capabilities | StorageCapabilities | IssueStorageCapabilityController)    fun issueWithType(_ path: StoragePath, type: Type): Capability        /// Get the storage capability controller for the capability with the    /// specified ID.    ///    /// Returns nil if the ID does not reference an existing storage    /// capability:    access(Capabilities | StorageCapabilities | GetStorageCapabilityController)    view fun getController(byCapabilityID: UInt64): &StorageCapabilityController?        /// Get all storage capability controllers for capabilities that target    /// this storage path:    access(Capabilities | StorageCapabilities | GetStorageCapabilityController)    view fun getControllers(forPath: StoragePath): [&StorageCapabilityController]        /// Iterate over all storage capability controllers for capabilities    /// that target this storage path, passing a reference to each    /// controller to the provided callback function.    ///    /// Iteration is stopped early if the callback function returns `false`.    ///    /// If a new storage capability controller is issued for the path,    /// an existing storage capability controller for the path is deleted,    /// or a storage capability controller is retargeted from or to the    /// path, then the callback must stop iteration by returning false.    /// Otherwise, iteration aborts:    access(Capabilities | StorageCapabilities | GetStorageCapabilityController)    fun forEachController(    forPath: StoragePath,    _ function: fun(&StorageCapabilityController): Bool    )    }        access(all)    struct AccountCapabilities {        /// Issue/create a new account capability:    access(Capabilities | AccountCapabilities | IssueAccountCapabilityController)    fun issue<T: &Account>(): Capability<T>        /// Issue/create a new account capability:    access(Capabilities | AccountCapabilities | IssueAccountCapabilityController)    fun issueWithType(_ type: Type): Capability        /// Get capability controller for capability with the specified ID.    ///    /// Returns nil if the ID does not reference an existing account    /// capability:    access(Capabilities | AccountCapabilities | GetAccountCapabilityController)    view fun getController(byCapabilityID: UInt64): &AccountCapabilityController?        /// Get all capability controllers for all account capabilities:    access(Capabilities | AccountCapabilities | GetAccountCapabilityController)    view fun getControllers(): [&AccountCapabilityController]        /// Iterate over all account capability controllers for all account    /// capabilities, passing a reference to each controller to the provided    /// callback function.    ///    /// Iteration is stopped early if the callback function returns `false`.    ///    /// If a new account capability controller is issued for the account,    /// or an existing account capability controller for the account is    /// deleted, then the callback must stop iteration by returning false.    /// Otherwise, iteration aborts:    access(Capabilities | AccountCapabilities | GetAccountCapabilityController)    fun forEachController(_ function: fun(&AccountCapabilityController): Bool)    }        entitlement StorageCapabilities    entitlement AccountCapabilities        entitlement GetStorageCapabilityController    entitlement IssueStorageCapabilityController        entitlement GetAccountCapabilityController    entitlement IssueAccountCapabilityController        entitlement mapping CapabilitiesMapping {    include Identity        StorageCapabilities -> GetStorageCapabilityController    StorageCapabilities -> IssueStorageCapabilityController        AccountCapabilities -> GetAccountCapabilityController    AccountCapabilities -> IssueAccountCapabilityController    }            ``

### `AccountCapabilityController`and`StorageCapabilityController`

``   access(all)    struct AccountCapabilityController {        /// The capability that is controlled by this controller:    access(all)    let capability: Capability        /// An arbitrary "tag" for the controller.    /// For example, it could be used to describe the purpose of    /// the capability.    /// Empty by default:    access(all)    var tag: String        /// Updates this controller's tag to the provided string:    access(all)    fun setTag(_ tag: String)        /// The type of the controlled capability (i.e., the T    /// in `Capability<T>`):    access(all)    let borrowType: Type        /// The identifier of the controlled capability.    /// All copies of a capability have the same ID:    access(all)    let capabilityID: UInt64        /// Delete this capability controller,    /// and disable the controlled capability and its copies.    ///    /// The controller will be deleted from storage,    /// but the controlled capability and its copies remain.    ///    /// Once this function returns, the controller is no longer usable,    /// all further operations on the controller will panic.    ///    /// Borrowing from the controlled capability or its copies will    /// return nil:    ///    access(all)    fun delete()    }            ``

``   access(all)    struct StorageCapabilityController {        /// The capability that is controlled by this controller:    access(all)    let capability: Capability        /// An arbitrary "tag" for the controller.    /// For example, it could be used to describe the purpose of    /// the capability.    /// Empty by default:    access(all)    var tag: String        /// Updates this controller's tag to the provided string:    access(all)    fun setTag(_ tag: String)        /// The type of the controlled capability (i.e., the T    /// in `Capability<T>`):    access(all)    let borrowType: Type        /// The identifier of the controlled capability.    /// All copies of a capability have the same ID.    access(all)    let capabilityID: UInt64        /// Delete this capability controller,    /// and disable the controlled capability and its copies.    ///    /// The controller will be deleted from storage,    /// but the controlled capability and its copies remain.    ///    /// Once this function returns, the controller is no longer usable,    /// all further operations on the controller will panic.    ///    /// Borrowing from the controlled capability or its copies    /// will return nil:    ///    access(all)    fun delete()        /// Returns the targeted storage path of the controlled capability:    access(all)    fun target(): StoragePath        /// Retarget the controlled capability to the given storage path.    /// The path may be different or the same as the current path:    access(all)    fun retarget(_ target: StoragePath)    }            ``

### Issuing capabilities

Capabilities are created by _issuing_ them in the target account.

**Issuing storage capabilities**

The `capabilities.storage.issue` function issues a new storage capability that targets the given storage path and can be borrowed with the given type:

`   access(Capabilities | StorageCapabilities | IssueStorageCapabilityController)    fun issue<T: &Any>(_ path: StoragePath): Capability<T>            `

Calling the `issue` function requires access to an account via a reference, which is authorized with the coarse-grained `Capabilities` or `StorageCapabilities` entitlements (`aut (Capabilities) &Account` or `auth(StorageCapabilities) &Account`), or the fine-grained `IssueStorageCapabilityController` entitlement (`auth(IssueStorageCapabilityController) &Account`).

The path must be a storage path, and it must have the domain `storage`.

For example, the following transaction issues a new storage capability, which grants the ability to withdraw from the stored vault by authorizing the capability to be borrowed with the necessary `Withdraw` entitlement:

`   transaction {    prepare(signer: auth(IssueStorageCapabilityController) &Account) {    let capability = signer.capabilities.storage.issue<auth(Withdraw) &Vault>(/storage/vault)    // ...    }    }            `

**Issuing account capabilities**

The `capabilities.account.issue` function issues a new account capability that targets the account and can be borrowed with the given type:

`   access(Capabilities | AccountCapabilities | IssueAccountCapabilityController)    fun issue<T: &Account>(): Capability<T>            `

Calling the `issue` function requires access to an account via a reference, which is authorized with the coarse-grained `Capabilities` or `AccountCapabilities` entitlements (`auth(Capabilities) &Account` or `auth(AccountCapabilities) &Account`), or the fine-grained `IssueAccountCapabilityController` entitlement (`auth(IssueAccountCapabilityController) &Account`).

For example, the following transaction issues a new account capability, which grants the ability to save objects into the account by authorizing the capability to be borrowed with the necessary [`SaveValue` entitlement](https://cadence-lang.org/docs/language/accounts/storage#saving-objects):

`   transaction {    prepare(signer: auth(IssueAccountCapabilityController) &Account) {    let capability = signer.capabilities.account.issue<auth(SaveValue) &Account>()    // ...    }    }            `

### Publishing capabilities

Capabilities can be made available publicly by _publishing_ them.

The `capabilities.publish` function publishes a capability under a given public path:

`   access(Capabilities | PublishCapability)    fun publish(_ capability: Capability, at: PublicPath)            `

Calling the `publish` function requires access to an account via a reference that is authorized with the coarse-grained `Capabilities` entitlement (`auth(Capabilities) Account`), or the fine-grained `PublishCapability` entitlement (`auth(PublishCapability) &Account`).

For example, the following transaction issues a new storage capability and then publishes it under the path `/public/vault`, allowing anyone to access and borrow the capability and gain access to the stored vault. Note that the reference type is unauthorized, so when the capability is borrowed, only publicly accessible (`access(all)`) fields and functions of the object can be accessed:

`   transaction {    prepare(signer: auth(Capabilities) &Account) {    let capability = signer.capabilities.storage.issue<&Vault>(/storage/vault)    signer.capabilities.publish(capability, at: /public/vault)    }    }            `

### Unpublishing capabilities

The `capabilities.unpublish` function unpublishes a capability from a given public path:

`   access(Capabilities | UnpublishCapability)    fun unpublish(_ path: PublicPath): Capability?            `

Calling the `unpublish` function requires access to an account via a reference, which is authorized with the coarse-grained `Capabilities` entitlement (`auth(Capabilities) Account`), or the fine-grained `UnpublishCapability` entitlement (`auth(UnpublishCapability) &Account`).

If there is a capability published under the path, the function removes it from the path and returns it. If there is no capability published under the path, the function returns `nil`.

For example, the following transaction unpublishes a capability that was previously published under the path `/public/vault`:

`   transaction {    prepare(signer: auth(Capabilities) &Account) {    signer.capabilities.unpublish(/public/vault)    }    }            `

### Tagging capabilities

Capabilities can be associated with a tag, which is an arbitrary string. The tag can be used for various purposes, such as recording the purpose of the capability. It is empty by default and is stored in the capability controller.

Both storage capability controllers (`StorageCapabilityController`) and account capability controllers (`AccountCapabilityController`) have a `tag` field and a `setTag` function, which can be used to get and set the tag:

`   access(all)    var tag: String        access(all)    fun setTag(_ tag: String)            `

### Retargeting storage capabilities

Storage capabilities (`StorageCapabilityController`) can be retargeted to another storage path after they have been issued.

The `target` function returns the storage path of the controlled capability, and the `retarget` function sets a new storage path:

`   access(all)    fun target(): StoragePath        access(all)    fun retarget(_ target: StoragePath)            `

### Revoking capabilities

A capability and all of its copies can be revoked by deleting the capability's controller.

The `delete` function deletes a controller (`StorageCapabilityController` or `AccountCapabilityController`):

`   access(all)    fun delete()            `

### Getting capability controllers

The capability management types `StorageCapabilities` and `AccountCapabilities` allow obtaining the controller for a capability, as well as iterating over all existing controllers.

**Getting a storage capability controller**

The `capabilities.storage.getController` function gets the storage capability controller for the capability with the given capability ID:

`   access(Capabilities | StorageCapabilities | GetStorageCapabilityController)    view fun getController(byCapabilityID: UInt64): &StorageCapabilityController?            `

Calling the `getController` function requires access to an account via a reference, which is authorized with the coarse-grained `Capabilities` or `StorageCapabilities` entitlements (`auth(Capabilities) &Account` or `auth(StorageCapabilities) &Account`), or the fine-grained `GetStorageCapabilityController` entitlement (`auth(GetStorageCapabilityController) &Account`).

If a storage capability controller for the capability with the given ID exists, the function returns a reference to it, as an optional. If there is no storage capability controller with the given capability ID, the function returns `nil`.

**Getting an account capability controller**

The `capabilities.account.getController` function gets the account capability controller for the capability with the given capability ID:

`   access(Capabilities | AccountCapabilities | GetAccountCapabilityController)    view fun getController(byCapabilityID: UInt64): &AccountCapabilityController?            `

Calling the `getController` function requires access to an account via a reference, which is authorized with the coarse-grained `Capabilities` or `AccountCapabilities` entitlements (`auth(Capabilities) &Account` or `auth(AccountCapabilities) &Account`), or the fine-grained `GetAccountCapabilityController` entitlement (`auth(GetAccountCapabilityController) &Account`).

If an account capability controller for the capability with the given ID exists, the function returns a reference to it, as an optional. If there is no account capability controller with the given capability ID, the function returns `nil`.

**Iterating over storage capability controllers**

The functions `getControllers` and `forEachController` allow iterating over all storage capability controllers of a storage path:

`   access(Capabilities | StorageCapabilities | GetStorageCapabilityController)    view fun getControllers(forPath: StoragePath): [&StorageCapabilityController]        access(Capabilities | StorageCapabilities | GetStorageCapabilityController)    fun forEachController(    forPath: StoragePath,    _ function: fun(&StorageCapabilityController): Bool    )            `

Calling the `getControllers` and `forEachController` function requires access to an account via a reference, which is authorized with the coarse-grained `Capabilities` or `StorageCapabilities` entitlements (`auth(Capabilities) &Account` or `auth(StorageCapabilities) &Account`), or the fine-grained `GetStorageCapabilityController` entitlement (`auth(GetStorageCapabilityController) &Account`).

The `getControllers` function returns a new array of references to all storage capability controllers.

The `forEachController` function calls the given callback function for each storage capability controller and passes a reference to the function. Iteration stops when the callback function returns `false`.

**Iterating over account capability controllers**

The functions `getControllers` and `forEachController` allow iterating over all account capability controllers of the account:

`   access(Capabilities | AccountCapabilities | GetAccountCapabilityController)    view fun getControllers(): [&AccountCapabilityController]        access(Capabilities | AccountCapabilities | GetAccountCapabilityController)    fun forEachController(_ function: fun(&AccountCapabilityController): Bool)            `

Calling the `getControllers` and `forEachController` function requires access to an account via a reference, which is authorized with the coarse-grained `Capabilities` or `AccountCapabilities` entitlements (`auth(Capabilities) &Account` or `auth(AccountCapabilities) &Account`), or the fine-grained `GetAccountCapabilityController` entitlement (`auth(GetAccountCapabilityController) &Account`).

The `getControllers` function returns a new array of references to all account capability controllers.

The `forEachController` function calls the given callback function for each account capability controller and passes a reference to the function. Iteration stops when the callback function returns `false`.

## Examples

**Entitlement Increment**

1. Declare a resource named `Counter` that has a field `count` and a function `increment`, which requires the `Increment` entitlement:
    
    `   access(all)    resource Counter {        access(all)    var count: UInt        access(all)    init(count: UInt) {    self.count = count    }        access(Increment)    fun increment(by amount: UInt) {    self.count = self.count + amount    }    }            `
    
    In this example, an account reference is available through the constant `account`, which has the type `auth(Storage, Capabilities) &Account` (i.e., the reference is authorized to perform storage and capability operations).
    
2. Create a new instance of the resource type `Counter` and save it in the storage of the account. The path `/storage/counter` is used to refer to the stored value. Its identifier `counter` was chosen freely and could be something else:
    
    `   account.storage.save(    <-create Counter(count: 42),    to: /storage/counter    )            `
    
3. Issue a new storage capability that allows access to the stored counter resource:
    
    `   let capability = account.capabilities.storage.issue<&Counter>(/storage/counter)            `
    
4. Publish the capability under the path `/public/counter`, so that anyone can access the counter resource. Its identifier `counter` was chosen freely and could be something else:
    
    `   account.capabilities.publish(capability, at: /public/counter)            `
    

Imagine that the next example is in a different context, such as a new script or transaction:

1. Get a reference to the account that stores the counter:
    
    `   let account = getAccount(0x1)            `
    
2. Borrow the capability for the counter that is made publicly accessible through the path `/public/counter`. The `borrow` call returns an optional reference `&Counter?`. The borrow succeeds, and the result is not `nil`; it is a valid reference because:
    
    - The path `/public/counter` stores a capability.
    - The capability allows it to be borrowed as `&Counter`, as it has the type `Capability<&Counter>`.
    - The target of the storage capability, the _path_ `/storage/counter`, stores an object and it has a type that is a subtype of the borrowed type (type equality is also considered a subtype relationship).
3. Force-unwrap the optional reference. After the call, the declared constant `counterRef` has type `&Counter`:
    
    `   let counterRef = account.capabilities.borrow<&Counter>(/public/counter)!            `
    
4. Read the field `count` of the `Counter`. The field can be accessed because it has the access modifier `access(all)`.
    
    Even though it is a variable field (`var`), it cannot be assigned to from outside of the object.
    
    ``   counterRef.count // is `42`        // Invalid: The `increment` function is not accessible for the    // reference, because the reference has the type `&Counter`,    // which does not authorize the entitlement `Increment`,    // which is required by the `increment` function    // (it has the access modifier ` access(Increment)`).        counterRef.increment(by: 5)            ``
    
5. Attempt to borrow the capability again for the counter, but use the type `auth(Increment) &Counter` to re-attempt the call to `increment`.
    
    Getting the capability fails, because the capability was issued using the type `&Counter`. After the call, `counterRef2` is `nil`.
    
    `   let counterRef2 = account.capabilities.borrow<auth(Increment) &Counter>(/public/counter)            `

# Interfaces

An interface is an abstract type that specifies the behavior of types that **implement** the interface. Interfaces declare the required functions and fields, the access control for those declarations, and [pre-conditions and post-conditions](https://cadence-lang.org/docs/language/pre-and-post-conditions) that implementing types need to provide.

There are three kinds of interfaces:

- **Structure interfaces** — implemented by [structures](https://cadence-lang.org/docs/language/types-and-type-system/composite-types#structures)
- **Resource interfaces** — implemented by [resources](https://cadence-lang.org/docs/language/types-and-type-system/composite-types#resources)
- **Contract interfaces** — implemented by [contracts](https://cadence-lang.org/docs/language/contracts)

Structure, resource, and contract types may implement multiple interfaces.

There is no support for event and enum interfaces.

Nominal typing applies to composite types that implement interfaces. This means that a type only implements an interface if it has explicitly declared the conformance; the composite type does not implicitly conform to an interface, even if it satisfies all requirements of the interface.

Interfaces consist of the function and field requirements that a type implementing the interface must provide implementations for. Interface requirements, and therefore also their implementations, must always be at least public.

Variable field requirements may be annotated to require them to be publicly settable.

Function requirements consist of the name of the function, parameter types, an optional return type, and optional [pre-conditions and post-conditions](https://cadence-lang.org/docs/language/pre-and-post-conditions).

Field requirements consist of the name and the type of the field. Field requirements may optionally declare a _getter_ requirement and a _setter_ requirement, each with pre-conditions and post-conditions.

Calling functions with pre-conditions and post-conditions on interfaces instead of concrete implementations can improve the security of a program, as it ensures that even if implementations change, some aspects of them will always hold.

## Interface declaration

Interfaces are declared using the `struct`, `resource`, or `contract` keyword, followed by the `interface` keyword, the name of the interface, and the requirements, which must be enclosed in opening and closing braces.

Field requirements can be annotated to:

- require the implementation to be a variable field by using the `var` keyword;
- require the implementation to be a constant field by using the `let` keyword;
- or, the field requirement may specify nothing, in which case the implementation may either be a variable or a constant field.

Field requirements and function requirements must specify the required level of access. The access must be at least public, so the `access(all)` keyword must be provided.

Interfaces can be used in types. This is explained in detail in [Interfaces in types](https://cadence-lang.org/docs/language/interfaces#interfaces-in-types). For now, the syntax `{I}` can be read as the type of any value that implements the interface `I`.

Declare a resource interface for a fungible token. Only resources can implement this resource interface:

``   access(all)    resource interface FungibleToken {        // Require the implementing type to provide a field for the balance    // that is readable in all scopes (`access(all)`).    //    // Neither the `var` keyword nor the `let` keyword is used,    // so the field may be implemented as either a variable    // or as a constant field.    //    access(all)    balance: Int        // Require the implementing type to provide an initializer that    // given the initial balance, must initialize the balance field.    //    init(balance: Int) {    pre {    balance >= 0:    "Balances are always non-negative"    }    post {    self.balance == balance:    "the balance must be initialized to the initial balance"    }        // NOTE: The declaration contains no implementation code.    }        // Require the implementing type to provide a function that is    // callable in all scopes, which withdraws an amount from    // this fungible token and returns the withdrawn amount as    // a new fungible token.    //    // The given amount must be positive, and the function implementation    // must add the amount to the balance.    //    // The function must return a new fungible token.    // The type `{FungibleToken}` is the type of any resource    // that implements the resource interface `FungibleToken`.    //    access(all)    fun withdraw(amount: Int): @{FungibleToken} {    pre {    amount > 0:    "the amount must be positive"    amount <= self.balance:    "insufficient funds: the amount must be smaller or equal to the balance"    }    post {    self.balance == before(self.balance) - amount:    "the amount must be deducted from the balance"    }        // NOTE: The declaration contains no implementation code.    }        // Require the implementing type to provide a function that is    // callable in all scopes, which deposits a fungible token    // into this fungible token.    //    // No precondition is required to check the given token's balance    // is positive, as this condition is already ensured by    // the field requirement.    //    // The parameter type `{FungibleToken}` is the type of any resource    // that implements the resource interface `FungibleToken`.    //    access(all)    fun deposit(_ token: @{FungibleToken}) {    post {    self.balance == before(self.balance) + token.balance:    "the amount must be added to the balance"    }        // NOTE: The declaration contains no implementation code.    }    }            `` 

note

The required initializer and functions do not have any executable code.

Struct and resource interfaces can only be declared directly inside contracts (i.e., not inside of functions). Contract interfaces can only be declared globally and not inside contracts.

## Interface implementation

Declaring that a type implements (conforms) to an interface is performed in the type declaration of the composite type (e.g., structure, resource): the kind and the name of the composite type is followed by a colon (`:`) and the name of one or more interfaces that the composite type implements.

This will tell the checker to enforce any requirements from the specified interfaces onto the declared type.

A type implements (conforms to) an interface if it declares the implementation in its signature, provides field declarations for all fields required by the interface, and provides implementations for all functions required by the interface.

The field declarations in the implementing type must match the field requirements in the interface in terms of name, type, and declaration kind (e.g., constant, variable), if given. For example, an interface may require a field with a certain name and type, but leaves it to the implementation what kind the field it is.

The function implementations must match the function requirements in the interface in terms of name, parameter argument labels, parameter types, and the return type.

Declare a resource named `ExampleToken` that implements the `FungibleToken` interface:

``   // It has a variable field named `balance`, which can be written    // by functions of the type, but outer scopes can only read it.    //    access(all)    resource ExampleToken: FungibleToken {        // Implement the required field `balance` for the `FungibleToken` interface.    // The interface does not specify if the field must be variable, constant,    // so in order for this type (`ExampleToken`) to be able to write to the field,    // but limit outer scopes to only read from the field, it is declared variable,    // and only has public access (non-settable).    //    access(all)    var balance: Int        // Implement the required initializer for the `FungibleToken` interface:    // accept an initial balance and initialize the `balance` field.    //    // This implementation satisfies the required postcondition.    //    // NOTE: the postcondition declared in the interface    // does not have to be repeated here in the implementation.    //    init(balance: Int) {    self.balance = balance    }        // Implement the required function named `withdraw` of the interface    // `FungibleToken`, that withdraws an amount from the token's balance.    //    // The function must be public.    //    // This implementation satisfies the required postcondition.    //    // NOTE: neither the precondition nor the postcondition declared    // in the interface have to be repeated here in the implementation.    //    access(all)    fun withdraw(amount: Int): @ExampleToken {    self.balance = self.balance - amount    return create ExampleToken(balance: amount)    }        // Implement the required function named `deposit` of the interface    // `FungibleToken`, that deposits the amount from the given token    // to this token.    //    // The function must be public.    //    // NOTE: the type of the parameter is `{FungibleToken}`,    // i.e., any resource that implements the resource interface `FungibleToken`,    // so any other token — however, we want to ensure that only tokens    // of the same type can be deposited.    //    // This implementation satisfies the required postconditions.    //    // NOTE: neither the precondition nor the postcondition declared    // in the interface have to be repeated here in the implementation.    //    access(all)    fun deposit(_ token: @{FungibleToken}) {    if let exampleToken <- token as? ExampleToken {    self.balance = self.balance + exampleToken.balance    destroy exampleToken    } else {    panic("cannot deposit token which is not an example token")    }    }    }            ``

Declare a constant that has type `ExampleToken`, and is initialized with such an example token:

`   let token <- create ExampleToken(balance: 100)            `

Withdraw 10 units from the token:

``   // The amount satisfies the precondition of the `withdraw` function    // in the `FungibleToken` interface.    //    // Invoking a function of a resource does not destroy the resource,    // so the resource `token` is still valid after the call of `withdraw`.    //    let withdrawn <- token.withdraw(amount: 10)        // The postcondition of the `withdraw` function in the `FungibleToken`    // interface ensured the balance field of the token was updated properly.    //    // `token.balance` is `90`    // `withdrawn.balance` is `10`            ``

Deposit the withdrawn token into another one:

``   let receiver: @ExampleToken <- // ...    receiver.deposit(<-withdrawn)        // Run-time error: The precondition of function `withdraw` in interface    // `FungibleToken` fails, the program aborts: the parameter `amount`    // is larger than the field `balance` (100 > 90).    //    token.withdraw(amount: 100)        // Withdrawing tokens so that the balance is zero does not destroy the resource.    // The resource has to be destroyed explicitly.    //    token.withdraw(amount: 90)            ``

The access level for variable fields in an implementation may be less restrictive than the interface requires.

For example, an interface may require a field to be at least contract accessible (i.e., the `access(contract)` modifier is used), and an implementation may provide a variable field which is public (the `access(all)` modifier is used):

``   access(all)    struct interface AnInterface {    // Require the implementing type to provide a contract-readable    // field named `a` that has type `Int`. It may be a variable    // or a constant field.    //    access(contract)    a: Int    }        access(all)    struct AnImplementation: AnInterface {    // Declare a public variable field named `a` that has type `Int`.    // This implementation satisfies the requirement for interface `AnInterface`:    //    access(all)    var a: Int        init(a: Int) {    self.a = a    }    }            ``

## Interfaces in types

Interfaces can be used in types: the type `{I}` is the type of all objects that implement the interface `I`.

This is called an [intersection type](https://cadence-lang.org/docs/language/types-and-type-system/intersection-types): only the functionality (members and functions) of the interface can be used when accessing a value of such a type.

Declare an interface named `Shape`:

`   // Require implementing types to provide a field which returns the area,    // and a function which scales the shape by a given factor.    //    access(all)    struct interface Shape {        access(all)    fun getArea(): Int        access(all)    fun scale(factor: Int)    }            `

Declare a structure named `Square` that implements the `Shape` interface:

``   access(all)    struct Square: Shape {    // In addition to the required fields from the interface,    // the type can also declare additional fields.    //    access(all)    var length: Int        // Provided the field `area`, which is required to conform    // to the interface `Shape`.    //    // Since `area` was not declared as a constant, variable,    // field in the interface, it can be declared.    //    access(all)    fun getArea(): Int {    return self.length * self.length    }        access(all)    init(length: Int) {    self.length = length    }        // Provided the implementation of the function `scale`,    // which is required to conform to the interface `Shape`.    //    access(all)    fun scale(factor: Int) {    self.length = self.length * factor    }    }            ``

Declare a structure named `Rectangle` that also implements the `Shape` interface:

``   access(all)    struct Rectangle: Shape {        access(all)    var width: Int        access(all)    var height: Int        // Provided the field `area`, which is required to conform    // to the interface `Shape`.    //    access(all)    fun getArea(): Int {    return self.width * self.height    }        access(all)    init(width: Int, height: Int) {    self.width = width    self.height = height    }        // Provided the implementation of the function `scale`,    // which is required to conform to the interface `Shape`.    //    access(all)    fun scale(factor: Int) {    self.width = self.width * factor    self.height = self.height * factor    }    }            ``

Declare a constant that has type `Shape`, which has a value with type `Rectangle`:

`   var shape: {Shape} = Rectangle(width: 10, height: 20)            `

Values implementing an interface are assignable to variables that have the interface as their type.

Assign a value of type `Square` to the variable `shape` that has type `Shape`:

``   shape = Square(length: 30)        // Invalid: cannot initialize a constant that has type `Rectangle`.    // with a value that has type `Square`.    //    let rectangle: Rectangle = Square(length: 10)            ``

Fields declared in an interface can be accessed and functions declared in an interface can be called on values of a type that implements the interface:

Declare a constant which has the type `Shape` and is initialized with a value that has type `Rectangle`:

``   let shape: {Shape} = Rectangle(width: 2, height: 3)        // Access the field `area` declared in the interface `Shape`.    //    shape.area // is `6`        // Call the function `scale` declared in the interface `Shape`.    //    shape.scale(factor: 3)        shape.area // is `54`            ``

## Interface nesting

🚧 Status

Currently, only contracts and contract interfaces support nested interfaces.

Interfaces can be arbitrarily nested. Declaring an interface inside another does not require implementing types of the outer interface to provide an implementation of the inner interfaces.

Declare a resource interface `OuterInterface`, which declares a nested structure interface named `InnerInterface`:

``   // Resources implementing `OuterInterface` do not need to provide    // an implementation of `InnerInterface`.    //    // Structures may just implement `InnerInterface`.    //    resource interface OuterInterface {        struct interface InnerInterface {}    }            ``

Declare a resource named `SomeOuter` that implements the interface `OuterInterface`:

``   // The resource is not required to implement `OuterInterface.InnerInterface`.    //    resource SomeOuter: OuterInterface {}            ``

Declare a structure named `SomeInner` that implements `InnerInterface`, which is nested in interface `OuterInterface`:

`   struct SomeInner: OuterInterface.InnerInterface {}            `

Contract interfaces may also declare [events](https://cadence-lang.org/docs/language/events), which also do not require implementing types of the outer interface to _implement_ the event. The event can be emitted in the declaring interface, in a condition or in a default implementation of a function.

For example, declare a contract interface:

``   contract interface ContractInterface {    // some event declaration    //    event SomeEvent()        // some function that emits `SomeEvent` when called    //    fun eventEmittingFunction() {    pre {    emit SomeEvent()    }    }    }        // A contract implementing `ContractInterface`    // Note that no declaration of `SomeEvent` is required    //    contract ImplementingContract: ContractInterface {    // implementation of `eventEmittingFunction`;    // this will emit `SomeEvent` when called    //    fun eventEmittingFunction() {    // ...    }    }            ``

## Interface default functions

Interfaces can provide default functions: if the concrete type implementing the interface does not provide an implementation for the function required by the interface, then the interface's default function is used in the implementation.

Declare a struct interface `Container`, which declares a default function `getCount`:

`   struct interface Container {        let items: [AnyStruct]        fun getCount(): Int {    return self.items.length    }    }            `

Declare a concrete struct named `Numbers` that implements the interface `Container`:

``   // The struct does not implement the function `getCount` of the interface `Container`,    // so the default function for `getCount` is used.    //    struct Numbers: Container {    let items: [AnyStruct]        init() {    self.items = []    }    }        let numbers = Numbers()    numbers.getCount() // is 0            ``

Interfaces cannot provide default initializers, and only one conformance may provide a default function.

## Interface inheritance

An interface can inherit from (conform to) other interfaces of the same kind. For example, a resource interface can inherit from another resource interface, but cannot inherit from a struct interface. When an interface inherits from another, all the fields, functions, and types of the parent interface are implicitly available to the inheriting interface:

``   access(all)    resource interface Receiver {    access(all)    fun deposit(_ something: @AnyResource)    }        // `Vault` interface inherits from `Receiver` interface.    access(all)    resource interface Vault: Receiver {    access(all)    fun withdraw(_ amount: Int): @Vault    }            ``

In the example above, `Vault` inherits `Receiver`. Anyone implementing the `Vault` interface would also have to implement the `Receiver` interface.

``   access(all)    resource MyVault: Vault {        // Must implement all the methods coming from both `Vault` and `Receiver` interfaces.    access(all)    fun deposit(_ something: @AnyResource) {}        access(all)    fun withdraw(_ amount: Int): @Vault {}    }            ``

### Duplicate interface members

When an interface implements another interface, it is possible for the two interfaces to have members with the same name.

The following sections describe how these ambiguities are resolved for different scenarios, including:

- Fields
- Functions
- Functions with conditions
- Default functions
- Conditions with default functions
- Types and event definitions

**Fields**

If two fields with identical names have identical types, then it will be valid:

``   access(all)    resource interface Receiver {    access(all)    var id: UInt64    }        access(all)    resource interface Vault: Receiver {    // `id` field has the same type as the `Receiver.id`. Hence, this is valid.    access(all)    var id: UInt64    }            ``

Otherwise, interface conformance is not valid:

``   access(all)    resource interface Receiver {    access(all)    var id: Int    }        access(all)    resource interface Vault: Receiver {    // `id` field has a different type than the `Receiver.id`. Hence, this is invalid.    access(all)    var id: UInt64    }            ``

**Functions**

If two functions with identical names also have identical signatures, that is valid:

``   access(all)    resource interface Receiver {    access(all)    fun deposit(_ something: @AnyResource)    }        access(all)    resource interface Vault: Receiver {    // `deposit` function has the same signature as the `Receiver.deposit`.    // Also none of them have any default implementations.    // Hence, this is valid.    access(all)    fun deposit(_ something: @AnyResource)    }            ``

If the signatures of the two functions are different, then the interface conformance is not valid:

``   access(all)    resource interface Receiver {    access(all)    fun deposit(_ something: @AnyResource)    }        access(all)    resource interface Vault: Receiver {    // Error: `deposit` function has a different signature compared to the `Receiver.deposit`.    // So these two cannot co-exist.    access(all)    fun deposit()    }            ``

**Functions with conditions**

If the two functions with identical names and signatures have [pre/post-conditions](https://cadence-lang.org/docs/language/pre-and-post-conditions), then it will still be valid. However, the pre/post-conditions are linearized (see [Linearizing conditions](https://cadence-lang.org/docs/language/interfaces#linearizing-conditions) for more information) to determine the order of the execution of the conditions. Given the pre/post-conditions are `view` only, the order of execution would not have an impact on the conditions:

``   access(all)    resource interface Receiver {    access(all)    fun deposit(_ something: @AnyResource) {    pre{ self.balance > 100 }    }    }        access(all)    resource interface Vault: Receiver {    // `deposit` function has the same signature as the `Receiver.deposit`.    // Having pre/post condition is valid.    // Both conditions would be executed in a pre-determined order.    access(all)    fun deposit(_ something: @AnyResource) {    pre{ self.balance > 50 }    }    }            ``

**Default functions**

An interface can provide a default implementation to an inherited function:

``   access(all)    resource interface Receiver {    access(all)    fun log(_ message: String)    }        access(all)    resource interface Vault: Receiver {    // Valid: Provides the implementation for `Receiver.log` method.    access(all)    fun log(_ message: String) {    log(message.append("from Vault"))    }    }            ``

However, an interface cannot override an inherited default implementation of a function:

``   access(all)    resource interface Receiver {    access(all)    fun log(_ message: String) {    log(message.append("from Receiver"))    }    }        access(all)    resource interface Vault: Receiver {    // Invalid: Cannot override the `Receiver.log` method.    access(all)    fun log(_ message: String) {    log(message.append("from Vault"))    }    }            ``

It is also invalid to have two or more inherited default implementations for an interface:

`   access(all)    resource interface Receiver {    access(all)    fun log(_ message: String) {    log(message.append("from Receiver"))    }    }        access(all)    resource interface Provider {    access(all)    fun log(_ message: String) {    log(message.append("from Provider"))    }    }        // Invalid: Two default functions from two interfaces.    access(all)    resource interface Vault: Receiver, Provider {}            `

Having said that, there can be situations where the same default function can be available via different inheritance paths:

``   access(all)    resource interface Logger {    access(all)    fun log(_ message: String) {    log(message.append("from Logger"))    }    }        access(all)    resource interface Receiver: Logger {}        access(all)    resource interface Provider: Logger {}        // Valid: `Logger.log()` default function is visible to the `Vault` interface    // via both `Receiver` and `Provider`.    access(all)    resource interface Vault: Receiver, Provider {}            ``

In the above example, the `Logger.log()` default function is visible to the `Vault` interface via both `Receiver` and `Provider`. Even though it is available from two different interfaces, they are both referring to the same default implementation. Therefore, the above code is valid.

**Conditions with default functions**

A more complex situation is when a default function is available via one inheritance path and a pre/post-condition is available via another inheritance path:

`   access(all)    resource interface Receiver {    access(all)    fun log(_ message: String) {    log(message.append("from Receiver"))    }    }        access(all)    resource interface Provider {    access(all)    fun log(_ message: String) {    pre{ message != "" }    }    }        // Valid: Both the default function and the condition would be available.    access(all)    resource interface Vault: Receiver, Provider {}            `

In these situations, all rules applicable for the default functions inheritance as well as condition inheritance would be applied. Thus, the default function coming from the `Receiver` interface, and the condition coming from the `Provider` interface, would be made available for the inherited interface.

**Types and event definitions**

Type and event definitions would also behave similarly to the default functions. Inherited interfaces can override type definitions and event definitions:

``   access(all)    contract interface Token {    access(all)    struct Foo {}    }        access(all)    contract interface NonFungibleToken: Token {    access(all)    struct Foo {}    }        access(all)    contract MyToken: NonFungibleToken {    access(all)    fun test() {    let foo: Foo // This will refer to the `NonFungibleToken.Foo`    }    }            ``

If a user needed to access the `Foo` struct coming from the super interface `Token`, then they can access it using the fully qualified name (e.g., `let foo: Token.Foo`).

However, it is not allowed to have two or more inherited type/event definitions with identical names for an interface:

`   access(all)    contract interface Token {    access(all)    struct Foo {}    }        access(all)    contract interface Collectible {    access(all)    struct Foo {}    }        // Invalid: Two type definitions with the same name from two interfaces.    access(all)    contract NonFungibleToken: Token, Collectible {    }            `

Similar to default functions, there can be situations where the same type/event definition can be available via different inheritance paths:

``   access(all)    contract interface Logger {    access(all)    struct Foo {}    }        access(all)    contract interface Token: Logger {}        access(all)    contract interface Collectible: Logger {}        // Valid: `Logger.Foo` struct is visible to the `NonFungibleToken` interface via both `Token` and `Collectible`.    access(all)    contract interface NonFungibleToken: Token, Collectible {}            ``

In the above example, `Logger.Foo` type definition is visible to the `NonFungibleToken` interface via both `Token` and `Collectible`. Even though it is available from two different interfaces, they are both referring to the same type definition. Therefore, the above code is valid.

However, if at least one of the interfaces in the middle of the chain also overrides the type definition `Foo`, then the code becomes invalid, as there are multiple implementations present now, which leads to ambiguity:

``   access(all)    contract interface Logger {    access(all)    struct Foo {}    }        access(all)    contract interface Token: Logger {    access(all)    struct Foo {}    }        access(all)    contract interface Collectible: Logger {}        // Invalid: The default implementation of the `Foo` struct by the `Logger`    // interface is visible to the `NonFungibleToken` via the `Collectible` interface.    // Another implementation of `Foo` struct is visible to the `NonFungibleToken` via the `Token` interface.    // This creates ambiguity.    access(all)    resource interface NonFungibleToken: Token, Provider {}            ``

### Linearizing conditions

As mentioned in [Functions with conditions](https://cadence-lang.org/docs/language/interfaces#duplicate-interface-members), it is required to linearize the function conditions to determine the order in which pre/post-conditions are executed. This is accomplished by linearizing the interfaces, and hence conditions, in a **depth-first pre-ordered manner, without duplicates**.

For example, consider an interface inheritance hierarchy as follows:

`   A    / \    B C    / \ /    D E    where an edge from A (top) to B (bottom) means A inherits B.            `

This would convert to a Cadence implementation similar to:

`   struct interface A: B, C {    access(all)    fun test() {    pre { print("A") }    }    }        struct interface B: D, E {    access(all)    fun test() {    pre { print("B") }    }    }        struct interface C: E {    access(all)    fun test() {    pre { print("C") }    }    }        struct interface D {    access(all)    fun test() {    pre { print("D") }    }    }        struct interface E {    access(all)    fun test() {    pre { print("E") }    }    }            `

Any concrete type implementing interface `A` would be equivalent to implementing all interfaces from `A` to `E`, linearized:

`   struct Foo: A {    access(all)    fun test() {    pre { print("Foo") }    }    }            `

The linearized interface order would be: [A, B, D, E, C]. In other words, it's the same as having:

`   struct Foo: A, B, D, C, E {    access(all)    fun test() {    pre { print("Foo") }    }    }            `

Thus, invoking the `test` method of `Foo` would first invoke the pre-conditions of [A, B, D, E, C], in that particular order, and eventually run the pre-condition of the concrete implementation `Foo`:

`   let foo = Foo()    foo.test()            `

The above then prints:

`   A    B    D    E    C    Foo            `

Similarly, for post-conditions, the same linearization of interfaces would be used, and the post-conditions are executed in the reverse order. For example, replacing the `pre` conditions in the above example with `post` conditions with the exact same content would result in an output similar to:

`   Foo    C    E    D    B    A            `

# Enumerations

Enumerations are sets of symbolic names bound to unique, constant values, which can be compared by identity.

## Enum declaration

Enums are declared using the `enum` keyword, followed by the name of the enum, the raw type after a colon, and the requirements, which must be enclosed in opening and closing braces.

The raw type must be an integer subtype (e.g., `UInt8` or `Int128`).

Enum cases are declared using the `case` keyword, followed by the name of the enum case.

Enum cases must be unique. Each enum case has a raw value, which is the index of the case among all cases.

The raw value of an enum case can be accessed through the `rawValue` field.

The enum cases can be accessed by using the name as a field on the enum or by using the enum constructor, which requires providing the raw value as an argument. The enum constructor returns the enum case with the given raw value, if any, or `nil` if no such case exists.

Enum cases can be compared using the equality operators `==` and `!=`.

## Working with an enum declaration

1. Declare an enum named `Color`, which has the raw value type `UInt8`, and declare three enum cases (`red`, `green`, and `blue`):
    
    `   access(all)    enum Color: UInt8 {        access(all)    case red        access(all)    case green        access(all)    case blue    }            `
    
2. Declare a variable that has the enum type `Color` and initialize it to the enum case `blue` of the enum:
    
    `   let blue: Color = Color.blue            `
    
3. Get the raw value of the enum case `blue`. Since it is the third case, it has an index of 2:
    
    ``   blue.rawValue // is `2`            ``
    
4. Get the `green` enum case of the enum `Color` by using the enum constructor and providing the raw value of the enum case `green`, 1. Since the enum case `green` is the second case, it has an index of 1:
    
    ``   let green: Color? = Color(rawValue: 1) // is `Color.green`            ``
    
5. Get the enum case of the enum `Color` with the raw value 5. As there are only three cases, the maximum raw value/index is 2:
    
    ``   let nothing = Color(rawValue: 5) // is `nil`            ``
    
    Enum cases can be compared:
    
    ``   Color.red == Color.red // is `true`    Color(rawValue: 1) == Color.green // is `true`            ``
    
    Different enum cases are not the same:
    
    ``   Color.red != Color.blue // is `true`            ``
    
6. Use an enum as part of a control flow statement.
    
    `   fun applyPaint(_ paint: Color): String {    // Directly test the value of the enum paint    switch paint {    case Color.red:    return "red"    case Color.blue:    return "blue"    case Color.green:    return "green"    default    return "unsupported color"    }    }            `

# References

It is possible to create references to objects (i.e., resources or structures). A reference can be used to access fields and call functions on the referenced object.

References are **copied** (i.e., they are value types).

References have the type `&T`, where `T` is the type of the referenced object.

References are created using the `&` operator. The reference type must be explicitly provided, for example, through a type annotation on a variable declaration or a type assertion using the `as` operator:

`   let hello = "Hello"            `

1. Create a reference to the `String` `hello`.
    
2. Provide the reference type `&String` using a type assertion:
    
    ``   let helloRef = &hello as &String        helloRef.length // is `5`            ``
    
3. Create another reference to the `String` `hello`.
    
4. Provide the reference type `&String` using a type annotation instead:
    
    `   let alsoHelloRef: &String = &hello        // Invalid: Cannot create a reference without an explicit type    //    let unknownRef = &hello            `
    

The reference type must be a supertype of the referenced object's type:

``   // Invalid: Cannot create a reference to `hello`    // typed as `&Int`, as it has type `String`    //    let intRef = &hello as &Int            ``

When creating a reference to an optional value, the result is an optional reference. If the referenced value is nil, the resulting reference itself will be nil. If the referenced value exists, then forcing the optional reference will yield a reference to that value:

`   let nilValue: String? = nil    let nilRef = &nilValue as &String? // r has type &String?    let n = nilRef! // error, forced nil value        let strValue: String? = ""    let strRef = &strValue as &String? // r has type &String?    let n = strRef! // n has type &String            `

References are covariant in their base types. For example, `&T` is a subtype of `&U`, if `T` is a subtype of `U`.

1. Declare a resource interface named `HasCount`, that has a field `count`:
    
    `   resource interface HasCount {    count: Int    }            `
    
2. Declare a resource named `Counter` that conforms to `HasCount`:
    
    `   resource Counter: HasCount {        access(all)    var count: Int        access(all)    init(count: Int) {    self.count = count    }        access(all)    fun increment() {    self.count = self.count + 1    }    }            `
    
3. Create a new instance of the resource type `Counter` and create a reference to it, typed as `&Counter`, so the reference allows access to all fields and functions of the counter:
    
    ``   et counter <- create Counter(count: 42)    let counterRef: &Counter = &counter as &Counter        counterRef.count // is `42`        counterRef.increment()        counterRef.count // is `43`            `` ->//
    

References can be freely upcasted and downcasted, and are covariant in their referenced type. So, for example, for some struct `S`, `&S` is a subtype of `&AnyStruct`, but not of `&Int`.

Create a reference to the counter, typed with the intersection type `&{HasCount}` (i.e., some resource that conforms to the `HasCount` interface):

``   let countRef = &counter as &{HasCount}        countRef.count // is `43`        // Invalid: The function `increment` is not available    // for the type `&{HasCount}`    //    countRef.increment()            ``

We can conditionally downcast `countRef` to a `Counter` if it has that type at runtime:

`   let counterRef2: &Counter = countRef as? &Counter    counterRef2.increment()            `

References are ephemeral (i.e., they cannot be [stored](https://cadence-lang.org/docs/language/accounts/storage)). Instead, consider [storing a capability and borrowing it](https://cadence-lang.org/docs/language/capabilities) when needed.

## Authorized references

By default, references are **unauthorized**. However, they may also be **authorized** to a set of [entitlements](https://cadence-lang.org/docs/language/access-control#entitlements).

Authorized references have the `auth` modifier, along with the set of entitlements to which they are authorized. The full syntax is: `auth(E, F, G) &T` for a reference authorized to `E`, `F`, and `G`, or `auth(E | F | G) &T` for a refernece authorized to `E`, `F`, **or** `G`. Authorized references are subtypes of unauthorized references.

Entitlements can only be given to references when they are created, and references to a value can only be created by the owner of the value. When creating a reference, that reference can be given any set of entitlements the value owner wishes to add.

Possessing an entitlement allows a reference to have access to functions and fields on its referenced type that require that entitlement. For example, if we extended the `HasCount` interface with a function:

`   entitlement Reset        resource interface HasCount {    count: Int        access(Reset)    fun resetCount()    }            `

Then, an unauthorized reference of type `&{HasCount}` would be unable to call `resetCount`. However, we can create a reference that can, like so:

``   let authCountRef: auth(Reset) &{HasCount} = &counter        // Valid, because `authCountRef` is authorized to `Reset`    authCountRef.resetCount()            ``

It is important to note that while references are covariant (and downcastable) with respect to their reference type, the authorization portion of the reference can never be downcast. In fact, the only way to "add" entitlements to a reference is to do so at the time of its creation, like in the example above. A reference will never have any more entitlements than the set with which it was created, and the set of entitlements on a reference at runtime will always match the set expressed in its static type. One implication of this is that upcasting an authorized reference actually changes its runtime type:

``   let authCountRef: auth(Reset) &{HasCount} = &counter    let unauthCountRef = authCountRef as &{HasCount}    let authCountRef2 = unauthCountRef as? auth(Reset) &{HasCount}        // Invalid: `authCountRef2` is `nil`, as the upcast of `authCountRef` cleared the    // `Reset` entitlement from the reference, meaning that it cannot be regained on downcasting.    authCountRef2.resetCount()            ``

The benefit of this is that there is never any "surprising" behavior with regards to entitlements, every reference value is transparent about what it is capable of at runtime.

While entitlement sets on references cannot be downcast, they can be upcast, or used in places expecting supertypes, and have special subtyping rules based on whether they are `|`- or `,`-separated sets.

In general, an entitlement set `{Us}` is a subtype of an entitlement set `{Vs}` when `{Us}` has more entitlements in it than `{Vs}`, and when both are `,`-separated (as they will be in most cases), which is the rule exactly: `{Us}` is a subset of `{Vs}` when it is a superset of `{Vs}`.

Conversely, if both are `|`-separated, the rule is reversed: `{Us}` is a subset of `{Vs}` when it is a subset of `{Vs}`. It may be helpful to think of this as saying that `{Us}` is more specific than `{Vs}` in this case; `{Vs}` expresses a set of entitlements that the reference **might** possess, while `{Us}` is expressing a more specific set of potential entitlements.

Lastly, if `{Us}` is `,`-separated while `{Vs}` is `|`-separated, then `{Us}` is a subset of `{Vs}` when any of the `Us` also appears in `{Vs}`. To see why, consider again that `{Vs}` expresses a set of entitlements that the reference **might** possess, and as long as at least one of these entitlements is in `{Us}` (which is a set of entitlements that we **know** the reference has), then the description provided by `{Vs}` is correct.

As an example to illustrate these rules:

``   let eRef: auth(E) &T = ...    let efRef: auth(E, F) &T = ...    let eOrFRef: auth(E | F) &T = ...        // Invalid, `eRef` only has `E` but `F` is required    eRef as auth(F) &T        // Invalid, `eRef` only has `E` but both `E` and `F` are required    eRef as auth(E, F) &T        // Valid, `eRef` definitely has `E` and either `E` or `F` is sufficient    eRef as auth(E | F) &T        // Valid, `efRef` both `E` and `F` but only `F` is required    efRef as auth(F) &T        // Valid, `efRef` both `E` and `F`, and either is sufficient    efRef as auth(E | F) &T        // Invalid, `eOrFRef` has one of `E` or `F` but we need to definitely have `F`    eOrFRef as auth(F) &T        // Invalid, `eOrFRef` has one of `E` or `F` but we need both    eOrFRef as auth(E, F) &T            ``

### References and entitlement mappings

In most situations, an [entitlement mapping](https://cadence-lang.org/docs/language/access-control#entitlement-mappings) is valid in the `auth` portion of a reference type. However, in certain specific circumstances in the definition of a field or function on a composite type, an entitlement mapping may be used in an `auth` modifier.

Here's a field defined with an entitlement mapping:

`   entitlement mapping M {    // omitted    }    resource interface I {    access(M)    let foo: auth(M) &T    }            `

In this example, the `M` in `auth(M) &T` indicates that the entitlements that the reference produced by an `iRef.foo` access will have are determined by the entitlements to `I` that `iRef` has, for some `iRef` value that is a reference to `{I}`. Conceptually, it creates a correspondence between the "output" reference's type and the "input" access modifier.

Here's an accessor function defined with an entitlement mapping:

`   entitlement mapping M {    // omitted    }    resource I {    access(self)    let myField: T        access(M)    fun getMyField(): auth(M) &T {    return &self.myField as auth(M) &T    }    }            `

The `M` in the `auth(M) &T` of the function's return type annotation indicates the same thing as in the field case. However, in this example `M` is also used in a reference type within the body of the function. Inside the body of function with entitlement-mapped access, the name of the entitlement mapping may be used as a stand-in for the output entitlements of the map.

## Field and index access

References to container types (structs/resources, dictionaries, and arrays) can be used to access (read/write) fields or elements of the container.

When a field/index is read through a reference, it will return:

- A reference, if the field/value at the index is also container-typed.
- Or, the concrete value, if the value is a primitive type.

For example, consider the following `Collection` resource, which has two fields: one (id) is string-typed and the other (ownedNFTs) is dictionary-typed:

`   resource Collection {        // Primitive-typed field    access(all)    var id: String        // Dictionary typed field    access(all)    var ownedNFTs: @{UInt64: NFT}    }            `

Thus:

``   var collectionRef: &Collection = ...        // `collectionRef.ownedNFTs` would return a reference of type `&{UInt64: NFT}`.    var ownedNFTsRef: &{UInt64: NFT} = collectionRef.ownedNFTs        // Whereas, `collectionRef.id` would return the value, since it is a primitive type.    var id: String = collectionRef.id            ``

Similarly, accessing an element of an array/dictionary will return a reference.

`   // Index-access to an array reference would return a reference to the element.    var resourceArrayRef: &[AnyResource] = ...    var elementRef: &AnyResource = collectionArrayRef[2]        // Whereas, if the array is of a primitive type, it will return the concrete value.    var intArrayRef: &[Int] = ...    var element: Int = intArrayRef[2]            `

`   // Index-access to a dictionary reference would return a reference to the value.    var resourceDictionaryRef: &{String: AnyResource} = ...    var valueRef: &AnyResource? = resourceDictionaryRef["two"]        // Whereas, if the dictionary values are of a primitive type, it will return the concrete value.    var intDictionaryRef: &{String: Int} = ...    var value: Int? = intDictionaryRef["two"]            `

It is also important to note that, in the above examples, the returned references have no entitlements (i.e., they are non-auth references).

To get entitled references for struct/resource fields, they must be defined with [entitlement mappings](https://cadence-lang.org/docs/language/access-control#entitlement-mappings). However, accessing a value at an index/key of an array/dictionary reference always returns a non-auth reference.

### Index assignment

Assigning to an index of an array or a dictionary reference is an entitled operation. In other words, the assignment operator for arrays/dictionaries also has the `Mutate` and `Insert` [built-in entitlements](https://cadence-lang.org/docs/language/access-control#built-in-mutability-entitlements).

Think of an assignment as a built-in function with `Mutate` or `(Insert, Remove)` entitlements. For example:

`   access(Mutate | (Insert, Remove))    set(keyOrIndex, value) { ... }            `

Note that the syntax for having nested entitlements in access modifiers like `(Mutate | (Insert, Remove))` is not currently supported, but this is for illustration purposes only.

Thus:

`   var arrayRef = &array as &[String]    arrayRef[2] = "John" // Static Error: updating via a read-only reference        var mutableArrayRef = &array as auth(Mutate) &[String]    mutableArrayRef[2] = "John" // OK        var insertableArrayRef = &array as auth(Insert) &[String]    insertableArrayRef[2] = "John" // Static Error: doesn't have the required entitlement        var removableArrayRef = &array as auth(Remove) &[String]    removableArrayRef[2] = "John" // Static Error: doesn't have the required entitlement        var insertableAndRemovableArrayRef = &array as auth(Insert, Remove) &[String]    insertableAndRemovableArrayRef[2] = "John" // OK            `

## Reference validity

Ephemeral references stay valid throughout the course of the program. However, **references to resources** can become invalid during the execution of a program if the referenced resource is moved or destroyed after taking the reference.

``   let r <-create R()        // Take a reference to the resource.    let ref = &r as &R        // Then transfer the resource into an account.    // This will invalidate all the references taken to the resource `r`.    account.storage.save(<-r, to: /storage/r)        // Static error, since the referenced resource has been moved.    ref.id = 2            `` 

A reference is invalidated upon the first transfer of the underlying resource, regardless of the origin and the destination.

`   let ref = &r as &R        // Moving a resource to a different variable invalidates all references to it.    let r2 <- r        // Static error, since the referenced resource has been moved.    ref.id = 2            ` ->//

tip

Invalidations of storage references are not statically caught, but only at run-time.

## Dereferencing values

Primitive values (and arrays or dictionaries of primitive values) can be _dereferenced_ using the unary `*` operator. This operation produces a copy of the referenced value. For example:

`   var x = 3    let ref: &Int = &x    var y = *ref    y = y + 1            `

At the end of the execution of this code, `y` will clearly be `4`, but `x` will still be `3`, as the `*ref` operation copies the value. This can be seen even more clearly using the following example with arrays:

`   let x = [0]    let ref: &[Int] = &x    var y = *ref    y.append(1)            `

At the end of this execution, `y` will contain `[0, 1]`, while `x` will remain `[0]` only.

References to non-primitive values (e.g., structs, resources, contracts, and enums) cannot be dereferenced.

# Imports

Programs can import declarations (types, functions, variables, and so on) from other programs.

## Importing contracts

Imports are declared using the `import` keyword. You can import your contracts using **one** of the following three options:

1. Import your contracts by name, which you must use if you're using the [Flow CLI](https://developers.flow.com/tools/flow-cli/index.md). For example:
    
    `   import "HelloWorld"            `
    
    This will automatically import the contract, based on the configuration found `flow.json`. It will automatically handle address changes between mainnet, testnet, and emulator, as long as those are present in `flow.json`.
    
2. Import your contracts by an address, which imports all declarations. Both [Flow playground](https://play.flow.com/) and [Flow runner](https://run.dnz.dev/) require importing by address.
    
3. Import your contracts by the names of the declarations that should be imported, followed by the `from` keyword, and then followed by the address.
    
    - If importing a local file, the location is a string literal, as well as the path to the file. Deployment of code with file imports requires usage of the [Flow CLI](https://developers.flow.com/tools/flow-cli/index.md).
    - If importing an external type in a different account, the location is an address literal, as well as the address of the account where the declarations are deployed to and published.
    
    ``   // Import the type `Counter` from a local file.    //    import Counter from "./examples/counter.cdc"        // Import the type `Counter` from an external account.    //    import Counter from 0x299F20A29311B9248F12            ``


# Attachments

Attachments are a feature of Cadence designed to allow developers to extend a struct or resource type (even one that they did not create) with new functionality, without requiring the original author of the type to plan or account for the intended behavior.

## Declaring attachments

Attachments are declared with the `attachment` keyword, which is declared by using a new form of the composite declaration: `attachment <Name> for <Type>: <Conformances> { ... }`, where the attachment functions and fields are declared in the body.

As such, the following are examples of legal declarations of attachments:

`   access(all)    attachment Foo for MyStruct {    // ...    }        attachment Bar for MyResource: MyResourceInterface {    // ...    }        attachment Baz for MyInterface: MyOtherInterface {    // ...    }            `

Like all other type declarations, attachments can only be declared with `all` access.

Specifying the kind (struct or resource) of an attachment is not necessary, as its kind will necessarily be the same as the type it is extending. Note that the base type may be either a concrete composite type or an interface. In the former case, the attachment is only usable on values specifically of that base type, while in the case of an interface, the attachment is usable on any type that conforms to that interface.

The body of the attachment follows the same declaration rules as composites. In particular, they may have both field and function members, and any field members must be initialized in an initializer. Only resource-kind attachments may have resource members.

The `self` keyword is available in attachment bodies, but unlike in a composite, `self` is a **reference** type, rather than a composite type: in an attachment declaration for `A`, the type of `self` would be a reference to `A`, rather than `A` as in other composite declarations. The specific entitlements that this reference has depend on the access modifier associated with the member function in which the `self`-reference appears, and are explained in more detail below.

If a resource with attachments on it is `destroy`ed, all of its attachments are `destroy`ed in an unspecified order. The only guarantee about the order in which attachments are destroyed in this case is that the base resource will be the last thing destroyed.

Within the body of an attachment, there is also a `base` keyword available, which contains a reference to the attachment's base value; that is, the composite to which the attachment is attached. Its type, therefore, is a reference to the attachment's declared base type. So, for an attachment declared as `access(all) attachment Foo for Bar`, the `base` field of `Foo` would have type `&Bar`.

For example, this is a valid declaration of an attachment:

`   access(all)    resource R {        access(all)    let x: Int        init (_ x: Int) {    self.x = x    }        access(all)    fun foo() { ... }    }        access(all)    attachment A for R {        access(all)    let derivedX: Int        init (_ scalar: Int) {    self.derivedX = base.x * scalar    }        access(all)    fun foo() {    base.foo()    }    }            `

For the purposes of external mutation checks or [access control](https://cadence-lang.org/docs/language/access-control), the attachment is considered a separate declaration from its base type. A developer cannot, therefore, access any `access(self)` fields (or `access(contract)` fields if the base was defined in a different contract to the attachment) on the `base` value, nor can they mutate any array or dictionary typed fields.

``   access(all)    resource interface SomeInterface {        access(all)    let b: Bool        access(self)    let i: Int        access(all)    let a: [String]    }    access(all)    attachment SomeAttachment for SomeContract.SomeStruct {        access(all)    let i: Int        init(i: Int) {    if base.b {    self.i = base.i // cannot access `i` on the `base` value    } else {    self.i = i    }    }        access(all)    fun foo() {    base.a.append("hello") // cannot mutate `a` outside of the composite where it was defined    }    }            ``

Within an attachment's member function, the `base` and `self` references are entitled to the same entitlements that the function's access modifier specifies. For example, in an attachment declared as `access(all) attachment A for R`, within a definition of a function `access(E) fun foo()`, the type of `base` would be `auth(E) &R`, and the type of `self` would be `auth(E) &A`.

Thus, the following definition works:

``   resource R {    access(E)    fun foo() {    //...    }    }        access(all)    attachment A for R {    access(E)    fun bar() {    base.foo() // available because `E` is required above, and thus `base` is type `auth(E) &R`.    }    }            ``

While this does **not** work:

``   // Bad code example. Do not use.    resource R {    access(E)    fun foo() {    //...    }    }        access(all)    attachment A for R {        access(self)    fun bar() {    base.foo() // unavailable because this function has `self` access, and thus `base` only is type `&R`.    }        }            ``

Note that as a result of how entitlements are propagated to the `self` and `base` values here, attachment definitions can only support the same entitlements that their base values support; i.e., some attachment `A` defined for `R` can only use an entitlement `E` in its definition if `R` also uses `E` in its definition (or the definition of any interfaces to which it conforms).

### Attachment types

An attachment declared with `access(all) attachment A for C { ... }` will have a nominal type `A`.

It is important to note that attachments are not first-class values, and as such, their usage is limited in certain ways. In particular, their types cannot appear outside of a reference type. So, for example, given an attachment declaration `attachment A for X {}`, the types `A`, `A?`, `[A]`, and `fun(): A` are not valid type annotations, while `&A`, `&A?`, `[&A]`, and `fun(): &A` are valid.

## Creating attachments

An attachment is created using an `attach` expression, where the attachment is both initialized and attached to the base value in a single operation. Attachments are not first-class values; they cannot exist independently of a base value, nor can they be moved around on their own. This means that an `attach` expression is the only place in which an attachment constructor can be called. Tightly coupling the creation and the attaching of attachment values helps to make reasoning about attachments simpler for the user. Also for this reason, resource attachments do not need an explicit `<-` move operator when they appear in an `attach` expression. ->//

An attach expression consists of the `attach` keyword, a constructor call for the attachment value, the `to` keyword, and an expression that evaluates to the base value for that attachment. Any arguments required by the attachment's initializer are provided in its constructor call:

`   access(all)    resource R {}        access(all)    attachment A for R {    init(x: Int) {    //...    }    }        // ...    let r <- create R()    let r2 <- attach A(x: 3) to <-r            `

The expression on the right-hand side of the `to` keyword must evaluate to a composite value whose type is a subtype of the attachment's base, and is evaluated before the call to the constructor on the left side of `to`. This means that the `base` value is available inside of the attachment's initializer, but it is important to note that the attachment being created will not be accessible on the `base` (see [accessing attachments](https://cadence-lang.org/docs/language/attachments#accessing-attachments) below) until after the constructor finishes executing:

``   access(all)    resource interface I {}        access(all)    resource R: I {}        access(all)    attachment A for I {}        // ...    let r <- create R() // has type @R    let r2 <- attach A() to <-r // ok, because `R` is a subtype of `I`, still has type @R            ``

Because attachments are stored on their bases by type, there can only be one attachment of each type present on a value at a time. Cadence will raise a runtime error if a user attempts to add an attachment to a value when one already exists on that value. The type returned by the `attach` expression is the same type as the expression on the right-hand side of the `to`; attaching an attachment to a value does not change its type.

## Accessing attachments

Attachments are accessed on composites via type-indexing: composite values function like a dictionary where the keys are types and the values are attachments. So, given a composite value `v`, one can look up the attachment named `A` on `v` using an indexing syntax:

``   let a = v[A] // has type `&A?`            ``

This syntax requires that `A` is a nominal attachment type, and that `v` has a composite type that is a subtype of `A`'s declared base type. As mentioned above, attachments are not first-class values, so this indexing returns a reference to the attachment on `v`, rather than the attachment itself. If the attachment with the given type does not exist on `v`, this expression returns `nil`.

The set of entitlements to which the result of an attachment access is authorized is the same as the set of entitlements to which the base value is authorized. So, for example, given the following definition for `A`:

`   entitlement E    entitlement F        resource R {    access(E)    fun foo() {    // ...    }        access(F)    fun bar() {    // ...    }    }        attachment A for R {    access(E | F)    fun qux() {    // ...    }    }        // ...        let a = v[A]!            `

When `v` has type `&R`, the resulting type of `a` will be an unauthorized `&A`. Contrarily, if `v` has type `auth(E) &R`, then the type of `a` will be authorized to the same: `auth(E) &A`. Finally, when `v` is not a reference (i.e., an owned value of type `R`), then `a` will be "fully entitled" to `A`; it will be granted all the entitlements mentioned by `A`, i.e., in this case, it will have type `auth(E, F) &A`.

This is roughly equivalent to the behavior of the `Identity` [entitlement mapping](https://cadence-lang.org/docs/language/access-control#entitlement-mappings); indeed, attachments can be thought of as being `Identity`-mapped fields on their base value.

## Removing attachments

Attachments can be removed from a value with a `remove` statement. The statement consists of the `remove` keyword, the nominal type for the attachment to be removed, the `from` keyword, and the value from which the attachment is meant to be removed.

The value on the right-hand side of `from` must be a composite value whose type is a subtype of the attachment type's declared base.

For example, to remove an `A` attachment from some resource `r` whose type supports that attachment:

`   remove A from r            `

After the statement executes, the composite value on the right-hand side of `from` will no longer contain the attachment. If the value does not contain the attachment that appears after the `remove` keyword, this statement has no effect.

Attachments can be removed from a type in any order, so developers should take care not to design any attachments that rely on specific behaviors of other attachments, as there is no requirement that an attachment depend on another or that a type has a given attachment when another attachment is present.

If a resource containing attachments is `destroy`ed, all of its attachments will be `destroy`ed in an arbitrary order.

## Attachment iteration

Attachments can be iterated over using the `forEachAttachment` function, a built-in function provided on types which support attachments. The signature is as follows:

`   // for a struct    fun forEachAttachment(fun(&AnyStructAttachment)){}    // for a resource    fun forEachAttachment(fun(&AnyResourceAttachment)){}            `

The function takes a single argument, a callback function that accepts a reference to an attachment of the appropriate type. The callback function is called for each attachment present on the value, in an unspecified order.

For example, to iterate over all attachments on a resource `r`:

`   r.forEachAttachment(fun(attachmentRef: &AnyResourceAttachment) {    // Do something with each attachment    })            `


# Contracts

A contract is a collection of type definitions, data (its state), and code (its functions) that is stored in the contract storage area of an account.

Contracts also:

- are where all composite types' interfaces for these types must be defined. Therefore, an object of one of these types cannot exist without having been defined in a deployed Cadence contract.
- can be deployed to accounts, updated, and removed from accounts using the `contracts` object of [authorized accounts](https://cadence-lang.org/docs/language/accounts/). See the [account contracts](https://cadence-lang.org/docs/language/contracts#accountcontracts) section below for more information about these operations.
- are types. They are similar to composite types, but are stored differently than structs or resources and cannot be used as values, copied, or moved like resources or structs.

Contracts stay in an account's contract storage area and can only be added, updated, or removed by the account owner with special commands.

Contracts are declared using the `contract` keyword. The keyword is followed by the name of the contract:

`   access(all)    contract SomeContract {    // ...    }            `

Contracts cannot be nested in each other:

`   access(all)    contract Invalid {        // Invalid: Contracts cannot be nested in any other type.    //    access(all)    contract Nested {    // ...    }    }            `

One of the simplest forms of a contract is one with a state field, a function, and an initializer that initializes the field:

`   access(all)    contract HelloWorld {        // Declare a stored state field in HelloWorld    //    access(all)    let greeting: String        // Declare a function that can be called by anyone    // who imports the contract    //    access(all)    fun hello(): String {    return self.greeting    }        init() {    self.greeting = "Hello World!"    }    }            `

Transactions and other contracts can interact with contracts by importing them at the beginning of a transaction or contract definition.

Anyone can call the above contract's `hello` function by importing the contract from the account it was deployed to and using the imported object to call the hello function:

`   import HelloWorld from 0x42        // Invalid: The contract does not know where hello comes from    //    log(hello()) // Error        // Valid: Using the imported contract object to call the hello    // function    //    log(HelloWorld.hello()) // prints "Hello World!"        // Valid: Using the imported contract object to read the greeting    // field    log(HelloWorld.greeting) // prints "Hello World!"        // Invalid: Cannot call the init function after the contract has been created.    //    HelloWorld.init() // Error            `

There can be any number of contracts per account, and they can include an arbitrary amount of data. This means that a contract can have any number of fields, functions, and type definitions, but they must be in the contract and not another top-level definition:

`   // Invalid: Top-level declarations are restricted to only be contracts    // or contract interfaces. Therefore, all of these would be invalid    // if they were deployed to the account contract storage and    // the deployment would be rejected.    //    access(all)    resource Vault {}        access(all)    struct Hat {}        access(all)    fun helloWorld(): String {}    let num: Int            `

Another important feature of contracts is that instances of resources and events that are declared in contracts can only be created/emitted within functions or types that are declared in the same contract.

It is not possible to create instances of resources and events outside the contract.

The following contract defines a resource interface `Receiver`, and a resource `Vault` that implements that interface. Due to how this example is written, there is no way to create this resource, so it would not be usable:

`   // Valid    access(all)    contract FungibleToken {        access(all)    resource interface Receiver {        access(all)    balance: Int        access(all)    fun deposit(from: @{Receiver}) {    pre {    from.balance > 0:    "Deposit balance needs to be positive!"    }    post {    self.balance == before(self.balance) + before(from.balance):    "Incorrect amount removed"    }    }    }        access(all)    resource Vault: Receiver {        // keeps track of the total balance of the accounts tokens    access(all)    var balance: Int        init(balance: Int) {    self.balance = balance    }        // withdraw subtracts amount from the vaults balance and    // returns a vault object with the subtracted balance    access(all)    fun withdraw(amount: Int): @Vault {    self.balance = self.balance - amount    return <-create Vault(balance: amount)    }    ->//    // deposit takes a vault object as a parameter and adds    // its balance to the balance of the Account's vault, then    // destroys the sent vault because its balance has been consumed    access(all)    fun deposit(from: @{Receiver}) {    self.balance = self.balance + from.balance    destroy from    }    }    }            ` 

If a user tried to run a transaction that created an instance of the `Vault` type, the type checker would not allow it because only code in the `FungibleToken` contract can create new `Vault`s:

``   import FungibleToken from 0x42        // Invalid: Cannot create an instance of the `Vault` type outside    // of the contract that defines `Vault`    //    let newVault <- create FungibleToken.Vault(balance: 10)            `` ->//

## Account access

Contracts can access the account they are deployed to — contracts have the implicit field named `account`, which is only accessible within the contract:

``   let account: auth(Storage, Keys, Contracts, Inbox, Capabilities) &Account`,            ``

The account reference is fully entitled, so it grants access to the account's storage, keys, contracts, and so on.

For example, the following gives the contract the ability to write to the account's storage when the contract is initialized:

`   init(balance: Int) {    self.account.storage.save(    <-create Vault(balance: 1000),    to: /storage/initialVault    )    }            ` ->//

## Contract interfaces

Like composite types, contracts can have [interfaces](https://cadence-lang.org/docs/language/interfaces) that specify rules about their behavior, their types, and the behavior of their types.

Contract interfaces have to be declared globally. Declarations cannot be nested in other types.

Contract interfaces may not declare concrete types (other than events), but they can declare interfaces. If a contract interface declares an interface type, the implementing contract does not have to also define that interface. They can refer to that nested interface by saying `{ContractInterfaceName}.{NestedInterfaceName}`:

``   // Declare a contract interface that declares an interface and a resource    // that needs to implement that interface in the contract implementation.    //    access(all)    contract interface InterfaceExample {        // Implementations do not need to declare this    // They refer to it as InterfaceExample.NestedInterface    //    access(all)    resource interface NestedInterface {}        // Implementations must declare this type    //    access(all)    resource Composite: NestedInterface {}    }        access(all)    contract ExampleContract: InterfaceExample {        // The contract doesn't need to redeclare the `NestedInterface` interface    // because it is already declared in the contract interface        // The resource has to refer to the resource interface using the name    // of the contract interface to access it    //    access(all)    resource Composite: InterfaceExample.NestedInterface {    }    }            ``

## `Account.Contracts`

An account exposes its inbox through the `contracts` field, which has the type `Account.Contracts`:

``   access(all)    struct Contracts {        /// The names of all contracts deployed in the account.    access(all)    let names: [String]        /// Returns the deployed contract for the contract/contract interface with the given name in the account, if any.    ///    /// Returns nil if no contract/contract interface with the given name exists in the account.    access(all)    view fun get(name: String): DeployedContract?        /// Returns a reference of the given type to the contract with the given name in the account, if any.    ///    /// Returns nil if no contract with the given name exists in the account,    /// or if the contract does not conform to the given type.    access(all)    view fun borrow<T: &Any>(name: String): T?        /// Adds the given contract to the account.    ///    /// The `code` parameter is the UTF-8 encoded representation of the source code.    /// The code must contain exactly one contract or contract interface,    /// which must have the same name as the `name` parameter.    ///    /// All additional arguments that are given are passed further to the initializer    /// of the contract that is being deployed.    ///    /// The function fails if a contract/contract interface with the given name already exists in the account,    /// if the given code does not declare exactly one contract or contract interface,    /// or if the given name does not match the name of the contract/contract interface declaration in the code.    ///    /// Returns the deployed contract.    access(Contracts | AddContract)    fun add(    name: String,    code: [UInt8]    ): DeployedContract        /// Updates the code for the contract/contract interface in the account.    ///    /// The `code` parameter is the UTF-8 encoded representation of the source code.    /// The code must contain exactly one contract or contract interface,    /// which must have the same name as the `name` parameter.    ///    /// Does **not** run the initializer of the contract/contract interface again.    /// The contract instance in the world state stays as is.    ///    /// Fails if no contract/contract interface with the given name exists in the account,    /// if the given code does not declare exactly one contract or contract interface,    /// or if the given name does not match the name of the contract/contract interface declaration in the code.    ///    /// Returns the deployed contract for the updated contract.    access(Contracts | UpdateContract)    fun update(name: String, code: [UInt8]): DeployedContract        /// Removes the contract/contract interface from the account which has the given name, if any.    ///    /// Returns the removed deployed contract, if any.    ///    /// Returns nil if no contract/contract interface with the given name exists in the account.    access(Contracts | RemoveContract)    fun remove(name: String): DeployedContract?    }        entitlement Contracts        entitlement AddContract    entitlement UpdateContract    entitlement RemoveContract            ``

## Deployed contract

Accounts store _deployed contracts_, which is the code of the contract:

``   access(all)    struct DeployedContract {    /// The address of the account where the contract is deployed at.    access(all)    let address: Address        /// The name of the contract.    access(all)    let name: String        /// The code of the contract.    access(all)    let code: [UInt8]        /// Returns an array of `Type` objects representing all the public type declarations in this contract    /// (e.g. structs, resources, enums).    ///    /// For example, given a contract    /// ```    /// contract Foo {    ///    /// access(all)    /// struct Bar {...}    ///    /// access(all)    /// resource Qux {...}    /// }    /// ```    /// then `.publicTypes()` will return an array equivalent to the expression `[Type<Bar>(), Type<Qux>()]`    access(all)    view fun publicTypes(): [Type]    }            ``

note

This example is _type only_, which provides information about a deployed contract. it is not the contract instance, which is the result of importing a contract.

## Getting a deployed contract

The function `contracts.get` retrieves a deployed contract:

`   access(all)    view fun get(name: String): DeployedContract?            `

The function returns the [deployed contract](https://cadence-lang.org/docs/language/contracts#deployed-contract) with the given name, if any. If no contract with the given name exists in the account, the function returns `nil`.

For example, assuming that an account has a contract named `Test` deployed to it, the contract can be retrieved as follows:

`   let account = getAccount(0x1)    let contract = account.contracts.get(name: "Test")            `

## Borrowing a deployed contract

Contracts can be _borrowed_ to effectively perform a dynamic import dependent on a specific execution path.

This is in contrast to a typical import statement (e.g., `import T from 0x1`), which statically imports a contract.

The `contracts.borrow` function obtains a reference to a contract instance:

`   access(all)    view fun borrow<T: &Any>(name: String): T?            `

The functions returns a reference to the contract instance stored with that name on the account, if it exists, and if it has the provided type `T`. If no contract with the given name exists in the account, the function returns `nil`.

For example, assuming that a contract named `Test`, which conforms to the `TestInterface` interface is deployed to an account, a reference to the contract instance can be obtained as follows:

`   let account = getAccount(0x1)    let contract: &TestInterface = account.contracts.borrow<&TestInterface>(name: "Test")            `

This is similar to the import statement:

`   import Test from 0x1            `

## Deploying a new contract

The `contracts.add` function deploys a new contract to an account:

`   access(Contracts | AddContract)    fun add(    name: String,    code: [UInt8],    ... contractInitializerArguments    ): DeployedContract            `

Calling the `add` function requires access to an account via a reference that is authorized with the coarse-grained `Contracts` entitlement (`auth(Contracts) &Account`), or the fine-grained `AddContract` entitlement (`auth(AddContract) &Account`).

The `code` parameter is the UTF-8 encoded representation of the source code. The code must contain exactly one contract or contract interface, which must have the same name as the `name` parameter.

The `add` function passes all extra arguments of the call (`contractInitializerArguments`) to the initializer of the contract.

If a contract with the given name already exists in the account, if the given code does not declare exactly one contract or contract interface, or if the given name does not match the name of the contract declaration in the code, then the function aborts the program.

When the deployment succeeds, the function returns the [deployed contract](https://cadence-lang.org/docs/language/contracts#deployed-contract).

For example, assume the following contract code should be deployed:

`   access(all)    contract Test {        access(all)    let message: String        init(message: String) {    self.message = message    }    }            `

The contract can then be deployed as follows:

`   transaction(code: String) {    prepare(signer: auth(AddContract) &Account) {    signer.contracts.add(    name: "Test",    code: code.utf8,    message: "I'm a new contract in an existing account"    )    }    }            `

## Updating a deployed contract

The `contracts.update` function updates the code of an existing contract:

`   access(Contracts | UpdateContract)    fun update(name: String, code: [UInt8]): DeployedContract            `

Calling the `update` function requires access to an account via a reference that is authorized with the coarse-grained `Contracts` entitlement (`auth(Contracts) &Account`), or the fine-grained `UpdateContract` entitlement (`auth(UpdateContract) &Account`).

The `code` parameter is the UTF-8 encoded representation of the source code. The code must contain exactly one contract or contract interface, which must have the same name as the `name` parameter.

If no contract with the given name exists in the account, if the given code does not declare exactly one contract or contract interface, or if the given name does not match the name of the contract declaration in the code, then the function aborts the program.

When the update succeeds, the function returns the [deployed contract](https://cadence-lang.org/docs/language/contracts#deployed-contract).

warning

The `update` function does **not** run the initializer of the contract again.

Updating a contract does **not** change the contract instance and its existing stored data. A contract update only changes the code of a contract.

It is only possible to update contracts in ways that keep data consistency. [Certain restrictions apply](https://cadence-lang.org/docs/language/contract-updatability).

For example, assume that a contract named `Test` is already deployed to the account, and it should be updated with the following contract code:

`   access(all)    contract Test {        access(all)    let message: String        init(message: String) {    self.message = message    }    }            `

The contract can be updated as follows:

`   transaction(code: String) {    prepare(signer: auth(UpdateContract) &Account) {    signer.contracts.update(    name: "Test",    code: code    )    }    }            `

## Removing a deployed contract

The `contracts.remove` function removes a deployed contract from an account:

`   access(Contracts | RemoveContract)    fun remove(name: String): DeployedContract?            `

Calling the `remove` function requires access to an account via a reference that is authorized with the coarse-grained `Contracts` entitlement (`auth(Contracts) &Account`), or the fine-grained `RemoveContract` entitlement (`auth(RemoveContract) &Account`).

The function removes the contract from the account that has the given name and returns it. If no contract with the given name exists in the account, the function returns `nil`.

For example, assuming that a contract named `Test` is deployed to an account, the contract can be removed as follows:

`   transaction(code: String) {    prepare(signer: auth(RemoveContract) &Account) {    signer.contracts.remove(name: "Test",)    }    }            `

# Contract Updatability

A [contract](https://cadence-lang.org/docs/language/contracts) is a collection of data (its state) and code (its functions) that lives in the contract storage area of an account. When a contract is _updated_, it is important to make sure that the changes introduced do not lead to runtime inconsistencies for already stored data.

Cadence maintains this state consistency by validating the contracts and all their components before an update.

## Validation goals

The contract update validation ensures that:

- Stored data doesn't change its meaning when a contract is updated.
- Decoding and using stored data does not lead to runtime crashes.
    - For example, it is invalid to add a field because the existing stored data won't have the new field.
    - Loading the existing data will result in garbage/missing values for such fields.
    - A static check of the access of the field would be valid, but the interpreter would crash when accessing the field because the field has a missing/garbage value.

However, it does **not** ensure any program that imports the updated contract stays valid. For example, an updated contract may remove an existing field or may change a function signature. In this case, any program that uses that field/function will get semantic errors.

## Updating a contract

Changes to contracts can be introduced by adding new contracts, removing existing contracts, or updating existing contracts. However, some of these changes may lead to data inconsistencies as stated above.

**Valid changes**

- Adding a new contract is valid.
- Removing a contract/contract-interface that doesn't have enum declarations is valid.
- Updating a contract is valid under the restrictions described in the following sections.

**Invalid changes**

- Removing a contract/contract-interface that contains enum declarations is not valid.
    - Removing a contract allows adding a new contract with the same name.
    - The new contract could potentially have enum declarations with the same names as in the old contract, but with different structures.
    - This could change the meaning of the already stored values of those enum types.

A contract may consist of fields and other declarations such as composite types, functions, constructors, and so on. When an existing contract is updated, all of its inner declarations are also validated.

### Contract fields

When a contract is deployed, the fields of the contract are stored in an account's contract storage. Changing the fields of a contract only changes the way the program treats the data, but does not change the already-stored data itself, which could potentially result in runtime inconsistencies as mentioned in the previous section.

See [Fields](https://cadence-lang.org/docs/language/contract-updatability#fields) for any possible updates that can be made to the fields, and the restrictions imposed on changing the fields of a contract.

### Nested declarations

Contracts can have nested composite type declarations such as structs, resources, interfaces, and enums. When a contract is updated, its nested declarations are checked because:

- They can be used as type annotations for the fields of the same contract, directly or indirectly.
- Any third-party contract can import the types defined in this contract and use them as type annotations.
- Hence, changing the type definition is the same as changing the type annotation of such a field (which is also invalid, as described in the [Fields](https://cadence-lang.org/docs/language/contract-updatability#fields) section below).

Changes that can be performed on the nested declarations and the update restrictions are described in the following sections:

- [Structs, resources, and interfaces](https://cadence-lang.org/docs/language/contract-updatability#structs-resources-and-interfaces)
- [Enums](https://cadence-lang.org/docs/language/contract-updatability#enums)
- [Functions](https://cadence-lang.org/docs/language/contract-updatability#functions)
- [Events](https://cadence-lang.org/docs/language/contract-updatability#events)
- [Constructors](https://cadence-lang.org/docs/language/contract-updatability#constructors)

## Fields

A field may belong to a contract, struct, resource, or interface:

**Valid changes**

- Removing a field is valid
    
    `   // Existing contract        access(all)    contract Foo {        access(all)    var a: String        access(all)    var b: Int    }        // Updated contract        access(all)    contract Foo {    access(all)    var a: String    }            `
    
    - It leaves data for the removed field unused at the storage, as it is no longer accessible.
    - However, it does not cause any runtime crashes.
- Changing the order of fields is valid.
    
    `   // Existing contract        access(all)    contract Foo {        access(all)    var a: String        access(all)    var b: Int    }        // Updated contract        access(all)    contract Foo {        access(all)    var b: Int        access(all)    var a: String    }            `
    
- Changing the access modifier of a field is valid.
    
    `   // Existing contract        access(all)    contract Foo {    access(all)    var a: String    }        // Updated contract        access(all)    contract Foo {    access(self)    var a: String // access modifier changed to 'access(self)'    }            `
    

**Invalid changes**

- Adding a new field is not valid:
    
    `   // Existing contract        access(all)    contract Foo {    access(all)    var a: String    }        // Updated contract        access(all)    contract Foo {        access(all)    var a: String        access(all)    var b: Int // Invalid new field    }            `
    
    - The initializer of a contract only runs once, when the contract is deployed for the first time. It does not rerun when the contract is updated. However, it is still required to be present in the updated contract to satisfy type checks.
    - Thus, the stored data won't have the new field, as the initializations for the newly added fields do not get executed.
    - Decoding stored data will result in garbage or missing values for such fields.
- Changing the type of an existing field is not valid.
    
    `   // Existing contract        access(all)    contract Foo {        access(all)    var a: String    }        // Updated contract        access(all)    contract Foo {        access(all)    var a: Int // Invalid type change    }            `
    
    - In an already stored contract, the field `a` would have a value of type `String`.
    - Changing the type of the field `a` to `Int` would make the runtime read the already stored `String` value as an `Int`, which will result in deserialization errors.
    - Changing the field type to a subtype/supertype of the existing type is also not valid, as it would also potentially cause issues while decoding/encoding.
        - For example: changing an `Int64` field to `Int8` — Stored field could have a numeric value`624`, which exceeds the value space for `Int8`.
        - However, this is a limitation in the current implementation; future versions of Cadence may support changing the type of field to a subtype by providing means to migrate existing fields.

## Structs, resources, and interfaces

**Valid changes**

- Adding a new struct, resource, or interface is valid.
- Adding an interface conformance to a struct/resource is valid, since the stored data only stores concrete type/value, but doesn't store the conformance info:
    
    `   // Existing struct        access(all)    struct Foo {    }        // Updated struct        access(all)    struct Foo: T {    }            `
    
    - However, if adding a conformance also requires changing the existing structure (e.g., adding a new field that is enforced by the new conformance), then the other restriction(such as [restrictions on fields](https://cadence-lang.org/docs/language/contract-updatability#fields)) may prevent performing such an update.

**Invalid changes**

- Removing an existing declaration is not valid.
    - Removing a declaration allows adding a new declaration with the same name, but with a different structure.
    - Any program that uses stored data belonging to that type would face inconsistencies.
- Renaming a declaration is not valid. It can have the same effect as removing an existing declaration and adding a new one.
- Changing the type of declaration is not valid (i.e., changing from a struct to an interface, and vise versa).
    
    `   // Existing struct        access(all)    struct Foo {    }        // Changed to a struct interface        access(all)    struct interface Foo { // Invalid type declaration change    }            `
    
- Removing an interface conformance of a struct/resource is not valid.
    
    `   // Existing struct        access(all)    struct Foo: T {    }        // Updated struct        access(all)    struct Foo {    }            `
    
    - Otherwise, types that used to conform to an interface would no longer conform to that interface, which would lead to [type safety](https://cadence-lang.org/docs/language/types-and-type-system/type-safety) issues at runtime.

### Updating members

Similar to contracts, the composite declarations structs, resources, and interfaces can also have fields and other nested declarations as its member. Updating such a composite declaration would also include updating all of its members.

The following sections describe the restrictions imposed on updating the members of a struct, resource, or interface:

- [Fields](https://cadence-lang.org/docs/language/contract-updatability#fields)
- [Enums](https://cadence-lang.org/docs/language/contract-updatability#enums)
- [Functions](https://cadence-lang.org/docs/language/contract-updatability#functions)
- [Constructors](https://cadence-lang.org/docs/language/contract-updatability#constructors)

## Enums

**Valid changes**

- Adding a new enum declaration is valid.

**Invalid changes**

- Removing an existing enum declaration is invalid.
    - Otherwise, it is possible to remove an existing enum and add a new enum declaration with the same name, but with a different structure.
    - The new structure could potentially have incompatible changes (such as changed types, changed enum-cases, and so on).
- Changing the name is invalid, as it is equivalent to removing an existing enum and adding a new one.
- Changing the raw type is invalid:
    
    ``   // Existing enum with `Int` raw type        access(all)    enum Color: Int {        access(all)    case RED        access(all)    case BLUE    }        // Updated enum with `UInt8` raw type        access(all)    enum Color: UInt8 { // Invalid change of raw type        access(all)    case RED        access(all)    case BLUE    }            ``
    
    - When the enum value is stored, the raw value associated with the enum case gets stored.
    - If the type is changed, then deserializing could fail if the already stored values are not in the same value space as the updated type.

### Updating enum cases

Enums consist of enum-case declarations, and updating an enum may also include changing the enum's cases as well. Enum cases are represented using their raw value at the Cadence interpreter and runtime. Hence, any change that causes an enum case to change its raw value is not permitted. Otherwise, a changed raw value could cause an already stored enum value to have a different meaning than what it originally was (type confusion).

**Valid changes**

- Adding an enum case at the end of the existing enum cases is valid:
    
    `   // Existing enum        access(all)    enum Color: Int {        access(all)    case RED        access(all)    case BLUE    }        // Updated enum        access(all)    enum Color: Int {        access(all)    case RED        access(all)    case BLUE        access(all)    case GREEN // valid new enum-case at the bottom    }            `
    

**Invalid changes**

- Adding an enum-case at the top or in the middle of the existing enum cases is invalid:
    
    `   // Existing enum        access(all)    enum Color: Int {        access(all)    case RED        access(all)    case BLUE    }        // Updated enum        access(all)    enum Color: Int {        access(all)    case RED        access(all)    case GREEN // invalid new enum-case in the middle        access(all)    case BLUE    }            `
    
- Changing the name of an enum case is invalid.
    
    `   // Existing enum        access(all)    enum Color: Int {        access(all)    case RED        access(all)    case BLUE    }        // Updated enum        access(all)    enum Color: Int {        access(all)    case RED        access(all)    case GREEN // invalid change of names    }            `
    
    - Previously stored raw values for `Color.BLUE` now represents `Color.GREEN` (i.e., the stored values have changed their meaning, and hence not a valid change).
    - Similarly, it is possible to add a new enum with the old name `BLUE`, which gets a new raw value. Then, the same enum case `Color.BLUE` may have used two raw values at runtime, before and after the change, which is also invalid.
- Removing the enum case is invalid. Removing allows one to add and remove an enum case, which has the same effect as renaming:
    
    ``   // Existing enum        access(all)    enum Color: Int {        access(all)    case RED        access(all)    case BLUE    }        // Updated enum        access(all)    enum Color: Int {        access(all)    case RED        // invalid removal of `case BLUE`    }            ``
    
- Changing the order of enum cases is not permitted.
    
    `   // Existing enum        access(all)    enum Color: Int {        access(all)    case RED        access(all)    case BLUE    }        // Updated enum        access(all)    enum Color: UInt8 {        access(all)    case BLUE // invalid change of order        access(all)    case RED    }            `
    
    - The raw value of an enum is implicit and corresponds to the defined order.
    - Changing the order of enum-cases has the same effect as changing the raw value, which could cause storage inconsistencies and type-confusions as described earlier.

## Functions

Adding, changing, and deleting a function definition is always valid, as function definitions are never stored as data (function definitions are part of the code, but not data).

- Adding a function is valid.
- Deleting a function is valid.
- Changing a function signature (parameters, return types) is valid.
- Changing a function body is valid.
- Changing the access modifiers is valid.

However, changing a _function type_ may or may not be valid, depending on where it is used: if a function type is used in the type annotation of a composite type field (direct or indirect), then changing the function type signature is the same as changing the type annotation of that field (which is invalid).

## Events

Events are not stored onchain. Any changes made to events have no impact on the stored data. Hence, adding, removing, and modifying events in a contract is valid.

## Constructors

Similar to functions, constructors are also not stored. Hence, any changes to constructors are valid.

## Imports

A contract may import declarations (types, functions, variables, and so on) from other programs. These imported programs are already validated at the time of their deployment. Hence, there is no need to validate any declaration every time they are imported.

## The `#removedType` pragma

Under normal circumstances, it is not valid to remove a type declaration, whether a composite or an interface. However, a special pragma can be used when this is necessary to enable composite declarations to be _tombstoned_, removing them from a contract and preventing any declarations from being re-added with the same name. This pragma cannot be used with interfaces.

To use this pragma, simply add a `#removedType(T)` line to the contract containing the type `T` you want to remove, at the same scope as the declaration of `T`.

For example, to remove a resource definition `R` defined like so:

`   access(all) contract Foo {        access(all) resource R {    // definition of R ...    }        // other stuff ...    }            `

change the contract to:

`   access(all) contract Foo {        #removedType(R)        // other stuff ...    }            `

This prevents any type named `R` from ever being declared again as a nested declaration in `Foo`, preventing the security issues normally posed by removing a type. Specifically, when a `#removedType(T)` pragma is present at a certain scope level in a contract, no new type named `T` can be added at that scope. Additionally, once added, a `#removedType` pragma can never be removed, as this would allow circumventing the above restriction.

Please note that this pragma's behavior is not necessarily final and is subject to change.

# Transactions

Transactions are objects that are signed with keys of one or more [accounts](https://cadence-lang.org/docs/language/accounts/) and are sent to the chain to interact with it and perform state changes.

Transactions can [import](https://cadence-lang.org/docs/language/imports) any number of types from any account using the import syntax:

`   import FungibleToken from 0x01            `

A transaction is declared using the `transaction` keyword and its contents are contained in curly braces.

The body of the transaction can declare local variables that are valid throughout the whole of the transaction:

`   transaction {    // transaction contents    let localVar: Int        // ...    }            `

## Transaction parameters

Transactions can have parameters and they are declared like function parameters. The arguments for the transaction are passed along with the transaction.

Transaction parameters are accessible throughout the whole of the transaction:

``   // Declare a transaction which has one parameter named `amount`    // that has the type `UFix64`    //    transaction(amount: UFix64) {        }            ``

## Transaction phases

Transactions are executed in four phases: preparation, pre-conditions, execution, and post-conditions, in that order. The preparation and execution phases are blocks of code that execute sequentially. The pre-conditions and post-condition are just like [conditions in functions](https://cadence-lang.org/docs/language/pre-and-post-conditions#function-pre-conditions-and-post-conditions).

The following empty Cadence transaction has no logic, but demonstrates the syntax for each phase, in the order these phases are executed:

`   transaction {    prepare(signer1: &Account, signer2: &Account) {    // ...    }        pre {    // ...    }        execute {    // ...    }        post {    // ...    }    }            `

Although optional, each phase serves a specific purpose when executing a transaction. It's recommended that developers use these phases when creating their transactions. These phases **must** be defined in this order.

### Prepare phase

The `prepare` phase is used when the transaction needs access to the accounts that signed (authorized) the transaction.

Access to the signing accounts is **only possible inside the `prepare` phase**.

For each signer of the transaction, a [reference](https://cadence-lang.org/docs/language/references) to the signing account is passed as an argument to the `prepare` phase. The reference may be authorized, requesting certain [access to the account](https://cadence-lang.org/docs/language/accounts/#accessing-an-account).

For example, if the transaction has two signers, the prepare **must** have two parameters of type `&Account`:

`   prepare(signer1: &Account, signer2: &Account) {    // ...    }            `

For instance, to request write access to an [account's storage](https://cadence-lang.org/docs/language/accounts/storage), the transaction can request an authorized reference:

`   prepare(signer: auth(Storage) &Account) {    // ...    }            `

As a best practice, only use the `prepare` phase to define and execute logic that requires [write access](https://cadence-lang.org/docs/language/accounts/#write-operations) to the signing accounts, and _move all other logic elsewhere_.

Modifications to accounts can have significant implications, so keep this phase clear of unrelated logic. This ensures that users can easily read and understand the logic of the transaction and how it affects their account.

The prepare phase serves a similar purpose as the [initializer of a composite](https://cadence-lang.org/docs/language/types-and-type-system/composite-types#composite-type-fields).

For example, if a transaction performs a token transfer, put the withdrawal in the `prepare` phase since it requires access to the account storage, but perform the deposit in the `execute` phase.

### Pre-conditions

Pre-conditions are optional and are declared in a `pre` block and are executed after the `prepare` phase. For example, a pre-condition might check the balance before transferring tokens between accounts:

`   pre {    sendingAccount.balance > 0    }            `

If any of the pre-conditions fail, then the remainder of the transaction is not executed and it is completely reverted.

See [pre-conditions](https://cadence-lang.org/docs/language/pre-and-post-conditions#transaction-pre-conditions) for more information.

### Execute phase

The `execute` block executes the main logic of the transaction. This phase is optional, but it is a best practice to add your main transaction logic in this section so it is explicit.

It is impossible to access the references to the transaction's signing accounts in the `execute` phase:

``   transaction {    prepare(signer: auth(LoadValue) &Account) {}        execute {    // Invalid: Cannot access the `signer` account reference, as it is not in scope    let resource <- signer.storage.load<@Resource>(from: /storage/resource)    destroy resource        // Valid: Can obtain an unauthorized reference to any account    let otherAccount = getAccount(0x3)    }    }            ``

### Post-conditions

Transaction post-conditions are just like [post-conditions of functions](https://cadence-lang.org/docs/language/pre-and-post-conditions#transaction-post-conditions).

Post-conditions are optional and are declared in a `post` block. They are executed after the execution phase and are used to verify that the transaction logic has been executed properly. The block can have zero or more conditions.

For example, a token transfer transaction can ensure that the final balance has a certain value:

`   post {    signer.balance == 30.0: "Balance after transaction is incorrect!"    }            `

If any of the post-conditions fail, then the transaction fails and is completely reverted.

See [post-conditions](https://cadence-lang.org/docs/language/pre-and-post-conditions#transaction-post-conditions) for details.

## Summary

Transactions use phases to make the transaction's code/intent more readable. They provide a way for developers to separate the transaction logic. Transactions also provide a way to check the state prior/after transaction execution, to prevent the transaction from running, or reverting changes made by the transaction if needed.

The following is a brief summary of how to use the `prepare`, `pre`, `execute`, and `post` blocks in a transaction to implement the transaction's phases:

`   transaction {    prepare(signer1: &Account) {    // Access signing accounts of the transaction.    //    // Avoid logic that does not need access to the signing accounts.    //    // The signing accounts can't be accessed anywhere else in the transaction.    }        pre {    // Define conditions that must be true    // for the transaction to execute.    //    // Define the expected state of things    // as they should be before the transaction is executed.    }        execute {    // The main transaction logic goes here, but you can access    // any public information or resources published by any account.    }        post {    // Define conditions that must be true    // for the transaction to be committed.    //    // Define the expected state of things    // as they should be after the transaction executed.    //    // Also used to provide information about what changes    // the transaction will make to the signing accounts.    }    }            `

# Events

Events are special values that can be emitted during the execution of a program.

An event type can be declared with the `event` keyword:

`   event FooEvent(x: Int, y: Int)            `

The syntax of an event declaration is similar to that of a [function declaration](https://cadence-lang.org/docs/language/functions#function-declarations); events contain named parameters, each of which has an optional argument label.

Event parameters may only have a valid event parameter type. Valid types are boolean, string, integer, arrays, and dictionaries of these types, and structures where all fields have a valid event parameter type. Resource types are not allowed, because when a resource is used as an argument, it is moved.

Events can only be declared within a [contract](https://cadence-lang.org/docs/language/contracts) body. Events cannot be declared globally or within resource or struct types.

`   // Invalid: An event cannot be declared globally    //    event GlobalEvent(field: Int)        access(all)    contract Events {    // Event with explicit argument labels    //    event BarEvent(labelA fieldA: Int, labelB fieldB: Int)        // Invalid: A resource type is not allowed to be used    // because it would be moved and lost    //    event ResourceEvent(resourceField: @Vault)    }            `

## Emitting events

To emit an event from a program, use the `emit` statement:

`   access(all)    contract Events {    event FooEvent(x: Int, y: Int)        // Event with argument labels    event BarEvent(labelA fieldA: Int, labelB fieldB: Int)        fun events() {    emit FooEvent(x: 1, y: 2)        // Emit event with explicit argument labels    // Note that the emitted event will only contain the field names,    // not the argument labels used at the invocation site.    emit BarEvent(labelA: 1, labelB: 2)    }    }            `

Please note the following restrictions when emitting events:

- Events can only be invoked in an `emit` statement. This means events cannot be assigned to variables or used as function parameters.
- Events can only be emitted from the location in which they are declared. You can not emit an event from an imported contract from a contract that imports it.

### Destroy events

It's possible to specify a special event to be automatically emitted when a resource is destroyed. See [destroying events](https://cadence-lang.org/docs/language/resources#destroy-events) for more information.

# Core Events

Core events are events emitted directly from the Flow Virtual Machine (FVM). The events have the same name on all networks and do not follow the standard naming (they have no address).

Refer to the [public key section](https://cadence-lang.org/docs/language/crypto#public-keys) for more details on the information provided for account key events.

### Account Created

Event that is emitted when a new account gets created.

Event name: `flow.AccountCreated`

`   access(all)    event AccountCreated(address: Address)            `

|Field|Type|Description|
|---|---|---|
|`address`|`Address`|The address of the newly created account|

### Account Key Added

Event that is emitted when a key gets added to an account.

Event name: `flow.AccountKeyAdded`

`   access(all)    event AccountKeyAdded(    address: Address,    publicKey: PublicKey,    weight: UFix64,    hashAlgorithm: HashAlgorithm,    keyIndex: Int    )            `

|Field|Type|Description|
|---|---|---|
|`address`|`Address`|The address of the account the key is added to|
|`publicKey`|`PublicKey`|The public key added to the account|
|`weight`|`UFix64`|Weight of the new account key|
|`hashAlgorithm`|`HashAlgorithm`|HashAlgorithm of the new account key|
|`keyIndex`|`Int`|Index of the new account key|

### Account Key Removed

Event that is emitted when a key gets removed from an account.

Event name: `flow.AccountKeyRemoved`

`   access(all)    event AccountKeyRemoved(    address: Address,    publicKey: PublicKey    )            `

|Field|Type|Description|
|---|---|---|
|`address`|`Address`|The address of the account the key is removed from|
|`publicKey`|`Int`|Index of public key removed from the account|

### Account Contract Added

Event that is emitted when a contract gets deployed to an account.

Event name: `flow.AccountContractAdded`

`   access(all)    event AccountContractAdded(    address: Address,    codeHash: [UInt8],    contract: String    )            `

|Field|Type|Description|
|---|---|---|
|`address`|`Address`|The address of the account the contract gets deployed to|
|`codeHash`|`[UInt8]`|Hash of the contract source code|
|`contract`|`String`|The name of the contract|

### Account Contract Updated

Event that is emitted when a contract gets updated on an account.

Event name: `flow.AccountContractUpdated`

`   access(all)    event AccountContractUpdated(    address: Address,    codeHash: [UInt8],    contract: String    )            `

|Field|Type|Description|
|---|---|---|
|`address`|`Address`|The address of the account where the updated contract is deployed|
|`codeHash`|`[UInt8]`|Hash of the contract source code|
|`contract`|`String`|The name of the contract|

### Account Contract Removed

Event that is emitted when a contract gets removed from an account.

Event name: `flow.AccountContractRemoved`

`   access(all)    event AccountContractRemoved(    address: Address,    codeHash: [UInt8],    contract: String    )            `

|Field|Type|Description|
|---|---|---|
|`address`|`Address`|The address of the account the contract gets removed from|
|`codeHash`|`[UInt8]`|Hash of the contract source code|
|`contract`|`String`|The name of the contract|

### Inbox Value Published

Event that is emitted when a Capability is published from an account.

Event name: `flow.InboxValuePublished`

`   access(all)    event InboxValuePublished(provider: Address, recipient: Address, name: String, type: Type)            `

|Field|Type|Description|
|---|---|---|
|`provider`|`Address`|The address of the publishing account|
|`recipient`|`Address`|The address of the intended recipient|
|`name`|`String`|The name associated with the published value|
|`type`|`Type`|The type of the published value|

tip

To reduce the potential for spam, we recommend that user agents that display events do not display this event as-is to their users, and allow users to restrict whom they see events from.

### Inbox Value Unpublished

Event that is emitted when a Capability is unpublished from an account.

Event name: `flow.InboxValueUnpublished`

`   access(all)    event InboxValueUnpublished(provider: Address, name: String)            `

|Field|Type|Description|
|---|---|---|
|`provider`|`Address`|The address of the publishing account|
|`name`|`String`|The name associated with the published value|

tip

To reduce the potential for spam, we recommend that user agents that display events do not display this event as-is to their users, and allow users to restrict whom they see events from.

### Inbox Value Claimed

Event that is emitted when a Capability is claimed by an account.

Event name: `flow.InboxValueClaimed`

`   access(all)    event InboxValueClaimed(provider: Address, recipient: Address, name: String)            `

|Field|Type|Description|
|---|---|---|
|`provider`|`Address`|The address of the publishing account|
|`recipient`|`Address`|The address of the claiming recipient|
|`name`|`String`|The name associated with the published value|

tip

To reduce the potential for spam, we recommend that user agents that display events do not display this event as-is to their users, and allow users to restrict whom they see events from.

### Storage Capability Controller Issued

Event that is emitted when a storage capability controller is created and issued to an account.

Event name: `flow.StorageCapabilityControllerIssued`

`   access(all)    event StorageCapabilityControllerIssued(id: UInt64, address: Address, type: Type, path: Path)            `

|Field|Type|Description|
|---|---|---|
|`id`|`UInt64`|The ID of the issued capability controller|
|`address`|`Address`|The address of the account which the controller targets|
|`type`|`Type`|The kind of reference that can be obtained with capabilities from this controller|
|`path`|`Path`|The storage path this controller manages|

### Account Capability Controller Issued

Event that is emitted when an account capability controller is created and issued to an account.

Event name: `flow.AccountCapabilityControllerIssued`

`   access(all)    event AccountCapabilityControllerIssued(id: UInt64, address: Address, type: Type)            `

|Field|Type|Description|
|---|---|---|
|`id`|`UInt64`|The ID of the issued capability controller|
|`address`|`Address`|The address of the account which the controller targets|
|`type`|`Type`|The kind of reference that can be obtained with capabilities from this controller|

### Storage Capability Controller Deleted

Event that is emitted when a storage capability controller is deleted.

Event name: `flow.StorageCapabilityControllerDeleted`

`   access(all)    event StorageCapabilityControllerDeleted(id: UInt64, address: Address)            `

|Field|Type|Description|
|---|---|---|
|`id`|`UInt64`|The ID of the issued capability controller|
|`address`|`Address`|The address of the account which the controller targets|

### Account Capability Controller Deleted

Event that is emitted when an account capability controller is deleted.

Event name: `flow.AccountCapabilityControllerDeleted`

`   access(all)    event AccountCapabilityControllerDeleted(id: UInt64, address: Address)            `

|Field|Type|Description|
|---|---|---|
|`id`|`UInt64`|The ID of the issued capability controller|
|`address`|`Address`|The address of the account which the controller targets|

### Storage Capability Controller Target Changed

Event that is emitted when a storage capability controller's path is changed.

Event name: `flow.StorageCapabilityControllerTargetChanged`

`   access(all)    event StorageCapabilityControllerTargetChanged(id: UInt64, address: Address, path: Path)            `

|Field|Type|Description|
|---|---|---|
|`id`|`UInt64`|The ID of the issued capability controller|
|`address`|`Address`|The address of the account which the controller targets|
|`path`|`Path`|The new path this controller manages|

### Capability Published

Event that is emitted when a capability is published.

Event name: `flow.CapabilityPublished`

`   access(all)    event CapabilityPublished(address: Address, path: Path, capability: Capability)            `

|Field|Type|Description|
|---|---|---|
|`address`|`Address`|The address of the account which the capability targets|
|`path`|`Path`|The path this capability is published at|
|`capability`|`Capability`|The published capability|

### Capability Unpublished

Event that is emitted when a capability is unpublished.

Event name: `flow.CapabilityUnpublished`

`   access(all)    event CapabilityUnpublished(address: Address, path: Path)            `

|Field|Type|Description|
|---|---|---|
|`address`|`Address`|The address of the account which the capability targeted|
|`path`|`Path`|The path this capability was published at|

# Environment Information

## Transaction information

To get the addresses of the signers of a transaction, use the `address` field of each signing `Account` that is passed to the transaction's `prepare` phase.

There is currently no API that allows getting other transaction information. Please let us know if your use-case demands it by requesting this feature in an issue.

## Block information

To get information about a block, the functions `getCurrentBlock` and `getBlock` can be used:

- `   view fun getCurrentBlock(): Block            `
    
    Returns the current block, i.e. the block which contains the currently executed transaction.
    
- `   view fun getBlock(at: UInt64): Block?            `
    
    Returns the block at the given height. If the block exists within the accessible range defined by `flow.DefaultTransactionExpiry - 10` (`590` blocks), it is returned successfully. If the block at the given height does not exist or is outside the default transaction expiration range of `590` blocks below the current sealed block, the function returns `nil`.
    

The `Block` type contains the identifier, height, and timestamp:

`   access(all)    struct Block {    /// The ID of the block.    ///    /// It is essentially the hash of the block.    ///    access(all)    let id: [UInt8; 32]        /// The height of the block.    ///    /// If the blockchain is viewed as a tree with the genesis block at the root,    // the height of a node is the number of edges between the node and the genesis block    ///    access(all)    let height: UInt64        /// The view of the block.    ///    /// It is a detail of the consensus algorithm. It is a monotonically increasing integer    /// and counts rounds in the consensus algorithm. It is reset to zero at each spork.    ///    access(all)    let view: UInt64        /// The timestamp of the block.    ///    /// Unix timestamp of when the proposer claims it constructed the block.    ///    /// NOTE: It is included by the proposer, there are no guarantees on how much the time stamp can deviate from the true time the block was published.    /// Consider observing blocks' status changes off-chain yourself to get a more reliable value.    ///    access(all)    let timestamp: UFix64    }            `

# Crypto

This article provides an overview of the cryptographic primitives and operations available in Cadence.

It covers the supported hash and signature algorithms, the structure and validation of public keys, signature verification processes, and advanced features such as BLS multi-signature aggregation and key lists for multi-signature verification.

## Hash algorithms

The built-in [enumeration](https://cadence-lang.org/docs/language/enumerations) `HashAlgorithm` provides the set of supported hashing algorithms:

`   access(all)    enum HashAlgorithm: UInt8 {    /// SHA2_256 is SHA-2 with a 256-bit digest (also referred to as SHA256).    access(all)    case SHA2_256 = 1        /// SHA2_384 is SHA-2 with a 384-bit digest (also referred to as SHA384).    access(all)    case SHA2_384 = 2        /// SHA3_256 is SHA-3 with a 256-bit digest.    access(all)    case SHA3_256 = 3        /// SHA3_384 is SHA-3 with a 384-bit digest.    access(all)    case SHA3_384 = 4        /// KMAC128_BLS_BLS12_381 is an instance of KECCAK Message Authentication Code (KMAC128) mac algorithm.    /// Although this is a MAC algorithm, KMAC is included in this list as it can be used as a hash    /// when the key is used as a non-public customizer.    /// KMAC128_BLS_BLS12_381 is used in particular as the hashing algorithm for the BLS signature scheme on the curve BLS12-381.    /// It is a customized version of KMAC128 that is compatible with the hashing to curve    /// used in BLS signatures.    /// It is the same hasher used by signatures in the internal Flow protocol.    access(all)    case KMAC128_BLS_BLS12_381 = 5        /// KECCAK_256 is the legacy Keccak algorithm with a 256-bit digest, as per the original submission to the NIST SHA3 competition.    /// KECCAK_256 is different than SHA3 and is used by Ethereum.    access(all)    case KECCAK_256 = 6        /// Returns the hash of the given data    access(all)    view fun hash(_ data: [UInt8]): [UInt8]        /// Returns the hash of the given data and tag    access(all)    view fun hashWithTag(_ data: [UInt8], tag: string): [UInt8]    }            `

The hash algorithms provide two ways to hash input data into digests, `hash` and `hashWithTag`.

## Hashing

`hash` hashes the input data using the chosen hashing algorithm. `KMAC` is the only MAC algorithm on the list and configured with specific parameters (detailed in [KMAC128 for BLS](https://cadence-lang.org/docs/language/crypto#kmac128-for-bls)).

For example, to compute a SHA3-256 digest:

`   let data: [UInt8] = [1, 2, 3]    let digest = HashAlgorithm.SHA3_256.hash(data)            `

## Hashing with a domain tag

`hashWithTag` hashes the input data along with an input tag. It allows instantiating independent hashing functions customized with a domain separation tag (DST). For most of the hashing algorithms, mixing the data with the tag is done by prefixing the data with the tag and hashing the result.

- `SHA2_256`, `SHA2_384`, `SHA3_256`, `SHA3_384`, and `KECCAK_256`: if the tag is non-empty, the hashed message is `bytes(tag) || data`, where `bytes()` is the UTF-8 encoding of the input string, padded with zeros till 32 bytes. Therefore, tags must not exceed 32 bytes. If the tag used is empty, no data prefix is applied, and the hashed message is simply `data` (same as `hash` output).
- `KMAC128_BLS_BLS12_381`: See [KMAC128 for BLS](https://cadence-lang.org/docs/language/crypto#kmac128-for-bls) for details.

### KMAC128 for BLS

`KMAC128_BLS_BLS12_381` is an instance of the cSHAKE-based KMAC128. Although this is a MAC algorithm, KMAC can be used as a hash when the key is used as a non-private customizer. `KMAC128_BLS_BLS12_381` is used in particular as the hashing algorithm for the BLS signature scheme on the curve BLS12-381. It is a customized instance of KMAC128 and is compatible with the hashing to curve used by BLS signatures. It is the same hasher used by the internal Flow protocol, and can be used to verify Flow protocol signatures on Cadence.

To define the MAC instance, `KMAC128(customizer, key, data, length)` is instantiated with the following parameters (as referred to by the NIST [SHA-3 Derived Functions](https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-185.pdf)):

- `customizer` is the UTF-8 encoding of `"H2C"`.
- `key` is the UTF-8 encoding of `"FLOW--V00-CS00-with-BLS_SIG_BLS12381G1_XOF:KMAC128_SSWU_RO_POP_"` when `hash` is used. It includes the input `tag` when `hashWithTag` is used and key becomes the UTF-8 encoding of `"FLOW-" || tag || "-V00-CS00-with-BLS_SIG_BLS12381G1_XOF:KMAC128_SSWU_RO_POP_"`.
- `data` is the input data to hash.
- `length` is 1024 bytes.

## Signature algorithms

The built-in [enumeration](https://cadence-lang.org/docs/language/enumerations) `SignatureAlgorithm` provides the set of supported signature algorithms:

`   access(all)    enum SignatureAlgorithm: UInt8 {    /// ECDSA_P256 is ECDSA on the NIST P-256 curve.    access(all)    case ECDSA_P256 = 1        /// ECDSA_secp256k1 is ECDSA on the secp256k1 curve.    access(all)    case ECDSA_secp256k1 = 2        /// BLS_BLS12_381 is BLS signature scheme on the BLS12-381 curve.    /// The scheme is set-up so that signatures are in G_1 (subgroup of the curve over the prime field)    /// while public keys are in G_2 (subgroup of the curve over the prime field extension).    access(all)    case BLS_BLS12_381 = 3    }            `

## Public keys

`PublicKey` is a built-in structure that represents a cryptographic public key of a signature scheme:

`   access(all)    struct PublicKey {        access(all)    let publicKey: [UInt8]        access(all)    let signatureAlgorithm: SignatureAlgorithm        /// Verifies a signature under the given tag, data and public key.    /// It uses the given hash algorithm to hash the tag and data.    access(all)    view fun verify(    signature: [UInt8],    signedData: [UInt8],    domainSeparationTag: String,    hashAlgorithm: HashAlgorithm    ): Bool        /// Verifies the proof of possession of the private key.    /// This function is only implemented if the signature algorithm    /// of the public key is BLS (BLS_BLS12_381).    /// If called with any other signature algorithm, the program aborts    access(all)    view fun verifyPoP(_ proof: [UInt8]): Bool        // creating a PublicKey is a view operation    access(all)    view init()    }            `

`PublicKey` supports two methods: `verify` and `verifyPoP`. `verify` is the [signature verification](https://cadence-lang.org/docs/language/crypto#signature-verification) function, while `verifyPoP` is covered under [BLS multi-signature](https://cadence-lang.org/docs/language/crypto#proof-of-possession-pop).

### Public key construction

A `PublicKey` can be constructed using the raw key and the signing algorithm:

`   let publicKey = PublicKey(    publicKey: "010203".decodeHex(),    signatureAlgorithm: SignatureAlgorithm.ECDSA_P256    )            `

The raw key value depends on the supported signature scheme:

- `ECDSA_P256` and `ECDSA_secp256k1`: The public key is an uncompressed curve point `(X,Y)`, where `X` and `Y` are two prime field elements. The raw key is represented as `byte (X) || bytes(Y)`, where `||` is the concatenation operation, and `bytes()` is the bytes big-endian encoding left padded by zeros to the byte length of the field prime. The raw public key is 64-bytes long.
    
- `BLS_BLS_12_381`: The public key is a G_2 element (on the curve over the prime field extension). The encoding follows the compressed serialization defined in the [IETF draft-irtf-cfrg-pairing-friendly-curves-08](https://www.ietf.org/archive/id/draft-irtf-cfrg-pairing-friendly-curves-08.html#name-point-serialization-procedu). A public key is 96-bytes long.
    

### Public key validation

A public key is validated at the time of creation. Only valid public keys can be created. The validation of the public key depends on the supported signature scheme:

- `ECDSA_P256` and `ECDSA_secp256k1`: The given `X` and `Y` coordinates are correctly serialized, represent valid prime field elements, and the resulting point is on the correct curve (no subgroup check needed since the cofactor of both supported curves is 1).
    
- `BLS_BLS_12_381`: The given key is correctly serialized following the compressed serialization in [IETF draft-irtf-cfrg-pairing-friendly-curves-08](https://www.ietf.org/archive/id/draft-irtf-cfrg-pairing-friendly-curves-08.html#name-point-serialization-procedu). The coordinates represent valid prime field extension elements. The resulting point is on the curve, and is on the correct subgroup G_2. Note that the point at infinity is accepted and yields the identity public key. This identity key can be useful when aggregating multiple keys.
    

Since the validation happens only at the time of creation, public keys are immutable.

`   publicKey.signatureAlgorithm = SignatureAlgorithm.ECDSA_secp256k1 // Not allowed    publicKey.publicKey = [] // Not allowed        publicKey.publicKey[2] = 4 // No effect            `

Invalid public keys cannot be constructed so public keys are always valid.

### Signature verification

A signature can be verified using the `verify` function of the `PublicKey`:

``   let pk = PublicKey(    publicKey: "96142CE0C5ECD869DC88C8960E286AF1CE1B29F329BA4964213934731E65A1DE480FD43EF123B9633F0A90434C6ACE0A98BB9A999231DB3F477F9D3623A6A4ED".decodeHex(),    signatureAlgorithm: SignatureAlgorithm.ECDSA_P256    )        let signature = "108EF718F153CFDC516D8040ABF2C8CC7AECF37C6F6EF357C31DFE1F7AC79C9D0145D1A2F08A48F1A2489A84C725D6A7AB3E842D9DC5F8FE8E659FFF5982310D".decodeHex()    let message : [UInt8] = [1, 2, 3]        let isValid = pk.verify(    signature: signature,    signedData: message,    domainSeparationTag: "",    hashAlgorithm: HashAlgorithm.SHA2_256    )    // `isValid` is false            ``

The inputs to `verify` depend on the signature scheme used, which are described in the following sections.

**ECDSA (`ECDSA_P256` and `ECDSA_secp256k1`)**

- `signature` expects the couple `(r,s)`. It is serialized as `bytes(r) || bytes(s)`, where `||` is the concatenation operation, and `bytes()` is the bytes big-endian encoding left padded by zeros to the byte-length of the curve order. The signature is 64 bytes long for both curves.
- `signedData` is the arbitrary message to verify the signature against.
- `domainSeparationTag` is the expected domain tag (i.e., the value that a correctly generated signature is expected to use). The domain tag prefixes the message during the signature generation or verification before the hashing step (more details in [`hashWithTag`](https://cadence-lang.org/docs/language/crypto#hashing-with-a-domain-tag)). The tag's purpose is to separate different contexts or domains so that a signature can't be re-used for a different context other than its original one. An application should define its own arbitrary domain tag value to distance its users' signatures from other applications. The application tag should be enforced for valid signature generations and verifications. See [Hashing with a domain tag](https://cadence-lang.org/docs/language/crypto#hashing-with-a-domain-tag) for requirements on the string value.
- `hashAlgorithm` is either `SHA2_256`, `SHA3_256` or `KECCAK_256`. It is the algorithm used to hash the message along with the given tag (see [Hashing with a domain tag](https://cadence-lang.org/docs/language/crypto#hashing-with-a-domain-tag)).

As noted in [`hashWithTag`](https://cadence-lang.org/docs/language/crypto#hashing-with-a-domain-tag) for `SHA2_256`, `SHA3_256`, and `KECCAK_256`, using an empty `tag` results in hashing the input data only. If a signature verification needs to be computed against data without any domain tag, an empty domain tag `""` should be passed.

ECDSA verification is implemented as defined in ANS X9.62 (also referred by [FIPS 186-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf) and [SEC 1, Version 2.0](https://www.secg.org/sec1-v2.pdf)). A valid signature would be generated using the expected `signedData`, `domainSeparationTag`, and `hashAlgorithm` used to verify.

**BLS (`BLS_BLS_12_381`)**

- `signature` expects a G_1 point (on the curve over the prime field). The encoding follows the compressed serialization defined in the [IETF draft-irtf-cfrg-pairing-friendly-curves-08](https://www.ietf.org/archive/id/draft-irtf-cfrg-pairing-friendly-curves-08.html#name-point-serialization-procedu). A signature is 48-bytes long.
- `signedData` is the arbitrary message to verify the signature against.
- `domainSeparationTag` is the expected domain tag (i.e., the value that a correctly generated signature is expected to use). The domain tag is mixed with the message during the signature generation or verification as specified in [KMAC128 for BLS](https://cadence-lang.org/docs/language/crypto#kmac128-for-bls). The tag's purpose is to separate different contexts or domains so that a signature can't be re-used for a different context other than its original one. An application should define its own arbitrary domain tag value to distance its user's signatures from other applications. The application tag should be enforced for valid signature generations and verifications. All string values are valid as tags in BLS (check [KMAC128 for BLS](https://cadence-lang.org/docs/language/crypto#kmac128-for-bls)).
- `hashAlgorithm` only accepts `KMAC128_BLS_BLS12_381`. It is the algorithm used to hash the message along with the given tag (check [KMAC128 for BLS](https://cadence-lang.org/docs/language/crypto#kmac128-for-bls)).

BLS verification performs the necessary membership check on the signature, while the membership check of the public key is performed at the creation of the `PublicKey` object. It is not repeated during the signature verification. In order to prevent equivocation issues, a verification under the identity public key always returns `false`.

The verification uses a hash-to-curve algorithm to hash the `signedData` into a `G_1` point, following the `hash_to_curve` method described in [draft-irtf-cfrg-hash-to-curve-14](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-14#section-3). While KMAC128 is used as a hash-to-field method resulting in two field elements, the mapping to curve is implemented using the [simplified SWU](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-14#section-6.6.3).

A valid signature should be generated using the expected `signedData` and `domainSeparationTag`, as well the same hashing to curve process.

## BLS multi-signature

BLS signature scheme allows efficient multi-signature features. Multiple signatures can be aggregated into a single signature, which can be verified against an aggregated public key. This allows authenticating multiple signers with a single signature verification. While BLS provides multiple aggregation techniques, Cadence supports basic aggregation tools that cover a wide list of use cases. These tools are defined in the built-in `BLS` contract, which does not need to be imported.

### Proof of Possession (PoP)

Multi-signature verification in BLS requires a defense against rogue public-key attacks. Multiple ways are available to protect BLS verification. Cadence provides the PoP of a private key as a defense tool. The PoP of a private key is a BLS signature over the public key itself. The PoP signature follows the same requirements of a BLS signature (detailed in [Signature verification](https://cadence-lang.org/docs/language/crypto#signature-verification)), except it uses a special domain separation tag. The key expected to be used in KMAC128 is the UTF-8 encoding of `"BLS_POP_BLS12381G1_XOF:KMAC128_SSWU_RO_POP_"`. The expected message to be signed by the PoP is the serialization of the BLS public key corresponding to the signing private key ([serialization details](https://cadence-lang.org/docs/language/crypto#public-key-construction)). The PoP can only be verified using the `PublicKey` method `verifyPoP`.

### BLS signature aggregation

`   view fun aggregateSignatures(_ signatures: [[UInt8]]): [UInt8]?            `

- Aggregates multiple BLS signatures into one.

Signatures can be generated from the same or distinct messages, and they can also be the aggregation of other signatures. The order of the signatures in the slice does not matter since the aggregation is commutative. There is no subgroup membership check performed on the input signatures. If the array is empty or if decoding one of the signatures fails, the program aborts.

The output signature can be verified against an aggregated public key to authenticate multiple signers at once. Since the `verify` method accepts a single data to verify against, it is only possible to verify multiple signatures of the same message.

### BLS public key aggregation

`   view fun aggregatePublicKeys(_ publicKeys: [PublicKey]): PublicKey?            `

- Aggregates multiple BLS public keys into one.

The order of the public keys in the slice does not matter since the aggregation is commutative. The input keys are guaranteed to be in the correct subgroup since subgroup membership is checked at the key creation time. If the array is empty or any of the input keys is not a BLS key, the program aborts. Note that the identity public key is a valid input to this function and it represents the identity element of aggregation.

The output public key can be used to verify aggregated signatures to authenticate multiple signers at once. Since the `verify` method accepts a single data to verify against, it is only possible to verify multiple signatures of the same message. The identity public key is a possible output of the function, though signature verifications against identity result in `false`.

In order to prevent rogue key attacks when verifying aggregated signatures, it is important to verify the [PoP](https://cadence-lang.org/docs/language/crypto#proof-of-possession-pop) of each individual key involved in the aggregation process.

## Crypto contract

The built-in contract `Crypto` can be used to perform cryptographic operations. The contract can be imported using `import Crypto`.

### Key lists

The crypto contract allows creating key lists to be used for multi-signature verification.

A key list is basically a list of public keys where each public key is assigned a key index, a hash algorithm, and a weight. A list of `KeyListSignature` can be verified against a key list where each signature entry specifies the public key index to be used against. The list verification is successful if all signatures from the list are valid, each public key is used at most once, and the used keys weights add up to at least `1`.

The verification of each signature uses the Cadence single signature verification function with the key entry hash algorithm and the input domain separation tag (see [Signature verification](https://cadence-lang.org/docs/language/crypto#signature-verification) for more information).

It is possible to disable a public key by revoking it. The revoked keys remain in the list and retain the same index. Only signatures against non-revoked keys are considered valid.

For example, to verify two signatures with equal weights for some signed data:

`   import Crypto        access(all)    fun test main() {    let keyList = Crypto.KeyList()        let publicKeyA = PublicKey(    publicKey:    "db04940e18ec414664ccfd31d5d2d4ece3985acb8cb17a2025b2f1673427267968e52e2bbf3599059649d4b2cce98fdb8a3048e68abf5abe3e710129e90696ca".decodeHex(),    signatureAlgorithm: SignatureAlgorithm.ECDSA_P256    )    keyList.add(    publicKeyA,    hashAlgorithm: HashAlgorithm.SHA3_256,    weight: 0.5    )        let publicKeyB = PublicKey(    publicKey:    "df9609ee588dd4a6f7789df8d56f03f545d4516f0c99b200d73b9a3afafc14de5d21a4fc7a2a2015719dc95c9e756cfa44f2a445151aaf42479e7120d83df956".decodeHex(),    signatureAlgorithm: SignatureAlgorithm.ECDSA_P256    )    keyList.add(    publicKeyB,    hashAlgorithm: HashAlgorithm.SHA3_256,    weight: 0.5    )        let signatureSet = [    Crypto.KeyListSignature(    keyIndex: 0,    signature:    "8870a8cbe6f44932ba59e0d15a706214cc4ad2538deb12c0cf718d86f32c47765462a92ce2da15d4a29eb4e2b6fa05d08c7db5d5b2a2cd8c2cb98ded73da31f6".decodeHex()    ),    Crypto.KeyListSignature(    keyIndex: 1,    signature:    "bbdc5591c3f937a730d4f6c0a6fde61a0a6ceaa531ccb367c3559335ab9734f4f2b9da8adbe371f1f7da913b5a3fdd96a871e04f078928ca89a83d841c72fadf".decodeHex()    )    ]        // "foo", encoded as UTF-8, in hex representation    let signedData = "666f6f".decodeHex()        let isValid = keyList.verify(    signatureSet: signatureSet,    signedData: signedData,    domainSeparationTag: "FLOW-V0.0-user",    )    }            `

The following shows the implementation details of the key list and the signature list:

``   access(all)    struct KeyListEntry {        access(all)    let keyIndex: Int        access(all)    let publicKey: PublicKey        access(all)    let hashAlgorithm: HashAlgorithm        access(all)    let weight: UFix64        access(all)    let isRevoked: Bool        init(    keyIndex: Int,    publicKey: PublicKey,    hashAlgorithm: HashAlgorithm,    weight: UFix64,    isRevoked: Bool    )    }        access(all)    struct KeyList {        init()        /// Adds a new key with the given weight    access(all)    fun add(    _ publicKey: PublicKey,    hashAlgorithm: HashAlgorithm,    weight: UFix64    )        /// Returns the key at the given index, if it exists.    /// Revoked keys are always returned, but they have `isRevoked` field set to true    access(all)    fun get(keyIndex: Int): KeyListEntry?        /// Marks the key at the given index revoked, but does not delete it    access(all)    fun revoke(keyIndex: Int)        /// Returns true if the given signatures are valid for the given signed data    /// `domainSeparationTag` is used to specify a scope for each signature,    /// and is implemented the same way as `PublicKey`'s verify function.    access(all)    fun verify(    signatureSet: [KeyListSignature],    signedData: [UInt8],    domainSeparationTag: String    ): Bool    }        access(all)    struct KeyListSignature {        access(all)    let keyIndex: Int        access(all)    let signature: [UInt8]        access(all)    init(keyIndex: Int, signature: [UInt8])    }            ``

# Cadence 1.0 Migration Guide

On September 4th, 2024, the Flow Mainnet upgraded to Cadence 1.0.

This migration guide offers developers guidance and actionable steps for updating projects to be compatible with Cadence 1.0.

The Cadence 1.0 release, introduced in the [Crescendo](https://flow.com/upgrade/crescendo) network upgrade, is a breaking change. Developers need to make sure all Cadence code used by their apps (transactions and scripts) is updated to Cadence 1.0, to ensure it continues to work after the network upgrade.

Many of the improvements of Cadence 1.0 fundamentally change how Cadence works and is used. This means it is necessary to break existing code to release this version, which will guarantee stability going forward.

## Benefits of Cadence 1.0

Cadence 1.0 is the latest version of the Cadence smart contract programming language. The stable release of Cadence 1.0 represents a significant milestone in the language's maturity, delivering a [comprehensive suite of new features and improvements](https://cadence-lang.org/docs/cadence-migration-guide/improvements) that provide new possibilities, increase speed, security, and efficiency. With Cadence 1.0, developers gain access to over 20 new features and enhancements. Each change is thoughtfully designed to streamline workflows, reduce duplication, and improve code readability, making writing and understanding smart contracts much easier.

## Upgrading NFT and FT contracts

In addition to changes to the Cadence programming language, the Cadence token standards were also streamlined and improved. Existing Cadence scripts and transactions interacting with NFTs and FTs must be updated. If you do _not_ update your code, your applications will become non-functional.

- [Guide for NFT Standard v2](https://cadence-lang.org/docs/cadence-migration-guide/nft-guide)
- [Guide for FT Standard v2](https://cadence-lang.org/docs/cadence-migration-guide/ft-guide)
- [Cadence 1.0 Improvements & New Features](https://cadence-lang.org/docs/cadence-migration-guide/improvements)

# Cadence 1.0 Improvements & New Features

## 💫 New features

Cadence 1.0 was released in October of 2024. This page provides a historical reference of changes.

View Functions added ([FLIP 1056](https://github.com/onflow/flips/blob/main/cadence/20220715-cadence-purity-analysis.md))

[](https://github.com/onflow/flips/blob/main/cadence/20220715-cadence-purity-analysis.md)

`                                                                             `

`                         `

Interface Inheritance Added ([FLIP 40](https://github.com/onflow/flips/blob/main/cadence/20221024-interface-inheritance.md))

`                                                     `

`                                             `

[](https://github.com/onflow/flips/blob/main/cadence/20221024-interface-inheritance.md)

## ⚡ Breaking improvements

Many of the improvements of Cadence 1.0 are fundamentally changing how Cadence works and how it is used. However, that also means it is necessary to break existing code to release this version, which will guarantee stability (no more planned breaking changes) going forward.

Once Cadence 1.0 is live, breaking changes will simply not be acceptable.

So we have, and need to use, this last chance to fix and improve Cadence, so it can deliver on its promise of being a language that provides security and safety, while also providing composability and simplicity.

We fully recognize the frustration developers feel when updates break their code, necessitating revisions. Nonetheless, we are convinced that this inconvenience is justified by the substantial enhancements to Cadence development. These improvements not only make development more effective and enjoyable but also empower developers to write and deploy immutable contracts.

The improvements were intentionally bundled into one release to avoid breaking Cadence programs multiple times.

**2024-04-24** Public Capability Acquisition No Longer Returns Optional Capabilities ([FLIP 242](https://github.com/onflow/flips/blob/main/cadence/20240123-capcon-get-capability-api-improvement.md))

[](https://github.com/onflow/flips/blob/main/cadence/20220203-capability-controllers.md)

  

`                         `

`                         `

**2024-04-23** Matching Access Modifiers for Interface Implementation Members are now Required ([FLIP 262](https://github.com/onflow/flips/blob/main/cadence/20240415-remove-non-public-entitled-interface-members.md))

`                                                     `

`                                                     `

Conditions No Longer Allow State Changes ([FLIP 1056](https://github.com/onflow/flips/blob/main/cadence/20220715-cadence-purity-analysis.md))

[](https://github.com/onflow/flips/blob/main/cadence/20220715-cadence-purity-analysis.md)

`                                                                     `

`                     `

Missing or Incorrect Argument Labels Get Reported

`                                                                                 `

`                                     `

`                                                     `

`                                     `

Incorrect Operators In Reference Expressions Get Reported ([FLIP 941](https://github.com/onflow/flips/blob/main/cadence/20220516-reference-creation-semantics.md))

[](https://github.com/onflow/flips/blob/main/cadence/20220516-reference-creation-semantics.md)

`                 `

`                             `

`                 `

`                 `

Tightening Of Naming Rules

`             `

`                 `

`                 `

`             `

Result of `toBigEndianBytes()` for `U?Int(128|256)` Fixed

`                                 `

`                     `

Syntax for Function Types Improved ([FLIP 43](https://github.com/onflow/flips/blob/main/cadence/20221018-change-fun-type-syntax.md))

`             `

`                                 `

`                                         `

`                                 `

[](https://github.com/onflow/flips/blob/main/cadence/20221018-change-fun-type-syntax.md)

`                     `

`             `

Entitlements and Safe Down-casting ([FLIP 54](https://github.com/onflow/flips/blob/main/cadence/20221214-auth-remodel.md) & [FLIP 94](https://github.com/onflow/flips/blob/main/cadence/20230623-entitlement-improvements.md))

[](https://github.com/onflow/flips/blob/main/cadence/20221214-auth-remodel.md)[](https://github.com/onflow/flips/blob/main/cadence/20230623-entitlement-improvements.md)

`                         `

[](https://cadence-lang.org/docs/1.0/language/access-control#entitlements)

`                                                                                                     `

`                                                                                                                 `

Removal of `pub` and `priv` Access Modifiers ([FLIP 84](https://github.com/onflow/flips/blob/main/cadence/20230505-remove-priv-and-pub.md))

[](https://github.com/onflow/flips/blob/main/cadence/20230505-remove-priv-and-pub.md)

`                                             `

`                                                                                 `

Replacement of Restricted Types with Intersection Types ([FLIP 85](https://github.com/onflow/flips/blob/main/cadence/20230505-remove-restricted-types.md))

[](https://github.com/onflow/flips/blob/main/cadence/20230505-remove-restricted-types.md)

`                                                                                                                                         `

`                                                                                                                                             `

Account Access Got Improved ([FLIP 92](https://github.com/onflow/flips/blob/main/cadence/20230525-account-type.md))

[](https://github.com/onflow/flips/blob/main/cadence/20230525-account-type.md)

`                             `

`                             `

`                                     `

Deprecated Key Management API Got Removed

|||
|---|---|
|||
|||

[](https://developers.flow.com/cadence/language/accounts#account-keys)

`                             `

`                                                         `

Resource Tracking for Optional Bindings Improved

`                                                         `

`                                                 `

Definite Return Analysis Got Improved

`                                             `

`                                                         `

`                                 `

Semantics for Variables in For-Loop Statements Got Improved ([FLIP 13](https://github.com/onflow/flips/blob/main/cadence/20221011-for-loop-semantics.md))

[](https://github.com/onflow/flips/blob/main/cadence/20221011-for-loop-semantics.md)

`                                                                 `

References to Resource-Kinded Values Get Invalidated When the Referenced Values Are Moved ([FLIP 1043](https://github.com/onflow/flips/blob/main/cadence/20220708-resource-reference-invalidation.md))

[](https://github.com/onflow/flips/blob/main/cadence/20220708-resource-reference-invalidation.md)

`                                                     `

`                     `

`                         `

`                     `

Capability Controller API Replaced Existing Linking-based Capability API ([FLIP 798](https://github.com/onflow/flips/blob/main/cadence/20220203-capability-controllers.md))

[](https://github.com/onflow/flips/blob/main/cadence/20220203-capability-controllers.md)

|||
|---|---|
|||
|||
|||
|||
|||
|||
|||
|||

`                                                                     `

`                                                         `

`                                                         `

`                                     `

`                                     `

External Mutation Improvement ([FLIP 89](https://github.com/onflow/flips/blob/main/cadence/20230517-member-access-semnatics.md) & [FLIP 86](https://github.com/onflow/flips/blob/main/cadence/20230519-built-in-mutability-entitlements.md))

[](https://github.com/onflow/flips/blob/main/cadence/20211129-cadence-mutability-restrictions.md)

[](https://github.com/onflow/flips/blob/main/cadence/vision/mutability-restrictions.md)

- [](https://github.com/onflow/flips/blob/main/cadence/20230517-member-access-semnatics.md)
- [](https://github.com/onflow/flips/blob/main/cadence/20230519-built-in-mutability-entitlements.md)

  

`                                                                     `

`                                         `

`                                                                                                                                                         `

`                                                             `

`                                             `

Removal Of Nested Type Requirements ([FLIP 118](https://github.com/onflow/flips/blob/main/cadence/20230711-remove-type-requirements.md))

[](https://docs.onflow.org/cadence/language/interfaces/#nested-type-requirements)

[](https://github.com/onflow/flips/blob/main/cadence/20230711-remove-type-requirements.md)

Event Definition And Emission In Interfaces ([FLIP 111](https://github.com/onflow/flips/blob/main/cadence/20230417-events-emitted-from-interfaces.md))

[](https://github.com/onflow/flips/blob/main/cadence/20230417-events-emitted-from-interfaces.md)

`                                                                         `

`                                                 `

Force Destruction of Resources ([FLIP 131](https://github.com/onflow/flips/pull/131))

[](https://github.com/onflow/flips/pull/131)

`                                                                                                         `

`                                                                         `

New `domainSeparationTag` parameter added to `Crypto.KeyList.verify`

[](https://cadence-lang.org/docs/1.0/language/crypto#signature-verification)

[](https://cadence-lang.org/docs/1.0/language/crypto#signature-verification)[](https://cadence-lang.org/docs/1.0/language/crypto#hashing-with-a-domain-tag)

`                         `

`                             `

## FT / NFT standard changes

In addition to the upcoming language changes, the Cadence 1.0 upgrade also includes breaking changes to core contracts, such as the FungibleToken and NonFungibleToken standards. All Fungible and Non-Fungible Token contracts will need to be updated to the new standard.

These interfaces are being upgraded to allow for multiple tokens per contract, fix some issues with the original standards, and introduce other various improvements suggested by the community.

- Original Proposal: [Flow forum](http://forum.flow.com/t/streamlined-token-standards-proposal/3075)
- Fungible Token Changes PR (WIP): [V2 FungibleToken Standard by joshuahannan — Pull Request #77 — onflow/flow-ft](https://github.com/onflow/flow-ft/pull/77)
- NFT Changes PR: [GitHub](https://github.com/onflow/flow-nft/pull/126)

It will involve upgrading your token contracts with changes to events, function signatures, resource interface conformances, and other small changes.

There are some existing guides for upgrading your token contracts to the new standard:

- [Upgrading Fungible Token Contracts](https://cadence-lang.org/docs/cadence-migration-guide/ft-guide)
- [Upgrading Non-Fungible Token Contracts](https://cadence-lang.org/docs/cadence-migration-guide/nft-guide)

## More resources

If you have any questions or need help with the upgrade, feel free to reach out to the Flow team on the [Flow Discord](https://discord.gg/flowblockchain.).

Help is also available during the [Cadence 1.0 Office Hours](https://calendar.google.com/calendar/ical/c_47978f5cd9da636cadc6b8473102b5092c1a865dd010558393ecb7f9fd0c9ad0%40group.calendar.google.com/public/basic.ics) each week at 10:00AM PST on the Flow Developer Discord.


# Non-Fungible Tokens in Cadence 1.0

On September 4th, 2024 the Flow Mainnet upgraded to Cadence 1.0. In addition to many changes to the Cadence programming language, the Cadence token standards were also streamlined and improved. All applications' scripts and transactions need to be updated. If you do not update your code, your applications do not function properly.

This document describes the changes to the Cadence Non-Fungible Token (NFT) standard and gives a step-by-step guide for how to upgrade your NFT contract from Cadence 0.42 to Cadence 1.0.

We'll be using the [`ExampleNFT` contract](https://github.com/onflow/flow-nft/blob/master/contracts/ExampleNFT.cdc) as an example. Many projects have used `ExampleNFT` as a starting point for their projects, so it is widely applicable to most NFT developers on Flow. The upgrades required for `ExampleNFT` will cover 90%+ of what you'll need to do to update your contract. Each project most likely has additional logic or features that aren't included in `ExampleNFT`, but hopefully after reading this guide, you'll understand Cadence 1.0 well enough that you can easily make any other changes that are necessary.

Additionally, most of the changes described here also apply to anyone who is updating a Fungible Token contract or interacting with one, so keep that in mind while reading if that applies to you.

As always, there are plenty of people on the Flow team and in the community who are happy to help answer any questions you may have, so please reach out in Discord if you need any help.

# Important Info

Please read [the FLIP](https://github.com/onflow/flips/pull/56) that describes the changes to the `NonFungibleToken` standard first.

The updated code for the V2 Non-Fungible Token standard is located in the [`master` branch of the flow-nft repo](https://github.com/onflow/flow-nft). Please look at [the PR that made the changes](https://github.com/onflow/flow-nft/pull/126) to understand how the standard and examples have changed. Note the changes to the `NonFungibleToken`, `MetadataViews`, `ViewResolver`, and `NFTForwarding` contracts.

Additionally, here are the import addresses for all of the important contracts related to non-fungible tokens. The second column is the import address if you are testing with a basic version of the emulator. The third column contains the import addresses if you are using the Cadence testing framework.

|Contract|Emulator Import Address|Testing Framework|
|---|---|---|
|`NonFungibleToken`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|
|`FungibleToken`|`0xee82856bf20e2aa6`|`0x0000000000000002`|
|`ViewResolver`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|
|`Burner`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|
|`MetadataViews`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|

See the other guides in this section of the docs for the import addresses of other important contracts in the emulator.

As for contracts that are important for NFT developers but aren't "core contracts", here is information about where to find the Cadence 1.0 Versions of Each:

**NFT Catalog:** The NFT Catalog has been deprecated for Cadence 1.0. Now that the token standards require implementing metadata views, NFT Catalog is not needed in its current form. The Flow team now maintains [TokenList](https://token-list.fixes.world/?utm_source=Flowverse&utm_medium=Website&utm_campaign=Dapp) which is similar to NFT Catalog, but is decentralized. Projects can register there without needing to be approved.

**NFT Storefront:** See [the `master` branch in the NFT Storefront Repo](https://github.com/onflow/nft-storefront/tree/master/contracts) for the updated versions of the `NFTStorefront` and `NFTStorefrontV2` contracts.

**USDC:** USDC was migrated to standard bridged USDC on Flow. See the [repo](https://github.com/onflow/bridged-usdc) for the latest version of the USDC contract.

**Account Linking and Hybrid Custody:** See [the `main` branch in the hybrid custody repo](https://github.com/onflow/hybrid-custody) for updated hybrid custody contracts.

[This Discord announcement](https://discord.com/channels/613813861610684416/811693600403357706/1225909248429527140) also contains versions of a lot of important contracts.

Use the [Flow Contract Browser](https://contractbrowser.com/) to find the 1.0 code of other contracts.

## A note for newcomers

This guide is primarily for developers who have existing contracts deployed to Flow mainnet that they need to update for Cadence 1.0. If you don't have any contracts deployed yet, it is recommended that you start an NFT contract from scratch by either copying the `ExampleNFT` contract from the `master` branch of the `flow-nft` repo.

Additionally, the Flow community is working on the [`BasicNFT` contract](https://github.com/onflow/flow-nft/blob/universal-collection/contracts/BasicNFT.cdc) in the `universal-collection` branch of the flow-nft GitHub repo. This is a simplified version of standard NFT contracts, but has not been completed yet.

## BasicNFT and UniversalCollection

As part of the improvements to the NFT standard, there is now a new NFT contract example in the `flow-nft` GitHub repo: [`BasicNFT`](https://github.com/onflow/flow-nft/blob/universal-collection/contracts/BasicNFT.cdc).

`BasicNFT` defines a Cadence NFT in as few lines of code as possible, 137 at the moment! This is possible because the contract basically only defines the NFT resource, the essential metadata views, and a minter resource. It doesn't have to define a collection! Most collection resources are 99% boilerplate code, so it really doesn't make sense for most projects to have to define their own collection.

Instead, `BasicNFT` uses [`UniversalCollection`](https://github.com/onflow/flow-nft/blob/universal-collection/contracts/UniversalCollection.cdc), a contract that defines a collection resource that has all of the standard functionality that a collection needs and nothing else. From now on, any project that doesn't want to do anything unique with their collection can just import `UniversalCollection` and call it from their `createEmptyCollection` function:

`   access(all) fun createEmptyCollection(nftType: Type): @{NonFungibleToken.Collection} {    return <- UniversalCollection.createEmptyCollection(identifier: "flowBasicNFTCollection", type: Type<@BasicNFT.NFT>())    }            `

All they have to provide is a type and an identifier for the collection. `UniversalCollection.Collection` will enforce that only NFTs of the given type can be accepted by the collection:

`   access(all) fun deposit(token: @{NonFungibleToken.NFT}) {    if self.supportedType != token.getType() {    panic("Cannot deposit an NFT of the given type")    }            `

It also constructs standard paths based on the identifier provided.

`UniversalCollection` will be deployed to all the networks soon after the Cadence 1.0 upgrade, so developers will be able to import from it after that point.

We'll be putting out more information and guides for `BasicNFT` and `UniversalCollection` in the near future, but keep it in mind if you are thinking about deploying any new NFT contracts in the future!

# Migration Guide

This guide will cover changes that are required because of upgrades to the Cadence Language as well as the token standard. The improvements will be described here as they apply to specific changes that projects need to make in order to be ready for the upgrade, but it is good to read all sources to fully understand the changes.

Please read the motivation section of [the NFT-V2 FLIP](https://github.com/onflow/flips/pull/56) to learn about why most of the changes to the standard were needed or desired.

First, we will cover the changes that come from the new token standards and then we will cover the changes that come from Cadence.

## Token Standard Changes

### NonFungibleToken.NFT

`NonFungibleToken.NFT` used to be a nested type specification, but now it is an interface!

In your code, any instance that refers to `@NonFungibleToken.NFT` or `&NonFungibleToken.NFT` need to be updated to `@{NonFungibleToken.NFT}` or `&{NonFungibleToken.NFT}` respectively.

### NonFungibleToken.Collection

Similar to `NFT`, `NonFungibleToken.Collection` is now an interface.

Since `Collection` is an interface, you will need to update every instance in your code that refers to `@NonFungibleToken.Collection` or `&NonFungibleToken.Collection` to `@{NonFungibleToken.Collection}` or `&{NonFungibleToken.Collection}` respectively to show that it is now an interface specification instead of a concrete type specification.

## Conclusion

This guide covered the most important changes that are required for the Cadence 1.0 upgrades to NFT contracts. Please ask any questions about the migrations in the #developer-questions channel in discord and good luck with your upgrades!


# Fungible Tokens in Cadence 1.0

On September 4th, 2024 the Flow Mainnet upgraded to Cadence 1.0. In addition to many changes to the Cadence programming language, the Cadence token standards also got streamlined and improved. All applications need to migrate their existing Cadence scripts and transactions for the update. If you do not update your code, your application will not function.

This document describes the changes to the Cadence Fungible Token (FT) standard. We'll be using the [`ExampleToken` contract](https://github.com/onflow/flow-ft/blob/master/contracts/ExampleToken.cdc) as an example. Many projects have used `ExampleToken` as a starting point for their projects, so it is widely applicable to most NFT developers on Flow. The upgrades required for `ExampleToken` will cover 90%+ of what you'll need to do to update your contract. Each project most likely has additional logic or features that aren't included in `ExampleToken`, but hopefully after reading this guide, you'll understand Cadence 1.0 well enough that you can easily make any other changes that are necessary.

As always, there are plenty of people on the Flow team and in the community who are happy to help answer any questions you may have, so please reach out in Discord if you need any help.

# Important Info

Please read [the FLIP](https://github.com/onflow/flips/pull/55) that describes the changes to the `FungibleToken` standard first.

The updated code for the V2 Fungible Token standard is located in the [`master` branch of the flow-ft repo](https://github.com/onflow/flow-ft). Please look at the [PR that made the changes](https://github.com/onflow/flow-ft/pull/131) to understand how the standard and examples have changed. Note the changes to the `FungibleTokenMetadataViews`, `Burner`, `FungibleTokenSwitchboard`, and `TokenForwarding` contracts.

Additionally, here are the import addresses for all of the important contracts related to fungible tokens. The second column is the import address if you are testing with a basic version of the emulator. The third column contains the import addresses if you are using the Cadence testing framework.

|Contract|Emulator Import Address|Testing Framework|
|---|---|---|
|`FungibleToken`|`0xee82856bf20e2aa6`|`0x0000000000000002`|
|`ViewResolver`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|
|`Burner`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|
|`MetadataViews`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|
|`FungibleTokenMetadataViews`|`0xee82856bf20e2aa6`|`0x0000000000000002`|
|`FungibleTokenSwitchboard`|`0xee82856bf20e2aa6`|`0x0000000000000002`|

See the other guides in this section of the docs for the import addresses of other important contracts in the emulator.

As for contracts that are important for NFT developers but aren't "core contracts", here is information about where to find the Cadence 1.0 versions of each:

**USDC:** USDC was migrated to standard bridged USDC on Flow. See the [repo](https://github.com/onflow/bridged-usdc) for the latest version of the USDC contract.

**Account Linking and Hybrid Custody:** See [this PR in the hybrid custody repo](https://github.com/onflow/hybrid-custody/pull/164) for updated hybrid custody contracts.

[This Discord announcement](https://discord.com/channels/613813861610684416/811693600403357706/1225909248429527140) also contains versions of a lot of important contracts.

Use the [Flow Contract Browser](https://contractbrowser.com/) to find the 1.0 code of other contracts.

# Migration Guide

Please see the [NFT Cadence 1.0 migration guide](https://cadence-lang.org/docs/cadence-migration-guide/nft-guide). While the contracts aren't exactly the same, they share a huge amount of functionality, and the changes described in that guide will cover 90% of the changes that are needed for fungible tokens, so if you just follow those instructions for your fungible token contract, you'll be most of the way there.

Here, we will only describe the changes that are specific to the fungible token standard.

## `Vault` implements `FungibleToken.Vault`

`FungibleToken.Vault` is no longer a resource type specification. It is now an interface that inherits from `Provider`, `Receiver`, `Balance`, `ViewResolver.Resolver`, and `Burner.Burnable`.

Since `Vault` is an interface, you will need to update every instance in your code that refers to `@FungibleToken.Vault` or `&FungibleToken.Vault` to `@{FungibleToken.Vault}` or `&{FungibleToken.Vault}` respectively to show that it is now an interface specification instead of a concrete type specification. Example in `deposit()`:

``   /// deposit now accepts a resource that implements the `FungibleToken.Vault` interface type    access(all) fun deposit(from: @{FungibleToken.Vault})            ``

If you have any more questions, please ask in discord and the Flow team will be happy to assist!

# Protocol Smart Contracts 1.0 Changes Guide

## Protocol Smart Contracts in Cadence 1.0

On September 4th, 2024 the Flow Mainnet upgraded to Cadence 1.0. In addition to many changes to the Cadence programming language and the Cadence token standards, the Flow Protocol smart contracts also updated to be compatible with the changes.

All applications that interact with these contracts need to update their transactions and scripts in order to be compatible with the changes.

## Important Info

This document assumes you have a basic understanding of the [Cadence 1.0 improvements](https://cadence-lang.org/docs/cadence-migration-guide/improvements) and modifications to the Fungible Token Standard. We encourage you to consult those guides for more details on these changes if you are interested.

The updated code for the Cadence 1.0 versions of the protocol smart contracts is located in the [`master` branch of the flow-core-contracts repo](https://github.com/onflow/flow-core-contracts). Please look at the [PR that made the changes](https://github.com/onflow/flow-core-contracts/pull/319) to understand how the contracts have changed. Every contract in the repo changed.

Additionally, here are the import addresses for all of the important contracts related to the protocol:

|Contract|Emulator Import Address|Testing Framework|
|---|---|---|
|`FungibleToken`|`0xee82856bf20e2aa6`|`0x0000000000000002`|
|`ViewResolver`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|
|`Burner`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|
|`MetadataViews`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|
|`FungibleTokenMetadataViews`|`0xee82856bf20e2aa6`|`0x0000000000000002`|
|`FlowToken`|`0x0ae53cb6e3f42a79`|`0x0000000000000003`|
|`FlowFees`|`0xe5a8b7f23e8b548f`|`0x0000000000000004`|
|`FlowStorageFees`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|
|`FlowServiceAccount`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|
|`NodeVersionBeacon`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|
|`RandomBeaconHistory`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|
|`LockedTokens`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|
|`StakingProxy`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|
|`FlowIDTableStaking`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|
|`FlowClusterQC`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|
|`FlowDKG`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|
|`FlowEpoch`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|
|`FlowStakingCollection`|`0xf8d6e0586b0a20c7`|`0x0000000000000001`|

See the other guides in this section of the docs for the import addresses of other important contracts in the emulator.

## Upgrade Guide

The NFT guide covers a lot of common changes that are required for NFT contracts, but many of these changes will also apply to any contract on Flow, so it is still useful to read even if you don't have an NFT contract.

The core contracts do not have any meaningful changes outside of what is required to be compatible with Cadence 1.0 and the token standard changes. If you have questions about the core contracts changes for Cadence 1.0, please reach out to the Flow team in Discord and we will be happy to help.

This is a selection of software design patterns developed by core Flow developers while writing Cadence code for deployment to Flow Mainnet.

Many of these design patters apply to most other programming languages, but some are specific to Cadence.

[Design patterns](https://en.wikipedia.org/wiki/Software_design_pattern) are building blocks for software development. They may provide a solution to a problem that you encounter when writing smart contracts in Cadence. If they do not clearly fit, these patterns may not be the right solution for a given situation or problem. They are not meant to be rules to be followed strictly, especially where a better solution presents itself.

# General

These are general patterns to follow when writing smart contracts.

## Use named value fields for constants instead of hard-coding

### Problem

Your contracts, resources, and scripts all have to refer to the same value. A number, a string, a storage path, etc. Entering these values manually in transactions and scripts is a potential source of error. See [Wikipedia's page on magic numbers](https://en.wikipedia.org/wiki/Magic_number_\(programming\))

### Solution

Add a public (`access(all)`), constant (`let`) field, e.g. a `Path` , to the contract responsible for the value, and set it in the contract's initializer. Refer to that value via this public field rather than specifying it manually.

Example Snippet:

`       // BAD Practice: Do not hard code storage paths    access(all)    contract NamedFields {        access(all)    resource Test {}        init() {    // BAD: Hard-coded storage path    self.account.storage.save(<-create Test(), to: /storage/testStorage)    }    }        // GOOD practice: Instead, use a field    //    access(all)    contract NamedFields {        access(all)    resource Test {}        // GOOD: field storage path    access(all)    let testStoragePath: StoragePath        init() {    // assign and access the field here and in transactions    self.testStoragePath = /storage/testStorage    self.account.storage.save(<-create Test(), to: self.TestStoragePath)    }    }            `

[Example Code](https://github.com/onflow/flow-core-contracts/blob/71ea0dfe843da873d52c6a983e7c8f44a4677b26/contracts/LockedTokens.cdc#L779)

## Script-Accessible public field/function

Data availability is important in a blockchain environment. It is useful to publicize information about your smart contract and the assets it controls so other smart contracts and apps can easily query it.

### Problem

Your contract, resource, or struct has a field or resource that will need to be read and used on or off-chain, often in bulk.

### Solution

Make sure that the field can be accessed from a script. This saves the time and fees required to read a property using a transaction. Making the field or function `access(all)` and exposing it via a `/public/` capability will allow this.

Be careful not to expose any data or functionality that should be kept private when doing so.

Example:

`   // BAD: Field is private, so it cannot be read by the public    access(self)    let totalSupply: UFix64        // GOOD: Field is public, so it can be read and used by anyone    access(all)    let totalSupply: UFix64            `

## Script-Accessible report

### Problem

Your contract has a resource that you wish to access fields of. Resources are often stored in private places and are hard to access. Additionally, scripts cannot return resources to the external context, so a struct must be used to hold the data.

### Solution

Return a reference to a resource if the data from a single resource is all that is needed. Otherwise, declare a struct to hold the data that you wish to return from the script. Write a function that fills out the fields of this struct with the data from the resource that you wish to access. Then call this on the resource that you wish to access the fields of in a script, and return the struct from the script.

See [Script-Accessible public field/function](https://cadence-lang.org/docs/design-patterns#script-accessible-public-fieldfunction), above, for how best to expose this capability.

### Example

`   access(all)    contract AContract {        access(all)    let BResourceStoragePath: StoragePath        access(all)    let BResourcePublicPath: PublicPath        init() {    self.BResourceStoragePath = /storage/BResource    self.BResourcePublicPath = /public/BResource    }        // Resource definition    access(all)    resource BResource {        access(all)    var c: UInt64        access(all)    var d: String            // Generate a struct with the same fields    // to return when a script wants to see the fields of the resource    // without having to return the actual resource    access(all)    fun generateReport(): BReportStruct {    return BReportStruct(c: self.c, d: self.d)    }        init(c: UInt64, d: String) {    self.c = c    self.d = d    }    }        // Define a struct with the same fields as the resource    access(all)    struct BReportStruct {        access(all)    var c: UInt64        access(all)    var d: String        init(c: UInt64, d: String) {    self.c = c    self.d = d    }        }    }    ...    // Transaction    import AContract from 0xAContract        transaction {    prepare(acct: auth(IssueStorageCapabilityController, PublishCapability) &Account) {    //...    let cap = acct.capabilities.storage.issue<&AContract.BResource>(AContract.BResourceStoragePath)    acct.capabilities.publish(cap, at: AContract.BResourcePublicPath)    }    }    // Script    import AContract from 0xAContract        // Return the struct with a script    access(all)    fun main(account: Address): AContract.BReportStruct {    // borrow the resource    let b = getAccount(account).capabilities    .borrow<&AContract.BResource>(AContract.BResourcePublicPath)    // return the struct    return b.generateReport()    }            `

## Init singleton

### Problem

An admin resource must be created and delivered to a specified account. There should not be a function to do this, as that would allow anyone to create an admin resource.

### Solution

Create any one-off resources in the contract's initializer and deliver them to an address or `&Account` specified as an argument.

See how this is done in the LockedTokens contract initializer:

[LockedTokens.cdc](https://github.com/onflow/flow-core-contracts/blob/71ea0dfe843da873d52c6a983e7c8f44a4677b26/contracts/LockedTokens.cdc#L765-L780)

and in the transaction that is used to deploy it:

[admin_deploy_contract.cdc](https://github.com/onflow/flow-core-contracts/blob/master/transactions/lockedTokens/admin/admin_deploy_contract.cdc)

## Use descriptive names for fields, paths, functions and variables

### Problem

Smart contracts often are vitally important pieces of a project and often have many other smart contracts and applications that rely on them. Therefore, they need to be clearly written and easy to understand.

### Solution

All fields, functions, types, variables, etc., need to have names that clearly describe what they are used for.

`account` / `accounts` is better than `array` / `element`.

`providerAccount` / `tokenRecipientAccount` is better than `acct1` / `acct2`.

`/storage/bestPracticesDocsCollectionPath` is better than `/storage/collection`

### Example

`   // BAD: Unclear naming    //    access(all)    contract Tax {        // Do not use abbreviations unless absolutely necessary    access(all)    var pcnt: UFix64        // Not clear what the function is calculating or what the parameter should be    access(all)    fun calculate(num: UFix64): UFix64 {    // What total is this referring to?    let total = num + (num * self.pcnt)        return total    }    }        // GOOD: Clear naming    //    access(all)    contract TaxUtilities {        // Clearly states what the field is for    access(all)    var taxPercentage: UFix64        // Clearly states that this function calculates the    // total cost after tax    access(all)    fun calculateTotalCostPlusTax(preTaxCost: UFix64): UFix64 {    let postTaxCost = preTaxCost + (preTaxCost * self.taxPercentage)        return postTaxCost    }    }            `

## Plural names for arrays and maps are preferable

For example, use `accounts` rather than `account` for an array of accounts.

This signals that the field or variable is not scalar. It also makes it easier to use the singular form for a variable name during iteration.

## Use transaction post-conditions when applicable

### Problem

Transactions can contain any amount of valid Cadence code and access many contracts and accounts. The power of resources and capabilities means that there may be some behaviors of programs that are not expected.

### Solution

It is usually safe to include post-conditions in transactions to verify the intended outcome.

### Example

This could be used when purchasing an NFT to verify that the NFT was deposited in your account's collection.

`   // Pseudo-code        transaction {        access(all)    let buyerCollectionRef: &NonFungibleToken.Collection        prepare(acct: auth(BorrowValue) &Account) {        // Get tokens to buy and a collection to deposit the bought NFT to    let temporaryVault <- vaultRef.withdraw(amount: 10.0)    let self.buyerCollectionRef = acct.storage.borrow(from: /storage/Collection)        // purchase, supplying the buyers collection reference    saleRef.purchase(tokenID: 1, recipient: self.buyerCollectionRef, buyTokens: <-temporaryVault)        }    post {    // verify that the buyer now owns the NFT    self.buyerCollectionRef.idExists(1) == true: "Bought NFT ID was not deposited into the buyers collection"    }    }            `

## Avoid unnecessary load and save storage operations, prefer in-place mutations

### Problem

When modifying data in account storage, `load()` and `save()` are costly operations: All data is unnecessarily moved out of the account, then moved back into the account. This can quickly cause your transaction to reach its limits.

This also applies to nested, stored in fields, arrays, and dictionaries: Moving objects out of containers and moving them back into the container, just to modify the object, is just as costly.

For example, a collection contains a dictionary of NFTs. There is no need to move the whole dictionary out of the field, update the dictionary on the stack (e.g., adding or removing an NFT), and then move the whole dictionary back to the field: the dictionary can be updated in-place, which is easier and more efficient. The same goes for a more complex data structure like a dictionary of nested resources: Each resource can be updated in-place by taking a reference to the nested object instead of loading and saving.

### Solution

For making modifications to values in storage or accessing stored objects, `borrow()` should always be used to access them instead of `load` or `save` unless absolutely necessary. `borrow()` returns a reference to the object at the storage path instead of having to load the entire object. This reference can be assigned to or can be used to access fields or call methods on stored objects.

Fields and value in containers, such as in arrays and dictionaries, can be borrowed using a reference expression (`&v as &T`).

### Example

``   // BAD: Loads and stores a resource to use it    //    transaction {        prepare(acct: auth(LoadValue, SaveValue) &Account) {        // Removes the vault from storage, a costly operation    let vault <- acct.storage.load<@ExampleToken.Vault>(from: /storage/exampleToken)        // Withdraws tokens    let burnVault <- vault.withdraw(amount: 10)        destroy burnVault        // Saves the used vault back to storage, another costly operation    acct.storage.save(to: /storage/exampleToken)        }    }        // GOOD: Uses borrow instead to avoid costly operations    //    transaction {        prepare(acct: auth(BorrowValue) &Account) {        // Borrows a reference to the stored vault, much less costly operation    let vault <- acct.storage.borrow<&ExampleToken.Vault>(from: /storage/exampleToken)        let burnVault <- vault.withdraw(amount: 10)        destroy burnVault        // No `save` required because we only used a reference    }    }            `` ->

# Capabilities

## Capability bootstrapping

### Problem

An account must be given a [capability](https://cadence-lang.org/docs/language/capabilities) to an object stored in another account. To create (issue) the capability, the transaction must be signed by a key which has access to the target account.

To transfer / deliver the capability to the other account, the transaction also needs write access to that one. It is not as easy to produce a single transaction which is authorized by two accounts as it is to produce a typical transaction which is authorized by one account.

This prevents a single transaction from fetching the capability from one account and delivering it to the other.

### Solution

The solution to the bootstrapping problem in Cadence is provided by the [Inbox API](https://cadence-lang.org/docs/language/accounts/inbox).

Account A (which we will call the provider) creates the capability they wish to send to account B (which we will call the recipient), and stores this capability on their account in a place where the recipient can access it using the `Inbox.publish` function on their account. They choose a name for the capability that the recipient can later use to identify it, and specify the recipient's address when calling `publish`. This call to `publish` will emit an `InboxValuePublished` event that the recipient can listen for off-chain to know that the Capability is ready for them to claim.

The recipient then later can use the `Inbox.claim` function to securely claim the capability from the provider's account. They must provide the name and type with which the capability was published, as well as the address of the provider's account (all of this information is available in the `InboxValuePublished` event emitted on `publish`). This will remove the capability from the provider's account and emit an `InboxValueClaimed` event that the provider can listen for off-chain.

One important caveat to this is that the published capability is stored on the provider's account until the recipient claims it, so the provider can also use the `Inbox.unpublish` function to remove the capability from their account if they no longer wish to pay for storage for it. This also requires the name and type which the capability was published, and emits an `InboxValueUnpublished` event that the recipient can listen for off-chain.

It is also important to note that the recipient becomes the owner of the capability object once they have claimed it, and can thus store it or copy it anywhere they have access to. This means providers should only publish capabilities to recipients they trust to use them properly, or limit the type with which the capability is authorized in order to only give recipients access to the functionality that the provider is willing to allow them to copy.

`   import "BasicNFT"        transaction(receiver: Address, name: String) {        prepare(signer: auth(IssueStorageCapabilityController, PublishInboxCapability) &Account) {        // Issue a capability controller for the storage path    let capability = signer.capabilities.storage.issue<&BasicNFT.Minter>(BasicNFT.minterPath)        // Set the name as tag so it is easy for us to remember its purpose    let controller = signer.capabilities.storage.getController(byCapabilityID: capability.id)    ?? panic("Cannot get the storage capability controller with ID "    .concat(capabilityID.toString())    .concat(" from the signer's account! Make sure the ID belongs to a capability that the owner controls and that it is a storage capability.")    controller.setTag(name)        // Publish the capability, so it can be later claimed by the receiver    signer.inbox.publish(capability, name: name, recipient: receiver)    }    }            `

`   import "BasicNFT"        transaction(provider: Address, name: String) {        prepare(signer: auth(ClaimInboxCapability, SaveValue) &Account) {        // Claim the capability from our inbox    let capability = signer.inbox.claim<&BasicNFT.Minter>(name, provider: provider)    ?? panic("Cannot claim the storage capability controller with name "    .concat(name).concat(" from the provider account (").concat(provider.toString())    .concat("! Make sure the provider address is correct and that they have published "    .concat(" a capability with the desired name.")        // Save the capability to our storage so we can later retrieve and use it    signer.storage.save(capability, to: BasicNFT.minterPath)    }    }            `

## Check for existing capability before publishing new one

### Problem

When publishing a capability, a capability might be already be published at the specified path.

### Solution

Check if a capability is already published at the given path.

### Example

`   transaction {    prepare(signer: auth(Capabilities) &Account) {    let capability = signer.capabilities.storage    .issue<&ExampleToken.Vault>(/storage/exampleTokenVault)        let publicPath = /public/exampleTokenReceiver        if signer.capabilities.exits(publicPath) {    signer.capabilities.unpublish(publicPath)    }    signer.capabilities.publish(capability, at: publicPath)    }    }            `

## Capability Revocation

### Problem

A capability provided by one account to a second account must able to be revoked by the first account without the co-operation of the second.

### Solution

If the capability is a storage capability:

`   transaction(capabilityID: UInt64) {    prepare(signer: auth(StorageCapabilities) &Account) {    let controller = signer.capabilities.storage    .getController(byCapabilityID: capabilityID)    ?? panic("Cannot get the storage capability controller with ID "    .concat(capabilityID.toString())    .concat(" from the signer's account! Make sure the ID belongs to a capability that the owner controls and that it is a storage capability.")    controller.delete()    }    }            `

If the capability is an account capability:

`   transaction(capabilityID: UInt64) {    prepare(signer: auth(AccountCapabilities) &Account) {    let controller = signer.capabilities.account    .getController(byCapabilityID: capabilityID)    ?? panic("Cannot get the account capability controller with ID "    .concat(capabilityID.toString())    .concat(" from the signer's account! Make sure the ID belongs to a capability that the owner controls and that it is an account capability.")    controller.delete()    }    }            `

# Cadence Anti-Patterns

This is an opinionated list of issues that can be improved if they are found in Cadence code intended for production.

## Avoid using fully authorized account references as a function parameter

### Problem

A developer may choose to authenticate or perform operations for their users by using the users' account reference or addresses. In order to do this, they might add a parameter to a function which has an authorized account reference type (`auth(...) &Account`), as an authorized account reference can only be obtained by signing a transaction.

If it is a fully authorized account reference, this is problematic, as the fully-authorized account reference allows access to some sensitive operations on the account, for example, to write to storage, which provides the opportunity for bad actors to take advantage of.

### Example:

``   ...    // BAD CODE    // DO NOT COPY        // Imagine this code is in a contract that uses a `auth(Storage) &Account` parameter    // to authenticate users to transfer NFTs        // They could deploy the contract with an Ethereum-style access control list functionality        access(all)    fun transferNFT(id: UInt64, owner: auth(Storage) &Account) {    assert(owner(id) == owner.address)        transfer(id)    }        // But they could upgrade the function to have the same signature    // so it looks like it is doing the same thing, but they could also drain a little bit    // of FLOW from the user's vault, a totally separate piece of the account that    // should not be accessible in this function    // BAD        access(all)    fun transferNFT(id: UInt64, owner: auth(Storage) &Account) {    assert(owner(id) == owner.address)        transfer(id)        // Sneakily borrow a reference to the user's Flow Token Vault    // and withdraw a bit of FLOW    // BAD    let vaultRef = owner.borrow<&FlowToken.Vault>(/storage/flowTokenVault)!    let stolenTokens <- vaultRef.withdraw(amount: 0.1)        // deposit the stolen funds in the contract owners vault    // BAD    contractVault.deposit(from: <-stolenTokens)    }    ...            ``

### Solution

Projects should find other ways to authenticate users, such as using resources and capabilities as authentication objects. They should also expect to perform most storage and linking operations within transaction bodies rather than inside contract utility functions.

There are some scenarios where using an authorized account reference (`auth(...) &Account`) is necessary, such as a cold storage multi-sig, but those cases are rare and should only be used if it is a very restricted subset of account functionality that is required.

## Public functions and fields should be avoided

### Problem

Be sure to keep track of access modifiers when structuring your code, and make public only what should be public. Accidentally exposed fields can be a security hole.

### Solution

When writing your smart contract, look at every field and function and make sure that require access through an [entitlement](https://cadence-lang.org/docs/language/access-control#entitlements) (`access(E)`), or use a non-public [access modifier](https://cadence-lang.org/docs/language/access-control) like `access(self)`, `access(contract)`, or `access(account)`, unless otherwise needed.

## Capability-Typed public fields are a security hole

This is a specific case of "Public Functions And Fields Should Be Avoided", above.

### Problem

The values of public fields can be copied. Capabilities are value types, so if they are used as a public field, anyone can copy it from the field and call the functions that it exposes. This almost certainly is not what you want if a capability has been stored as a field on a contract or resource in this way.

### Solution

For public access to a capability, place it in an accounts public area so this expectation is explicit.

## Public admin resource creation functions are unsafe

This is a specific case of "Public Functions And Fields Should Be Avoided", above.

### Problem

A public function on a contract that creates a resource can be called by any account. If that resource provides access to admin functions then the creation function should not be public.

### Solution

To fix this, a single instance of that resource should be created in the contract's initializer, and then a new creation function can be potentially included within the admin resource, if necessary.

### Example

`   // Pseudo-code        // BAD    access(all)    contract Currency {        access(all)    resource Admin {        access(all)    fun mintTokens()    }        // Anyone in the network can call this function    // And use the Admin resource to mint tokens    access(all)    fun createAdmin(): @Admin {    return <-create Admin()    }    }        // This contract makes the admin creation private and in the initializer    // so that only the one who controls the account can mint tokens    // GOOD    access(all)    contract Currency {        access(all)    resource Admin {        access(all)    fun mintTokens()        // Only an admin can create new Admins    access(all)    fun createAdmin(): @Admin {    return <-create Admin()    }    }        init() {    // Create a single admin resource    let firstAdmin <- create Admin()        // Store it in private account storage, so only the admin can use it    self.account.storage.save(<-firstAdmin, to: /storage/currencyAdmin)    }    }            ` 

## Do not modify smart contract state or emit events in public struct initializers

This is another example of the risks of having publicly accessible parts to your smart contract.

### Problem

Data structure definitions in Cadence currently must be declared as public so that they can be used by anyone. Structs do not have the same restrictions that resources have on them, which means that anyone can create a new instance of a struct without going through any authorization.

### Solution

Any contract state-modifying operations related to the creation of structs should be contained in resources instead of the initializers of structs.

### Example

This used to be a bug in the NBA Top Shot smart contract, so we'll use that as an example. Before, when it created a new play, [it would initialize the play record with a struct,](https://github.com/dapperlabs/nba-smart-contracts/blob/55645478594858a6830e4ab095034068ef9753e9/contracts/TopShot.cdc#L155-L158) which increments the number that tracks the play IDs and emits an event:

`   // Simplified Code    // BAD    //    access(all)    contract TopShot {        // The Record that is used to track every unique play ID    access(all)    var nextPlayID: UInt32        access(all)    struct Play {        access(all)    let playID: UInt32        init() {        self.playID = TopShot.nextPlayID        // Increment the ID so that it isn't used again    TopShot.nextPlayID = TopShot.nextPlayID + 1        emit PlayCreated(id: self.playID, metadata: metadata)    }    }    }            `

This is a risk because anyone can create the `Play` struct as many times as they want, which could increment the `nextPlayID` field to the max `UInt32` value, effectively preventing new plays from being created. It also would emit bogus events.

This bug was fixed by [instead updating the contract state in the admin function](https://github.com/dapperlabs/nba-smart-contracts/blob/master/contracts/TopShot.cdc#L682-L685) that creates the plays.

`   // Update contract state in admin resource functions    // GOOD    //    access(all)    contract TopShot {        // The Record that is used to track every unique play ID    access(all)    var nextPlayID: UInt32        access(all)    struct Play {        access(all)    let playID: UInt32        init() {    self.playID = TopShot.nextPlayID    }    }        access(all)    resource Admin {        // Protected within the private admin resource    access(all)    fun createPlay() {    // Create the new Play    var newPlay = Play()        // Increment the ID so that it isn't used again    TopShot.nextPlayID = TopShot.nextPlayID + UInt32(1)        emit PlayCreated(id: newPlay.playID, metadata: metadata)        // Store it in the contract storage    TopShot.playDatas[newPlay.playID] = newPlay    }    }    }            `

# Smart Contract Project Development Standards

## Context

Smart Contracts are the bedrock piece of security for many important parts of the Flow blockchain, as well as for any project that is deployed to a blockchain.

They are also the most visible technical parts of any project, since users will be querying them for data, building other smart contracts that interact with them, and using them as learning materials and templates for future projects. Furthermore, when deployed they are publicly available code on the blockchain and often also in public GitHub repos.

Therefore, the process around designing, building, testing, documenting, and managing these projects needs to reflect the critical importance they hold in the ecosystem.

Every software project strikes a balance between effort spent on product/feature delivery vs the many other demands of the software development lifecycle, whether testing, technical debt, automation, refactoring, or documentation etc. Building in Web3 we face the same trade-offs, but in a higher risk and consequence environment than what is typical for most software. A mismanaged or untested smart contract may result in **significant** financial losses as a result of vulnerabilities which were overlooked then exploited. We highly recommend builders adopt these best practices to help mitigate these risks.

If they do so, they will be able to build better smart contracts, avoid potential bugs, support user and third-party adoption of their projects, and increase their chances of success by being a model for good software design. Additionally, the more projects that adopt good software design and management standards normalizes this behavior, encouraging other projects in the ecosystem to do the same which creates a healthier and more vibrant community.

Ensuring appropriate levels of testing results in better smart contracts which have pro-actively modeled threats and engineered against them. Ensuring appropriate levels of standards adoption ([FungibleToken](https://github.com/onflow/flow-ft), [NFT StoreFront](https://github.com/onflow/nft-storefront), etc) by dapp builders amplifies the network effects for all in the ecosystem. NFTs in one dapp can be readily consumed by other dapps through on-chain events with no new integration required. With your help and participation we can further accelerate healthy and vibrant network effects across the Flow ecosystem!

Some of these suggestions might seem somewhat unnecessary, but it is important to model what a project can do to manage its smart contracts the best so that hopefully all of the other projects follow suit.

This also assumes standard software design best practices also apply. Indeed, many of these suggestions are more general software design best practices, but there may be others that are assumed but not included here.

### Implementing These Practices

This document serves as mostly an outline of best practices the projects should follow. As with all best practices, teams will choose which applies to them and their work process, however, we recommend that teams explicitly define a minimum acceptable set of standards for themselves along with the mechanisms to ensure they are being observed.

Some teams may also have their own set of development standards that achieve a similar goal to these. These recommendations are not meant to be the only paths to success, so if a team disagrees with some of these and wants to do things their own way, they are welcome to pursue that. This document just shows some generic suggestions for teams who might not know how they want to manage their project.

## Design Process

Smart contracts usually manage a lot of value, have many users, and are difficult to upgrade for a variety of reasons. Therefore, it is important to have a clearly defined design process for the smart contracts before much code is written so that the team can set themselves up for success.

Here are some recommendations for how projects can organize the foundations of their projects.

### Projects should ensure that there is strong technical leadership for their smart contracts

Developing a dapp requires a clear vision for the role of the smart contract and how it's integrated. Security vulnerabilities may arise from bugs directly in smart contract code (and elsewhere in the system). Asynchronous interaction vectors may lead to forms of malicious abuse, DOS etc in a contract triggering explosive gas costs for the developer or other problems.

We recommend that engineers leading a project and deploying to mainnet have an understanding of software and security engineering fundamentals and have been thorough in their Cadence skills development. More in-depth resources for learning Cadence are available [here](https://cadence-lang.org/docs/).

The technical leader should be someone who understands Cadence well and has written Cadence smart contracts before. Production-level smart contracts are not the place for beginners to get their start.

It should be this person’s responsibility to lead design discussions with product managers and the community, write most of the code and tests, solicit reviews, make requested changes and make sure the project gets completed in a timely manner.

The leader should also understand how to sign transactions with the CLI to deploy/upgrade smart contracts, run admin transactions, and troubleshoot problems, etc. If something goes wrong in relation to the smart contract that needs to be handled with a bespoke transaction, it is important that the owner knows how to build and run transactions and scripts safely to address the issues and/or upgrade the smart contracts.

The project should also have a clear plan of succession in case the original owner is not available or leaves the project. It is important that there are others who can fill in who have a clear understanding of the code and requirements so they can give good feedback, perform effective reviews, and make changes where needed.

### Projects should maintain a well-organized open source repository for their smart contracts

As projects like NBA Topshot have shown, when a blockchain product becomes successful others can and do to build on top of what you are doing. Whether that is analytics, tools, or other value adds that could help grow your project ecosystem, composability is key and that depends on open source development. If there isn’t already an open source repo, builders should strongly consider creating one.

Builders can start from the [the Flow open source template](https://github.com/onflow/open-source-template) and make sure all of their repo is set up with some initial documentation for what the repo is for before any code is written. External developers and users should have an easily accessible home page to go to to understand any given project.

The repo should also have some sort of high-level design document that lays out the intended design and architecture of the smart contract. The project leads should determine what is best for them to include in the document, but some useful things to include are basic user stories, architecture of the smart contracts, and any questions that still need to be answered about it.

- Where applicable, diagrams should be made describing state machines, user flows, etc.
- This document should be shared in an issue in the open source repo where the contracts or features are being developed, then later moved to the README or another important docs page.

A high level design is a key opportunity to model threats and understand the risks of the system. The process of collaborating and reviewing designs together helps ensure that more edge-cases are captured and addressed. It's also a lot less effort to iterate on a design than on hundreds of lines of Cadence.

## Development Process Recommendations

### The Development process should be iterative, if possible

The project should develop an MVP first, get reviews, and test thoroughly, then add additional features with tests. This ensures that the core features are designed thoughtfully and makes the review process easier because they can focus on each feature one at a time instead of being overwhelmed by a huge block of code.

### Comments and field/function descriptions are essential!

Our experience writing many Cadence smart contracts has taught us how important documentation is. It especially matters what is documented and for whom, and in that way we are no different from any software language. The Why is super important, if for example something - an event - that happens in one contract leads to outcomes in a different contract. The What helps give context, the reason for the code turning out the way it is. The How, you don't document - you've written the code. Comments should be directed to those who will follow after you in changing the code.

Comments should be written at the same time (or even before) the code is written. This helps the developer and reviewers understand the work-in-progress code better, as well as the intentions of the design (for testing and reviewing). Functions should be commented with a

- Description
- Parameter descriptions
- Return value descriptions

Top Level comments and comments for types, fields, events, and functions should use `///` (three slashes) to be recognised by the [Cadence Documentation Generator](https://github.com/onflow/cadence-tools/tree/master/docgen). Regular comments within functions should only use two slashes (`//`)

## Testing Recommendations

Summarized below is a list of testing related recommendations which are noteworthy to mention for a typical smart contract project.

Popular testing frameworks to use for cadence are listed here: Cadence: [Cadence Testing Framework](https://cadence-lang.org/docs/testing-framework) Javascript: [Flow JS Testing](https://developers.flow.com/tools/flow-js-testing/index.md) Go: [Overflow](https://github.com/bjartek/overflow)

The same person who writes the code should also write the tests. They have the clearest understanding of the code paths and edge cases.

Tests should be **mandatory**, not optional, even if the contract is copied from somewhere else. There should be thorough emulator unit tests in the public repo. [See the flow fungible token repo](https://github.com/onflow/flow-ft/tree/master/tests) for an example of unit tests in cadence.

Every time there is a new Cadence version or emulator version, the dependencies of the repo should be updated to make sure the tests are all still passing.

Tests should avoid being monolithic; Individual test cases should be set up for each part of the contract to test them in isolation. See the [`FlowEpoch` smart contract tests](https://github.com/onflow/flow-core-contracts/blob/master/lib/go/test/flow_epoch_test.go) for examples written in Go where test cases are split into separate blocks for different features. There are some exceptions, like contracts that have to run through a state machine to test different cases. Positive and negative cases need to be tested.

Integration tests should also be written to ensure that your app and/or backend can interact properly with the smart contracts.

## Managing Project Keys and Deployments

Smart contract keys and deployments are very important and need to be treated as such.

### Private Keys should be stored securely

Private Keys for the contract and/or admin accounts should not be kept in plain text format anywhere. Projects should determine a secure solution that works best for them to store their private keys. We recommend storing them in a secure key store such as google KMS or something similar.

### Deployments to Testnet or Mainnet should be handled transparently

As projects become more successful, communities around them grow. In a trustless ecosystem, that also means more of others building on your contracts. Before deploying or upgrading a contract, it is important to maintain clear community communications with sufficient notice, since changes will always bring added risk. Giving community members time to review and address issues with upgrades before they happen builds trust and confidence in projects. Here are a few suggestions for how to manage a deployment or upgrade.

- Communicate to all stake-holders well in advance
    - Share the proposal with the community at least a week in advance (unless it is a critical bug fix)
        - Examples of places to share are your project's chat, forum, blog, email list, etc.
        - This will allow the community and other stakeholders to have plenty of time to view the upcoming changes and provide feedback if necessary.
    - Share the time of the deployment and the deployment transaction with branch/commit hash information to ensure the transaction itself is correct.
    - Coordinate deployment with stakeholders to make sure it is done correctly and on time.

## Responsibilities to the Community

Web3 brings tremendous possibilities for engineering applications with trustlessness and composability in mind, with Cadence and Flow offering unique features to achieve this. If every project treats their community and the Flow community with respect and care, the things we can all build together will be very powerful.

### Projects should have thorough documentation

Encouraging adoption of project contracts to the broader ecosystem raises the bar around code providing clear high-level descriptions, with detailed and useful comments within contracts, transactions, and scripts. The more that a project can be understood, that it adheres to standards, and can be built upon with ease, the more likely others will build against it in turn.

Each project should have a detailed `README.md` with these sections:

- Explanation of the project itself with links to the app
- Addresses on various networks
- High-level technical description of the contracts with emphasis on important types and functionality
- Architecture diagram (if applicable)
- Include links to tutorials if they are external
- Flow smart contract standards that a project implements

Additionally, each contract, transaction, and script should have high-level descriptions at the top of their files. This way, anyone in the community can easily come in and understand what each one is doing without having to parse confusing code.

### Projects should engage with and respond to their own Community

Once a contract is deployed, the work doesn’t stop there. Project communities require ongoing nurturing and support. As the developer of a public project on a public blockchain, the owners have an obligation to be helpful and responsive to the community so that they can encourage composability and third party interactions.

- Keep issues open in the repo.
- The owner should turn on email notifications for new issue creation in the repo.
- Respond to issues quickly and clean up unimportant ones.
- Consider blog posts to share more details on technical aspects of the project and upcoming changes.

### Projects should contribute to the greater Flow and Cadence community

Flow has a vibrant and growing community of contributors around the world. Through our mutual collaboration we've had numerous community Flow Improvement Proposals ([FLIP](https://github.com/onflow/flow/tree/master/flips)s) shipped. If you have an interest in a particular improvement for Flow or Cadence, we host open meetings which you are welcome to join (announced on discord) and can participate anytime on any of the FLIPs [already proposed](https://github.com/onflow/flow/pulls?q=is%3Aopen+is%3Apr+label%3AFLIP).

Responsible project maintainers should contribute to discussions about important proposals (new cadence features, standard smart contracts, metadata, etc) and generally be aware about evolving best practices and anti-pattern understandings. Projects who contribute to these discussions are able to influence them to ensure that the language/protocol changes are favorable to them and the rest of the app developers in the ecosystem. It also helps the owner to promote the project and themselves.

Resources for Best Practices:

- [cadence/design-pattern](https://cadence-lang.org/docs/design-patterns)
- [cadence/anti-patterns](https://cadence-lang.org/docs/anti-patterns)
- [cadence/security-best-practices](https://cadence-lang.org/docs/security-best-practices)

Composability and extensibility should also be priorities while designing, developing, and documenting their projects. (Documentation for these topics coming soon)

If you have any feedback about these guidelines, please create an issue in the `cadence-lang.org` repo or make a PR updating the guidelines so we can start a discussion.

# Cadence Security Best Practices

This is an opinionated list of best practices Cadence developers should follow to write more secure Cadence code.

Some practices listed below might overlap with advice in the [Cadence Anti-Patterns](https://cadence-lang.org/docs/design-patterns) section, which is a recommended read as well.

## References

[References](https://cadence-lang.org/docs/language/references) are ephemeral values and cannot be stored. If persistence is required, store a capability and borrow it when needed.

When exposing functionality, provide the least access necessary. When creating an authorized reference, create it with only the minimal set of entitlements required to achieve the desired functionality.

## Account Storage

Don't trust a users' [account storage](https://cadence-lang.org/docs/language/accounts/storage). Users have full control over their data and may reorganize it as they see fit. Users may store values in any path, so paths may store values of "unexpected" types. These values may be instances of types in contracts that the user deployed.

Always [borrow](https://cadence-lang.org/docs/language/accounts/capabilities) with the specific type that is expected. Or, check if the value is an instance of the expected type.

## Authorized account references

Access to an authorized account reference (`auth(...) &Account`) gives access to entitled operations, for example the account's storage, keys, and contracts.

Therefore, avoid passing an entitled account reference to a function, and when defining a function, only specify an account reference parameter with the fine-grained entitlements required to perform the necessary operations.

It is preferable to use capabilities over direct account storage access when exposing account data. Using capabilities allows the revocation of access and limits the access to a single value with a certain set of functionality.

## Capabilities

Don't issue and publish capabilities unless really necessary. Anyone can access capabilities that are published. If public access is needed, follow the [principle of least privilege/authority](https://en.wikipedia.org/wiki/Principle_of_least_privilege): Make sure that the capability type only grants access to the fields and functions that should be exposed, and nothing else. Ideally, create a capability with a reference type that is unauthorized.

If an entitlement is necessary to access the field or function, ensure it is only used for the particular field or function, and not also by other fields and functions. If needed, introduce a new, fine-grained entitlement.

When publishing a capability, a capability might already be present. It is a good practice to check if a capability already exists with `get` before creating it. This function will return `nil` if the capability does not exist.

If it is necessary to handle the case where borrowing a capability might fail, the `account.check` function can be used to verify that the target exists and has a valid type.

Ensure capabilities cannot be accessed by unauthorized parties. For example, capabilities should not be accessible through a public field, including public dictionaries or arrays. Exposing a capability in such a way allows anyone to borrow it and perform all actions that the capability allows.

## Transactions

Audits of Cadence code should also include [transactions](https://cadence-lang.org/docs/language/transactions), as they may contain arbitrary code, just, like in contracts. In addition, they are given full access to the accounts of the transaction’s signers, i.e. the transaction is allowed to manipulate the signers’ account storage, contracts, and keys.

Signing a transaction gives access to the operations accessible by the entitlements specified in the parameter types of the `prepare` block.

For example, the account reference type `auth(Storage) &Auth` is authorized is perform any storage operation.

When signing a transaction, audit which entitlements are requested.

When authoring a transaction, follow the [principle of least privilege/authority](https://en.wikipedia.org/wiki/Principle_of_least_privilege), and only request the least and most fine-grained account entitlements necessary to perform the operations of the transactions.

## Types

Use [intersection types and interfaces](https://cadence-lang.org/docs/language/types-and-type-system/intersection-types). Always use the most specific type possible, following the principle of least privilege. Types should always be as restrictive as possible, especially for resource types.

If given a less-specific type, cast to the more specific type that is expected. For example, when implementing the fungible token standard, a user may deposit any fungible token, so the implementation should cast to the expected concrete fungible token type.

## Access Control

Declaring a field as [`access(all)`](https://cadence-lang.org/docs/language/access-control) only protects from replacing the field’s value, but the value itself can still be mutated if it is mutable. Remember that containers, like dictionaries, and arrays, are mutable.

Prefer non-public access to a mutable state. That state may also be nested. For example, a child may still be mutated even if its parent exposes it through a field with non-settable access.

Do not use the `access(all)` modifier on fields unless necessary. Prefer `access(self)`, or `access(contract)` and `access(account)` when other types in the contract or account need to have access, and entitlement-based access for other cases.

# JSON-Cadence Data Interchange Format

> Version 0.3.1

JSON-Cadence is a data interchange format used to represent Cadence values as language-independent JSON objects.

This format includes less type information than a complete [ABI](https://en.wikipedia.org/wiki/Application_binary_interface), and instead promotes the following tenets:

- **Human-readability** — JSON-Cadence is easy to read and comprehend, which speeds up development and debugging.
- **Compatibility** — JSON is a common format with built-in support in most high-level programming languages, making it easy to parse on a variety of platforms.
- **Portability** — JSON-Cadence is self-describing and thus can be transported and decoded without accompanying type definitions (i.e., an ABI).

The following provides reference information and examples when working with various values and types.

## Values

### Void

`   {    "type": "Void"    }            `

**Example**

`   {    "type": "Void"    }            `

---

### Optional

`   {    "type": "Optional",    "value": null | <value>    }            `

**Example**

`   // Non-nil        {    "type": "Optional",    "value": {    "type": "UInt8",    "value": "123"    }    }        // Nil        {    "type": "Optional",    "value": null    }            `

### Bool

`   {    "type": "Bool",    "value": true | false    }            `

**Example**

`   {    "type": "Bool",    "value": true    }            `

### String

`   {    "type": "String",    "value": "..."    }            `

**Example**

`   {    "type": "String",    "value": "Hello, world!"    }            `

### Address

`   {    "type": "Address",    "value": "0x0" // as hex-encoded string with 0x prefix    }            `

**Example**

`   {    "type": "Address",    "value": "0x1234"    }            `

### Integers

`[U]Int`, `[U]Int8`, `[U]Int16`, `[U]Int32`,`[U]Int64`,`[U]Int128`, `[U]Int256`, `Word8`, `Word16`, `Word32`, `Word64`, `Word128` or `Word256`.

Although JSON supports integer literals up to 64 bits, all integer types are encoded as strings for consistency.

While the static type is not strictly required for decoding, it is provided to inform the client of the potential range.

`   {    "type": "<type>",    "value": "<decimal string representation of integer>"    }            `

**Example**

`   {    "type": "UInt8",    "value": "123"    }            `

### Fixed point numbers

- `[U]Fix64`

Although fixed point numbers are implemented as integers, JSON-Cadence uses a decimal string representation for readability.

`   {    "type": "[U]Fix64",    "value": "<integer>.<fractional>"    }            `

**Example**

`   {    "type": "Fix64",    "value": "12.3"    }            `

### Array

`   {    "type": "Array",    "value": [    <value at index 0>,    <value at index 1>    // ...    ]    }            `

**Example**

`   {    "type": "Array",    "value": [    {    "type": "Int16",    "value": "123"    },    {    "type": "String",    "value": "test"    },    {    "type": "Bool",    "value": true    }    ]    }            `

### Dictionary

Dictionaries are encoded as a list of key-value pairs to preserve the deterministic ordering implemented by Cadence.

`   {    "type": "Dictionary",    "value": [    {    "key": "<key>",    "value": <value>    },    ...    ]    }            `

**Example**

`   {    "type": "Dictionary",    "value": [    {    "key": {    "type": "UInt8",    "value": "123"    },    "value": {    "type": "String",    "value": "test"    }    }    ]    // ...    }            `

### Composites (Struct, Resource, Event, Contract, Enum)

Composite fields are encoded as a list of name-value pairs in the order in which they appear in the composite type declaration.

`   {    "type": "Struct" | "Resource" | "Event" | "Contract" | "Enum",    "value": {    "id": "<fully qualified type identifier>",    "fields": [    {    "name": "<field name>",    "value": <field value>    },    // ...    ]    }    }            `

**Example**

`   {    "type": "Resource",    "value": {    "id": "0x3.GreatContract.GreatNFT",    "fields": [    {    "name": "power",    "value": { "type": "Int", "value": "1" }    }    ]    }    }            `

### Path

`   {    "type": "Path",    "value": {    "domain": "storage" | "private" | "public",    "identifier": "..."    }    }            `

**Example**

`   {    "type": "Path",    "value": {    "domain": "storage",    "identifier": "flowTokenVault"    }    }            `

### Type value

`   {    "type": "Type",    "value": {    "staticType": <type>    }    }            `

**Example**

`   {    "type": "Type",    "value": {    "staticType": {    "kind": "Int"    }    }    }            `

### InclusiveRange

`   {    "type": "InclusiveRange",    "value": {    "start": <start_value>,    "end": <end_value>,    "step": <step_value>    }    }            `

**Example**

`   {    "type": "InclusiveRange",    "value": {    "start": {    "type": "Int256",    "value": "10"    },    "end": {    "type": "Int256",    "value": "20"    },    "step": {    "type": "Int256",    "value": "5"    }    }    }            `

### Capability

`   {    "type": "Capability",    "value": {    "id": <Number>,    "address": "0x0", // as hex-encoded string with 0x prefix    "borrowType": <type>,    }    }            `

**Example**

`   {    "type": "Capability",    "value": {    "id": "1",    "address": "0x1",    "borrowType": {    "kind": "Int"    }    }    }            `

### Functions

`   {    "type": "Function",    "value": {    "functionType": <type>    }    }            `

Function values can only be exported — they cannot be imported.

**Example**

`   {    "type": "Function",    "value": {    "functionType": {    "kind": "Function",    "typeID": "fun():Void",    "parameters": [],    "return": {    "kind": "Void"    }    }    }    }            `

## Types

### Simple Types

These are basic types such as `Int`, `String`, or `StoragePath`.

`   {    "kind": <kind>    }            `

Where `kind` is one of:

- `Account`
- `AccountCapabilityController`
- `AccountKey`
- `Address`
- `AnyResource`
- `AnyResourceAttachment`
- `AnyStruct`
- `AnyStructAttachment`
- `Block`
- `Bool`
- `Capability`
- `CapabilityPath`
- `Character`
- `DeployedContract`
- `DeploymentResult`
- `Fix64`
- `FixedPoint`
- `FixedSizeUnsignedInteger`
- `HashAlgorithm`
- `HashableStruct`
- `Int`
- `Int128`
- `Int16`
- `Int256`
- `Int32`
- `Int64`
- `Int8`
- `Integer`
- `Never`
- `Number`
- `Path`
- `PrivatePath`
- `PublicKey`
- `PublicPath`
- `SignatureAlgorithm`
- `SignedFixedPoint`
- `SignedInteger`
- `SignedNumber`
- `StorageCapabilityController`
- `StoragePath`
- `String`
- `Type`
- `UFix64`
- `UInt`
- `UInt128`
- `UInt16`
- `UInt256`
- `UInt32`
- `UInt64`
- `UInt8`
- `Void`
- `Word128`
- `Word16`
- `Word256`
- `Word32`
- `Word64`
- `Word8`

**Example**

`   {    "kind": "UInt8"    }            `

### Optional types

`   {    "kind": "Optional",    "type": <type>    }            `

**Example**

`   {    "kind": "Optional",    "type": {    "kind": "String"    }    }            `

### Variable sized array types

`   {    "kind": "VariableSizedArray",    "type": <type>    }            `

**Example**

`   {    "kind": "VariableSizedArray",    "type": {    "kind": "String"    }    }            `

### Constant sized array types

`   {    "kind": "ConstantSizedArray",    "type": <type>,    "size": <length of array>,    }            `

**Example**

`   {    "kind": "ConstantSizedArray",    "type": {    "kind": "String"    },    "size": 3    }            `

### Dictionary types

`   {    "kind": "Dictionary",    "key": <type>,    "value": <type>    }            `

**Example**

`   {    "kind": "Dictionary",    "key": {    "kind": "String"    },    "value": {    "kind": "UInt16"    }    }            `

### Composite types

`   {    "kind": "Struct" | "Resource" | "Event" | "Contract" | "StructInterface" | "ResourceInterface" | "ContractInterface",    "type": "", // this field exists only to keep parity with the enum structure below; the value must be the empty string    "typeID": "<fully qualified type ID>",    "initializers": [    <initializer at index 0>,    <initializer at index 1>    // ...    ],    "fields": [    <field at index 0>,    <field at index 1>    // ...    ],    }            `

**Example**

`   {    "kind": "Resource",    "type": "",    "typeID": "0x3.GreatContract.GreatNFT",    "initializers": [    [    {    "label": "foo",    "id": "bar",    "type": {    "kind": "String"    }    }    ]    ],    "fields": [    {    "id": "foo",    "type": {    "kind": "String"    }    }    ]    }            `

### Field types

`   {    "id": "<name of field>",    "type": <type>    }            `

**Example**

`   {    "id": "foo",    "type": {    "kind": "String"    }    }            `

### Parameter types

`   {    "label": "<label>",    "id": "<identifier>",    "type": <type>    }            `

**Example**

`   {    "label": "foo",    "id": "bar",    "type": {    "kind": "String"    }    }            `

### Initializer types

Initializer types are encoded as a list of parameters to the initializer.

`   [    <parameter at index 0>,    <parameter at index 1>,    // ...    ]            `

**Example**

`   [    {    "label": "foo",    "id": "bar",    "type": {    "kind": "String"    }    }    ]            `

### Function types

`   {    "kind": "Function",    "typeID": "<function name>",    "parameters": [    <parameter at index 0>,    <parameter at index 1>,    // ...    ],    "purity: "view" | undefined,    "return": <type>    }            `

**Example**

`   {    "kind": "Function",    "typeID": "foo",    "parameters": [    {    "label": "foo",    "id": "bar",    "type": {    "kind": "String"    }    }    ],    "purity": "view",    "return": {    "kind": "String"    }    }            `

### Reference types

`   {    "kind": "Reference",    "authorization": {    "kind": "Unauthorized" | "EntitlementMapAuthorization" | "EntitlementConjunctionSet" | "EntitlementDisjunctionSet",    "entitlements": [    <entitlement at index 0>,    <entitlement at index 1>    // ...    ]    },    "type": <type>    }            `

**Example**

`   {    "kind": "Reference",    "authorization": {    {    "kind": "EntitlementMapAuthorization",    "entitlements": [    {    "kind": "EntitlementMap",    "typeID": "foo"    }    ]    }    },    "type": {    "kind": "String"    }    }            `

### Intersection types

`   {    "kind": "Intersection",    "typeID": "<fully qualified type ID>",    "types": [    <type at index 0>,    <type at index 1>,    //...    ]    }            `

**Example**

`   {    "kind": "Intersection",    "typeID": "{0x1.FungibleToken.Receiver}",    "types": [    {    "kind": "ResourceInterface",    "typeID": "0x1.FungibleToken.Receiver",    "fields": [    {    "id": "uuid",    "type": {    "kind": "UInt64"    }    }    ],    "initializers": [],    "type": ""    }    ]    }            `

### Capability types

`   {    "kind": "Capability",    "type": <type>    }            `

**Example**

`   {    "kind": "Capability",    "type": {    "kind": "Reference",    "authorization": {    "kind": "Unauthorized",    "entitlements": null    },    "type": {    "kind": "String"    }    }    }            `

### Enum types

`   {    "kind": "Enum",    "type": <type>,    "typeID": "<fully qualified type ID>",    "initializers":[],    "fields": [    {    "id": "rawValue",    "type": <type>    }    ]    }            `

**Example**

`   {    "kind": "Enum",    "type": {    "kind": "String"    },    "typeID": "0x3.GreatContract.GreatEnum",    "initializers": [],    "fields": [    {    "id": "rawValue",    "type": {    "kind": "String"    }    }    ]    }            `

### Repeated types

When a composite type appears more than once within the same JSON type encoding, either because it is recursive or because it is repeated (e.g., in a composite field), the composite is instead represented by its type ID.

**Example**

`   {    "type": "Type",    "value": {    "staticType": {    "kind": "Resource",    "typeID": "0x3.GreatContract.NFT",    "fields": [    {    "id": "foo",    "type": {    "kind": "Optional",    "type": "0x3.GreatContract.NFT" // recursive NFT resource type is instead encoded as an ID    }    }    ],    "initializers": [],    "type": ""    }    }    }            `

### Inclusive range types

`   {    "kind": "InclusiveRange",    "element": <integer_type>    }            `

**Example**

`   {    "kind": "InclusiveRange",    "element": {    "kind": "Int"    }    }            `

# Contract Upgrades with Incompatible Changes

The following explains what to do when facing an incompatible upgrade for a contract.

## How to deploy

Please don't perform incompatible upgrades between contract versions in the same account. There is too much that can go wrong.

You can make [compatible upgrades](https://cadence-lang.org/docs/language/contract-updatability) and then run a post-upgrade function on the new contract code if needed.

If you must replace your contract rather than update it, the simplest solution is to add or increase a suffix on any named paths in the contract code (e.g., `/public/MyProjectVault` becomes `/public/MyProjectVault002`) in addition to making the incompatible changes, then create a new account and deploy the updated contract there.

note

Flow identifies types relative to addresses, so you will also need to provide _upgrade transactions_ to exchange the old contract's resources for the new contract's ones. Make sure to inform users as soon as possible when and how they will need to perform this task.

If you absolutely must keep the old address when making an incompatible upgrade, then you do so at your own risk. Make sure you perform the following actions in this exact order:

1. Delete any resources used in the contract account (e.g., an Admin resource).
2. Delete the contract from the account.
3. Deploy the new contract to the account.

warning

If any user accounts contain `structs` or `resources` from the _old_ version of the contract that have been replaced with incompatible versions in the new one, **they will not load and will cause transactions that attempt to access them to crash**. For this reason, once any users have received `structs` or `resources` from the contract, this method of making an incompatible upgrade should not be attempted!

# Measuring Time In Cadence

## Accessing time from Cadence

Both the [block height and the block timestamp](https://cadence-lang.org/docs/language/environment-information#block-information) are accessible from within Cadence code.

This means that they can be used to calculate dates and durations by smart contracts on Flow that need to lock resources until a particular point in the future, calculate values between a range of dates, or otherwise deal with the passage of time.

There are two popular strategies that are used to measure time on blockchains:

1. Use the timestamp, and optionally check that the average duration of the last N blocks is close enough to the block target duration to make an attack unlikely.
2. Use the block height directly. Block height can be treated intuitively (a hundred blocks, a thousand blocks) or can be related to estimated timestamps and thereby to time offchain by the methods described in this article.

## Time on the Flow blockchain

note

Flow currently produces blocks approximately every 0.8 seconds. Note that block height only has a loose correlation with time, as the block rate naturally fluctuates.

In addition to the natural variation described above, there are several theoretical block production attacks that could skew this relationship even further. These attacks are unlikely on Flow in the absence of byzantine nodes. The timestamp cannot be earlier than the timestamp of the previous block, and cannot be too far into the future ([currently ten seconds](https://github.com/onflow/flow-go/blob/master/module/builder/consensus/builder.go#L60)).

Proposed blocks that fail to satisfy these conditions will be rejected by Flow's consensus algorithm. But the mere possibility of these attacks places an additional limit on the confidence with which we can use block heights or block timestamps to determine offchain time from protocol-level data onchain.

The block timestamp is not the only way to identify a block within the flow of offchain time. Each block is numbered successively by its _height_ — block 70000 is followed by block 70001, 70002, and so on. Blocks with heights out of sequence are rejected by Flow's consensus algorithm. In theory the timestamp on a block should be roughly equivalent to the timestamp on the Flow genesis block, plus the block height multiplied by the target block rate. But as we have seen, both the target and the onchain average rate of block production may vary over time. This makes such calculations more difficult.

### Using the timestamp

Given that [Flow consensus will reject new blocks](https://github.com/onflow/flow-go/blob/1e8a2256171d5fd576f442d0c335c9bcc06e1e09/module/builder/consensus/builder.go#L525-L536) with a timestamp more than ten seconds into the future from the previous block, as long as you do not require an accuracy of less than ten seconds it is probably safe to use the block timestamp for events lasting a few days — in the absence of a change in block production rate targets. Or, more intuitively, your timestamp is highly likely to be the correct hour, very likely to be the correct minute, and may well be within ten seconds of the correct second. Which of these scales is tolerable for your use case depends on how long the events you need to represent will take. In an auction lasting several days, you are probably safe with any scale above ten seconds.

`   // To get the timestamp of the block that the code is being executed in    getCurrentBlock().timestamp        // To get the timestamp of a known previous block, if available    getBlock(at: 70001)?.timestamp            `

### Using the block height

In theory block numbers are more reliable than timestamps, as the block height is incremented for each block in a fork. But in practice we must still relate block numbers to offchain time values, and to do this requires that we assume that the average block time will hold. This can vary due to factors other than attacks. Given that block time targets will vary as Flow development continues, this will affect any calculations you may make in order to relate block numbers to calendar time.

`   // To get the block number of the block that the code is being executed in    getCurrentBlock().height        // To get the block number of a known previous block, if available    getBlock(at: 70001)?.height            `

## Recommendations

If your contract code can tolerate the limitations described above, use block timestamps. If not, you may need to consider more exotic solutions (e.g., time oracles, and so on).

Whichever method you use, be careful not to hardcode any assumptions about block rates production rates into your code, onchain or off, in a way that cannot be updated later. Block production rates can and will change over time.

Onchain auctions and similar mechanisms should always have an extension mechanism. If someone bids at the last moment (which is easier to do with a block production attack), the end time for the auction extends (if necessary) to N minutes past the last bid (10 minutes, 30 minutes, an hour). As N increases, this becomes more secure: N=5 should be more than enough with the current parameters of the Flow blockchain.

# Cadence Testing Framework

The Cadence testing framework provides a convenient way to write tests for Cadence programs in Cadence. This functionality is provided by the built-in `Test` contract.

tip

The testing framework can only be used offchain (e.g., by using the [Flow CLI](https://developers.flow.com/tools/flow-cli)).

Tests must be written in the form of a Cadence script. A test script may contain testing functions that starts with the `test` prefix, a `setup` function that always runs before the tests, a `tearDown` function that always runs at the end of all test cases, a `beforeEach` function that runs before each test case, and an `afterEach` function that runs after each test case. All of the above four functions are optional.

``   // A `setup` function that always runs before the rest of the test cases.    // Can be used to initialize things that would be used across the test cases.    // e.g: initialling a blockchain backend, initializing a contract, etc.    access(all)    fun setup() {    }        // The `beforeEach` function runs before each test case. Can be used to perform    // some state cleanup before each test case, among other things.    access(all)    fun beforeEach() {    }        // The `afterEach` function runs after each test case. Can be used to perform    // some state cleanup after each test case, among other things.    access(all)    fun afterEach() {    }        // Valid test functions start with the 'test' prefix.    access(all)    fun testSomething() {    }        access(all)    fun testAnotherThing() {    }        access(all)    fun testMoreThings() {    }        // Test functions cannot have any arguments or return values.    access(all)    fun testInvalidSignature(message: String): Bool {    }        // A `tearDown` function that always runs at the end of all test cases.    // e.g: Can be used to stop the blockchain back-end used for tests, etc. or any cleanup.    access(all)    fun tearDown() {    }            ``

## Test standard library

The testing framework can be used by importing the built-in `Test` contract:

`   import Test            `

## Assertions

### Test.assert

`   view fun assert(_ condition: Bool, message: String)            `

Fails a test case if the given condition is false, and reports a message that explains why the condition is false.

The message argument is optional.

`   import Test        access(all)    fun testExample() {    Test.assert(2 == 2)    Test.assert([1, 2, 3].length == 0, message: "Array length is not 0")    }            `

### Test.fail

`   view fun fail(message: String)            `

Immediately fails a test case, with a message explaining the reason to fail the test.

The message argument is optional.

`   import Test        access(all)    fun testExample() {    let array = [1, 2, 3]        if array.length != 0 {    Test.fail(message: "Array length is not 0")    }    }            `

### Test.expect

`   fun expect(_ value: AnyStruct, _ matcher: Matcher)            `

The `expect` function tests a value against a matcher (see [matchers](https://cadence-lang.org/docs/testing-framework#matchers) section), and fails the test if it's not a match.

`   import Test        access(all)    fun testExample() {    let array = [1, 2, 3]        Test.expect(array.length, Test.equal(3))    }            `

### Test.assertEqual

`   fun assertEqual(_ expected: AnyStruct, _ actual: AnyStruct)            `

The `assertEqual` function fails the test case if the given values are not equal, and reports a message that explains how the two values differ.

`   import Test        access(all)    struct Foo {        access(all)    let answer: Int        init(answer: Int) {    self.answer = answer    }    }        access(all)    fun testExample() {    Test.assertEqual("this string", "this string")    Test.assertEqual(21, 21)    Test.assertEqual(true, true)    Test.assertEqual([1, 2, 3], [1, 2, 3])    Test.assertEqual(    {1: true, 2: false, 3: true},    {1: true, 2: false, 3: true}    )        let address1 = Address(0xf8d6e0586b0a20c7)    let address2 = Address(0xf8d6e0586b0a20c7)    Test.assertEqual(address1, address2)        let foo1 = Foo(answer: 42)    let foo2 = Foo(answer: 42)        Test.assertEqual(foo1, foo2)        let number1: Int64 = 100    let number2: UInt64 = 100    // Note that the two values need to have exactly the same type,    // and not just value, otherwise the assertion fails:    // assertion failed: not equal: expected: 100, actual: 100    Test.assertEqual(number1, number2)    }            `

### Test.expectFailure

`   fun expectFailure(_ functionWrapper: ((): Void), errorMessageSubstring: String)            `

The `expectFailure` function wraps a function call in a closure and expects it to fail with an error message that contains the given error message portion.

`   import Test        access(all)    struct Foo {    access(self)    let answer: UInt8        init(answer: UInt8) {    self.answer = answer    }        access(all)    fun correctAnswer(_ input: UInt8): Bool {    if self.answer != input {    panic("wrong answer!")    }    return true    }    }        access(all)    fun testExample() {    let foo = Foo(answer: 42)        Test.expectFailure(fun(): Void {    foo.correctAnswer(43)    }, errorMessageSubstring: "wrong answer!")    }            `

## Matchers

A matcher is an object that consists of a test function and associated utility functionality.

`   access(all)    struct Matcher {        access(all)    let test: fun(AnyStruct): Bool        access(all)    init(test: fun(AnyStruct): Bool) {    self.test = test    }        /// Combine this matcher with the given matcher.    /// Returns a new matcher that succeeds if this and the given matcher succeed.    ///    access(all)    fun and(_ other: Matcher): Matcher {    return Matcher(test: fun (value: AnyStruct): Bool {    return self.test(value) && other.test(value)    })    }        /// Combine this matcher with the given matcher.    /// Returns a new matcher that succeeds if this or the given matcher succeeds.    ///    access(all)    fun or(_ other: Matcher): Matcher {    return Matcher(test: fun (value: AnyStruct): Bool {    return self.test(value) || other.test(value)    })    }    }            `

The `test` function defines the evaluation criteria for a value and returns a boolean indicating whether the value conforms to the test criteria defined in the function.

The `and` and `or` functions can be used to combine this matcher with another matcher to produce a new matcher with multiple testing criteria. The `and` method returns a new matcher that succeeds if both this and the given matcher are succeeded. The `or` method returns a new matcher that succeeds if at least this or the given matcher is succeeded.

A matcher that accepts a generic-typed test function can be constructed using the `newMatcher` function.

`   view fun newMatcher<T: AnyStruct>(_ test: fun(T): Bool): Test.Matcher            `

The type parameter `T` is bound to `AnyStruct` type. It is also optional.

For example, a matcher that checks whether a given integer value is negative can be defined as follows:

``   import Test        access(all)    fun testExample() {    let isNegative = Test.newMatcher(fun (_ value: Int): Bool {    return value <0 //>   })        Test.expect(-15, isNegative)    // Alternatively, we can use `Test.assert` and the matcher's `test` function.    Test.assert(isNegative.test(-15), message: "number is not negative")    }        access(all)    fun testCustomMatcherUntyped() {    let matcher = Test.newMatcher(fun (_ value: AnyStruct): Bool {    if !value.getType().isSubtype(of: Type<Int>()) {    return false    }        return (value as! Int) > 5    })        Test.expect(8, matcher)    }        access(all)    fun testCustomMatcherTyped() {    let matcher = Test.newMatcher<Int>(fun (_ value: Int): Bool {    return value == 7    })        Test.expect(7, matcher)    }            ``

The `Test` contract provides some built-in matcher functions for convenience.

### Test.equal

`   view fun equal(_ value: AnyStruct): Matcher            `

The `equal` function returns a matcher that succeeds if the tested value is equal to the given value. Accepts an `AnyStruct` value.

`   import Test        access(all)    fun testExample() {    let array = [1, 2, 3]        Test.expect([1, 2, 3], Test.equal(array))    }            `

### Test.beGreaterThan

`   view fun beGreaterThan(_ value: Number): Matcher            `

The `beGreaterThan` function returns a matcher that succeeds if the tested value is a number and greater than the given number.

`   import Test        access(all)    fun testExample() {    let str = "Hello, there"        Test.expect(str.length, Test.beGreaterThan(5))    }            `

### Test.beLessThan

`   view fun beLessThan(_ value: Number): Matcher            `

The `beLessThan` function returns a matcher that succeeds if the tested value is a number and less than the given number.

`   import Test        access(all)    fun testExample() {    let str = "Hello, there"        Test.expect(str.length, Test.beLessThan(15))    }            `

### Test.beNil

`   view fun beNil(): Matcher            `

The `beNil` function returns a new matcher that checks if the given test value is nil.

`   import Test        access(all)    fun testExample() {    let message: String? = nil        Test.expect(message, Test.beNil())    }            `

### Test.beEmpty

`   view fun beEmpty(): Matcher            `

The `beEmpty` function returns a matcher that succeeds if the tested value is an array or dictionary and the tested value contains no elements.

`   import Test        access(all)    fun testExample() {    let array: [String] = []        Test.expect(array, Test.beEmpty())        let dictionary: {String: String} = {}        Test.expect(dictionary, Test.beEmpty())    }            `

### Test.haveElementCount

`   view fun haveElementCount(_ count: Int): Matcher            `

The `haveElementCount` function returns a matcher that succeeds if the tested value is an array or dictionary and has the given number of elements.

`   import Test        access(all)    fun testExample() {    let array: [String] = ["one", "two", "three"]        Test.expect(array, Test.haveElementCount(3))        let dictionary: {String: Int} = {"one": 1, "two": 2, "three": 3}        Test.expect(dictionary, Test.haveElementCount(3))    }            `

### Test.contain

`   view fun contain(_ element: AnyStruct): Matcher            `

The `contain` function returns a matcher that succeeds if the tested value is an array that contains a value that is equal to the given value, or the tested value is a dictionary that contains an entry where the key is equal to the given value.

`   access(all)    fun testExample() {    let array: [String] = ["one", "two", "three"]        Test.expect(array, Test.contain("one"))        let dictionary: {String: Int} = {"one": 1, "two": 2, "three": 3}        Test.expect(dictionary, Test.contain("two"))    }            `

### Test.beSucceeded

`   fun beSucceeded(): Matcher            `

The `beSucceeded` function returns a new matcher that checks if the given test value is either a ScriptResult or TransactionResult and the ResultStatus is succeeded. Returns false in any other case.

`   import Test        access(all)    fun testExample() {    let blockchain = Test.newEmulatorBlockchain()    let result = blockchain.executeScript(    "access(all) fun main(): Int { return 2 + 3 }",    []    )        Test.expect(result, Test.beSucceeded())    Test.assertEqual(5, result.returnValue! as! Int)    }            `

### Test.beFailed

`   fun beFailed(): Matcher            `

The `beFailed` function returns a new matcher that checks if the given test value is either a ScriptResult or TransactionResult and the ResultStatus is failed. Returns false in any other case.

`   import Test        access(all)    fun testExample() {    let blockchain = Test.newEmulatorBlockchain()    let account = blockchain.createAccount()        let tx = Test.Transaction(    code: "transaction { execute{ panic(\"some error\") } }",    authorizers: [],    signers: [account],    arguments: [],    )        let result = blockchain.executeTransaction(tx)        Test.expect(result, Test.beFailed())    }            `

## Matcher combinators

The built-in matchers, as well as custom matchers, can be combined with the three available combinators:

- `not`
- `or`
- `and`

This assures more elaborate matchers and increases re-usability.

### not

`   fun not(_ matcher: Matcher): Matcher            `

The `not` function returns a new matcher that negates the test of the given matcher.

`   import Test        access(all)    fun testExample() {    let isEven = Test.newMatcher<Int>(fun (_ value: Int): Bool {    return value % 2 == 0    })        Test.expect(8, isEven)    Test.expect(7, Test.not(isEven))        let isNotEmpty = Test.not(Test.beEmpty())        Test.expect([1, 2, 3], isNotEmpty)    }            `

### or

`   fun or(_ other: Matcher): Matcher            `

The `Matcher.or` function combines this matcher with the given matcher. Returns a new matcher that succeeds if this or the given matcher succeed. If this matcher succeeds, then the other matcher would not be tested.

`   import Test        access(all)    fun testExample() {    let one = Test.equal(1)    let two = Test.equal(2)        let oneOrTwo = one.or(two)        Test.expect(2, oneOrTwo)    }            `

### and

`   fun and(_ other: Matcher): Matcher            `

The `Matcher.and` function combines this matcher with the given matcher. Returns a new matcher that succeeds if this and the given matcher succeed.

`   import Test        access(all)    fun testExample() {    let sevenOrMore = Test.newMatcher<Int>(fun (_ value: Int): Bool {    return value >= 7    })    let lessThanTen = Test.newMatcher<Int>(fun (_ value: Int): Bool {    return value <= 10    })        let betweenSevenAndTen = sevenOrMore.and(lessThanTen)        Test.expect(8, betweenSevenAndTen)    }            ` =>//

## Blockchain

A blockchain is an environment to which transactions can be submitted to, and against which scripts can be run. It imitates the behavior of a real network for testing.

``   /// Blockchain emulates a real network.    ///    access(all)    struct Blockchain {        access(all)    let backend: AnyStruct{BlockchainBackend}        init(backend: AnyStruct{BlockchainBackend}) {    self.backend = backend    }        /// Executes a script and returns the script return value and the status.    /// `returnValue` field of the result will be `nil` if the script failed.    ///    access(all)    fun executeScript(_ script: String, _ arguments: [AnyStruct]): ScriptResult {    return self.backend.executeScript(script, arguments)    }        /// Creates a signer account by submitting an account creation transaction.    /// The transaction is paid by the service account.    /// The returned account can be used to sign and authorize transactions.    ///    access(all)    fun createAccount(): Account {    return self.backend.createAccount()    }        /// Add a transaction to the current block.    ///    access(all)    fun addTransaction(_ tx: Transaction) {    self.backend.addTransaction(tx)    }        /// Executes the next transaction in the block, if any.    /// Returns the result of the transaction, or nil if no transaction was scheduled.    ///    access(all)    fun executeNextTransaction(): TransactionResult? {    return self.backend.executeNextTransaction()    }        /// Commit the current block.    /// Committing will fail if there are un-executed transactions in the block.    ///    access(all)    fun commitBlock() {    self.backend.commitBlock()    }        /// Executes a given transaction and commits the current block.    ///    access(all)    fun executeTransaction(_ tx: Transaction): TransactionResult {    self.addTransaction(tx)    let txResult = self.executeNextTransaction()!    self.commitBlock()    return txResult    }        /// Executes a given set of transactions and commits the current block.    ///    access(all)    fun executeTransactions(_ transactions: [Transaction]): [TransactionResult] {    for tx in transactions {    self.addTransaction(tx)    }        var results: [TransactionResult] = []    for tx in transactions {    let txResult = self.executeNextTransaction()!    results.append(txResult)    }        self.commitBlock()    return results    }        /// Deploys a given contract, and initializes it with the arguments.    ///    access(all)    fun deployContract(    name: String,    path: String,    arguments: [AnyStruct]    ): Error? {    return self.backend.deployContract(    name: name,    path: path,    arguments: arguments    )    }        /// Set the configuration to be used by the blockchain.    /// Overrides any existing configuration.    ///    access(all)    fun useConfiguration(_ configuration: Configuration) {    self.backend.useConfiguration(configuration)    }        /// Returns all the logs from the blockchain, up to the calling point.    ///    access(all)    fun logs(): [String] {    return self.backend.logs()    }        /// Returns the service account of the blockchain. Can be used to sign    /// transactions with this account.    ///    access(all)    fun serviceAccount(): Account {    return self.backend.serviceAccount()    }        /// Returns all events emitted from the blockchain.    ///    access(all)    fun events(): [AnyStruct] {    return self.backend.events(nil)    }        /// Returns all events emitted from the blockchain,    /// filtered by type.    ///    access(all)    fun eventsOfType(_ type: Type): [AnyStruct] {    return self.backend.events(type)    }        /// Resets the state of the blockchain to the given height.    ///    access(all)    fun reset(to height: UInt64) {    self.backend.reset(to: height)    }        /// Moves the time of the blockchain by the given delta,    /// which should be passed in the form of seconds.    ///    access(all)    fun moveTime(by delta: Fix64) {    self.backend.moveTime(by: delta)    }    }            ``

The `BlockchainBackend` provides the actual functionality of the blockchain.

`   /// BlockchainBackend is the interface to be implemented by the backend providers.    ///    access(all)    struct interface BlockchainBackend {        access(all)    fun executeScript(_ script: String, _ arguments: [AnyStruct]): ScriptResult        access(all)    fun createAccount(): Account        access(all)    fun addTransaction(_ tx: Transaction)        access(all)    fun executeNextTransaction(): TransactionResult?        access(all)    fun commitBlock()        access(all)    fun deployContract(    name: String,    path: String,    arguments: [AnyStruct]    ): Error?        access(all)    fun useConfiguration(_ configuration: Configuration)        access(all)    fun logs(): [String]        access(all)    fun serviceAccount(): Account        access(all)    fun events(_ type: Type?): [AnyStruct]        access(all)    fun reset(to height: UInt64)        access(all)    fun moveTime(by delta: Fix64)    }            `

### Creating a blockchain

A new blockchain instance can be created using the `Test.newEmulatorBlockchain` method. It returns a `Blockchain`, which is backed by a new [Flow Emulator](https://developers.flow.com/tools/emulator) instance.

`   import Test        access(all)    let blockchain = Test.newEmulatorBlockchain()            `

### Creating accounts

It may be necessary to create accounts during tests for various reasons, such as for deploying contracts, signing transactions, and so on. An account can be created using the `createAccount` function.

`   import Test        access(all)    let blockchain = Test.newEmulatorBlockchain()        access(all)    let account = blockchain.createAccount()        access(all)    fun testExample() {    log(account.address)    }            `

The following response is returned when running the above command from the command line:

`   flow test tests/test_sample_usage.cdc    3:31PM DBG LOG: 0x01cf0e2f2f715450        Test results: "tests/test_sample_usage.cdc"    - PASS: testExample            `

The returned account consists of the `address` of the account and a `publicKey` associated with it.

`   /// Account represents info about the account created on the blockchain.    ///    access(all)    struct Account {        access(all)    let address: Address        access(all)    let publicKey: PublicKey        init(address: Address, publicKey: PublicKey) {    self.address = address    self.publicKey = publicKey    }    }            `

### Executing scripts

Scripts can be run with the `executeScript` function, which returns a `ScriptResult`. The function takes script code as the first argument, and the script arguments as an array as the second argument.

``   import Test        access(all)    let blockchain = Test.newEmulatorBlockchain()        access(all)    fun testExample() {    let code = "access(all) fun main(name: String): String { return \"Hello, \".concat(name) }"    let args = ["Peter"]        let scriptResult = blockchain.executeScript(code, args)        // Assert that the script was successfully executed.    Test.expect(scriptResult, Test.beSucceeded())        // returnValue has always the type `AnyStruct`,    // so we need to type-cast accordingly.    let returnValue = scriptResult.returnValue! as! String        Test.assertEqual("Hello, Peter", returnValue)    }            ``

The script result consists of the `status` of the script execution, a `returnValue` if the script execution was successful, or an `error` otherwise (see [errors](https://cadence-lang.org/docs/testing-framework#errors) section for more details on errors).

`   /// The result of a script execution.    ///    access(all)    struct ScriptResult {        access(all)    let status: ResultStatus        access(all)    let returnValue: AnyStruct?        access(all)    let error: Error?        init(status: ResultStatus, returnValue: AnyStruct?, error: Error?) {    self.status = status    self.returnValue = returnValue    self.error = error    }    }            `

### Executing transactions

A transaction must be created with the transaction code, a list of authorizes, a list of signers that would sign the transaction, and the transaction arguments.

`   /// Transaction that can be submitted and executed on the blockchain.    ///    access(all)    struct Transaction {        access(all)    let code: String        access(all)    let authorizers: [Address]        access(all)    let signers: [Account]        access(all)    let arguments: [AnyStruct]        init(code: String, authorizers: [Address], signers: [Account], arguments: [AnyStruct]) {    self.code = code    self.authorizers = authorizers    self.signers = signers    self.arguments = arguments    }    }            `

The number of authorizers must match the number of `&Account` parameters in the `prepare` block of the transaction.

`   import Test        access(all)    let blockchain = Test.newEmulatorBlockchain()        access(all)    let account = blockchain.createAccount()        // There are two ways to execute the created transaction.        access(all)    fun testExample() {    let tx = Test.Transaction(    code: "transaction { prepare(acct: &Account) {} execute{} }",    authorizers: [account.address],    signers: [account],    arguments: [],    )        // Executing the transaction immediately    // This may fail if the current block contains    // transactions that have not being executed yet.    let txResult = blockchain.executeTransaction(tx)        Test.expect(txResult, Test.beSucceeded())    }        access(all)    fun testExampleTwo() {    let tx = Test.Transaction(    code: "transaction { prepare(acct: &Account) {} execute{} }",    authorizers: [account.address],    signers: [account],    arguments: [],    )        // Add to the current block    blockchain.addTransaction(tx)        // Execute the next transaction in the block    let txResult = blockchain.executeNextTransaction()!        Test.expect(txResult, Test.beSucceeded())    }            `

The result of a transaction consists of the status of the execution, and an `Error` if the transaction failed.

`   /// The result of a transaction execution.    ///    access(all)    struct TransactionResult {        access(all)    let status: ResultStatus        access(all)    let error: Error?        init(status: ResultStatus, error: Error?) {    self.status = status    self.error = error    }    }            `

### Commit block

`commitBlock` block commits the current block and will fail if there are any unexecuted transactions in the block.

``   import Test        access(all)    let blockchain = Test.newEmulatorBlockchain()        access(all)    let account = blockchain.createAccount()        access(all)    fun testExample() {    let tx = Test.Transaction(    code: "transaction { prepare(acct: &Account) {} execute{} }",    authorizers: [account.address],    signers: [account],    arguments: [],    )        blockchain.commitBlock()        blockchain.addTransaction(tx)        // This will fail with `error: internal error: pending block with ID 1f9...c0b7740d2 cannot be committed before execution`    blockchain.commitBlock()    }            ``

### Deploying contracts

A contract can be deployed using the `deployContract` function of the `Blockchain`.

Suppose we have this contract (`Foo.cdc`):

`   access(all)    contract Foo {        access(all)    let msg: String        init(_ msg: String) {    self.msg = msg    }        access(all)    fun sayHello(): String {    return self.msg    }    }            `

`   import Test        access(all)    let blockchain = Test.newEmulatorBlockchain()        access(all)    let account = blockchain.createAccount()        access(all)    fun testExample() {    let err = blockchain.deployContract(    name: "Foo",    path: "./Foo.cdc",    arguments: ["hello from args"],    )        Test.expect(err, Test.beNil())    }            `

An `Error` is returned if the contract deployment fails. Otherwise, a `nil` is returned.

### Configuring import addresses

A common pattern in Cadence projects is to define the imports as file locations and specify the addresses corresponding to each network in the [Flow CLI configuration file](https://developers.flow.com/tools/flow-cli/flow.json/configuration.md#contracts). When writing tests for such a project, it may also require to specify the addresses to be used during the tests as well. However, during tests, since accounts are created dynamically and the addresses are also generated dynamically, specifying the addresses statically in a configuration file is not an option.

Hence, the test framework provides a way to specify the addresses using the `useConfiguration(_ configuration: Test.Configuration)` function in `Blockchain`.

The `Configuration` struct consists of a mapping of import locations to their addresses.

`   /// Configuration to be used by the blockchain.    /// Can be used to set the address mapping.    ///    access(all)    struct Configuration {        access(all)    let addresses: {String: Address}        init(addresses: {String: Address}) {    self.addresses = addresses    }    }            `

tip

The `Blockchain.useConfiguration` is a run-time alternative for [statically defining contract addresses](https://developers.flow.com/tools/flow-cli/flow.json/configuration.md#advanced-format) in the flow.json config file.

The configurations can be specified during the test setup as a best practice.

For example, assume running a script that imports the above `Foo.cdc` contract. The import location for the contract can be specified using the placeholder `"Foo"`. This placeholder can be any unique string.

Suppose this script is saved in `say_hello.cdc`:

`   import "Foo"        access(all)    fun main(): String {    return Foo.sayHello()    }            `

Then, before executing the script, the address mapping can be specified as follows:

`   import Test        access(all)    let blockchain = Test.newEmulatorBlockchain()        access(all)    let account = blockchain.createAccount()        access(all)    fun setup() {    blockchain.useConfiguration(Test.Configuration({    "Foo": account.address    }))        let err = blockchain.deployContract(    name: "Foo",    path: "./Foo.cdc",    arguments: ["hello from args"],    )        Test.expect(err, Test.beNil())    }        access(all)    fun testExample() {    let script = Test.readFile("say_hello.cdc")    let scriptResult = blockchain.executeScript(script, [])        Test.expect(scriptResult, Test.beSucceeded())        let returnValue = scriptResult.returnValue! as! String        Test.assertEqual("hello from args", returnValue)    }            `

The subsequent operations on the blockchain (e.g., contract deployment and script/transaction execution) will resolve the import locations to the provided addresses.

### Errors

An `Error` maybe returned when an operation (such as executing a script, executing a transaction, and so on) has failed. It contains a message indicating why the operation failed.

`   // Error is returned if something has gone wrong.    //    access(all)    struct Error {        access(all)    let message: String        init(_ message: String) {    self.message = message    }    }            `

An `Error` can be asserted against its presence or absence.

`   import Test        access(all)    let blockchain = Test.newEmulatorBlockchain()        access(all)    let account = blockchain.createAccount()        access(all)    fun testExample() {    let script = Test.readFile("say_hello.cdc")    let scriptResult = blockchain.executeScript(script, [])        // If we expect a script to fail, we can use Test.beFailed() instead    Test.expect(scriptResult, Test.beSucceeded())        let tx = Test.Transaction(    code: "transaction { prepare(acct: &Account) {} execute{} }",    authorizers: [account.address],    signers: [account],    arguments: [],    )    let txResult = blockchain.executeTransaction(tx)        // If we expect a transaction to fail, we can use Test.beFailed() instead    Test.expect(txResult, Test.beSucceeded())        let err: Test.Error? = txResult.error        if err != nil {    log(err!.message)    }    }            `

## Blockchain events

We can also assert that certain events were emitted from the blockchain, up to the latest block.

Suppose we have this contract (`Foo.cdc`):

`   access(all)    contract Foo {        access(all)    let msg: String        access(all)    event ContractInitialized(msg: String)        init(_ msg: String) {    self.msg = msg    emit ContractInitialized(msg: self.msg)    }        access(all)    fun sayHello(): String {    return self.msg    }    }            `

`   import Test        access(all)    let blockchain = Test.newEmulatorBlockchain()        access(all)    let account = blockchain.createAccount()        access(all)    fun setup() {    blockchain.useConfiguration(Test.Configuration({    "Foo": account.address    }))        let err = blockchain.deployContract(    name: "Foo",    path: "./Foo.cdc",    arguments: ["hello from args"],    )        Test.expect(err, Test.beNil())        // As of now, we have to construct the composite type by hand,    // until the testing framework allows developers to import    // contract types, e.g.:    // let typ = Type<FooContract.ContractInitialized>()    let typ = CompositeType("A.01cf0e2f2f715450.Foo.ContractInitialized")!    let events = blockchain.eventsOfType(typ)    Test.assertEqual(1, events.length)        // We can also fetch all events emitted from the blockchain    log(blockchain.events())    }            `

## Commonly used contracts

The commonly used contracts are already deployed on the blockchain and can be imported without any additional setup.

Suppose this script is saved in `get_type_ids.cdc`:

`   import "FungibleToken"    import "FlowToken"    import "NonFungibleToken"    import "MetadataViews"    import "ViewResolver"    import "ExampleNFT"    import "NFTStorefrontV2"    import "NFTStorefront"        access(all)    fun main(): [String] {    return [    Type<FlowToken>().identifier,    Type<NonFungibleToken>().identifier,    Type<MetadataViews>().identifier    ]    }            `

`   import Test        access(all)    let blockchain = Test.newEmulatorBlockchain()        access(all)    fun testExample() {    let script = Test.readFile("get_type_ids.cdc")    let scriptResult = blockchain.executeScript(script, [])        Test.expect(scriptResult, Test.beSucceeded())        let returnValue = scriptResult.returnValue! as! [String]        let expected = [    "A.0ae53cb6e3f42a79.FlowToken",    "A.f8d6e0586b0a20c7.NonFungibleToken",    "A.f8d6e0586b0a20c7.MetadataViews"    ]        Test.assertEqual(expected, returnValue)    }            `

## Reading from files

Writing tests often require constructing source code of contracts/transactions/scripts in the test script. Testing framework provides a convenient way to load programs from a local file, without having to manually construct them within the test script.

`   let contractCode = Test.readFile("./sample/contracts/FooContract.cdc")            `

`readFile` returns the content of the file as a string.

## Logging

The `log` function is available for usage both in test scripts, as well as contracts/scripts/transactions.

The `Blockchain.logs()` method aggregates all logs from contracts/scripts/transactions.

`   import Test        access(all)    let blockchain = Test.newEmulatorBlockchain()        access(all)    let account = blockchain.createAccount()        access(all)    fun testExample() {    let tx = Test.Transaction(    code: "transaction { prepare(acct: &Account) {} execute{ log(\"in a transaction\") } }",    authorizers: [account.address],    signers: [account],    arguments: [],    )        let txResult = blockchain.executeTransaction(tx)        Test.expect(txResult, Test.beSucceeded())    Test.assertEqual(["in a transaction"], blockchain.logs())    }            `

## Examples

This [repository](https://github.com/m-Peter/flow-code-coverage) contains some functional examples that demonstrate most of the above features, both for contrived and real-world smart contracts. It also contains a detailed explanation about using code coverage from within the testing framework.

