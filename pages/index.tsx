import { Box, Flex, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import Header from 'components/Header/Header';
import Balances from 'components/Balances/Balances';
import { Card } from 'components/UI';
import { AddressInputForm } from 'components/Forms';
import { useCreateSnapshot, useGetBalances } from 'hooks';
// import styles from '../styles/Home.module.css'

export default function Home() {
  const { isLoading, balance, getAddressBalances } = useGetBalances();
  const { creatingSnapshot, createSnapshot, submitText } = useCreateSnapshot();
  
  return (
    <Flex
      justifyContent='center'
      padding='12'
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Make into card component */}
      <Box>
        <Card>
          <Header />
        </Card>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          marginTop='4'
          spacing='2'
          maxWidth={800}
        >
          <Card>
            {isLoading ? (
              <Stack
                p={4}
              >
                <Skeleton height='40px' />
                <Skeleton height='40px' />
                <Skeleton height='40px' />
              </Stack>
            ) : (
              <Balances
                balance={balance}
              />
            )}
          </Card>
          <Card
            backgroundColor='white'
          >
            <AddressInputForm
              isLoading={creatingSnapshot}
              handleAddressInput={getAddressBalances}
              onSubmit={createSnapshot}
              balance={balance}
              submitBtnText={submitText}
            />
          </Card>
        </SimpleGrid>
      </Box>
    </Flex>
  )
}