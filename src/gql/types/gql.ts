/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query Me {\n    me {\n      ... on Account {\n        address\n        twitterId\n        twitterName\n        twitterUsername\n        twitterAvatar\n        telegramId\n        telegramName\n        telegramUsername\n        telegramAvatar\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": typeof types.MeDocument,
    "\n  mutation DisconnectTwitter {\n    disconnectTwitter {\n      ... on Account {\n        address\n        twitterId\n        twitterName\n        twitterUsername\n        twitterAvatar\n        telegramId\n        telegramName\n        telegramUsername\n        telegramAvatar\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": typeof types.DisconnectTwitterDocument,
    "\n  mutation DisconnectTelegram {\n    disconnectTelegram {\n      ... on Account {\n        address\n        twitterId\n        twitterName\n        twitterUsername\n        twitterAvatar\n        telegramId\n        telegramName\n        telegramUsername\n        telegramAvatar\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": typeof types.DisconnectTelegramDocument,
    "\n  mutation GenerateSubthread(\n    $prompt: String!\n    $style: SubthreadStyle\n    $threadId: String\n    $imageUrl: String\n    $numImages: Float\n    $strength: Float\n  ) {\n    generateSubthread(\n      prompt: $prompt\n      style: $style\n      threadId: $threadId\n      imageUrl: $imageUrl\n      numImages: $numImages\n      strength: $strength\n    ) {\n      ... on Subthread {\n        _id\n        address\n        createdAt\n        updatedAt\n        threadId\n        prompt\n        style\n        imageUrl\n        strength\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": typeof types.GenerateSubthreadDocument,
    "\n  mutation GenerateImage($subthreadId: String!) {\n    generateImage(subthreadId: $subthreadId) {\n      ... on GenRequest {\n        _id\n        subthreadId\n        address\n        status\n        metadata\n        type\n        images {\n          alt\n          keyS3\n          size\n          type\n          url\n        }\n        model_mesh {\n          alt\n          keyS3\n          size\n          type\n          url\n        }\n        timings {\n          inference\n        }\n        credits\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": typeof types.GenerateImageDocument,
    "\n  mutation GenerateModel(\n    $subthreadId: String!\n    $imageRequestId: String\n    $imageUrl: String!\n  ) {\n    generateModel(\n      subthreadId: $subthreadId\n      imageRequestId: $imageRequestId\n      imageUrl: $imageUrl\n    ) {\n      ... on GenRequest {\n        _id\n        subthreadId\n        address\n        status\n        metadata\n        type\n        images {\n          alt\n          keyS3\n          size\n          type\n          url\n        }\n        model_mesh {\n          alt\n          keyS3\n          size\n          type\n          url\n        }\n        timings {\n          inference\n        }\n        credits\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": typeof types.GenerateModelDocument,
    "\n  query GetThreads($pagination: Pagination, $filters: ThreadFilter) {\n    getThreads(pagination: $pagination, filters: $filters) {\n      ... on ThreadsPage {\n        items {\n          _id\n          createdAt\n          updatedAt\n          address\n          title\n          style\n        }\n        metadata {\n          limit\n          offset\n          orderBy\n          orderDirection\n          numElements\n          page\n          pages\n        }\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": typeof types.GetThreadsDocument,
    "\n  query GetSubthreads($pagination: Pagination, $filters: SubthreadFilter) {\n    getSubthreads(pagination: $pagination, filters: $filters) {\n      ... on HandledError {\n        code\n        message\n      }\n      ... on SubthreadsPage {\n        items {\n          _id\n          address\n          createdAt\n          updatedAt\n          address\n          threadId\n          prompt\n          style\n          imageUrl\n          strength\n        }\n        metadata {\n          limit\n          offset\n          orderBy\n          orderDirection\n          numElements\n          page\n          pages\n        }\n      }\n    }\n  }\n": typeof types.GetSubthreadsDocument,
    "\n  query GetSubthread($subthreadId: String!) {\n    getSubthread(subthreadId: $subthreadId) {\n      ... on Subthread {\n        _id\n        address\n        createdAt\n        updatedAt\n        threadId\n        prompt\n        style\n        imageUrl\n        strength\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": typeof types.GetSubthreadDocument,
    "\n  query GetSubthreadGenRequests($subthreadId: String!) {\n    getSubthreadGenRequests(subthreadId: $subthreadId) {\n      ... on GenRequestsPage {\n        items {\n          _id\n          subthreadId\n          address\n          status\n          metadata\n          type\n          images {\n            alt\n            keyS3\n            size\n            type\n            url\n          }\n          model_mesh {\n            alt\n            keyS3\n            size\n            type\n            url\n          }\n          timings {\n            inference\n          }\n          credits\n          createdAt\n          updatedAt\n        }\n        metadata {\n          limit\n          offset\n          orderBy\n          orderDirection\n          numElements\n          total\n          page\n          pages\n        }\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": typeof types.GetSubthreadGenRequestsDocument,
    "\n  query GetMyCredits {\n    getMyCredits {\n      ... on Credit {\n        _id\n        available\n        pending\n        confirmed\n        updatedAt\n        createdAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": typeof types.GetMyCreditsDocument,
    "\n  mutation RedeemVoucher($code: String!) {\n    redeemVoucher(code: $code) {\n      ... on Credit {\n        _id\n        available\n        pending\n        confirmed\n        updatedAt\n        createdAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": typeof types.RedeemVoucherDocument,
    "\n  mutation GeneratePresignedUrl($input: GeneratePresignedUrlInput!) {\n    generatePresignedUrl(input: $input) {\n      ...on GeneratePresignedUrl {\n          presignedUrl\n          url\n          key\n          expiresIn\n      }\n      ... on HandledError {\n          code\n          message\n      }\n    }\n  }\n": typeof types.GeneratePresignedUrlDocument,
};
const documents: Documents = {
    "\n  query Me {\n    me {\n      ... on Account {\n        address\n        twitterId\n        twitterName\n        twitterUsername\n        twitterAvatar\n        telegramId\n        telegramName\n        telegramUsername\n        telegramAvatar\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": types.MeDocument,
    "\n  mutation DisconnectTwitter {\n    disconnectTwitter {\n      ... on Account {\n        address\n        twitterId\n        twitterName\n        twitterUsername\n        twitterAvatar\n        telegramId\n        telegramName\n        telegramUsername\n        telegramAvatar\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": types.DisconnectTwitterDocument,
    "\n  mutation DisconnectTelegram {\n    disconnectTelegram {\n      ... on Account {\n        address\n        twitterId\n        twitterName\n        twitterUsername\n        twitterAvatar\n        telegramId\n        telegramName\n        telegramUsername\n        telegramAvatar\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": types.DisconnectTelegramDocument,
    "\n  mutation GenerateSubthread(\n    $prompt: String!\n    $style: SubthreadStyle\n    $threadId: String\n    $imageUrl: String\n    $numImages: Float\n    $strength: Float\n  ) {\n    generateSubthread(\n      prompt: $prompt\n      style: $style\n      threadId: $threadId\n      imageUrl: $imageUrl\n      numImages: $numImages\n      strength: $strength\n    ) {\n      ... on Subthread {\n        _id\n        address\n        createdAt\n        updatedAt\n        threadId\n        prompt\n        style\n        imageUrl\n        strength\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": types.GenerateSubthreadDocument,
    "\n  mutation GenerateImage($subthreadId: String!) {\n    generateImage(subthreadId: $subthreadId) {\n      ... on GenRequest {\n        _id\n        subthreadId\n        address\n        status\n        metadata\n        type\n        images {\n          alt\n          keyS3\n          size\n          type\n          url\n        }\n        model_mesh {\n          alt\n          keyS3\n          size\n          type\n          url\n        }\n        timings {\n          inference\n        }\n        credits\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": types.GenerateImageDocument,
    "\n  mutation GenerateModel(\n    $subthreadId: String!\n    $imageRequestId: String\n    $imageUrl: String!\n  ) {\n    generateModel(\n      subthreadId: $subthreadId\n      imageRequestId: $imageRequestId\n      imageUrl: $imageUrl\n    ) {\n      ... on GenRequest {\n        _id\n        subthreadId\n        address\n        status\n        metadata\n        type\n        images {\n          alt\n          keyS3\n          size\n          type\n          url\n        }\n        model_mesh {\n          alt\n          keyS3\n          size\n          type\n          url\n        }\n        timings {\n          inference\n        }\n        credits\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": types.GenerateModelDocument,
    "\n  query GetThreads($pagination: Pagination, $filters: ThreadFilter) {\n    getThreads(pagination: $pagination, filters: $filters) {\n      ... on ThreadsPage {\n        items {\n          _id\n          createdAt\n          updatedAt\n          address\n          title\n          style\n        }\n        metadata {\n          limit\n          offset\n          orderBy\n          orderDirection\n          numElements\n          page\n          pages\n        }\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": types.GetThreadsDocument,
    "\n  query GetSubthreads($pagination: Pagination, $filters: SubthreadFilter) {\n    getSubthreads(pagination: $pagination, filters: $filters) {\n      ... on HandledError {\n        code\n        message\n      }\n      ... on SubthreadsPage {\n        items {\n          _id\n          address\n          createdAt\n          updatedAt\n          address\n          threadId\n          prompt\n          style\n          imageUrl\n          strength\n        }\n        metadata {\n          limit\n          offset\n          orderBy\n          orderDirection\n          numElements\n          page\n          pages\n        }\n      }\n    }\n  }\n": types.GetSubthreadsDocument,
    "\n  query GetSubthread($subthreadId: String!) {\n    getSubthread(subthreadId: $subthreadId) {\n      ... on Subthread {\n        _id\n        address\n        createdAt\n        updatedAt\n        threadId\n        prompt\n        style\n        imageUrl\n        strength\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": types.GetSubthreadDocument,
    "\n  query GetSubthreadGenRequests($subthreadId: String!) {\n    getSubthreadGenRequests(subthreadId: $subthreadId) {\n      ... on GenRequestsPage {\n        items {\n          _id\n          subthreadId\n          address\n          status\n          metadata\n          type\n          images {\n            alt\n            keyS3\n            size\n            type\n            url\n          }\n          model_mesh {\n            alt\n            keyS3\n            size\n            type\n            url\n          }\n          timings {\n            inference\n          }\n          credits\n          createdAt\n          updatedAt\n        }\n        metadata {\n          limit\n          offset\n          orderBy\n          orderDirection\n          numElements\n          total\n          page\n          pages\n        }\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": types.GetSubthreadGenRequestsDocument,
    "\n  query GetMyCredits {\n    getMyCredits {\n      ... on Credit {\n        _id\n        available\n        pending\n        confirmed\n        updatedAt\n        createdAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": types.GetMyCreditsDocument,
    "\n  mutation RedeemVoucher($code: String!) {\n    redeemVoucher(code: $code) {\n      ... on Credit {\n        _id\n        available\n        pending\n        confirmed\n        updatedAt\n        createdAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n": types.RedeemVoucherDocument,
    "\n  mutation GeneratePresignedUrl($input: GeneratePresignedUrlInput!) {\n    generatePresignedUrl(input: $input) {\n      ...on GeneratePresignedUrl {\n          presignedUrl\n          url\n          key\n          expiresIn\n      }\n      ... on HandledError {\n          code\n          message\n      }\n    }\n  }\n": types.GeneratePresignedUrlDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Me {\n    me {\n      ... on Account {\n        address\n        twitterId\n        twitterName\n        twitterUsername\n        twitterAvatar\n        telegramId\n        telegramName\n        telegramUsername\n        telegramAvatar\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      ... on Account {\n        address\n        twitterId\n        twitterName\n        twitterUsername\n        twitterAvatar\n        telegramId\n        telegramName\n        telegramUsername\n        telegramAvatar\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DisconnectTwitter {\n    disconnectTwitter {\n      ... on Account {\n        address\n        twitterId\n        twitterName\n        twitterUsername\n        twitterAvatar\n        telegramId\n        telegramName\n        telegramUsername\n        telegramAvatar\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DisconnectTwitter {\n    disconnectTwitter {\n      ... on Account {\n        address\n        twitterId\n        twitterName\n        twitterUsername\n        twitterAvatar\n        telegramId\n        telegramName\n        telegramUsername\n        telegramAvatar\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DisconnectTelegram {\n    disconnectTelegram {\n      ... on Account {\n        address\n        twitterId\n        twitterName\n        twitterUsername\n        twitterAvatar\n        telegramId\n        telegramName\n        telegramUsername\n        telegramAvatar\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DisconnectTelegram {\n    disconnectTelegram {\n      ... on Account {\n        address\n        twitterId\n        twitterName\n        twitterUsername\n        twitterAvatar\n        telegramId\n        telegramName\n        telegramUsername\n        telegramAvatar\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation GenerateSubthread(\n    $prompt: String!\n    $style: SubthreadStyle\n    $threadId: String\n    $imageUrl: String\n    $numImages: Float\n    $strength: Float\n  ) {\n    generateSubthread(\n      prompt: $prompt\n      style: $style\n      threadId: $threadId\n      imageUrl: $imageUrl\n      numImages: $numImages\n      strength: $strength\n    ) {\n      ... on Subthread {\n        _id\n        address\n        createdAt\n        updatedAt\n        threadId\n        prompt\n        style\n        imageUrl\n        strength\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation GenerateSubthread(\n    $prompt: String!\n    $style: SubthreadStyle\n    $threadId: String\n    $imageUrl: String\n    $numImages: Float\n    $strength: Float\n  ) {\n    generateSubthread(\n      prompt: $prompt\n      style: $style\n      threadId: $threadId\n      imageUrl: $imageUrl\n      numImages: $numImages\n      strength: $strength\n    ) {\n      ... on Subthread {\n        _id\n        address\n        createdAt\n        updatedAt\n        threadId\n        prompt\n        style\n        imageUrl\n        strength\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation GenerateImage($subthreadId: String!) {\n    generateImage(subthreadId: $subthreadId) {\n      ... on GenRequest {\n        _id\n        subthreadId\n        address\n        status\n        metadata\n        type\n        images {\n          alt\n          keyS3\n          size\n          type\n          url\n        }\n        model_mesh {\n          alt\n          keyS3\n          size\n          type\n          url\n        }\n        timings {\n          inference\n        }\n        credits\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation GenerateImage($subthreadId: String!) {\n    generateImage(subthreadId: $subthreadId) {\n      ... on GenRequest {\n        _id\n        subthreadId\n        address\n        status\n        metadata\n        type\n        images {\n          alt\n          keyS3\n          size\n          type\n          url\n        }\n        model_mesh {\n          alt\n          keyS3\n          size\n          type\n          url\n        }\n        timings {\n          inference\n        }\n        credits\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation GenerateModel(\n    $subthreadId: String!\n    $imageRequestId: String\n    $imageUrl: String!\n  ) {\n    generateModel(\n      subthreadId: $subthreadId\n      imageRequestId: $imageRequestId\n      imageUrl: $imageUrl\n    ) {\n      ... on GenRequest {\n        _id\n        subthreadId\n        address\n        status\n        metadata\n        type\n        images {\n          alt\n          keyS3\n          size\n          type\n          url\n        }\n        model_mesh {\n          alt\n          keyS3\n          size\n          type\n          url\n        }\n        timings {\n          inference\n        }\n        credits\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation GenerateModel(\n    $subthreadId: String!\n    $imageRequestId: String\n    $imageUrl: String!\n  ) {\n    generateModel(\n      subthreadId: $subthreadId\n      imageRequestId: $imageRequestId\n      imageUrl: $imageUrl\n    ) {\n      ... on GenRequest {\n        _id\n        subthreadId\n        address\n        status\n        metadata\n        type\n        images {\n          alt\n          keyS3\n          size\n          type\n          url\n        }\n        model_mesh {\n          alt\n          keyS3\n          size\n          type\n          url\n        }\n        timings {\n          inference\n        }\n        credits\n        createdAt\n        updatedAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetThreads($pagination: Pagination, $filters: ThreadFilter) {\n    getThreads(pagination: $pagination, filters: $filters) {\n      ... on ThreadsPage {\n        items {\n          _id\n          createdAt\n          updatedAt\n          address\n          title\n          style\n        }\n        metadata {\n          limit\n          offset\n          orderBy\n          orderDirection\n          numElements\n          page\n          pages\n        }\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetThreads($pagination: Pagination, $filters: ThreadFilter) {\n    getThreads(pagination: $pagination, filters: $filters) {\n      ... on ThreadsPage {\n        items {\n          _id\n          createdAt\n          updatedAt\n          address\n          title\n          style\n        }\n        metadata {\n          limit\n          offset\n          orderBy\n          orderDirection\n          numElements\n          page\n          pages\n        }\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSubthreads($pagination: Pagination, $filters: SubthreadFilter) {\n    getSubthreads(pagination: $pagination, filters: $filters) {\n      ... on HandledError {\n        code\n        message\n      }\n      ... on SubthreadsPage {\n        items {\n          _id\n          address\n          createdAt\n          updatedAt\n          address\n          threadId\n          prompt\n          style\n          imageUrl\n          strength\n        }\n        metadata {\n          limit\n          offset\n          orderBy\n          orderDirection\n          numElements\n          page\n          pages\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSubthreads($pagination: Pagination, $filters: SubthreadFilter) {\n    getSubthreads(pagination: $pagination, filters: $filters) {\n      ... on HandledError {\n        code\n        message\n      }\n      ... on SubthreadsPage {\n        items {\n          _id\n          address\n          createdAt\n          updatedAt\n          address\n          threadId\n          prompt\n          style\n          imageUrl\n          strength\n        }\n        metadata {\n          limit\n          offset\n          orderBy\n          orderDirection\n          numElements\n          page\n          pages\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSubthread($subthreadId: String!) {\n    getSubthread(subthreadId: $subthreadId) {\n      ... on Subthread {\n        _id\n        address\n        createdAt\n        updatedAt\n        threadId\n        prompt\n        style\n        imageUrl\n        strength\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSubthread($subthreadId: String!) {\n    getSubthread(subthreadId: $subthreadId) {\n      ... on Subthread {\n        _id\n        address\n        createdAt\n        updatedAt\n        threadId\n        prompt\n        style\n        imageUrl\n        strength\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSubthreadGenRequests($subthreadId: String!) {\n    getSubthreadGenRequests(subthreadId: $subthreadId) {\n      ... on GenRequestsPage {\n        items {\n          _id\n          subthreadId\n          address\n          status\n          metadata\n          type\n          images {\n            alt\n            keyS3\n            size\n            type\n            url\n          }\n          model_mesh {\n            alt\n            keyS3\n            size\n            type\n            url\n          }\n          timings {\n            inference\n          }\n          credits\n          createdAt\n          updatedAt\n        }\n        metadata {\n          limit\n          offset\n          orderBy\n          orderDirection\n          numElements\n          total\n          page\n          pages\n        }\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSubthreadGenRequests($subthreadId: String!) {\n    getSubthreadGenRequests(subthreadId: $subthreadId) {\n      ... on GenRequestsPage {\n        items {\n          _id\n          subthreadId\n          address\n          status\n          metadata\n          type\n          images {\n            alt\n            keyS3\n            size\n            type\n            url\n          }\n          model_mesh {\n            alt\n            keyS3\n            size\n            type\n            url\n          }\n          timings {\n            inference\n          }\n          credits\n          createdAt\n          updatedAt\n        }\n        metadata {\n          limit\n          offset\n          orderBy\n          orderDirection\n          numElements\n          total\n          page\n          pages\n        }\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMyCredits {\n    getMyCredits {\n      ... on Credit {\n        _id\n        available\n        pending\n        confirmed\n        updatedAt\n        createdAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMyCredits {\n    getMyCredits {\n      ... on Credit {\n        _id\n        available\n        pending\n        confirmed\n        updatedAt\n        createdAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RedeemVoucher($code: String!) {\n    redeemVoucher(code: $code) {\n      ... on Credit {\n        _id\n        available\n        pending\n        confirmed\n        updatedAt\n        createdAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation RedeemVoucher($code: String!) {\n    redeemVoucher(code: $code) {\n      ... on Credit {\n        _id\n        available\n        pending\n        confirmed\n        updatedAt\n        createdAt\n      }\n      ... on HandledError {\n        code\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation GeneratePresignedUrl($input: GeneratePresignedUrlInput!) {\n    generatePresignedUrl(input: $input) {\n      ...on GeneratePresignedUrl {\n          presignedUrl\n          url\n          key\n          expiresIn\n      }\n      ... on HandledError {\n          code\n          message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation GeneratePresignedUrl($input: GeneratePresignedUrlInput!) {\n    generatePresignedUrl(input: $input) {\n      ...on GeneratePresignedUrl {\n          presignedUrl\n          url\n          key\n          expiresIn\n      }\n      ... on HandledError {\n          code\n          message\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;