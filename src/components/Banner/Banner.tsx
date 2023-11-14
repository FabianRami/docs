import { Flex, Message, IconsProvider, Text } from '@aws-amplify/ui-react';
import { IconStar, IconChevron } from '../Icons';
import { Button } from '@aws-amplify/ui-react';

interface BannerProps {
  url?: string;
}

export const Banner: React.FC<BannerProps> = ({ url = '/gen2' }) => {
  return (
    <IconsProvider
      icons={{
        message: {
          info: <IconStar />
        }
      }}
    >
      <Message className="message-banner" colorTheme="info">
        <Flex className="message-banner__inner">
          <Flex direction="column" gap="xxs">
            <Text as="span" className="message-banner__heading">
              Public Preview: AWS Amplify's code-first developer experience (Gen
              2) for building backends
            </Text>
            <Text className="message-banner__content">
              A new TypeScript based developer experience for building fullstack
              apps with AWS Amplify.
            </Text>
          </Flex>

          <Button
            as="a"
            href={url}
            size="small"
            gap="small"
            target="_blank"
            rel="noopener noreferrer"
            className="message-banner__button"
          >
            Go to Amplify Gen 2 docs
            <IconChevron className="icon-rotate-270" fontSize=".875em" />
          </Button>
        </Flex>
      </Message>
    </IconsProvider>
  );
};
